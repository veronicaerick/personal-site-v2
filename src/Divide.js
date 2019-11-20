import React from 'react';
import css from './Divide.module.css';

function Divide(props) {
  return (
    <div className={css.divider}>
      <div className={css.num}>{props.num}.</div>
      <div className={css.section}> {props.section}</div>
    </div>
  );
}

export default Divide;
