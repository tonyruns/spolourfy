import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './components/Root.jsx';
import Login from './components/Login.jsx';

// Import stylesheet
import './App.scss';

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistoryWithStore(hashHistory);
const createStoreWithMiddleware = applyMiddleware(
    thunk,
    reduxRouterMiddleware
)(createStore);
const store = createStoreWithMiddleware(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Root}>
            <IndexRoute component={Login} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

// render
const rootElement = document.getElementById('app');
render(<App />, rootElement);
