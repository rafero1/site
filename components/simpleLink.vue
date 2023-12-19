<template>
  <div @mouseenter="setActive" @mouseleave="setUnactive">
    <NuxtLink :to="$props.url">
      <span v-html="separatorLeft"></span>{{ $t(props.msg) }}<span v-html="separatorRight"></span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  msg: {
    type: String,
    required: true
  }
})

const { locale } = useI18n()

const SPACE = '&nbsp;';
const LEFT_ARROWS = '&gt;&gt;';
const RIGHT_ARROWS = '&lt;&lt;';

let active = ref(false);
let separatorLeft = ref(LEFT_ARROWS + SPACE);
let separatorRight = ref(SPACE + RIGHT_ARROWS);

const setActive = () => {
  active.value = true;
  separatorLeft.value = SPACE + LEFT_ARROWS;
  separatorRight.value = RIGHT_ARROWS + SPACE;
}

const setUnactive = () => {
  active.value = false;
  separatorLeft.value = LEFT_ARROWS + SPACE;
  separatorRight.value = SPACE + RIGHT_ARROWS;
}

</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    color: $green;
    font-weight: 700;
  }
}
</style>
