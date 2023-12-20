<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <div>
    <p class="greetings">~ {{ $t("welcome") }} ~</p>
    <h1 class="title">Rafael Avilar</h1>
    <nav class="links">
      <ul>
        <li>
          <SimpleLink url="/about" msg="aboutMe"></SimpleLink>
        </li>
        <li>
          <SimpleLink url="/fun" msg="funStuff"></SimpleLink>
        </li>
        <li>
          <SimpleLink url="/portfolio" msg="portfolio"></SimpleLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.greetings {
  text-align: center;
  margin-top: 1.4em;
}

.title {
  font-size: 4rem;
  text-align: center;
  margin-top: 20vh;
  font-weight: 400;
  color: $green;
}

.links {
  margin-top: 38px;

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    li {
      padding: 10px 0;
      margin: 0 20px;
      text-align: center;
    }
  }
}
</style>
