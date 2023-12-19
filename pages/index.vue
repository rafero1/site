<script setup lang="ts">
const { locale } = useI18n()

</script>

<template>
  <div class="bg">
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
.title {
  font-size: 3rem;
  text-align: center;
  margin-top: 30vh;
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

    @media (min-width: 768px) {
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
