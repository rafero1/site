<template>
  <address border="solid dark 1px" p-5 text-center>
    <h2 font="normal size-4">Feel free to contact me at:</h2>
    <ul list-none p0>
      <li my-4>
        <DottedLink
          href="mailto:rfl.avilar@outlook.com"
          text="rfl.avilar@outlook.com"
          target="_blank"
          rel="noopener"
        />
      </li>
      <li my-4>
        <DottedLink
          href="https://github.com/rafero1"
          text="GitHub"
          target="_blank"
          rel="noopener"
        />
      </li>
      <li my-4>
        <DottedLink
          href="https://linkedin.com/in/rafael-avilar"
          text="LinkedIn"
          target="_blank"
          rel="noopener"
        />
      </li>
    </ul>
  </address>
</template>

<script lang="ts" setup>
import type { DottedLink } from "#build/components";
</script>

<style></style>
