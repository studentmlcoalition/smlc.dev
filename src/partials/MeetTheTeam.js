import React from 'react';

function ResourcesBlock() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 font-red-hat-display mb-4">Meet Our Leadership!</h2>
                    </div>

                    {/* People */}
                    <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">

                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img class="h-48 w-48 object-cover" src={require('../images/photo-michael.jpg').default} alt="Joseph" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Michael Lutz
                            </blockquote>
                            <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                                Founder
                            </blockquote>
                        </div>

                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img class="h-48 w-48 object-cover" src={require('../images/photo-joseph.jpeg').default} alt="Arjun" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Joseph Thomas
                            </blockquote>
                            <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                                Co-President
                            </blockquote>
                        </div>

                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img class="h-48 w-48 object-cover" src={require('../images/photo-sanjana.jpg').default} alt="Anousha" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Sanjana Gadaginmath
                            </blockquote>
                            <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                                Co-President
                            </blockquote>
                        </div>

                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img class="h-48 w-48 object-cover" src={require('../images/photo-aswin.jpeg').default} alt="Anousha" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Aswin Surya
                            </blockquote>
                            <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                                Resource Director
                            </blockquote>
                        </div>

                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img class="h-48 w-48 object-cover" src={require('../images/photo-rohit.jpg').default} alt="Anousha" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Rohit Vakkalagadda
                            </blockquote>
                            <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                                Outreach Director
                            </blockquote>
                        </div>

                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img class="h-48 w-48 object-cover" src={require('../images/photo-hayden.jpeg').default} alt="Anousha" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Hayden Boone
                            </blockquote>
                            <blockquote className="text-xl text-blue-600 dark:text-gray-400">
                                Internal Communications Director
                            </blockquote>
                        </div>

                    
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ResourcesBlock;