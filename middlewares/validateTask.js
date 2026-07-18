const validateTask = (req,res,next)=>{
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
    next();
};
module.exports = validateTask;