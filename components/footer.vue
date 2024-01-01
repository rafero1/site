<template>
  <footer class="relative bottom-0 left-0 right-0 p5 flex flex-justify-end">
    <LocaleSelector class="mr-5"></LocaleSelector>
    <span>© {{ year }} rafael</span>
  </footer>
</template>

<script setup lang="ts">
let year = new Date().getFullYear();
</script>
