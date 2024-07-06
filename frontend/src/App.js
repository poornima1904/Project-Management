import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { UserProvider, UserContext } from './context/UserContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import { Box, Container } from '@mui/material';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Box sx={{ display: 'flex' }}>
                    <Navbar />
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            p: 3,
                            width: { sm: `calc(100% - 240px)` },
                            marginLeft: { sm: '240px' }
                        }}
                    >
                        <ThemeSwitcher />
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/projects" element={<PrivateRoute component={Projects} />} />
                            <Route path="/tasks" element={<PrivateRoute component={Tasks} />} />
                            <Route path="/" element={<Navigate to="/projects" />} />
                        </Routes>
                    </Box>
                </Box>
            </Router>
        </UserProvider>
    );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(UserContext);
    return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default App;
