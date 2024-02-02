import type { IProject } from "../PortfolioItem.vue";

export const data: IProject[] = [
  {
    title: "Personal Site",
    summary:
      "This very website. I love the feel of terminal-like interfaces, so I tried to capture that vibe. Support for English and Portuguese!",
    categories: ["Web", "Vue", "Nuxt", "UnoCSS"],
    year: 2023,
    image: "https://picsum.photos/112/112",
    url: "https://rafael-avilar.vercel.app",
    gitUrl: "https://github.com/rafero1/site",
  },
  {
    title: "CE Vehicles Data Analysis",
    summary:
      "A website showing data trends and statistics of the vehicular fleet of the state of Ceará, Brazil.",
    description: [
      "A website showing data trends and statistics of the vehicular fleet of the state of Ceará, Brazil.",
      "Shows some interesting insights such as the rise of motorcycles and certain car manufacters over the years. Available only in Portuguese.",
    ],
    categories: [
      "Web",
      "Observable",
      "Data Analysis",
      "Python",
      "Pandas",
      "Seaborn",
    ],
    year: 2021,
    image: "https://picsum.photos/112/112",
    url: "https://rafero1.github.io/ce-vehicles-graphs/",
    gitUrl: "https://github.com/rafero1/ce-vehicles-graphs",
  },
  {
    title: "Tocha",
    summary:
      "An android game/app made to encourage folks to visit and learn about historical landmarks in the Federal University of Ceará.",
    description: [
      "An android game/app made to encourage folks to visit and learn about historical landmarks in the Federal University of Ceará.",
      "By visiting each location in real life, the player could scan QR codes that unlock fun facts about the place and in-game badges to increase their explorer level.",
      "The project was finished and then handed off to the [university memorial department](https://memorial.ufc.br/pt/).",
    ],
    categories: ["Android", "Kotlin"],
    year: 2019,
    image: "https://picsum.photos/112/112",
    url: "",
    gitUrl: "",
  },
];
