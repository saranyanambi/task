//require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const taskRoutes = require("./routes/tasks.routes");

const app = express();
const PORT = 8082;
//const DB_URI = "mongodb://localhost:27017/task-manager";
const DB_URI="mongodb+srv://sarantask:sarantask123@task.d5ny1.mongodb.net/task?retryWrites=true&w=majority&appName=task";
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected!",DB_URI))
  .catch((error) => console.log("Error in connecting DB", error));

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Backend listening on Port ${PORT}!`);
});
