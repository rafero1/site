<template>
  <a :href="href" link>{{ text ?? href }}</a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  /**
   * The URL to be linked
   */
  href: string;
  /**
   * The text to be displayed. If not provided, the href will be used
   */
  text?: string;
}>();
</script>

<style></style>
