const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const { User } = require("../models/User");

const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(3).max(200).required(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(400).send("User with the given email doesn't exist...");

    const validpassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validpassword)
      return res.status(400).send(400).send("Invalid email or password...");

    const jwtSecretKey = process.env.TASK_APP_JWT_SECRET_KEY;
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      jwtSecretKey
    );

    res.send(token);

});

module.exports = router;
