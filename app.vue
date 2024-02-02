<template>
  <PrimaryBar :path="route.path" />

  <!--TODO: background idea: animate ascii letters or code snippets randomly flashing in the background-->
  <div class="main-wrapper">
    <div absolute z--1 w-full h-full class="main-bg-layer"></div>
    <main px-5>
      <ConsoleLine
        mb-40
        :showTimestamp="true"
        text="Running hello_world script..."
        text-color="dark"
      />

      <TitleBlock mb-50 />

      <section m-a sm:max-w-3xl>
        <div mb-40 text-center>
          <h2 mb-10 font="size-4 normal italic">
            <span aria-hidden="true">~</span> {{ $t("welcome") }}
            <span aria-hidden="true">~</span>
          </h2>
          <p>{{ $t("intro") }}</p>
          <p>{{ $t("intro2") }}</p>
        </div>

        <!-- TODO: Portfolio -->
        <PortfolioCard my-20 />

        <!-- TODO: Skills -->

        <ContactCard my-20 />
      </section>

      <ConsoleLine :showTimestamp="true" text="finished." text-color="dark" />
      <ConsoleLine :text="$t(goodbye)" text-color="dark" />
    </main>
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
  title: "Rafael Avilar",
  meta: [
    {
      name: "description",
      content: "Rafael Avilar's personal website",
    },
  ],
});
</script>
