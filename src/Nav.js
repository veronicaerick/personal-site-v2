import React from 'react';
import './Nav.css';
import { ReactComponent as Logo } from './images/logo.svg';
function Nav() {
  return (
    <div className="nav">
      <Logo />
      <div className="nav-bar">
        <ul>
          <li href="#about">About Me</li>
          <li href="#exp">Experience</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
