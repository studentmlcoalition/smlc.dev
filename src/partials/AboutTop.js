import React from 'react';

function AboutTop() {
  return (
    <section className="relative">

      {/* Background image */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center">
            <div className="relative flex justify-center items-center">
              <div className="relative inline-flex items-start" data-aos="fade-up">
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
              </div>
              <div className="absolute" data-aos="fade-down">
                <h1 className="h1 lg:text-6xl font-red-hat-display">What is <span className="text-teal-500">SMLC?</span></h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default AboutTop;