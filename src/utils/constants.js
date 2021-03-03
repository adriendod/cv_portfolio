import Home from "components/Home";
import About from "components/About";
import Contact from "components/Contact";
import Projects from "components/Projects";

export const PAGES = [
  {
    name: "Home",
    url: "/",
    component: Home,
  },
  {
    name: "Career",
    url: "/career",
    component: About,
  },
  {
    name: "Personal work",
    url: "/projects",
    component: Projects,
  },
  {
    name: "Contact",
    url: "/contact",
    component: Contact,
  },
];

export const SOCIAL_LINKS = [
  {
    url: "https://www.linkedin.com/in/adriendodinet/",
    icon: "fab fa-linkedin",
  },
  {
    url: "https://github.com/adriendod",
    icon: "fab fa-github-alt",
  },
  {
    url: "mailto:adrien.dod@gmail.com",
    icon: "far fa-paper-plane",
  },
];

export const CONTACT_PAGE_WORDS = [
  "an app from scratch",
  "a great feature to develop",
  "some refactoring",
  "a collaboration",
  "an outsanding showcase website ",
  "a brand new app concept ",
  "a breathtaking portfolio ",
];

export const PROJECTS = [
  {
    name: "Kardinal",
    isFreelance: true,
    img: "kardinal",
    date: "May '20 - Now",
    sector: "Logistic & Supply Chain",
    description: [
      "Development of a route optimization solution",
      "ReactJs / Hooks / NextJs / Typescript",
      "Redux : Selectors / Hooks Redux / Redux Saga",
      "Styled Components and AntDesign to generate the UI",
      "Conception of 2 interactives maps with React MapGl",
      "Code refactoring",
      "App performances improvement with memos and callbacks",
      "Websockets service integration",
      "Backend development with Node and the framework NestJs",
      "Endpoint exposure / CQRS architecture",
    ],
  },
  {
    name: "Osmo",
    isFreelance: true,
    img: "osmo",
    date: "April '20 - May '20",
    sector: "Education & E-Learning",
    description: [
      "Development of a virtual classroom",
      "The app features video courses and a tchat between teacher and students",
      "ReactJs / Hooks",
      "Redux / Redux Saga",
      "Voxeet (video streaming)",
      "SendBird (chat)",
      "Websockets service integration",
      "Responsive integration for desktop tablet and mobile",
    ],
  },
  {
    name: "Apricity",
    isFreelance: true,
    img: "apricity",
    date: "January '20 - April '20",
    sector: "Health & Fertility",
    description: [
      "Development of an application supporting fertility",
      "ReactJs / NextJs / Typescript",
      "Responsive integration for desktop tablet and mobile",
      "Development of the institutional website with Prismic",
      "Code refactoring",
      "Collaboration with the designer to harmonize the graphic charter",
    ],
  },
  {
    name: "Wifirst",
    isFreelance: false,
    img: "wifirst",
    date: "August '18 - December '19",
    sector: "Telecommunications",
    description: [
      "Development of multiple internal applications",
      "Hotspot management apps and a ticketing app",
      "ReactJs / Hooks",
      "Redux / Context React",
      "Creation of an UI Kit",
      "Unit testing with Jest and Enzyme",
      "Responsive integration for desktop tablet and mobile",
      "UI/UX Design",
    ],
  },
];

export const PP = [
  {
    name: "Foodlab",
    subtitle: "School Project",
    link: "https://foodlab.estellegresillon.fr/",
    component: null,
  },
  {
    name: "Zest Neobank",
    subtitle: "One Page Love",
    link: "https://zest.estellegresillon.fr",
    component: null,
  },
  {
    name: "Otaku Market",
    subtitle: "Shopify Site",
    link: "https://www.otaku-market.com",
    component: null,
  },
  {
    name: "Love for Greece",
    subtitle: "One Page Love",
    link: "https://santorini.estellegresillon.fr",
    component: null,
  },
  {
    name: "That's My Rock",
    subtitle: "School Project",
    link: "http://thatsmyrock.com",
    component: null,
  },
];
