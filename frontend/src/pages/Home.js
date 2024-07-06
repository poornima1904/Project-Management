import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
    const { darkMode } = useTheme();

    return (
        <Container>
            <Box 
                sx={{ 
                    textAlign: 'center', 
                    mt: 4, 
                    p: 4, 
                    borderRadius: 2, 
                    background: darkMode ? '#424242' : 'linear-gradient(135deg, #f5f7fa, #c3cfe2)', 
                    color: darkMode ? '#ffffff' : '#000000'
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to the Project Management Tool
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Please use the sidebar to navigate through the Projects and Tasks.
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
