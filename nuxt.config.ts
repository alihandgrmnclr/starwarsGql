// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/lara-light-blue/theme.css'
  ],
  build: {
		transpile: ["primevue"]
	}
})
