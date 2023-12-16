<script setup lang="ts">
const { locale } = useI18n()

let colorGrey = '#545454'
let colorBlack2 = '#182128'

let year = new Date().getFullYear()

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

    <footer class="footer">
      <p>
        <form>
          <select v-model="locale">
            <option value="en">EN</option>
            <option value="ptBR">pt_BR</option>
          </select>
        </form>
        © {{ year }} Rafael Avilar
      </p>
    </footer>
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
    list-style: none;
    display: flex;
    justify-content: center;
    li {
      margin: 0 20px;
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
.footer {
  text-align: right;
  position: absolute;
  bottom: 0;
  height: 54px;
  width: 100%;
  background-color: #0D1216;
  p {
    padding: 0 18px 0 0;
  }
  form {
    display: inline;
  }
}
</style>
