// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig ({
  ssr: false,
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
	}
})
