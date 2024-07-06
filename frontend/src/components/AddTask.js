import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Paper, Typography, Card, CardContent } from '@mui/material';

const AddTask = ({ projectId }) => {
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
    };

    return (
        <Card elevation={3} sx={{ mt: 3 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Add New Task
                </Typography>
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
                    <Button variant="contained" color="primary" type="submit">
                        Add Task
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AddTask;
