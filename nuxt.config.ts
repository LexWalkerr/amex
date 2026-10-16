// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css'
  ],

  components: true,

    app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://cdn-icons-png.flaticon.com/512/5968/5968245.png' }
      ]
    }
  }
})
