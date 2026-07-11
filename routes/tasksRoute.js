const express = require("express");
const tasks = require("../data/tasks");
const router = express.Router();

router.get("/",(req,res)=>{
    res.json(tasks);
});

router.post("/", (req,res)=>{
    const {title} = req.body;
    const newTask = {
        id : tasks.length+1,
        title,
        completed : false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

router.get("/:id",(req,res)=>{
    const taskId = Number(req.params.id);
    const task = tasks.find(task => task.id === taskId);
        if(!task){
            return res.status(404).json({
                message : "Task not found."
            });
        }
    res.status(200).json(task);
});

router.put("/:id",(req,res)=>{
    const taskId = Number(req.params.id);
    const {title , completed} = req.body;

    const task = tasks.find(task => task.id === taskId);
    if(!task){
            return res.status(404).json({
                message : "Task not found."
            });
    }
        task.title = title;
        task.completed = completed;
        
    
    res.status(200).json(task);
})

router.delete("/:id",(req,res)=>{
    const taskId = Number(req.params.id);
        const idx = tasks.findIndex(task => task.id === taskId);
        if(idx === -1){
            return res.status(404).json({
                message:"Task not found."
            });
        }
        tasks.splice(idx,1);
        res.status(200).json({
            message : "Task deleted successfully"
        });
});

module.exports = router;