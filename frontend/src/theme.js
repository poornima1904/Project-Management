import { createTheme } from '@mui/material/styles';
import { useTheme } from './context/ThemeContext';

const useCustomTheme = () => {
    const { darkMode } = useTheme();

    return createTheme({
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
};

export default useCustomTheme;
