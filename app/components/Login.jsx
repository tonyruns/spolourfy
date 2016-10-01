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
            <div className="login">
                <h2>Here's our login page!</h2>
                {/*<a href="/login" dangerouslySetInnerHTML={{__html: loginSVG}}></a>*/}
                <Link to="/login" dangerouslySetInnerHTML={{__html: loginSVG}} />
            </div>
        );
    }
}