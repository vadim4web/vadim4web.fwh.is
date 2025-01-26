export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.NUXT_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_EMAILJS_TEMPLATE_ID,
      emailjsUserKey: process.env.NUXT_EMAILJS_USER_KEY,
    }
  },
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
  ssr: false,
})