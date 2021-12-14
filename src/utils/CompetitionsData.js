import Luxai from "../pages/competitions/Luxai.js";
import Connectx from "../pages/competitions/Connectx.js";
import Titanic from "../pages/competitions/Titanic.js";
import Mnist from "../pages/competitions/Mnist.js";
import Covid from "../pages/competitions/Covid.js";


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
    url: "titanic",
    page: Titanic
  },
  {
    photo: mnist,
    title: "MNIST Digit Recognizer",
    description: "Classify handwritten digits (Spring 2021).",
    status: "FIN",
    url: "mnist",
    page: Mnist
  },
  {
    photo: cov,
    title: "SIIM-FISABIO-RSNA COVID-19 Detection",
    description: "Identify and localize COVID-19 abnormalities on chest radiographs (Summer 2021).",
    status: "FIN",
    url: "covid",
    page: Covid
  },
  {
    photo: lux,
    title: "Lux AI",
    description: "Create an AI which plays a resource gathering game (Fall 2021).",
    status: "ONG",
    url: "lux-ai",
    page: Luxai
  },
  {
    photo: connect,
    title: "Connect X",
    description: "Create an AI that can connect it's checkers before the opponent (Winter 2021).",
    status: "ONG",
    url: "connectx",
    page: Connectx
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
