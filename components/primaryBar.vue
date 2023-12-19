<template>
    <div class="primary-bar">
        <span>{{ buildFancyPath($props.path) }}</span>
    </div>
</template>

<script setup lang="ts">


const props = defineProps({
    path: {
        type: String,
        required: true
    }
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
}
</style>
