// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icon", "@vueuse/nuxt"],
  app: {
    head: {
      title: "Ryan Knepp",
      meta: [
        {
          name: "description",
          content: "Ryan Knepp's personal website of mostly okish things.",
        },
      ],
      link: [
        { rel: "icon", sizes: "48x48", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/svg+xml",
          sizes: "any",
          href: "/favicon.svg",
        },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "canonical", href: "https://ryanknepp.com/" },
      ],
      htmlAttrs: {
        lang: "en-US",
      },
    },
  },
});
