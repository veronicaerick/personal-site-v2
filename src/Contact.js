import React from 'react';
import Emoji from './Emoji';
import css from './Contact.module.css';

function Contact() {
  return (
    <div className={css.about}>
      <section className={css.text}>
        I'm not currently looking for work, but I am always interested in
        chatting about new businesses and ideas! To see active projects please{' '}
        <a href="mailto:veronicaeerick@gmail.com">reach out via email</a>{' '}
        <Emoji symbol="📩" label="email" width="30px" height="30px" />
      </section>
    </div>
  );
}

export default Contact;
