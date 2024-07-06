import React, { createContext, useState, useContext } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#007bff',
            },
            secondary: {
                main: '#ff4081',
            },
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            h4: {
                fontWeight: 600,
                marginBottom: '1rem',
                color: darkMode ? '#ffffff' : '#000000',
            },
            body1: {
                fontSize: '1rem',
                color: darkMode ? '#e0e0e0' : '#000000',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        textTransform: 'none',
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        padding: '2rem',
                        marginBottom: '1rem',
                        backgroundColor: darkMode ? '#424242' : '#ffffff',
                    },
                },
            },
        },
    });

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme, ThemeContext };
