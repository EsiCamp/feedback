import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: [
      {
        code: "fa",
        iso: "fa-IR",
        name: "فارسی",
        file: "fa/index.js",
        dir: "rtl",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en/index.js",
        dir: "ltr",
      },
    ],
    defaultDirection: "rtl",
    defaultLocale: "fa",
    detectBrowserLanguage: false,
    langDir: "./locales/",
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ["~/assets/css/main.css"],
  components: {
    dirs: ["~/components"],
  },
});
