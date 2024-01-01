<template>
  <div class="fixed-width">
    <section class="panel">
      <header>
        <NuxtLink class="back" to="/">&lt;&lt;</NuxtLink>
        <h1 class="title">{{ $t("portfolio") }}</h1>
      </header>

      <SkeletonDialogue
        :prompt="$t('portfolioPrompt')"
        :dialogue="$t('portfolioDialogue')"
      />

      <div class="list">
        <PortfolioItem
          v-for="(item, i) in filteredItems"
          :key="i"
          :title="item.title"
          :description="item.description"
          :categories="item.categories"
          :year="item.year"
          :image="item.image"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n();

const items = ref([
  {
    title: "Site",
    description: "This site.",
    categories: ["Web", "Vue", "Nuxt"],
    year: 2023,
    image: "https://picsum.photos/200/300",
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
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Tocha",
    description:
      "A mobile app to encourage people to explore historical landmarks present in the Federal University of Ceará.",
    categories: ["Android", "Kotlin"],
    year: 2019,
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Old Portfolio",
    description: "A simple portfolio site made with React and Gatsby.",
    categories: ["Web", "React", "Gatsby"],
    year: 2019,
    image: "https://picsum.photos/200/300",
  },
]);

const filteredItems = ref(items);
</script>

<style scoped lang="scss">
/* .fixed-width > * {
  max-width: 50em;
  margin: 0 auto;
}
.panel {
  margin-top: 20vh;
  background-color: $dark;

  header {
    display: flex;
    align-items: center;
    background-color: $purple;

    .back {
      color: $light;
      text-decoration: none;
      padding: 12px;
    }

    .title {
      text-align: center;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.45rem;
      text-transform: uppercase;

      margin: 16px;
      flex-grow: 1;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
} */
</style>
