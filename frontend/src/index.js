import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { createTheme, ThemeProvider as StyledThemeProvider } from '@mui/material/styles';

const Root = () => {
    const { darkMode } = useTheme();

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
            },
            h5: {
                fontWeight: 500,
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
                    },
                },
            },
        },
    });

    return (
        <StyledThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </StyledThemeProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <Root />
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
