const config = require(".contentful.json");

export default {
  /*
   ** Headers of the page
   
   */
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",

  head: {
    title: "もりのパーティ!",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "もりのパーティ!は、日本最大級のバニラ生活サーバーです。"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  buildModules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/style-resources",
    "@nuxtjs/axios"
  ],

  plugins: [{ src: "~/plugins/modernizr-plugin.js", ssr: false }],

  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
    //apiBaseUrl: 'https://api.mcsrvstat.us/2/'
  },

  axios: {
    //baseURL: 'https://api.mcsrvstat.us/2/visit.morino.party',
    // proxyHeaders: false
    //apiBaseUrl: 'https://api.mcsrvstat.us/2/visit.morino.party'
  },
  css: [{ src: "~/assets/scss/design.scss", lang: "scss" }],

  vuetify: {
    //customVariables: ["~/assets/variables.scss"],
    optionsPath: "/vuetify.options.js"
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
        config.module.rules.push({
          test: /.modernizrrc.js$/,
          use: { loader: "webpack-modernizr-loader" }
        });
        config.resolve.alias["modernizr"] = "/.modernizrrc.js";
      }
    }
  }
};
