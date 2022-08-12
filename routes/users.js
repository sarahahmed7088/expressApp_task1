const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "mohamed", tasks: ["study", "go to gym"] },
  { id: 2, name: "Ahmed", tasks: ["sleep", "shopping"] },
  { id: 3, name: "Khaled", tasks: ["eat", "cry"] },
];

router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  const userData = users.filter((user) => user.id == id);
  if (userData.length === 0) {
    return res.status(404).send("No User Found");
  }

  return res.status(200).send(userData);
});

router.get("/:id/tasks", function (req, res, next) {
  const id = req.params.id;
  const userData = users.filter((user) => user.id == id);
  if (userData.length === 0) {
    return res.status(404).send("No User Found");
  }
  res.status(200).send(userData[0].tasks);
});
module.exports = router;
