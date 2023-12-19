<template>
    <footer class="footer">
        <p>
            <LocaleSelector></LocaleSelector>
            <span>©</span> {{ year }} Rafael Avilar
        </p>
    </footer>
</template>

<script setup lang="ts">
let year = new Date().getFullYear()
</script>

<style scoped lang="scss">
.footer {
    text-align: right;
    position: absolute;
    bottom: 0;
    height: 54px;
    width: 100%;
    background-color: $darker;

    p {
        padding: 0 18px 0 0;
    }
}
</style>
