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

const Project = ({ project, onProjectUpdate, onProjectDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [startDate, setStartDate] = useState(new Date(project.startDate).toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState(new Date(project.endDate).toISOString().split('T')[0]);
    const [status, setStatus] = useState(project.status);

    const handleUpdate = async () => {
        const updatedProject = { name, description, startDate, endDate, status };
        await axios.put(`/api/projects/${project._id}`, updatedProject);
        onProjectUpdate();
        setIsEditing(false);
    };

    const handleDelete = async () => {
        await axios.delete(`/api/projects/${project._id}`);
        onProjectDelete();
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mt: 3, animation: `${fadeIn} 1s` }}>
            {isEditing ? (
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Project Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <TextField
                        label="Start Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <TextField
                        label="End Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                    <Select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <MenuItem value="Not Started">Not Started</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                    <Button variant="contained" onClick={handleUpdate}>Save</Button>
                    <Button variant="outlined" onClick={() => setIsEditing(false)}>Cancel</Button>
                </Box>
            ) : (
                <>
                    <Typography variant="h5">{project.name}</Typography>
                    <Typography>{project.description}</Typography>
                    <Typography>Start Date: {new Date(project.startDate).toLocaleDateString()}</Typography>
                    <Typography>End Date: {new Date(project.endDate).toLocaleDateString()}</Typography>
                    <Typography>Status: {project.status}</Typography>
                    <Button variant="contained" onClick={() => setIsEditing(true)}>Edit</Button>
                    <Button variant="outlined" color="error" onClick={handleDelete}>Delete</Button>
                </>
            )}
        </Paper>
    );
};

export default Project;
