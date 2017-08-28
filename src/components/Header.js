import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="nav navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">Navbar</span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
