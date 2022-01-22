import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

import Home from "./pages/Home";
import About from "./pages/About";
import People from './pages/People';
import Chapters from "./pages/Chapters";
import Competitions from "./pages/Competitions";
import Partners from "./pages/Partners";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import Course from "./pages/Course";
import PageNotFound from "./pages/PageNotFound";
//import IntroML from "./pages/events/IntroML";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 750,
      easing: "ease-out-quart",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/course">
        <Course />
      </Route>
      <Route path="/resources">
        <Resources />
      </Route>
      <Route path="/events">
        <Events />
      </Route>
      {/*<Route path="/events/intro-ml">
        <IntroML />
      </Route>*/}
      <Route path="/people">
        <People />
      </Route>
      <Route path="/partners">
        <Partners />
      </Route>
      <Route path="/chapters">
        <Chapters />
      </Route>
      <Route path="/competitions">
        <Competitions />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;
