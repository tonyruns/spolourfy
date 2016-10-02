import * as React from 'react';
import { connect } from 'react-redux';
import { Router as ReactRouter, Route, IndexRoute } from 'react-router';
import { setTokens } from './actions/spotifyActions';
import Root from './routes/Root';
import Login from './routes/Login';
import Albums from './routes/Albums';
import Playlists from './routes/Playlists';

export class Router extends React.Component {
  onReceiveTokens(nextState, replace, callback) {
    const { accessToken, refreshToken } = nextState.params;
    this.props.setTokens(accessToken, refreshToken);
    replace('/albums');
    callback();
  }

  render() {
    const { history } = this.props;
    return (
      <ReactRouter history={history}>
        <Route path="/" component={Root}>
          <IndexRoute component={Login} />
          <Route path="/user/:accessToken/:refreshToken" onEnter={this.onReceiveTokens.bind(this)} />
          <Route path="/albums" component={Albums} />
          <Route path="/playlists" component={Playlists} />
        </Route>
      </ReactRouter>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setTokens: (accessToken, refreshToken) => {
      dispatch(setTokens(accessToken, refreshToken));
    }
  }
};

const RouterContainer = connect(mapStateToProps, mapDispatchToProps)(Router);
export default RouterContainer;
