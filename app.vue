<script lang="ts" setup>
const { locale } = useI18n()

let year = new Date().getFullYear()

</script>

<template>
  <div>
    <NuxtPage></NuxtPage>

    <footer class="footer">
      <p>
        <form class="locale">
          <label><input type="radio" v-model="locale" value="en"><span>EN</span></label> /
          <label><input type="radio" v-model="locale" value="pt_BR"><span>pt_BR</span></label>
        </form>
        <span>©</span> {{ year }} Rafael Avilar
      </p>
    </footer>
  </div>
</template>

<style scoped>
.footer {
  text-align: right;
  position: absolute;
  bottom: 0;
  height: 54px;
  width: 100%;
  background-color: #0d1216;
  p {
    padding: 0 18px 0 0;
  }
  .locale {
    display: inline;
    input[type="radio"] {
      display: none;
    }
    label {
      margin: 0 5px;
      color: #545454;

      &:hover {
        cursor: pointer;
      }

      input[type="radio"]:checked + span {
        color: #d8d8d8;
      }
    }
    margin: auto 10px;
  }
}
</style>
