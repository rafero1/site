import type { IProject } from "../PortfolioItem.vue";

export const data: IProject[] = [
  {
    title: "Site Pessoal",
    summary:
      "Este site. Eu gosto bastante do look de interfaces de terminal, então tentei capturar essa vibe. Suporta inglês e português!",
    categories: ["Web", "Vue", "Nuxt", "UnoCSS"],
    year: 2023,
    image: "/img/site-thumb-xs.png",
    url: "https://rafael-avilar.vercel.app",
    gitUrl: "https://github.com/rafero1/site",
  },
  {
    title: "Análise de Dados de Veículos do Ceará",
    summary:
      "Um site mostrando tendências e estatísticas da frota veicular do estado do Ceará.",
    description: [
      "Um site mostrando tendências e estatísticas da frota veicular do estado do Ceará.",
      "Mostra insights interessantes como o crescimento de motocicletas e certas montadoras de carros ao longo dos anos.",
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
    image: "/img/ce-vehicles-thumb-xs.png",
    url: "https://rafero1.github.io/ce-vehicles-graphs/",
    gitUrl: "https://github.com/rafero1/ce-vehicles-graphs",
  },
  {
    title: "Tocha",
    summary:
      "Um jogo/app android feito para encorajar pessoas a visitar e aprender sobre pontos históricos da Universidade Federal do Ceará.",
    description: [
      "Um jogo/app android feito para encorajar pessoas a visitar e aprender sobre pontos históricos da Universidade Federal do Ceará.",
      "Ao visitar cada local na vida real, o jogador poderia escanear QR codes que destravavam curiosidades sobre o local e conquistas in-game para aumentar seu nível de explorador.",
      "O projeto foi finalizado e então entregue ao [memorial da universidade](https://memorial.ufc.br/pt/).",
    ],
    categories: ["Android", "Kotlin", "SQLite"],
    year: 2019,
    image: "/img/tocha-thumb-xs.png",
    url: "https://drive.google.com/drive/folders/1Ue_2a_3sXzUCvBACw-cPGzccOmHqzjhP?usp=sharing",
    urlLabel: "Abrir (Imagens)",
    gitUrl: "",
  },
];
