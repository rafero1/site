<template>
  <PrimaryBar :path="route.path" />

  <!--TODO: background idea: animate ascii letters or code snippets randomly flashing in the background-->
  <div class="main-wrapper">
    <div absolute z--1 w-full h-full class="main-bg-layer"></div>
    <main px-5>
      <ConsoleLine
        mb-40
        :showTimestamp="true"
        :text="$t('consoleLineLoading')"
        text-color="dark"
      />

      <TitleBlock mb-60 />

      <div m-a sm:max-w-3xl>
        <section mb-60 text-center>
          <h2 mb-10 font="size-4 normal italic">
            <span aria-hidden="true">~</span> {{ $t("welcome") }}
            <span aria-hidden="true">~</span>
          </h2>
          <p>{{ $t("intro") }}</p>
          <p>{{ $t("intro2") }}</p>
          <p mb-12>
            <span text-indigo-400>Games</span>,
            <span text-sky-400>{{ $t("music") }}</span
            >, {{ $t("and") }}
            <span text-emerald-400>&lt;{{ $t("coding") }} /&gt;</span>
            {{ $t("intro3") }}.
          </p>

          <div flex="~ col">
            <p>{{ $t("myTechStack") }}</p>
            <TagCloud
              max-w-sm
              m-a
              :tags="[
                'React',
                'Vue',
                'JavaScript',
                'HTML',
                'CSS3',
                'PHP',
                'Laravel',
                'ASP.NET',
                'C#',
                'Python',
                'Docker',
                'Git',
              ]"
            />
          </div>
        </section>

        <section mb-60>
          <PortfolioCard />
        </section>

        <section mb-60>
          <ContactCard />
        </section>
      </div>

      <ConsoleLine
        :showTimestamp="true"
        :text="$t('consoleLineFinished')"
        text-color="dark"
      />
      <ConsoleLine :text="$t(goodbye)" text-color="dark" />
    </main>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const h = new Date().getHours();

const goodbye =
  h < 12
    ? "goodMorning"
    : h < 18
    ? "goodAfternoon"
    : h < 22
    ? "goodEvening"
    : "goodNight";

useHead({
  bodyAttrs: {
    class: "m0 font-mono bg-darker text-light min-h-screen",
  },
  title: "Rafael Avilar",
  meta: [
    {
      name: "description",
      content: "Rafael Avilar's personal website",
    },
  ],
});
</script>
