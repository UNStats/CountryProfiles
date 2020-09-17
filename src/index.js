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

// Figure out basename for BrowserRouter.
const url = new URL(homepage);
// `basename` in BrowserRouter should have leading slash, but no trailing slash, see (https://reactrouter.com/web/api/BrowserRouter).
// Remove trailing /.
const pathname = url.pathname.replace(/\/$/, '');

let basename;
// create-react-app sets NODE_ENV to 'production' in build.
// Local dev is always served from /.
process.env.NODE_ENV !== 'production' ? (basename = '') : (basename = pathname);

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
