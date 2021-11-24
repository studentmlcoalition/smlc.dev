import IntroML from "../pages/events/IntroML";
import LinReg from "../pages/events/LinReg";
import LogReg from "../pages/events/LogReg";
import DecisionTrees from "../pages/events/DTree";

import workshop_1 from "../images/workshop-1.PNG";
import workshop_2 from "../images/workshop-2.PNG";
import workshop_3 from "../images/workshop-3.PNG";
import workshop_dt from "../images/workshop-dt.PNG";
//import Saurav from "../images/photo-saurav.png";

const chapters = [
  {
    photo: workshop_1, // Update
    title: "BASIS Silicon Valley",
    description: "On the Basics of Machine Learning",
    location: "US",
    url: "basis",
  },
  {
    photo: workshop_dt, // Update
    title: "Valley Christian",
    description: "Sign up now!",
    location: "US",
    url: "valleychristian",
    page: DecisionTrees,
  },
  {
    photo: workshop_3, // Update
    title: "Lynbrook HS",
    description: "Recorded on Zoom.",
    location: "US",
    url: "lynbrook",
    page: LogReg,
  },
  {
    photo: workshop_2, // Update
    title: "Harker",
    description: "Recorded on Zoom.",
    location: "US",
    url: "harker",
    page: LinReg,
  },
  {
    photo: workshop_1, // Update
    title: "Nepal",
    description: "Recorded on Zoom.",
    location: "INT",
    url: "nepal",
    page: IntroML,
  },
];

export const chapterSections = [
  {
    title: "United States",
    chapters: chapters.filter((chapter) => chapter.location == "US"),
  },
  {
    title: "International",
    chapters: chapters.filter((chapter) => chapter.location == "INT"),
  },
];


export default chapterSections;
