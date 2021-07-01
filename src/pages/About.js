import React from 'react';

import Header from '../partials/Header';
import AboutTop from '../partials/AboutTop';
import AboutTransition from '../partials/AboutTransition';
import AboutText from '../partials/AboutText';
//import Team from '../partials/Team';
import Footer from '../partials/Footer';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <AboutTop />
        <AboutTransition />
        <AboutText />

        {/* Include Later: */}
        {/* A map possibly*/}
        {/*<Team /> */}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;