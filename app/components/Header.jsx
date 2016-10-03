import './Header.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { logout } from '../actions/spotifyActions';

const Header = props => {
  const { loggedIn, onLogout } = props;
  const links = loggedIn
    ? (
      <div className="Header-links">
        <div className="Header-links-tabs">
          <Link to="/albums">Albums</Link>
          <Link to="/playlists">Playlists</Link>
        </div>
        <div className="Header-links-logout">
          <a href="javascript://" onClick={onLogout}>Logout</a>
        </div>
      </div>
    )
    : null;
  return (
    <div className={`Header ${loggedIn ? 'Header--loggedIn' : ''}`}>
      <h1 className="Header-title">Spolourfy</h1>
      {links}
    </div>
  );
}

const HeaderContainer = connect(
  state => {
    return {
      loggedIn: state.loggedIn
    };
  },
  dispatch => {
    return {
      onLogout: () => {
        dispatch(logout());
      }
    };
  }
)(Header);

export default HeaderContainer;