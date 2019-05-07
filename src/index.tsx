import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#524aac',
      main: '#19227c',
      dark: '#00004f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffff72',
      main: '#ffeb3b',
      dark: '#c8b900',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <App />
</MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
