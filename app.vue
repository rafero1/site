<template>
  <PrimaryBar :path="route.path" />

  <div class="main-wrapper">
    <div absolute z--1 w-full h-full class="main-bg-layer"></div>
    <main px-5>
      <ConsoleLine
        mb-40
        :showTimestamp="true"
        :text="$t('consoleLineLoading')"
        text-color="secondary"
      />

      <TitleBlock mb-60 />

      <section mb-60 m-a sm:max-w-md text-center>
        <h2 mb-16 font="size-4 normal italic">
          <TypewriterEffect
            :words="[
              '~Welcome~',
              '~Bem-vindo~',
              '~Bienvenido~',
              '~welkom~',
              '~vitejte~',
              '~Добро пожаловать~',
              '~ようこそ~',
              '~환영합니다~',
              '~欢迎~',
            ]"
            :timeToWrite="50"
            :timeToDelete="100"
            :waitTimeBeforeNewWord="2000"
            :text-color="['indigo-400', 'sky-400', 'emerald-400', 'red-400']"
            aria-hidden="true"
            tracking="[.2em]"
          />
        </h2>
        <p>{{ $t("intro") }}</p>
        <p>{{ $t("intro2") }}</p>
        <p mb-12>
          <span text-indigo-400>Games</span>,
          <span text-sky-400>{{ $t("music") }}</span
          >, {{ $t("and") }}
          <span text-emerald-400>&lt;{{ $t("coding") }} /&gt;</span>
          {{ $t("intro3") }}
        </p>

        <div flex="~ col">
          <p mb-6>{{ $t("myTechStack") }}</p>
          <TagCloud
            max-w-sm
            m-a
            :tags="[
              'React',
              'Vue',
              'JavaScript',
              'TypeScript',
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
        <PortfolioCard :items="items" />
      </section>

      <section m-a mb-60 sm:max-w-md>
        <ContactCard />
      </section>

      <ConsoleLine
        :showTimestamp="true"
        :text="$t('consoleLineFinished')"
        text-color="secondary"
      />
      <ConsoleLine :text="$t(goodbye)" text-color="secondary" />
    </main>
  </div>
</template>

<script lang="ts" setup>
import dataEn from "./components/Portfolio/data/projects.en";
import dataBr from "./components/Portfolio/data/projects.ptBr";

const { locale } = useI18n();
const route = useRoute();

const currentLocale = computed(() => locale);

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
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

const h = new Date().getHours();

const goodbye =
  h < 12
    ? "goodMorning"
    : h < 18
    ? "goodAfternoon"
    : h < 22
    ? "goodEvening"
    : "goodNight";

const items = computed(() => (locale.value === "en" ? dataEn : dataBr));
</script>
