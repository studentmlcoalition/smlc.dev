import React from 'react';
// import Modal from '../utils/Modal';

function HeroHome() {

  // const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="md:col-span-7 lg:col-span-6 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 lg:text-6xl mb-10 font-red-hat-display font-extrabold" data-aos="fade-down">Student Machine Learning Coalition</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">Welcome to SMLC! Our mission is to help anyone get involved in machine learning through online courses, library classes, and collaboration.</p>
            </div>

            {/*<iframe title="Map" src="https://www.google.com/maps/d/embed?mid=1jPqoPGmdGua6k6esdxjslTxPJaXWqF14&hl=en"
                width="480" height="480" style={{marginLeft: "auto", marginRight: "auto"}}></iframe> */}
            
            {/* Front Page Image*/}
            <div className="md:col-span-6 lg:col-span-6 md:text-right">
              <img src={require('../images/home-circle-top.png').default} alt="Course Front Page" />
            </div>

            {/* Mobile mockup */}
            <div className="md:col-span-5 lg:col-span-5 text-center md:text-right" data-aos="fade-up" data-aos-delay="450">
              <div className="inline-flex relative justify-center items-center">
                {/* Glow illustration */}
                <svg className="absolute mr-12 mt-32 pointer-events-none -z-1 dark:opacity-40" aria-hidden="true" width="678" height="634" viewBox="0 0 678 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="240" cy="394" r="240" fill="url(#piphoneill_paint0_radial)" fillOpacity=".4" />
                  <circle cx="438" cy="240" r="240" fill="url(#piphoneill_paint1_radial)" fillOpacity=".6" />
                  <defs>
                    <radialGradient id="piphoneill_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -77 317) scale(189.054)">
                      <stop stopColor="#1995CD" />
                      <stop offset="1" stopColor="#1995CD" stopOpacity=".01" />
                    </radialGradient>
                    <radialGradient id="piphoneill_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 99 339) scale(189.054)">
                      <stop stopColor="#4199F6" />
                      <stop offset="1" stopColor="#4199F6" stopOpacity=".01" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroHome;