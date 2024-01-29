<template>
  <form class="inline">
    <label
      class="px-1 hover:cursor-pointer text-gray has-[:checked]:text-light"
    >
      <input class="hidden" type="radio" v-model="locale" value="en" /><span
        >EN</span
      ></label
    >
    /
    <label
      class="px-1 hover:cursor-pointer text-gray has-[:checked]:text-light"
    >
      <input class="hidden" type="radio" v-model="locale" value="pt_BR" /><span
        >PT_BR</span
      >
    </label>
  </form>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>
