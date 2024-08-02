<template>
  <form inline>
    <fieldset border-none p0 m0 inline>
      <legend sr-only>{{ $t("languageSelect") }}</legend>
      <label
        text-light
        transition
        transition-ease
        hover="cursor-pointer text-accent"
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
        text-light
        transition
        transition-ease
        hover="cursor-pointer text-accent"
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
