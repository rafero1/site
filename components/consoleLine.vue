<template>
  <p class="text-gray" aria-hidden="true">> {{ text }}</p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string;
}>();
</script>

<style></style>
