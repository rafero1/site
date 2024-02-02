// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  features: {
    inlineStyles: false,
  },
  modules: ["@nuxtjs/i18n", "@unocss/nuxt", "@nuxt/test-utils/module"],
  css: ["@unocss/reset/normalize.css"],
  i18n: {
    vueI18n: "~/i18n.config.ts",
  },
});
