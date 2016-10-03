import './Login.scss';

import React, { Component } from 'react';
import loginSVG from '../login.svg';
import { Link } from 'react-router';

/**
 * Our login page
 * Has a login button that hit's the login url
 */
export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-content">
          <h2 className="Login-text">Are you ready to <strong>spolourfy</strong> your music?</h2>
          <div className="Login-divider" />
          <a className="Login-button" href="/api/login" dangerouslySetInnerHTML={{__html: loginSVG}} />
        </div>
      </div>
    );
  }
}