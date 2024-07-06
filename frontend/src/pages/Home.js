import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                textAlign: 'center'
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'background.paper',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    mt: 8
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Welcome to the Project Management Tool
                </Typography>
                <Typography variant="body1">
                    Please use the sidebar to navigate through the Projects and Tasks.
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
