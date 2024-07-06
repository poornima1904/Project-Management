import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Switch, Box } from '@mui/material';
import { Home, Assignment, List } from '@mui/icons-material';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { mode, toggleTheme } = useTheme();

    return (
        <AppBar position="static" sx={{ width: '240px', height: '100vh', backgroundColor: mode === 'dark' ? 'grey.900' : 'grey.100' }}>
            <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <Typography variant="h6" noWrap component="div" sx={{ my: 2, color: mode === 'dark' ? '#fff' : '#000' }}>
                    Project Tool
                </Typography>
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Link to="/" style={{ color: mode === 'dark' ? '#fff' : '#000', textDecoration: 'none', marginTop: '20px' }}>
                        <IconButton color="inherit">
                            <Home />
                        </IconButton>
                        <Typography variant="subtitle1" noWrap>
                            Home
                        </Typography>
                    </Link>
                    <Link to="/projects" style={{ color: mode === 'dark' ? '#fff' : '#000', textDecoration: 'none', marginTop: '20px' }}>
                        <IconButton color="inherit">
                            <Assignment />
                        </IconButton>
                        <Typography variant="subtitle1" noWrap>
                            Projects
                        </Typography>
                    </Link>
                    <Link to="/tasks" style={{ color: mode === 'dark' ? '#fff' : '#000', textDecoration: 'none', marginTop: '20px' }}>
                        <IconButton color="inherit">
                            <List />
                        </IconButton>
                        <Typography variant="subtitle1" noWrap>
                            Tasks
                        </Typography>
                    </Link>
                </Box>
                <Switch checked={mode === 'dark'} onChange={toggleTheme} sx={{ mt: 'auto', mb: 2 }} />
                <Typography variant="body2" color="textSecondary" sx={{ color: mode === 'dark' ? '#fff' : '#000' }}>
                    {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
