import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';
import { useScroll } from 'react-router-scroll';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { IntlProvider } from 'react-intl';
import { ApolloProvider } from 'react-apollo';

import 'sanitize.css/sanitize.css';
import App from 'containers/App';

import { makeSelectLocationState } from 'containers/App/selectors';

import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess';

import configureStore from './store';

import './global-styles';

import createRoutes from './routes';
import apolloClient from './apolloClient';

const openSansObserver = new FontFaceObserver('Open Sans', {});


openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

const initialState = {};
const store = configureStore(initialState, browserHistory, apolloClient);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState(),
});

const rootRoute = {
  component: App,
  childRoutes: createRoutes(store, apolloClient),
};
const render = () => {
  ReactDOM.render(
    <ApolloProvider store={store} client={apolloClient}>
      <IntlProvider locale="en">
        <Router
          history={history}
          routes={rootRoute}
          render={
                        // Scroll to top when going to a new page, imitating default browser
                        // behaviour
                        applyRouterMiddleware(useScroll())
                    }
        />
      </IntlProvider>
    </ApolloProvider>,
        document.getElementById('app')
    );
};

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
