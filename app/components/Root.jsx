import React, { Component } from 'react';

/**
 * Main app component
 * Has a header and then render's the page content
 */
export default class SpotifyLogin extends Component {
  render() {
    // injected via react router
    const {children} = this.props;
    return (
      <div className="spotify-login">
        <h1>Spolourfy Login</h1>
        <div className="page-content">
          {children}
        </div>
      </div>
    );
  }
}