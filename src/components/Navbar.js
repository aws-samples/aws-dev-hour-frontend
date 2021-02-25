import React, { Component } from 'react';
export default class Navbar extends Component {

  render() {
    const { user, isAuthenticated } = this.props.auth;

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="devhour-logo.png" width="112" height="28" alt="aws logo" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/photos" className="navbar-item">
              Photos
            </a>
            <a href="/admin" className="navbar-item">
              Admin
            </a>
            <a href="/profile" className="navbar-item">
              Profile
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {isAuthenticated && user && (
                <p>
                  Cognito ID: {user.username}
                </p>
              )}
              <div className="buttons">
                {!isAuthenticated && (
                  <div>
                    <a href="/register" className="button is-primary">
                      <strong>Register</strong>
                    </a>
                    <a href="/login" className="button is-light">
                      Log in
                    </a>
                  </div>
                )}
                {isAuthenticated && (
                  <a href="/" onClick={(e) => { e.preventDefault(); this.props.handleLogOut(); }} className="button is-light">
                    Log out
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
