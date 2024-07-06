import React, { useContext } from 'react';
import { Switch, FormControlLabel, Box } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
            <FormControlLabel
                control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
                label={darkMode ? "Dark Mode" : "Light Mode"}
                sx={{ color: darkMode ? '#ffffff' : '#000000' }}
            />
        </Box>
    );
};

export default ThemeSwitcher;
