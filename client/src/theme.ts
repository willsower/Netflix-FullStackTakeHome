import { createTheme } from '@mui/material/styles';

const NETFLIX_RED_HEX = '#B20710';
const WHITE_HEX = '#ffffff';

const theme = createTheme({
  palette: {
    primary: {
      main: NETFLIX_RED_HEX,
      contrastText: WHITE_HEX,
    },
    background: {
      default: WHITE_HEX,
    },
  },
});

export default theme;
