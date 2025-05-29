import CssBaseline from '@mui/material/CssBaseline';
import { Container, Toolbar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import BusinessesList from './components/BusinessList/BusinessesList';
import Header from './components/Header';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Header />
        <Toolbar />
        <BusinessesList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
