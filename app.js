const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("Task Manager is running ...");
});
app.listen(3000,()=>{
    console.log("Server is running...");
});