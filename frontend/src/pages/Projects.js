import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Project from '../components/Project';
import AddProjectModal from '../components/AddProjectModal';
import { Container, Typography, Box, Button } from '@mui/material';
import { UserContext } from '../context/UserContext';

const Projects = () => {
    const { user } = useContext(UserContext);
    const [projects, setProjects] = useState([]);
    const [open, setOpen] = useState(false);

    const fetchProjects = async () => {
        try {
            const { data } = await axios.get('/api/projects', {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    useEffect(() => {
        if (user) {
            fetchProjects();
        }
    }, [user]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Projects
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mb: 3 }}>
                Add New Project
            </Button>
            <AddProjectModal open={open} handleClose={handleClose} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                {projects.map(project => (
                    <Project 
                        key={project._id} 
                        project={project} 
                        onProjectUpdate={fetchProjects}
                        onProjectDelete={fetchProjects}
                    />
                ))}
            </Box>
        </Container>
    );
};

export default Projects;
