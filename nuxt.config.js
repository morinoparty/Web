export default {
  mode: "spa",

  head: {
    title: "もりのパーティ! | まったりのんびりマイクラ生活!",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "まったりのんびりマイクラ生活! もりのパーティ!は、日本最大級のバニラ生活サーバーです。"
      },
      {
        property: "og:title",
        content: "もりのパーティ!"
      },
      {
        property: "og:description",
        content:
          "まったりのんびりマイクラ生活! もりのパーティ!は、日本最大級のバニラ生活サーバーです。"
      },
      {
        property: "og:type",
        content: "article"
      },
      {
        property: "og:site_name",
        content: "もりのパーティ!"
      },
      {
        property: "og:url",
        content: "https://morino.party/"
      },
      {
        property: "og:image",
        content: "https://morino.party/assets/thumb.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:site",
        content: "morinoparty"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/assets/server-icon.png" },
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
