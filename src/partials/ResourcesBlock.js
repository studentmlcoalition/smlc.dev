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
                                Check out our course on Machine Learning Fundamentals completely for free! This course is optimized
                                for efficency, but you don't need any prior knowledge before starting.
                            </blockquote>
                            <div className="font-red-hat-display font-bold mt-2">
                                <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">smlc.dev/course</a>
                            </div>
                        </div>

                        {/* 2nd testimonial */}
                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/kaggleresource.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Kaggle is one of the best ways to put your ML skills and knowledge to the test! Compete with other machine
                                learners and win cash all while having a blast!
                            </blockquote>
                            <div className="font-red-hat-display font-bold mt-2">
                                <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">kaggle.com</a>
                            </div>
                        </div>

                        {/* 3rd testimonial */}
                        <div className="text-center">
                            <div className="relative inline-flex flex-col mb-4">
                                <img src={require('../images/colabresource.png').default} width="200" height="200" alt="Testimonial 04" />
                            </div>
                            <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                                Google Colab is an excellent alternative to jupyter notebook, the development environment we use in our course.
                                It's an awesome resource for building algorithms since Colab saves easily to your google drive account!
                            </blockquote>
                            <div className="font-red-hat-display font-bold mt-2">
                                <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">colab.google.com</a>
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
                                <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">Appy.com</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ResourcesBlock;
