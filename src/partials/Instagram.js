import React from 'react';
import 'react-ig-feed/dist/index.css'
import InstagramFeed  from 'react-ig-feed'

const Instagram = () => {

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <InstagramFeed token="IGQVJYaDJFQlNYN2RrbVFhVnV5VWNQV25fSUZAXdFh5S0tmOTdnY3pXd1ltZAHl1aDlCcHlJRkZAQbENaU0R4MGF1aVRxREFRcHBxYnd2SEZAnREoyMWJOOGtVOFY4SnpJZAlFKY3liUDFNUlNqa1ppRmRzdQZDZD"  counter="6"/>
            </div>
        </section>
    )
}

export default Instagram
