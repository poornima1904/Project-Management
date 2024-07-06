import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Task from '../components/Task';
import AddTaskModal from '../components/AddTaskModal';
import { Container, Typography, Box, Button } from '@mui/material';
import { UserContext } from '../context/UserContext';

const Tasks = () => {
    const { user } = useContext(UserContext);
    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get('/api/tasks', {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        if (user) {
            fetchTasks();
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
                Tasks
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mb: 3 }}>
                Add New Task
            </Button>
            <AddTaskModal open={open} handleClose={handleClose} projectId="some-project-id" />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                {tasks.map(task => (
                    <Task 
                        key={task._id} 
                        task={task} 
                        onTaskUpdate={fetchTasks}
                        onTaskDelete={fetchTasks}
                    />
                ))}
            </Box>
        </Container>
    );
};

export default Tasks;
