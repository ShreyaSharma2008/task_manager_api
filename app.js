const express = require("express");
const tasks = require("./data/tasks");
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Task Manager is working");
})
app.get("/tasks",(req,res)=>{
    res.json(tasks);
});
app.post("/tasks",(req,res)=>{
    const {title} = req.body;
    const newTask = {
        id : tasks.length+1,
        title : title,
        completed : false
    };
    tasks.push(newTask);
    res.json(newTask);
});
app.listen(3000,()=>{
    console.log("Server is running...");
});