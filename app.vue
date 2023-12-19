<script lang="ts" setup>

const route = useRoute()

</script>

<template>
  <div>
    <PrimaryBar :path=route.path></PrimaryBar>
    <NuxtPage></NuxtPage>
    <Footer></Footer>
  </div>
</template>

<style scoped>
</style>
