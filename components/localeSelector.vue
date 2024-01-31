<template>
  <form inline>
    <fieldset border-none inline>
      <legend sr-only>{{ $t("languageSelect") }}</legend>
      <label
        hover="cursor-pointer text-accent"
        text-gray
        class="has-[:checked]:text-accent"
        :aria-label="$t('en')"
      >
        <input hidden type="radio" v-model="locale" value="en" /><span
          >EN</span
        ></label
      >
      /
      <label
        pr-1
        hover="cursor-pointer text-accent"
        text-gray
        class="has-[:checked]:text-accent"
        :aria-label="$t('ptBr')"
      >
        <input hidden type="radio" v-model="locale" value="pt_BR" /><span
          >PT_BR</span
        >
      </label>
    </fieldset>
  </form>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>
