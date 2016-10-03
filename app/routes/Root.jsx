import React, { Component } from 'react';
import { Link } from 'react-router';
import { logOut } from '../actions/spotifyActions';

/**
 * Main app component
 * Has a header and then render's the page content
 */
const Root = props => {
  // injected via react router
  const { children } = props;
  return (
    <div className="spotify-login">
      <div className="spolourfy-header">
        <h1>Spolourfy!</h1>
        <button id="logout-button" className="btn" onClick={logOut}>
          Log out
        </button>
      </div>
      <Link to="/">Home</Link>
      <Link to="/albums">Albums</Link>
      <Link to="/playlists">Playlists</Link>
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}
export default Root;
