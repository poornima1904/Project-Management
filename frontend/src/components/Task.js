import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Paper, Typography, Select, MenuItem } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Task = ({ task, onTaskUpdate, onTaskDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [assignedTo, setAssignedTo] = useState(task.assignedTo);
    const [dueDate, setDueDate] = useState(new Date(task.dueDate).toISOString().split('T')[0]);
    const [status, setStatus] = useState(task.status);

    const handleUpdate = async () => {
        const updatedTask = { title, description, assignedTo, dueDate, status };
        await axios.put(`/api/tasks/${task._id}`, updatedTask);
        onTaskUpdate();
        setIsEditing(false);
    };

    const handleDelete = async () => {
        await axios.delete(`/api/tasks/${task._id}`);
        onTaskDelete();
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mt: 3, animation: `${fadeIn} 1s` }}>
            {isEditing ? (
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <TextField
                        label="Assigned To"
                        value={assignedTo}
                        onChange={(e) => setAssignedTo(e.target.value)}
                    />
                    <TextField
                        label="Due Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                    <Select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                    <Button variant="contained" onClick={handleUpdate}>Save</Button>
                    <Button variant="outlined" onClick={() => setIsEditing(false)}>Cancel</Button>
                </Box>
            ) : (
                <>
                    <Typography variant="h5">{task.title}</Typography>
                    <Typography>{task.description}</Typography>
                    <Typography>Assigned To: {task.assignedTo}</Typography>
                    <Typography>Due Date: {new Date(task.dueDate).toLocaleDateString()}</Typography>
                    <Typography>Status: {task.status}</Typography>
                    <Button variant="contained" onClick={() => setIsEditing(true)}>Edit</Button>
                    <Button variant="outlined" color="error" onClick={handleDelete}>Delete</Button>
                </>
            )}
        </Paper>
    );
};

export default Task;
