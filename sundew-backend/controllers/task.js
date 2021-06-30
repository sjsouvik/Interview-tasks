const Task = require("../models/task");

const { validationResult } = require("express-validator");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({ tasks });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to get tasks", errorMessage: error.message });
  }
};

exports.addTask = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const task = new Task(req.body);
    const savedTask = await task.save();
    res.json({ savedTask });
  } catch (error) {
    res.status(500).json({
      message: "Unable to save the task",
      errorMessage: error.message,
    });
  }
};
