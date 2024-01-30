<template>
  <PrimaryBar :path="route.path" />
  <div class="px-5">
    <ConsoleLine text="Running hello_world script..." />
    <TitleBlock />
    <div class="text-center">
      <p class="mt-20 italic">~ {{ $t("welcome") }} ~</p>
      <p class="mt-10">{{ $t("intro") }}</p>
      <p>{{ $t("intro2") }}</p>
      <nav class="mt-10 flex flex-justify-center">
        <ul class="list-none p0">
          <li class="m-3">
            <SimpleLink url="/portfolio" msg="portfolio" />
          </li>
        </ul>
      </nav>
    </div>
    <ConsoleLine text="hello_world script execution finished!" />
    <ConsoleLine :text="$t(goodbye)" />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const h = new Date().getHours();

const goodbye =
  h < 12
    ? "goodMorning"
    : h < 18
    ? "goodAfternoon"
    : h < 22
    ? "goodEvening"
    : "goodNight";

useHead({
  bodyAttrs: {
    class: "m0 font-mono bg-darker text-light min-h-screen",
  },
});
</script>
