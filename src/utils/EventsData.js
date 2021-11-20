import IntroML from "../pages/events/IntroML";
import LinReg from "../pages/events/LinReg";
import LogReg from "../pages/events/LogReg";
import DecisionTrees from "../pages/events/DTree";

import workshop_1 from "../images/workshop-1.PNG";
import workshop_2 from "../images/workshop-2.PNG";
import workshop_3 from "../images/workshop-3.PNG";
import workshop_dt from "../images/workshop-dt.PNG";
//import Saurav from "../images/photo-saurav.png";

const events = [
  {
    photo: workshop_1, // Update
    title: "Pop-Up with Street Code Academy",
    description: "On the Basics of Machine Learning",
    date: new Date("Jan 6 2022 2:00:00 PM PDT"), // Update Date Later
  },
  {
    photo: workshop_dt, // Update
    title: "Decision Trees and Random Forest In-Depth",
    description: "Sign up now!",
    date: new Date("Dec 5 2021 2:00:00 PM PDT"), // Update Date Later
    url: "intro-dt",
    page: DecisionTrees,
  },
  {
    photo: workshop_3, // Update
    title: "Basics of Logistic Regression and Decision Trees",
    description: "Recorded on Zoom.",
    date: new Date("Oct 9 2021 2:00:00 PM PDT"),
    url: "intro-logreg",
    page: LogReg,
  },
  {
    photo: workshop_2, // Update
    title: "Basics of Machine Learning and Linear Regression",
    description: "Recorded on Zoom.",
    date: new Date("Sep 10 2021 4:00:00 PM PDT"),
    url: "intro-lr",
    page: LinReg,
  },
  {
    photo: workshop_1, // Update
    title: "Introduction to Python and Machine Learning",
    description: "Recorded on Zoom.",
    date: new Date("Aug 29 2020 5:00:00 PM PDT"),
    url: "intro-ml",
    page: IntroML,
  },
];
console.log(events[0].photo);

var now = new Date();

export const sections = [
  {
    title: "Upcoming Events",
    events: events.filter((event) => event.date > now),
  },
  {
    title: "Recorded Events",
    events: events.filter((event) => event.date <= now),
  },
];

export default sections;
