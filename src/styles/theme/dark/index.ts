import { createTheme } from '@mui/material/styles';

const colorBase = '#2e5da1';
const colorSecondary = '#27ABE2';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Montserrat, sans-serif',
    allVariants: { color: 'black' },
  },
  components: {
    MuiTypography: { styleOverrides: { root: { color: '#2e5da1' } } },
    MuiButtonBase: { styleOverrides: { root: { color: '#2e5da1' } } },
    MuiIconButton: { styleOverrides: { root: { color: '#2e5da1' } } },
    MuiList: {
      styleOverrides: {
        root: { backgroundColor: '#2C2C2C' },
      },
    },
    MuiIcon: { styleOverrides: { colorPrimary: '#2e5da1' } },
  },
  palette: {
    primary: { main: colorBase },
    secondary: { main: colorSecondary },
    mode: 'dark',
  },
});
export default theme;
