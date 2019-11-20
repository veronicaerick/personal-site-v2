import React from 'react';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Divide from './Divide';
import Experience from './Experience';
import Footer from './Footer';
import SideNav from './SideNav';
import Fade from 'react-reveal/Fade';
import css from './App.module.css';

function App() {
  return (
    <div className={css.container}>
      <section>
        <SideNav />
      </section>
      <div className={css.main}>
        <div className={css.section}>
          <Fade bottom>
            <Hero />
          </Fade>
        </div>
        <div className={css.section}>
          <Divide section="About" num={1} emoji="👀" />
          <Fade bottom>
            <About />
          </Fade>
        </div>
        <div className={css.section}>
          <Divide section="Experience" num={2} />
          <Fade bottom>
            <Experience />
          </Fade>
        </div>
        <div className={css.section}>
          <Divide section="Contact" num={4} />
          <Fade bottom>
            <Contact />
          </Fade>
        </div>
      </div>
      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
