export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'VADIM4WEB – Розробка цифрових рішень',
      meta: [
        { name: 'description', content: 'Розробка цифрових рішень для бізнесу. Досконалість у кожній деталі.' },
      ],
      link: [
        { rel: 'icon', id: 'favicon', href: '/favicon_light.svg', type: 'image/svg+xml' },
      ],
    },
  },
  colorMode: {
    preference: 'light'
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/color-mode', '@vueuse/nuxt', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  plugins: [
    '~/plugins/clickOutside.client.js',
  ],
})
