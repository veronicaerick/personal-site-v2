import React from 'react';
import { ReactComponent as Me } from './images/me.svg';
import css from './About.module.css';

function About() {
  const skillz = [
    'JS',
    'React',
    'CSS',
    'SASS',
    'SCSS',
    'Sketch',
    'InVision',
    'Abstract',
    'Craft',
  ];
  return (
    <div>
      <div className={css.about}>
        <section className={css.text}>
          <div className={css.mediumText}>
            Currently a user experience engineer @ LiveRamp, focusing on the
            management and improvement of our design system and improving the
            overall user experience within our web applications.
          </div>
          <br />
          <div className={css.mediumText}>
            I attended UC Berkeley where I studied Neuropsychology, Business and
            Marketing and Product Design. Since then (2014) i've been working in
            the Bay Area in tech.
          </div>
        </section>
        <section className={css.photo}>
          <Me />
        </section>
      </div>
      <section>
        <div className={css.mediumText}>
          The tech and tools I'm most comfortable with:
        </div>
        <div className={css.skills}>
          {skillz.map((skill, i) => (
            <div className={css.skill} key={i}>
              <Chip className={css.chip} label={skill} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;

function Chip({ label }) {
  return <div className={css.chip}>{label}</div>;
}
