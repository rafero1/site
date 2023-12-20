<template>
  <div class="primary-bar">
    <span>{{ buildFancyPath($props.path) }}</span>
    <span class="clock"
      >{{ time.split(":")[0] }}<span class="clock-separator">:</span
      >{{ time.split(":")[1] }}</span
    >
  </div>
</template>

<script setup lang="ts">
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

/**
 * Build a fancy path string from the given path
 * @param path the path to be converted
 * @returns the fancy path string
 */
const buildFancyPath = (path: string): string => {
  let pathString = "/home/rafael";

  if (path === "/") {
    pathString += "/hello_world.sh";
  } else {
    pathString += path.toLowerCase().replace("-", "_") + ".sh";
  }

  return pathString;
};
</script>

<style scoped lang="scss">
.primary-bar {
  background-color: $veil;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .clock {
    align-self: flex-end;
  }
}
</style>
