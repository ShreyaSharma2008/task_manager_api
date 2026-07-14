const tasks = require("../data/tasks");

const getAllTasks = (req,res)=>{
    res.json(tasks);
}

const getTaskById = (req,res) => {
    const taskId = Number(req.params.id);
    const task = tasks.find(task => task.id === taskId);
        if(!task){
            return res.status(404).json({
                message : "Task not found."
            });
        }
    res.status(200).json(task);
}

const createTask = (req,res)=> {
    const {title} = req.body;

    if(!title){
        return res.status(400).json({
            message : "Title is required"
        });
    }

    if(typeof title !== "string"){
        return res.status(400).json({
            message : "Title should be string"
        });
    }

    if(title.trim() === ""){
        return res.status(400).json({
            message : "Title is required"
        });
    }

    if(title.length > 100){
        return res.status(400).json({
            message : "Title limit exceeded"
        });
    }

    const newTask = {
        id : tasks.length+1,
        title,
        completed : false
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
}

const updateTask = (req,res) => {
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
}

const deleteTask = (req,res) => {
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
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};