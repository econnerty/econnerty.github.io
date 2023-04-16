import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#730000', // Garnet color
      secondary: '#000000', // Light gray for contrast
    },
    secondary: {
      main: '#f5f5f5', // Light gray for contrast
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 600,
    },
    h5: {
        fontSize: '1.4rem',
        fontWeight: 1000,
    },
    subtitle1: {
        fontSize: '1.2rem',
        fontWeight: 500,
    },
  },
});

export default theme;
