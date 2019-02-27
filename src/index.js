import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import restClient from './apolloClient';

import * as serviceWorker from './serviceWorker';
import App from './app/App';

import { MuiThemeProvider } from '@material-ui/core';
import appTheme from './muiTheme';

const ENV = process.env.REACT_APP_MODE || 'default';
console.log(`Initializing admin-app in "${ENV}" mode...`);

const Root = (props) => (
  <MuiThemeProvider theme={appTheme}>
    <ApolloProvider client={restClient}>
      <HashRouter>
        <App client={restClient} />
      </HashRouter>
    </ApolloProvider>
  </MuiThemeProvider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
