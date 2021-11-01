import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';
import EventsBlock from '../partials/EventsBlock';
import {
    Switch,
    Route,
} from 'react-router-dom';
import data from '../utils/EventsData';  

function Events() {
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
                <Switch>
                    <Route exact path="/events">
                        <EventsBlock />
                    </Route>
                    {data.map((section) => (
                        section.events.map(event => (
                            <Route key={event.title} path={`/events/${event.url}`}>
                                {event.page}
                            </Route>
                        ))
                    ))}
                </Switch>
            </main>

            {/*  Site footer */}
            <Footer />

        </div>
    );
}

export default Events;