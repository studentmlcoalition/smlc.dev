import React from 'react';

function AboutText() {


  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Kaggle Section */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">What is Kaggle?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Kaggle's competition site is a platform for anyone 
            - from novices to PhD's and industry professionals - to develop their skills on real-world data and gain 
            credibility for jobs. It remains incredibly difficult for students to collaborate and compete in these 
            competitions unless they pay thousands of dollars to attend programs. The Student Machine Learning Coalition 
            plans to change that. </p>
          </div>

          {/* How it Works Section */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">How does it work?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">The Student Machine Learning Coalition follows a chapter-based 
            organizational structure.  Chapters serve as a hub within schools that provide anyone with fun, supportive environments 
            to learn data science - regardless of any prior experience. Chapters meet on a weekly basis to learn machine learning 
            topics from a discussion leader or collaborate on competitions. SMLC provides all chapters with 20+ lectures on the 
            fundamentals of Machine Learning as well as a fully recorded Kaggle Bootcamp course. Anyone can join a club and 
            eventually compete in even the most challenging of competitions. In Kaggle competitions, SMLC members have historically 
            ranked well. For instance, a team of novices placed in the top 5% of the Titanic Data Set Competition. </p>
          </div>

          {/* Does Your School Have a Chapter? */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">SMLC Chapters</h2>
            <ul className="mb-6">
              <li className="text-xl text-gray-600 dark:text-gray-400">Bellarmine College Preparatory, CA </li>
              <li className="text-xl text-gray-600 dark:text-gray-400">Leland High School, CA </li>
              <li className="text-xl text-gray-600 dark:text-gray-400">Union County Magnet High School, NJ </li>
              <li className="text-xl text-gray-600 dark:text-gray-400">The Harker School - HS, CA </li>
              <li className="text-xl text-gray-600 dark:text-gray-400">University of California, San Diego, CA </li>
            </ul>
            <iframe title="Map" src="https://www.google.com/maps/d/embed?mid=1jPqoPGmdGua6k6esdxjslTxPJaXWqF14&hl=en"
                width="640" height="480" style={{marginLeft: "auto", marginRight: "auto"}}></iframe>
          </div>

          {/* Contact Us */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">Contact Us!</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400"> contact@smlc.dev </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutText;