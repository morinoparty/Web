export default {
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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,900"
      }
    ]
  },
  buildModules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
    "@nuxtjs/moment"
  ],
  plugins: [{ src: "~/plugins/modernizr-plugin.js", ssr: false }],
  css: [{ src: "~/assets/scss/design.scss", lang: "scss" }],

  vuetify: {
    //customVariables: ["~/assets/variables.scss"],
    optionsPath: "/vuetify.options.js"
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },

  generate: {
    fallback: true
  },

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
  },
  axios: {}
};
