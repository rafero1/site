<template>
  <div>
    <figure>
      <img :src="image" :alt="title" />
      <figcaption>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <p>{{ categories.join(", ") }}</p>
        <p>{{ year }}</p>
      </figcaption>
    </figure>
  </div>
</template>

<script lang="ts" setup>
interface PortfolioItem {
  title: string;
  description: string;
  categories: string[];
  year: number;
  image: string;
}

const props = defineProps<PortfolioItem>();
</script>

<style></style>
