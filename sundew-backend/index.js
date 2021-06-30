const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "/.env" });
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const taskRoutes = require("./routes/task");

app.use("/v1", taskRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to API of Sundew");
});

app.use((req, res) => {
  res.status(404).json({ message: "NOT Found this route on server" });
});

app.use((req, res, next, error) => {
  res
    .status(500)
    .json({ message: "Error Occured", errorMessage: error.message });
});

const connectionString = process.env.DB_CONNECTION_STRING;

mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log("Couldn't connect to DB", error));

const port = process.env.PORT || 8030;

app.listen(port, () =>
  console.log(`app is running on http://localhost:${port}/`)
);