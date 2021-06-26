import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';
import ResourcesBlock from "../partials/ResourcesBlock";

function Resources() {
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <ResourcesBlock />

            </main>

            {/*  Site footer */}
            <Footer />

        </div>
    );
}

export default Resources;