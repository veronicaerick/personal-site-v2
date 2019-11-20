import React from 'react';
import css from './SideNav.module.css';
import { ReactComponent as GitHub } from './images/github.svg';
import { ReactComponent as LinkedIn } from './images/linkedin.svg';
import { ReactComponent as Instagram } from './images/instagram.svg';

function SideNav() {
  return (
    <div className={css.links}>
      <ul className={css.socialLinks}>
        <li>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/veronicaerick"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/vee8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
