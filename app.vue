<template>
  <PrimaryBar :path="route.path" />
  <div px-5>
    <ConsoleLine
      mb-40
      :showTimestamp="true"
      text="Running hello_world script..."
      text-color="dark"
    />

    <TitleBlock mb-50 />

    <div mb-40 text-center>
      <p italic mb-10>~ {{ $t("welcome") }} ~</p>
      <p>{{ $t("intro") }}</p>
      <p>{{ $t("intro2") }}</p>
    </div>

    <ContactCard my-20 />

    <!-- Portfolio -->

    <!-- Skills -->

    <ConsoleLine :showTimestamp="true" text="finished." text-color="dark" />
    <ConsoleLine :text="$t(goodbye)" text-color="dark" />

    <!-- Interests: Gaming, Programming, Music, Anime, Manga, Web Development -->
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
