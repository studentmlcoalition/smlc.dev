import Luxai from "../pages/competitions/Luxai.js";
import Connectx from "../pages/competitions/Connectx.js";
import Titanic from "../pages/competitions/Titanic.js";
import Mnist from "../pages/competitions/Mnist.js";
import Covid from "../pages/competitions/Covid.js";
import Snakeai from "../pages/competitions/Snakeai.js";
import Connect4ai from "../pages/competitions/Connect4ai.js";
import Imgrecog from "../pages/competitions/Imgrecog.js";
import Nbarook from "../pages/competitions/Nbarook.js";
import Pddetect from "../pages/competitions/Pddetect.js";


// Import Chapter Photos
import titanic from "../images/competition-pics/titanic-front.jpg";
import mnist from "../images/competition-pics/mnist-front.png";
import cov from "../images/competition-pics/cov-front.jpg";
import lux from "../images/competition-pics/lux-front.png";
import connect from "../images/competition-pics/connect-front.png";
import snakeai from "../images/competition-pics/snakeai-front.png";
import connect4ai from "../images/competition-pics/connect4ai-front.png";
import imgrecog from "../images/competition-pics/imgrecog-front.jpeg";
import nba from "../images/competition-pics/nba-front.jpeg";
import pd from "../images/competition-pics/pd-front.jpeg";

const competitions = [
  {
    photo: titanic,
    title: "Titanic",
    description: "Predict survival of passengers on the Titanic.",
    status: "FIN",
    url: "titanic",
    page: Titanic,
  },
  {
    photo: mnist,
    title: "MNIST Digit Recognizer",
    description: "Classify handwritten digits.",
    status: "FIN",
    url: "mnist",
    page: Mnist,
  },
  {
    photo: cov,
    title: "SIIM-FISABIO-RSNA COVID-19 Detection",
    description: "Identify and localize COVID-19 abnormalities on chest radiographs.",
    status: "FIN",
    url: "covid",
    page: Covid,
  },
  {
    photo: lux,
    title: "Lux AI",
    description: "Create an AI which plays a resource gathering game.",
    status: "FIN",
    url: "lux-ai",
    page: Luxai,
  },
  {
    photo: connect,
    title: "Connect X",
    description: "Create an AI that can connect it's checkers before the opponent.",
    status: "FIN",
    url: "connectx",
    page: Connectx,
  },
  {
    photo: snakeai,
    title: "Snake AI",
    description: "Trained small neural networks to play the game snake in 1 player and 1v1 formats.",
    status: "FIN",
    url: "snakeai",
    page: Snakeai,
  },
  {
    photo: connect4ai,
    title: "Connect4 AI",
    description: "Trained Q-Learning model to play the game Connect4.",
    status: "FIN",
    url: "connect4ai",
    page: Connect4ai,
  },
  {
    photo: imgrecog,
    title: "TensorFlow Image Recognition",
    description: "Built CNN to categorize MNIST dataset images.",
    status: "FIN",
    url: "imgrecog",
    page: Imgrecog,
  },
  {
    photo: nba,
    title: "Predicting NBA Rookie Potential",
    description: "Applied machine learning algorithms to predict whether an NBA rookie will become an all-star based on his first year statistics.",
    status: "FIN",
    url: "nbarook",
    page: Nbarook,
  },
  {
    photo: pd,
    title: "Diagnosing Parkinson's Disease Earlier with Machine Learning",
    description: "Applied machine learning algorithms to detect Parkinson's Disease at an earlier stage using voice recordings and images of drawings.",
    status: "FIN",
    url: "pddetect",
    page: Pddetect,
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
  },

];


export default competitionSections;
