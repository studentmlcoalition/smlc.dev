import React from 'react';

function EventsBlock() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 font-red-hat-display mb-4">Events</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Here is a list of the upcoming events (more coming soon).
                        </p>
                    </div>

                    {/* Events */}
                    <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">

                        {/*First event*/}
                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/aispectra.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Workshop with AI Spectra on August 21st, 2021.
                            </blockquote>
                            <div className="font-red-hat-display font-bold mt-2">
                                <a className="text-teal-500 transition duration-150 ease-in-out" href="https://aispectra.weebly.com/contact.html">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventsBlock;