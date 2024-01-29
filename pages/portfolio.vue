<template>
  <section class="bg-dark max-w-6xl mx-a mt-30">
    <header class="bg-purple flex flex-center flex-justify-between">
      <NuxtLink
        class="decoration-none text-light mx-5 my-a flex-shrink font-size-xl"
        to="/"
        >&lt;&lt;</NuxtLink
      >
      <h1
        class="uppercase text-center text-size-6 tracking-widest mx-a flex-grow"
      >
        {{ $t("portfolio") }}
      </h1>
    </header>

    <SkeletonDialogue
      :prompt="$t('portfolioPrompt')"
      :dialogue="$t('portfolioDialogue')"
    />

    <ul
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-a p-0"
    >
      <il v-for="(item, i) in filteredItems" :key="i">
        <PortfolioItem
          :title="item.title"
          :description="item.description"
          :categories="item.categories"
          :year="item.year"
          :image="item.image"
        />
      </il>
    </ul>
  </section>
</template>

<script lang="ts" setup>
const { locale } = useI18n();

const items = ref([
  {
    title: "Site",
    description: "This site.",
    categories: ["Web", "Vue", "Nuxt"],
    year: 2023,
    image: "https://picsum.photos/256/256",
  },
  {
    title: "CE Vehicles Data Analysis",
    description:
      "A data analysis of the vehicles in the state of Ceará, Brazil.",
    categories: [
      "Web",
      "Observable",
      "Data Analysis",
      "Python",
      "Pandas",
      "Seaborn",
    ],
    year: 2021,
    image: "https://picsum.photos/256/256",
  },
  {
    title: "Tocha",
    description:
      "A mobile app to encourage people to explore historical landmarks present in the Federal University of Ceará.",
    categories: ["Android", "Kotlin"],
    year: 2019,
    image: "https://picsum.photos/256/256",
  },
  {
    title: "Old Portfolio",
    description: "A simple portfolio site made with React and Gatsby.",
    categories: ["Web", "React", "Gatsby"],
    year: 2019,
    image: "https://picsum.photos/256/256",
  },
]);

const filteredItems = ref(items);
</script>
