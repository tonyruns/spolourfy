import * as React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux';
import albums from './reducers/albumsReducer';
import playlists from './reducers/playlistsReducer';
import player from './reducers/playerReducer';
import colors from './reducers/colorsReducer';
import loggedIn from './reducers/loggedInReducer';
import Router from './Router';

// Import stylesheet
import './App.scss';

// Sync dispatched route actions to the history
var reducer = combineReducers({
  albums,
  playlists,
  colors,
  player,
  loggedIn,
  routing: routerReducer
});
const reduxRouterMiddleware = routerMiddleware(browserHistory);
const createStoreWithMiddleware = applyMiddleware(thunk, reduxRouterMiddleware);
const store = createStore(reducer, createStoreWithMiddleware);

const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} />
      </Provider>
    );
  }
}

// render
render(<App />, document.getElementById('app'));
