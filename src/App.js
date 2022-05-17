import React from 'react';
import Router from './routes/Router';
import { GlobalState } from './globalState/GlobalState';
import theme from './constants/themes';
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalState>
      <Router />
    </GlobalState>
    </ThemeProvider>
  );
}

export default App;
