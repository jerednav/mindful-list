const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Not authorized...");

  try {
    const jwtSecretKey = process.env.TASK_APP_JWT_SECRET_KEY;
    const decoded = jwt.verify(token, jwtSecretKey);
    req.user = decoded
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
}

module.exports = auth;
