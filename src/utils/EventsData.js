import Nathan from '../images/photo-nathank.jpg'
import Saurav from '../images/photo-saurav.png'
import IntroML from '../pages/events/IntroML'

const events = [
  {
    photo: Nathan,
    title: "Basics of Logistic Regression and Decision Trees",
    description:
      "This is an event.",
    date: new Date("Oct 17 2021 2:00:00 PM PDT"),
    url: "intro-ml",
    page: IntroML
  },
  {
    photo: Saurav,
    title: "Basics of Machine Learning and Linear Regression",
    description:
      "This is an event.",
    date: new Date("Aug 6 2021 4:00:00 PM PDT"),
    url: "intro-ml",
    page: IntroML
  },
  {
    photo: Nathan,
    title: "Introduction to Python and Machine Learning",
    description:
      "This is an event.",
    date: new Date("Nov 28 2020 5:00:00 PM PDT"),
    url: "intro-ml",
    page: IntroML
  },
]
console.log(events[0].photo)

var now = new Date()

export const sections = [
  {
    title: "Upcoming Events",
    events: events.filter(event => event.date > now),
  },
  {
    title: "Past Events",
    events: events.filter(
      event => event.date <= now
    ),
  },
]

export default sections
