const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const { getAllTasks, addTask } = require("../controllers/task");

router
  .route("/task")
  .get(getAllTasks)
  .post(
    [
      check("title", "Title should be at least of 3 chars").isLength({
        min: 3,
      }),
      check("duration", "Duration should be an integer, in between 60 and 1440")
        .trim()
        .isInt({ min: 60, max: 1440 }),
    ],
    addTask
  );

module.exports = router;
