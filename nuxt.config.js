export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: "universal",
  head: {
    title: "Home",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,500;0,800;0,900;1,900&family=Rubik+Doodle+Shadow&display=swap",
      },
    ],
  },

  loading: {
    color: "#00ff00",
    height: "4px",
    duration: 5000,
    failedcolor: "ff0000",
  },
  loadingIndicator: {
    name: "circle",
    color: "#00ff00",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-components.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env:{
    fbAPIKey:'AIzaSyBswHPJADb4r6Wt9GpVr9YDJWSOGdqTbP4'
  },

  transition: {
    name: "fade",
    mode: "out-in",
  },
};
