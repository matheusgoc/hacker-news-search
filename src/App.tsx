import React from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import NavigationRouter from './components/NavigationRouter';
import { THEME } from './constants';

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <CssBaseline />
      <NavigationRouter />
    </MuiThemeProvider>
  );
}

export default App;
