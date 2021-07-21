import React from 'react';

import Header from '../partials/Header';
import AboutTop from '../partials/AboutTop';
import AboutTransition from '../partials/AboutTransition';
import AboutText from '../partials/AboutText';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
            <PageIllustration />
        </div>

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