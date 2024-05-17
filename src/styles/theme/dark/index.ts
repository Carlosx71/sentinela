import { createTheme } from '@mui/material/styles';

const colorBase = '#cdaa5d';
const colorSecondary = '#27ABE2';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Montserrat, sans-serif',
    allVariants: { color: 'black' },
  },
  components: {
    MuiTypography: { styleOverrides: { root: { color: '#cdaa5d' } } },
    MuiButtonBase: { styleOverrides: { root: { color: '#cdaa5d' } } },
    MuiIconButton: { styleOverrides: { root: { color: '#cdaa5d' } } },
    MuiList: {
      styleOverrides: {
        root: { backgroundColor: '#2C2C2C' },
      },
    },
    MuiIcon: { styleOverrides: { colorPrimary: '#cdaa5d' } },
  },
  palette: {
    primary: { main: colorBase },
    secondary: { main: colorSecondary },
    mode: 'dark',
  },
});
export default theme;
