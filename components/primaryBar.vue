<template>
  <div
    p5
    w-full
    box-border
    font-size-3
    sm:font-size-4
    gap-y-2
    flex="~ justify-between items-start col"
    sm:flex-row
  >
    <span text-dark aria-hidden="true"
      ><span>$</span> {{ buildFancyPath($props.path) }}</span
    >
    <div flex-self-end>
      <LocaleSelector mr-2></LocaleSelector>
      <span aria-hidden="true">
        {{ time.split(":")[0] }}<span class="clock-separator">:</span
        >{{ time.split(":")[1] }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { buildFancyPath } from "./../utils/buildFancyPath";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});

/**
 * Get the current time in the format HH:MM
 * @returns the current time
 */
const getCurrentTime = (): string => {
  return new Date().toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
};

const time = ref(getCurrentTime());

onMounted(() => {
  // update the time every second
  setInterval(() => {
    time.value = getCurrentTime();
  }, 1000);

  // blink the clock separator every now and then
  setInterval(() => {
    const clock = document.querySelector(".clock-separator");
    clock?.classList.toggle("invisible");
  }, 2000);
});
</script>
