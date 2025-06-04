// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['usebootstrap', '@nuxt/eslint'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  dev: false,
  debug: false,
  css: ['~/assets/css/base.css'],
  runtimeConfig: {
    public: {
      debug: false,
    },
    components: true,
    private: {
      formSendEmail: process.env.SEND_EMAIL_TO,
      mailLogin: process.env.MAIL_LOGIN,
      templates: process.env.TEMPLATES,
      baseDataModel: process.env.BASE_DATA_MODEL,
      log: process.env.LOG,
    },
  }
})
