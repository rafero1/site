<script setup lang="ts">
const { locale } = useI18n()

let colorGrey = '#545454'
let colorBlack2 = '#182128'

</script>

<template>
  <div class="bg">
    <h1 class="title">Rafael Avilar</h1>
    <nav class="links">
      <ul>
        <li><NuxtLink to="/about">&gt;&gt; {{ $t('aboutMe') }} &lt;&lt;</NuxtLink></li>
        <li><NuxtLink to="/fun">&gt;&gt; {{ $t('funStuff') }} &lt;&lt;</NuxtLink></li>
        <li><NuxtLink to="/portfolio">&gt;&gt; {{ $t('portfolio') }} &lt;&lt;</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.title {
  font-size: 3rem;
  text-align: center;
  margin-top: 30vh;
  font-weight: 400;
}
.links {
  margin-top: 38px;
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    li {
      padding: 10px 0;
      margin: 0 20px;
      text-align: center;
      a {
        text-decoration: none;
        color: inherit;
        &:hover {
          color: #A2C755;
        }
      }
    }
  }
}
</style>
