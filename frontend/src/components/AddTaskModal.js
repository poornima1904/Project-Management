import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const AddTaskModal = ({ open, handleClose, projectId }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = { title, description, assignedTo, dueDate, project: projectId };
        await axios.post('/api/tasks', newTask);
        setTitle('');
        setDescription('');
        setAssignedTo('');
        setDueDate('');
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New Task</DialogTitle>
            <DialogContent>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <TextField
                        label="Assigned To"
                        value={assignedTo}
                        onChange={(e) => setAssignedTo(e.target.value)}
                        required
                    />
                    <TextField
                        label="Due Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Add Task
                        </Button>
                    </DialogActions>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AddTaskModal;
