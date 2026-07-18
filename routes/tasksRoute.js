const express = require("express");
const {getAllTasks, createTask, getTaskById, updateTask, deleteTask} = require("../controllers/taskController");
const validateTask = require("../middlewares/validateTask");
const router = express.Router();

router.get("/",getAllTasks);

router.post("/", validateTask,createTask);

router.get("/:id",getTaskById);

router.put("/:id",validateTask,updateTask)

router.delete("/:id",deleteTask);

module.exports = router;