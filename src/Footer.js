import React from 'react';
import { ReactComponent as Bridge } from './images/bridge.svg';
import Emoji from './Emoji';
import css from './Footer.module.css';

function Footer() {
  return (
    <div className={css.footer}>
      <Bridge />
      <p>
        Thanks for stopping by{' '}
        <span>
          <Emoji symbol="🧡" label="wave" />
        </span>
      </p>
    </div>
  );
}

export default Footer;
