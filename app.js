const express = require("express");
const tasks = require("./data/tasks");
const app = express();
app.get("/",(req,res)=>{
    res.send("Task Manager is working");
})
app.get("/tasks",(req,res)=>{
    res.json(tasks);
});
app.listen(3000,()=>{
    console.log("Server is running...");
});