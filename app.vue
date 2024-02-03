<template>
  <PrimaryBar :path="route.path" />

  <div id="main-wrapper" @click="registerClick">
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
            :waitTimeBeforeNewWord="1600"
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
          <p>{{ $t("myTechStack") }}</p>
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

const { locale } = useI18n();
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

const items = computed(() => (locale.value === "en" ? dataEn : dataBr));

const pulseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

const createCharAtPos = (x: number, y: number, timeout: number = 600) => {
  return new Promise((resolve) => {
    const pulse = document.createElement("span");
    pulse.classList.add(
      "absolute",
      "rounded-full",
      "text-white",
      "animate-fade-in",
      "animate-ease-in",
      `animate-duration-${timeout}`
    );
    pulse.ariaHidden = "true";
    pulse.style.left = `${x}px`;
    pulse.style.top = `${y}px`;
    pulse.innerText = pulseChars[Math.floor(Math.random() * pulseChars.length)];

    document.body.appendChild(pulse);

    setTimeout(() => {
      pulse.remove();
      resolve(true);
    }, timeout);
  });
};

const createPulseRing = (
  rootX: number,
  rootY: number,
  ringRadius: number = 20,
  ringTimeout: number = 600,
  charCount: number = 10
) => {
  return new Promise((resolve) => {
    for (let i = 0; i < charCount; i++) {
      const angle = (i / charCount) * Math.PI * 2;
      const x = rootX + Math.cos(angle) * ringRadius;
      const y = rootY + Math.sin(angle) * ringRadius;

      createCharAtPos(x, y, ringTimeout).then(() => {
        resolve(true);
      });
    }
  });
};

const createPulseRings = async (
  x: number,
  y: number,
  ringCount: number = 6
) => {
  // for each ring, create a pulse ring
  for (let i = 0; i < ringCount; i++) {
    const ringRadius = i * 16;
    const charCount = 30 + i * 2;

    setTimeout(() => {
      createPulseRing(x, y, ringRadius, 300, charCount);
    }, 50 * i);
  }
};

function registerClick(e: MouseEvent) {
  const x = e.pageX;
  const y = e.pageY;

  // create pulse at mouse position
  createPulseRings(x, y, 5);
}
</script>
