<template>
    <div
        class="w-full p5 box-border flex flex-justify-between flex-items-start flex-col sm:flex-row gap-y-2 font-size-3 sm:font-size-4">
        <span><span class="text-green">$</span> {{ buildFancyPath($props.path) }}</span>
        <div class="flex-self-end">
            <LocaleSelector class="mr-2"></LocaleSelector>
            <span>
                {{ time.split(":")[0] }}<span class="clock-separator">:</span>{{ time.split(":")[1] }}
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
