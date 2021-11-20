import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';
import CourseBlock from "../partials/CourseBlock";

function Course() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="flex-grow">

                {/*  Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
                    <PageIllustration />
                </div>

                {/*  Page sections */}
                <CourseBlock />

            </main>

            {/*  Site footer */}
            <Footer />

        </div>
    );
}

export default Course;