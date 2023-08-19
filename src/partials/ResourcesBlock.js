import React from 'react';

function ResourcesBlock() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 font-red-hat-display mb-4">Resources</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            When it comes to learning, SMLC is all about inclusivity. We are on a mission to enable anyone with a will to learn
                            to understand Machine Learning and contribute to the next generation of technology. Here are our favorite resources
                            when it comes to learning ML.
                        </p>
                    </div>

                    {/* Testimonials */}
                    <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">

                        {/* 1st testimonial */}
                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/smlcresource.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Check out our course on Udemy and YouTube! This course is optimized for efficency, but you don't need any prior knowledge 
                                before starting. Make sure to scroll to the course description to access free coupons.
                            </blockquote>
                            <div className="font-red-hat-display font-bold mt-2">
                                <a className="text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://www.udemy.com/course/the-complete-intro-to-machine-learning-with-python/">udemy.com</a>
                            </div>
                        </div>

                        {/* 2nd testimonial */}
                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/kaggleresource.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Kaggle is one of the best ways to put your ML skills and knowledge to the test! Compete with other machine
                                learners and win cash all while having a blast and working with real-world data!
                            </blockquote>
                            <div className="font-red-hat-display font-bold mt-2">
                                <a className="text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://www.kaggle.com/">kaggle.com</a>
                            </div>
                        </div>

                        {/* 3rd testimonial */}
                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/colabresource.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Google Colab is an excellent alternative to Jupyter, the development environment we use in our course.
                                It's an awesome resource for building algorithms since Colab saves directly to your Google Drive!
                            </blockquote>
                            <div className="font-red-hat-display font-bold mt-2">
                                <a className="text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://colab.google.com">colab.google.com</a>
                            </div>
                        </div>

                        {/* 4th testimonial */}
                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/statisticallearningresource.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Although ML may seem like magic, it is actually based in heavy statistics and math. If you want to understand algorithms like
                                Neural Networks or Support Vector Machines, we reccomend picking up this book!
                            </blockquote>
                            <div className="font-red-hat-display font-bold mt-2">
                                <a className="text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://www.amazon.com/Introduction-Statistical-Learning-Applications-Statistics/dp/1461471370">amazon.com</a>
                            </div>
                        </div>

                        {/* 5th testimonial */}
                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/portillaresource.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Udemy is a platform with courses from reputable teachers, allowing you to pick up skills in any field.
                                Jose Portilla's ML Bootcamp is one of the most popular courses on the platform,
                                and we recommend taking it!
                            </blockquote>
                            <div className="font-red-hat-display font-bold mt-2">
                                <a className="text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/">udemy.com</a>
                            </div>
                        </div>

                        {/* 6th testimonial */}
                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/sqresource.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Statquest is our favorite ML Youtube channel! With easy to understand explanations, entertaining
                                teaching, and descriptive graphics, Statquest is one of the best ways to learn how ML models work.
                            </blockquote>
                            <div className="font-red-hat-display font-bold mt-2">
                                <a className="text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://www.youtube.com/user/joshstarmer">youtube.com</a>
                            </div>
                        </div>

                        {/* 7th testimonial */}
                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/tdsresource.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Towards Data Science is a data science blog with over 500,000 followers on Medium.
                                TDS is perfect if you want to learn a new algorithm, understand frameworks, or find
                                a tutorial!
                            </blockquote>
                            <div className="font-red-hat-display font-bold mt-2">
                                <a className="text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://towardsdatascience.com/">towardsdatascience.com</a>
                            </div>
                        </div>

                        {/* 8th testimonial */}
                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/courseraresource.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                This coursera course about competitive ML is very insightful for anyone looking to step up their
                                Kaggle performance. In it, you learn from experienced kagglers about essential algorithms and techniques!
                            </blockquote>
                            <div className="font-red-hat-display font-bold mt-2">
                                <a className="text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://www.coursera.org/learn/competitive-data-science">coursera.com</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ResourcesBlock;