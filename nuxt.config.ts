export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // colorMode: {
  //   preference: 'light'
  // },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/color-mode', '@vueuse/nuxt', '@nuxtjs/i18n', 'dayjs-nuxt'],
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  dayjs: {
    locales: ['en', 'uk'],
    plugins: ['duration'],
  },
  plugins: [
    '~/plugins/clickOutside.client.js',
  ],
})