// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lato:wght@400;700&display=swap",
        },
      ],
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  modules: ["vuetify-nuxt-module"],
  features: {
    inlineStyles: false,
  },

  css: ["assets/styles/main.scss"],

  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {
      defaults: {
        VBtn: {
          class: "text-none",
        },
        VSheet: {
          color: "transparent",
        },
      },
      theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              primary: "#1F299C",
              secondary: "#2ABC68",
            },
          },
          dark: {
            dark: true,
            colors: {
              primary: "#1F299C",
              secondary: "#2ABC68",
            },
          },
        },
      },
    },
  },
});
