import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";


export const newTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;

    let createdTask = await Task.create({
        title,
        description,
        user: req.user,
    });

    res.status(201).json({
        success: true,
        message: "Task Added Successfully",
        createdTask,
    });
    } catch (error) {
       next(error) 
    }
};

export const getMyTask = async (req, res, next) => {
    try {
        const userid = req.user._id;

    const tasks = await Task.find({ user: userid });

    res.status(200).json({
        success: true,
        tasks,
    });
    } catch (error) {
       next(error) 
    }
};

export const updateTask = async (req, res, next) => {
   try {
     const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) return next(new ErrorHandler("Task Not Found", 404))

    task.isCompleted = !task.isCompleted;
    let updartedTask = await task.save();

    res.status(200).json({
        success: true,
        message: "Task Updated",
        updartedTask,
    });
   } catch (error) {
    next(error)
   }
};

export const deleteTask = async (req, res, next) => {
   try {
     const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) return next(new ErrorHandler("Task Not Found", 404))

    let deletedTask = await task.deleteOne();

    res.status(200).json({
        success: true,
        message: "Task Deleted",
        deletedTask,
    });
   } catch (error) {
    next(error)
   }
};