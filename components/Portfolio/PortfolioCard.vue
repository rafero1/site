<template>
  <div>
    <h2 mb-30 font-normal text-center>
      {{ $t("portfolioTitle1") }} <br sm:hidden />
      <span transition ease-in text-indigo-400>{{ $t("portfolioWord") }}</span>
      <br sm:hidden />
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
            :urlLabel="item.urlLabel"
            :gitUrl="item.gitUrl"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n();
import { data as dataEn } from "./data/projects.en";
import { data as dataBr } from "./data/projects.ptBr";

const items = computed(() => (locale.value === "en" ? dataEn : dataBr));
</script>

<style></style>
