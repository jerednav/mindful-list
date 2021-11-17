const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const tasks = require("./routes/tasks");
const signUp = require("./routes/signup");
const signIn = require("./routes/signin");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasks);
app.use("/api/signup", signUp);
app.use("/api/signin", signIn);

app.get("/", (req, res) => {
  res.send("Welcome to Mindful List API!");
});

const connection_string = process.env.CONNECTION_STRING;
const port = process.env.PORT || 3000;

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log(`Server is running on ${port} 3000`);
});
