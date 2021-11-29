// Import Chapter Photos
import basis_ahwatukee from "../images/chapter-pics/basis_ahwatukee_logo.jpg";
import basis_sv from "../images/chapter-pics/basis_sv_logo.jpg";
import bcp from "../images/chapter-pics/bcp_logo.png";
import leland from "../images/chapter-pics/leland_logo.png";
import neerja_modi from "../images/chapter-pics/neerja_modi_logo.png";
import st_xaviers from "../images/chapter-pics/st_xaviers_kath_logo.jpg";
import union_county_mag from "../images/chapter-pics/union_county_mag_logo.jpg";

// Maybe
import de_anza from "../images/chapter-pics/de_anza_logo.png";

// Affiliated Schools
import lynbrook from "../images/chapter-pics/lynbrook_logo.png";
import harker from "../images/chapter-pics/harker_logo.jpg";

const chapters = [
  {
    photo: basis_ahwatukee,
    title: "BASIS Ahwatukee",
    description: "Pheonix, AZ",
    location: "US",
    url: "../../home",
  },
  {
    photo: bcp,
    title: "Bellarmine College Preparatory",
    description: "San Jose, CA",
    location: "US",
    url: "../../home"
  },
  {
    photo: leland,
    title: "Leland High School",
    description: "San Jose, CA",
    location: "US",
    url: "../../home"
  },
  {
    photo: union_county_mag,
    title: "Union County Magnet High School",
    description: "Scotch Plains, NJ",
    location: "US",
    url: "../../home"
  },
  {
    photo: basis_sv,
    title: "Basis Independent Silicon Valley",
    description: "San Jose, CA",
    location: "US",
    url: "../../home"
  },
  {
    photo: de_anza,
    title: "De Anza Middle College",
    description: "Cupertino, CA",
    location: "US",
    url: "../../home"
  },
  {
    photo: st_xaviers,
    title: "St. Xavier's College Kathmandu",
    description: "Kathmandu, Bagmati",
    location: "NEP",
    url: "../../home"
  },
  {
    photo: neerja_modi,
    title: "Neerja Modi School",
    description: "Jaipur, Rajasthan",
    location: "IND",
    url: "../../home"
  },
  {
    photo: harker,
    title: "The Harker School",
    description: "San Jose, CA",
    location: "PART",
    url: "../../home"
  },
  {
    photo: lynbrook,
    title: "Lynbrook High School",
    description: "San Jose, CA",
    location: "PART",
    url: "../../home"
  }
];

export const chapterSections = [
  {
    title: "United States",
    chapters: chapters.filter((chapter) => chapter.location === "US"),
  },
  {
    title: "Nepal",
    chapters: chapters.filter((chapter) => chapter.location === "NEP"),
  },
  {
    title: "India",
    chapters: chapters.filter((chapter) => chapter.location === "IND"),
  },
  {
  title: "Partnered Schools",
    chapters: chapters.filter((chapter) => chapter.location === "PART"),
  }
];


export default chapterSections;
