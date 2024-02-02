<template>
  <!--TODO: image viewer / details popup / page -->
  <div>
    <h2 font-normal mb-30 text-center>
      {{ $t("portfolioTitle1") }}
      <span transition ease-in text-indigo-400>{{ $t("portfolioWord") }}</span>
      {{ $t("portfolioTitle2") }}
    </h2>

    <div>
      <ul list-none m-a p0 flex="~ row wrap" gap-24 justify-evenly max-w-lg>
        <li v-for="(item, i) in items" :key="i">
          <PortfolioItem
            :title="item.title"
            :summary="item.summary"
            :description="item.description"
            :categories="item.categories"
            :year="item.year"
            :image="item.image"
            :url="item.url"
            :gitUrl="item.gitUrl"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n();
import type { IProject } from "./PortfolioItem.vue";

const items = ref<IProject[]>([
  {
    title: {
      en: "Personal Site",
      pt_BR: "Site Pessoal",
    },
    summary: {
      en: "This very website. I love the feel of terminal-like interfaces, so I tried to capture that vibe. Support for English and Portuguese!",
      pt_BR:
        "Este mesmo site. Eu gosto bastante do look de interfaces de terminal, então tentei capturar essa vibe. Suporta inglês e português!",
    },
    categories: ["Web", "Vue", "Nuxt", "UnoCSS"],
    year: 2023,
    image: "https://picsum.photos/112/112",
    url: "https://rafael-avilar.vercel.app",
    gitUrl: "https://github.com/rafero1/site",
  },
  {
    title: {
      en: "CE Vehicles Data Analysis",
      pt_BR: "Análise de Dados de Veículos do Ceará",
    },
    summary: {
      en: "A website showing data trends and statistics of the vehicular fleet of the state of Ceará, Brazil.",
      pt_BR:
        "Um site mostrando tendências e estatísticas da frota veicular do estado do Ceará.",
    },
    description: {
      en: [
        "A website showing data trends and statistics of the vehicular fleet of the state of Ceará, Brazil.",
        "Shows some interesting insights such as the rise of motorcycles and certain car manufacters over the years. Available only in Portuguese.",
      ],
      pt_BR: [
        "Um site mostrando tendências e estatísticas da frota veicular do estado do Ceará.",
        "Mostra insights interessantes como o crescimento de motocicletas e certas montadoras de carros ao longo dos anos.",
      ],
    },
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
    title: {
      en: "Tocha",
      pt_BR: "Tocha",
    },
    summary: {
      en: "An android game/app made to encourage folks to visit and learn about historical landmarks in the Federal University of Ceará.",
      pt_BR:
        "Um jogo/app android feito para encorajar pessoas a visitar e aprender sobre pontos históricos da Universidade Federal do Ceará.",
    },
    description: {
      en: [
        "An android game/app made to encourage folks to visit and learn about historical landmarks in the Federal University of Ceará.",
        "By visiting each location in real life, the player could scan QR codes that unlock fun facts about the place and in-game badges to increase their explorer level.",
        "The project was finished and then handed off to the [university memorial department](https://memorial.ufc.br/pt/).",
      ],
      pt_BR: [
        "Um jogo/app android feito para encorajar pessoas a visitar e aprender sobre pontos históricos da Universidade Federal do Ceará.",
        "Ao visitar cada local na vida real, o jogador poderia escanear QR codes que destravavam curiosidades sobre o local e distintivos in-game para aumentar seu nível de explorador.",
        "O projeto foi finalizado e então entregue ao [memorial da universidade](https://memorial.ufc.br/pt/).",
      ],
    },
    categories: ["Android", "Kotlin"],
    year: 2019,
    image: "https://picsum.photos/112/112",
    url: "",
    gitUrl: "",
  },
]);
</script>

<style></style>
