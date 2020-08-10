import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="NavBar">
        <h1>
          <img src="images/ironhack-logo.svg" alt="Ironhack logo" />
        </h1>
        <nav>
          <img src="images/menu-top.svg" alt="icon dropdown menu" />
        </nav>
      </div>
    );
  }
}

export default Nav;
