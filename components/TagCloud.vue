<template>
  <div flex="~ wrap content-evenly" justify-center gap-4>
    <span
      v-for="tag in tags"
      :key="tag"
      px-2
      py-1
      border="1px solid emerald-400"
      text-emerald
    >
      {{ tag }}
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  /**
   * The tags to be displayed
   */
  tags: string[];
  /**
   * Whether to sort the tags alphabetically
   */
  sort?: boolean;
}>();

const tags = ref(props.tags);
if (props.sort) {
  tags.value = tags.value.toSorted((a, b) => a.localeCompare(b));
}
</script>

<style></style>
