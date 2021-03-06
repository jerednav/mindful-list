const Task = require("../models/Task");
const auth = require("../middleware/auth");
const express = require("express");
const Joi = require("joi");

const router = express.Router();

router.get("/", auth, async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ date: -1 });
    const filteredTasks = tasks.filter(task => task.uid === req.user._id)
    res.send(filteredTasks);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

router.post("/", auth, async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3).max(30),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });
  //   .options({ abortEarly: false });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const { name, author, isComplete, date, uid } = req.body;

  let task = new Task({
    name,
    author,
    isComplete, 
    date,
    uid,
  });

  try {
    task = await task.save();
    res.send(task);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(3).max(200).required(),
      author: Joi.string().min(3).max(30),
      uid: Joi.string(),
      isComplete: Joi.boolean(),
      date: Joi.date(),
    });
    //   .options({ abortEarly: false });

    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).send("Todo not found");
    if (task.uid !== req.user._id) return res.status(401).send("Task update failed. Not authorized.")

    const { name, author, isComplete, date, uid } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        name,
        author,
        isComplete,
        date,
        uid,
      },
      { new: true }
    );

    res.send(updatedTask);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

router.patch("/:id", auth, async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).send("Todo not found");
  if (task.uid !== req.user._id) return res.status(401).send("Task completion failed. Not authorized.")

  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
      isComplete: !task.isComplete,
    },
    {new: true}
    );

    res.send(updatedTask);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).send("Todo not found");
  if (task.uid !== req.user._id) return res.status(401).send("Task deletion failed. Not authorized.")

  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    res.send(deletedTask);
  } catch (err) {
    res.status(500).send(err.message);
    console.log(err.message);
  }
});

module.exports = router;
