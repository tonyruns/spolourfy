import * as React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux';
import tokens from './reducers/tokenReducer';
import albums from './reducers/albumsReducer';
import playlists from './reducers/playlistsReducer';
import colors from './reducers/colorsReducer';
import Router from './Router';

// Import stylesheet
import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';
import './App.scss';

// Sync dispatched route actions to the history
var reducer = combineReducers({
  tokens,
  albums,
  playlists,
  colors,
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
