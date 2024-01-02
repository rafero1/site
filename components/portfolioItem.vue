<template>
  <div class="bg-dark">
    <figure class="m-5 flex flex-col">
      <img :src="image" :alt="title" class="w-full h-64 m-a" />
      <figcaption class="bg-darker w-full box-border m-a p-5">
        <h3 class="bold mb-0">{{ title }}</h3>
        <p class="italic mt-2 mb-0 text-gray">{{ year }}</p>
        <p class="italic mt-2 mb-4 text-gray">{{ categories.join(", ") }}</p>
        <p class="mt-0">{{ description }}</p>
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
