import React from "react";
import chapterSections from "../utils/ChaptersData";

function ChaptersBlock() {
  console.log(chapterSections.map((section) => section.chapters.length));
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 font-red-hat-display mb-4">Chapters</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              SMLC is a global organization democratizing machine learning. Our chapters are distributed accross the United States, India, and Nepal.
            </p>
            <iframe title="Map" src="https://www.google.com/maps/d/embed?mid=1jPqoPGmdGua6k6esdxjslTxPJaXWqF14&hl=en"
                width="640" height="480" style={{marginLeft: "auto", marginRight: "auto"}}></iframe>
          </div>

          {/* Events */}
          <div className="mt-5 md:mt-10">
            {chapterSections.map(
              (section) =>
                section.chapters.length !== 0 && (
                  <div key={section.id}>
                    <h1 className="h3 font-red-hat-display mb-8 text-center">
                      {section.title}
                    </h1>
                    <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 auto-rows-fr sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-start sm:max-w-none md:max-w-2xl lg:max-w-none pb-12">
                      {section.chapters.map((chapter) => (
                        <a className="flex h-full" href={"chapters/" + chapter.url}>
                          
                          <div className="flex-grow rounded overflow-hidden transition bg-gray-50 shadow-md hover:shadow-lg">
                            <div className="block flex-shrink-0 overflow-hidden relative lg:w-full max-h-80 flex justify-center">
                              <img
                                layout="fill"
                                style={{height: 120, objectFit: "cover"}}
                                src={chapter.photo}
                                alt={chapter.title}
                              />
                            </div>
                            <div className="px-6 py-4 align-base">
                              <div className="font-bold text-xl">
                                {chapter.title}
                              </div>
                              {/* <p className="text-gray-500 text-base font-medium mb-2">
                                {chapter.date.toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p> */}
                              <p className="text-gray-500 text-base">
                                {chapter.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )
            )}

            {/*First event*/}
            {/* <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img src={require('../images/AI_Spectra_Event.PNG').default} width="200" height="200" alt="Testimonial 04" />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                AI Spectra is hosting a workshop (coming in November).
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <a className="text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://aispectra.weebly.com/contact.html">Contact</a>
              </div>
              <div className="font-red-hat-display font-bold mt-2">
                <a className="text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://docs.google.com/forms/d/e/1FAIpQLSebKbbITEjw4gHz7aGUq9JufTa5CWckWdJ35w78MWlNnOlzFQ/viewform">Registration Link</a>
              </div>
            </div> */}

            {/*Second event*/}
            {/* <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img src={require('../images/smlcresource.png').default} width="200" height="200" alt="Testimonial 04" />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                SMLC will be hosting our first workshop on August 29th, 2021. The workshop will be covering the basics of ML and Python. 
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <a className="text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://forms.gle/EqbgrLhYf2soyvcF9">Workshop Registration Form</a>
              </div>
              <div className="font-red-hat-display font-bold mt-2">
                <a className="text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://www.eventbrite.com/e/166234892037">Link to Eventbrite Signup</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChaptersBlock;
