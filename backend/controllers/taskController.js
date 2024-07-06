const Task = require('../models/Task');
const Project = require('../models/Project');

// Create a new task
const createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();

        const project = await Project.findById(task.project);
        project.tasks.push(task);
        await project.save();

        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('project');
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single task by ID
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('project');
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a task
const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const project = await Project.findById(task.project);
        project.tasks.pull(task);
        await project.save();

        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};
