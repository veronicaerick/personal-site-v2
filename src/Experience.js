import React from 'react';
import Emoji from './Emoji';
import css from './Experience.module.css';

function Experience() {
  const jobs = [
    {
      title: 'LiveRamp',
      desc: 'UX Engineer',
      dates: '2017-Now',
      emoji: '🌏',
      link: 'https://www.liveramp.com',
    },
    {
      title: 'Sprinklr',
      desc: 'Front End',
      dates: '2016-2017',
      emoji: '💫',
      link: 'https://www.sprinklr.com',
    },
    { title: 'Design', desc: 'Freelance', dates: '2015-2016', emoji: '💅' },
  ];

  return (
    <div className={css.about}>
      <section className={css.text}>
        <br />
        <div className={css.grid}>
          {jobs.map((job, i) => (
            <div className={css.card} key={i}>
              <div className={css.job}>
                <a target="_blank" rel="noopener noreferrer" href={job.link}>
                  {job.title} <Emoji symbol={job.emoji} />
                </a>
              </div>
              <br />
              <div className={css.desc}>{job.desc}</div>
              <span className={css.dates}>{job.dates}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Experience;
