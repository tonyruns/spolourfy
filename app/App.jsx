import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux';
import reduce from './reducers/Reducer.jsx';
import Root from './components/Root.jsx';
import Login from './components/Login.jsx';
import User from './components/User.jsx';

// Import stylesheet
import './App.scss';

// Sync dispatched route actions to the history
var reducer = combineReducers({
  authentication: reduce,
  routing: routerReducer
});
const reduxRouterMiddleware = routerMiddleware(browserHistory);
const createStoreWithMiddleware = applyMiddleware(thunk, reduxRouterMiddleware);
const store = createStore(reducer, createStoreWithMiddleware);

const history = syncHistoryWithStore(browserHistory, store);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Root}>
            <IndexRoute component={Login} />
            <Route path="/user/:accessToken/:refreshToken" component={User} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

// render
const rootElement = document.getElementById('app');
render(<App />, rootElement);
