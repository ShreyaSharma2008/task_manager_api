const express = require("express");
const tasks = require("./data/tasks");
const app = express();
app.use(express.json());

//home

app.get("/",(req,res)=>{
    res.send("Task Manager is working");
})

//tasks GET

app.get("/tasks",(req,res)=>{
    res.json(tasks);
});

//tasks POST

app.post("/tasks",(req,res)=>{
    const {title} = req.body;
    const newTask = {
        id : tasks.length+1,
        title,
        completed : false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

//get tasks by id

app.get("/tasks/:id",(req,res)=>{
    const taskId = Number(req.params.id);
    const task = tasks.find((task)=>{
        return taskId === task.id;});
        if(!task){
            return res.status(404).json({
                message : "Task not found.\n"
            });
        }
    res.status(200).json(task);
});

//change to a task through id and  PUT

app.put("/tasks/:id", (req,res)=>{
    const taskId = Number(req.params.id);
    const {title , completed} = req.body;

    const task = tasks.find((task)=>{
        return taskId === task.id;
    });
    if(!task){
            return res.status(404).json({
                message : "Task not found.\n"
            });
    }
        task.title = title;
        task.completed = completed;
        
    
    res.status(200).json(task);
    });

app.listen(3000,()=>{
    console.log("Server is running...");
});