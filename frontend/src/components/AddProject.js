import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Paper, Typography, Card, CardContent } from '@mui/material';

const AddProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProject = { name, description, startDate, endDate };
        await axios.post('/api/projects', newProject);
        setName('');
        setDescription('');
        setStartDate('');
        setEndDate('');
    };

    return (
        <Card elevation={3} sx={{ mt: 3 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Add New Project
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Project Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <TextField
                        label="Start Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                    <TextField
                        label="End Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Add Project
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AddProject;
