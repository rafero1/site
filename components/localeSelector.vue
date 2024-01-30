<template>
  <form class="inline">
    <label class="hover:cursor-pointer hover:text-orange text-gray has-[:checked]:text-orange">
      <input class="hidden" type="radio" v-model="locale" value="en" /><span>EN</span></label>
    /
    <label class="pr-1 hover:cursor-pointer hover:text-orange text-gray has-[:checked]:text-orange">
      <input class="hidden" type="radio" v-model="locale" value="pt_BR" /><span>PT_BR</span>
    </label>
  </form>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>
