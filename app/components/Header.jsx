import './Header.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { logout } from '../actions/spotifyActions';

const Header = props => {
  const { onLogout } = props;
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">
          Spolourfy
        </Link>
      </h1>
      <div className="Header-links">
        <div className="Header-links-tabs">
          <Link to="/albums">Albums</Link>
          <Link to="/playlists">Playlists</Link>
        </div>
        <div className="Header-links-logout">
          <a href="javascript://" onClick={onLogout}>Logout</a>
        </div>
      </div>
    </div>
  );
}

const HeaderContainer = connect(
  state => {
    return {};
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