const express = require("express");
const app = express();
app.use(express.json());
const tasksRoute = require("./routes/tasksRoute");

//home

app.get("/",(req,res)=>{
    res.send("Task Manager is working");
})

//tasks

app.use("/tasks",tasksRoute);

app.listen(3000,()=>{
    console.log("Server is running...");
});