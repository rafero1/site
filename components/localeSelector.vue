<template>
  <form class="locale">
    <label>
      <input type="radio" v-model="locale" value="en" /><span>EN</span></label>
    /
    <label>
      <input type="radio" v-model="locale" value="pt_BR" /><span>PT_BR</span>
    </label>
  </form>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style scoped lang="scss">
.locale {
  display: inline;

  input[type="radio"] {
    display: none;
  }

  label {
    margin: 0 5px;
    color: $gray;

    &:hover {
      cursor: pointer;
    }

    input[type="radio"]:checked+span {
      color: $light;
    }
  }

  margin: auto 10px;
}
</style>
