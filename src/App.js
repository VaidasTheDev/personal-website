import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Internal imports
import theme from './theme';
import './App.scss';
import Banner from 'main/banner/Banner';
import Body from 'main/body/Body';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App-root">
        <Banner />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
