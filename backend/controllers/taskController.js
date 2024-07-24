const asyncHandler= require('express-async-handler')

//@desc Get Tasks
//@route GET /api/tasks
//@access Private
const getTasks=asyncHandler(async(req,res)=>{
    res.status(200).json({messege:'Get Tasks'})
})

//@desc Set Task
//@route POST /api/tasks
//@access Private
const setTask=asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({messege:'Set Task'})
})

//@desc Update Task
//@route PUT /api/tasks/:id
//@access Private
const updateTask=asyncHandler(async(req,res)=>{
    res.status(200).json({messege:`Update task ${req.params.id}`})
})

//@desc Delete Task
//@route DELETE /api/tasks/:id
//@access Private
const deleteTask=asyncHandler(async(req,res)=>{
    res.status(200).json({messege:`Delete task ${req.params.id}`})
})

module.exports={
    getTasks,
    setTask,
    updateTask,
    deleteTask,
}