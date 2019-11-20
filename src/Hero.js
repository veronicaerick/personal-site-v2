import React from 'react';
import Emoji from './Emoji';
import css from './Hero.module.css';

function Hero() {
  return (
    <div className={css.hero}>
      <section>
        <div className={css.header}>
          Hi, I'm Veronica <Emoji symbol="✨" label="star" />
        </div>
        <div className={css.subHeader}>
          I design and build things on the web
        </div>
      </section>
      <section>
        <div className={css.supportText}>
          I'm a UX Engineer (and sometimes dabble in Product Design/UI Design)
          based in the San Francisco Bay Area specializing in designing +
          building loveable, functional web applications and design systems.
        </div>
      </section>
    </div>
  );
}

export default Hero;
