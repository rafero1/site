<template>
    <div class="primary-bar">
        <span>{{ buildFancyPath($props.path) }}</span>
        <span class="clock">{{ time }}</span>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    path: {
        type: String,
        required: true
    }
});

// get the current time string
const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
};

const time = ref(getCurrentTime());

// update the time every second
onMounted(() => {
    setInterval(() => {
        time.value = getCurrentTime();
    }, 1000);
});

// build a fancy path string that looks like a terminal shell prompt
const buildFancyPath = (path: string) => {
    let pathString = '/home/rafael';

    if (path === '/') {
        pathString += '/hello_world.sh';
    } else {
        pathString += path.toLowerCase().replace('-', '_') + '.sh';
    }

    return pathString;
}

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
