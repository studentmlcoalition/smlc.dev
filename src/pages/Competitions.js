import React from "react";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Footer from "../partials/Footer";
import CompetitionsBlock from "../partials/CompetitionsBlock";
import { Switch, Route } from "react-router-dom";
import data from "../utils/CompetitionsData";

function Competitions() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Switch>
          <Route exact path="/competitions">
            <CompetitionsBlock />
          </Route>
          {data.map((section) =>
            section.competitions.map((competition) => (
              <Route key={competition.title} path={`/competitions/${competition.url}`}>
                {competition.page}
              </Route>
            ))
          )}
        </Switch>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Competitions;
