// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2025-07-15',
//   devtools: { enabled: true },

//     app: {
//     head: {
//       link: [
//         { rel: 'icon', type: 'image/x-icon', href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNKhfbF7K8h2wi1abQn3kG5hmdBtXKTdsVg&s' }
//       ]
//     }
//   }
// })

export default {
  ssr: true,

  head: {
    title: 'Northbridge Financial Advisory',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Northbridge Financial Advisory provides thoughtful financial planning and wealth guidance for individuals, families and business owners.'
      }
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap'
      }
    ]
  },

  css: [
    '~/assets/css/main.css'
  ],

  components: true,

  build: {
    transpile: []
  }
}