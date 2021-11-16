const Task = require("../models/Task");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
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
  } catch (err) {
    res.status(500).setDefaultEncoding(error.message);
    console.log(err.message);
  }
});

module.exports = router;
