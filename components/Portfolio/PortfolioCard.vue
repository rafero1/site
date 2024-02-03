<template>
  <div>
    <h2 mb-30 font-normal text-center>
      {{ $t("portfolioTitle1") }} <br sm:hidden />
      <span text-indigo-400>{{ $t("portfolioWord") }}</span>
      <br sm:hidden />
      {{ $t("portfolioTitle2") }}
    </h2>

    <div>
      <ul list-none m-a p0 flex="~ row wrap" gap-24 justify-evenly max-w-lg>
        <li v-for="(item, i) in items" :key="i">
          <PortfolioItem :project="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProject } from "./../../types/IProject";

const props = defineProps<{
  /**
   * The projects to display
   */
  items: IProject[];
}>();

const { locale } = useI18n();
</script>

<style></style>
