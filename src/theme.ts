import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#00628a',
    },
    secondary: {
      main: '#71aa31',
    },
  },
  typography:{
    fontFamily:'"Segoe UI"'
  } 
});

theme = responsiveFontSizes(theme);

export default theme;