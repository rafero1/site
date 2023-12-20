<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div class="bg image"></div>
  <div class="bg overlay"></div>
  <PrimaryBar :path="route.path"></PrimaryBar>
  <NuxtPage></NuxtPage>
  <Footer></Footer>
</template>

<style scoped lang="scss">
.bg {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: -1;
}
.image {
  background-image: url("img/world-df.png");
  background-position: center;
  filter: saturate(0.1);
}
.overlay {
  background-color: $dark;
  mix-blend-mode: darken;
}
</style>
