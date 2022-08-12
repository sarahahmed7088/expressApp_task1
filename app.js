const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.use("/users/:id", (req, res, next) => {
  console.log("User ID is: ",req.params.id);
  next();
});

app.use("/users", usersRouter);

// error handler
app.listen(4000, () => {
  console.log("Express Task working on port 4000");
});

module.exports = app;
