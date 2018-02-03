import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import ButtonComponent from 'client/javascript/components/ButtonComponent';
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createHistory();
const middlewares = applyMiddleware(routerMiddleware(history));
const store = createStore(reducers, composeEnhancers(middlewares));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ButtonComponent/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
