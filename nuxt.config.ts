// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['usebootstrap', '@nuxt/eslint'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  dev: true,
  css: ['~/assets/css/base.css'],
  runtimeConfig: {
    public: {
      debug: false,
    },
    components: true,
  }
})
