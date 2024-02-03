<template>
  <p :text-color="textColor" aria-hidden="true">
    > {{ showTimestamp ? `[${timestamp}]: ${text}` : text }}
  </p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  /**
   * The text to be displayed
   */
  text: string;
  /**
   * The color of the text
   */
  textColor?: string;
  /**
   * Whether to show a little timestamp before the text
   */
  showTimestamp?: boolean;
}>();

const timestamp = new Date().toTimeString().slice(0, 8);
</script>

<style></style>
