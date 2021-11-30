// Import Chapter Photos
import titanic from "../images/competition-pics/titanic-front.jpg";
import mnist from "../images/competition-pics/mnist-front.png";
import cov from "../images/competition-pics/cov-front.jpg";
import lux from "../images/competition-pics/lux-front.png";
import connect from "../images/competition-pics/connect-front.png";

const competitions = [
  {
    photo: titanic,
    title: "Titanic",
    description: "Predict survival of passengers on the Titanic (Winter 2021).",
    status: "FIN",
    url: "../../home",
  },
  {
    photo: mnist,
    title: "MNIST Digit Recognizer",
    description: "Classify handwritten digits (Spring 2021).",
    status: "FIN",
    url: "../../home"
  },
  {
    photo: cov,
    title: "SIIM-FISABIO-RSNA COVID-19 Detection",
    description: "Identify and localize COVID-19 abnormalities on chest radiographs (Summer 2021).",
    status: "FIN",
    url: "../../home"
  },
  {
    photo: lux,
    title: "Lux AI",
    description: "Create an AI which plays a resource gathering game (Fall 2021).",
    status: "ONG",
    url: "../../home"
  },
  {
    photo: connect,
    title: "Connect X",
    description: "Create an AI that can connect it's checkers before the opponent (Winter 2021).",
    status: "ONG",
    url: "../../home"
  }
];

export const competitionSections = [
  {
    title: "Ongoing",
    competitions: competitions.filter((competition) => competition.status === "ONG"),
  },
  {
    title: "Completed",
    competitions: competitions.filter((competition) => competition.status === "FIN"),
  }
];


export default competitionSections;
