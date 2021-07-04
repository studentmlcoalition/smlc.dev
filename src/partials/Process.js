import React from 'react';
import { Link } from 'react-router-dom';

function Process() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">How SMLC can help programming beginners become proficient in machine learning and apply their skills with real-world data (visit the <Link className="underline transition duration-150 ease-in-out" to="about">about</Link> page for more info).</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-12 md:gap-x-6 lg:gap-x-12 md:grid-cols-3 items-start md:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center">
              {/* Line connecting (1) and (2) */}
              <div aria-hidden="true" className="absolute h-px opacity-50 bg-gradient-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 hidden md:block" style={{ width: 'calc(100% - 48px)', left: 'calc(50% + 48px)', top: '24px' }}>
                <div className="absolute inset-0 border-t border-dashed border-white dark:border-gray-900"></div>
              </div>
              {/* Number */}
              <div className="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">1</div>
              {/* Mobile mockup */}
              <div className="inline-flex relative justify-center items-center">
                <p className="text-xl text-gray-600 dark:text-gray-400">Learn the basics of Python, data science and machine learning with our in-depth lectures.</p>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center">
              {/* Line connecting (2) and (3) */}
              <div aria-hidden="true" className="absolute h-px opacity-50 bg-gradient-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 hidden md:block" style={{ width: 'calc(100% - 48px)', left: 'calc(50% + 48px)', top: '24px' }}>
                <div className="absolute inset-0 border-t border-dashed border-white dark:border-gray-900"></div>
              </div>
              {/* Number */}
              <div className="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">2</div>
              {/* Mobile mockup */}
              <div className="inline-flex relative justify-center items-center">
                <p className="text-xl text-gray-600 dark:text-gray-400">Participate in Kaggle competitions with other SMLC students to build and test models on real-world data.</p>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">3</div>
              {/* Mobile mockup */}
              <div className="inline-flex relative justify-center items-center">
              <p className="text-xl text-gray-600 dark:text-gray-400">Collaborate with other SMLC chapters to organize events, create a larger competition team, and much more!</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Process;
