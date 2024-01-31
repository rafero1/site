<template>
  <p :text-color="textColor" aria-hidden="true">
    > {{ showTimestamp ? `[${timestamp}]: ${text}` : text }}
  </p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string;
  textColor?: string;
  showTimestamp?: boolean;
}>();

const timestamp = new Date().toTimeString().slice(0, 8);
</script>

<style></style>
