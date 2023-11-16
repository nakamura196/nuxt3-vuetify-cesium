// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass"
  ],
  ssr: false,
  build: {
    transpile: ["vuetify"],
  },
  app: {
    baseURL: "/nuxt3-vuetify-cesium"
  }
});
