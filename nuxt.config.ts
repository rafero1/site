// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false
  },
  modules: ['@nuxtjs/i18n', '@nuxtjs/google-fonts'],
  css: [
    '@/assets/css/main.scss',
  ],
  i18n: {
    vueI18n: '~/i18n.config.ts',
  },
  googleFonts: {
    download: true,
    families: {
      'Source Code Pro': true,
      'VT323': true,
      'Courier Prime': true,
      'IBM Plex Mono': true,
    }
  },
})
