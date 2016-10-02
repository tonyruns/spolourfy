import * as React from 'react';
import { connect } from 'react-redux';
import { Router as ReactRouter, Route, IndexRoute } from 'react-router';
import { setTokens } from './actions/spotifyActions';
import Root from './components/Root';
import Login from './components/Login';
import User from './components/User';

export class Router extends React.Component {
  onReceiveTokens(nextState, replace, callback) {
    const { accessToken, refreshToken } = nextState.params;
    this.props.setTokens(accessToken, refreshToken);
    replace('/user');
    callback();
  }

  render() {
    const { history } = this.props;
    return (
      <ReactRouter history={history}>
        <Route path="/" component={Root}>
          <IndexRoute component={Login} />
          <Route path="/user/:accessToken/:refreshToken" onEnter={this.onReceiveTokens.bind(this)} />
          <Route path="/user" component={User} />
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
