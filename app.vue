<template>
  <!-- <div></div>
  <div></div> -->
  <PrimaryBar :path="route.path"></PrimaryBar>
  <NuxtPage></NuxtPage>
  <Footer></Footer>
</template>

<script lang="ts" setup>
const route = useRoute();

useHead({
  bodyAttrs: {
    class: "m0 font-mono bg-darker text-light min-h-screen",
  },
});
</script>
