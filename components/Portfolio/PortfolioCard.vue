<template>
  <div>
    <h2 font-normal mb-30 text-center>
      Check out some
      <span transition ease-in text-indigo-400 hover:text-emerald-400
        >cool stuff</span
      >
      I made:
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
import type { IPortfolioItem } from "../portfolioItem.vue";

const { locale } = useI18n();

const items = ref<IPortfolioItem[]>([
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
      " The project was finished and then handed off to the [university memorial department](https://memorial.ufc.br/pt/).",
    ],
    categories: ["Android", "Kotlin"],
    year: 2019,
    image: "https://picsum.photos/112/112",
    url: "",
    gitUrl: "",
  },
]);
</script>

<style></style>
