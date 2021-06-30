const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the task title"],
    },
    duration: {
      type: Number,
      required: [true, "Please enter the task duration"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
