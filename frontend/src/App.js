import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { UserProvider, UserContext } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
    return (
        <UserProvider>
            <ThemeProvider>
                <Router>
                    <div style={{ display: 'flex' }}>
                        <Navbar />
                        <div style={{ flexGrow: 1, padding: '20px' }}>
                            <Routes>
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<Signup />} />
                                <Route path="/projects" element={<PrivateRoute component={Projects} />} />
                                <Route path="/tasks" element={<PrivateRoute component={Tasks} />} />
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </div>
                    </div>
                </Router>
            </ThemeProvider>
        </UserProvider>
    );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(UserContext);
    return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default App;
