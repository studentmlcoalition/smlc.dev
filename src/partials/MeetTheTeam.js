import React from 'react';

function ResourcesBlock() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 font-red-hat-display mb-4">Meet the Team!</h2>
                    </div>

                    {/* People */}
                    <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">

                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/photo-michael.jpg').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Michael Lutz
                            </blockquote>
                            <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                                Founder and President
                            </blockquote>
                        </div>

                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/photo-joseph.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                joseph Thomas
                            </blockquote>
                            <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                                Resources Director
                            </blockquote>
                        </div>

                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/photo-nathank.jpg').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Nathan Kang
                            </blockquote>
                            <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                                Competitions Director
                            </blockquote>
                        </div>

                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/photo-arjun.jpeg').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Arjun Rajaram
                            </blockquote>
                            <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                                Events and Operations Director
                            </blockquote>
                        </div>

                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/photo-nathan.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Nathan Gong
                            </blockquote>
                            <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                                Web-Development Co-Director
                            </blockquote>
                        </div>

                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/photo-saurav.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Saurav Kumar
                            </blockquote>
                            <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                                Web-Development Co-Director
                            </blockquote>
                        </div>

                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/photo-shaunak.jpg').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Shaunak Warty
                            </blockquote>
                            <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                                Web-Development Co-Director
                            </blockquote>
                        </div>
                    
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ResourcesBlock;