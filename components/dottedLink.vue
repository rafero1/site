<template>
  <a :href="href" link>{{ text }}</a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  href: string;
  text: string;
}>();
</script>

<style></style>
