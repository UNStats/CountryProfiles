// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { BrowserRouter, Route } from 'react-router-dom';

// Calcite React
import CalciteThemeProvider from 'calcite-react/CalciteThemeProvider';

// i18n
// todo

// App-specific
import { homepage } from '../package.json';
import App from './App';
import './index.css';
import { unTheme } from './unTheme';

import * as serviceWorker from './serviceWorker';

let basename;
process.env.NODE_ENV !== 'production' ? (basename = '') : (basename = homepage);

ReactDOM.render(
  <CalciteThemeProvider theme={unTheme}>
    <BrowserRouter basename={basename}>
      <Route path={['/:countryCode', '/']} component={App} />
    </BrowserRouter>
  </CalciteThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
