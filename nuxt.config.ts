// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig ({
  ssr: false,
  app: {
    head: {
      title: 'Star Wars Wiki',
      link: [{
        hid: 'icon',
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
    }]
    }
  },
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/main.scss',
    'primevue/resources/themes/lara-light-blue/theme.css'
  ],
  build: {
		transpile: ["primevue"]
	},
  vue: {
    propsDestructure: true
  }
})
