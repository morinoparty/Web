module.exports = {
  /*
   ** Headers of the page
   */
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
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/style-resources", "@nuxtjs/axios"],

  plugins: [{ src: "~/plugins/modernizr-plugin.js" }],

  env: {
    //apiBaseUrl: 'https://api.mcsrvstat.us/2/'
  },

  axios: {
    //baseURL: 'https://api.mcsrvstat.us/2/visit.morino.party',
    // proxyHeaders: false
    //apiBaseUrl: 'https://api.mcsrvstat.us/2/visit.morino.party'
  },
  css: [{ src: "~/assets/scss/design.scss", lang: "scss" }],
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
      }
    }
  }
};
