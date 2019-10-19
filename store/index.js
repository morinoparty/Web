import Vue from "vue";
import Vuex from "vuex";

const apiUrl = "https://morino.party";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    endpoint: `${apiUrl}/wp-json/wp/v2/posts?per_page=100&page=1&_embed=1`
  },

  mutations: {
    updateEndpoint(state, endpoint) {
      state.endpoint = endpoint;
      bus.$emit("clearError");
      bus.$emit("bumpViewKey", "Updating content...");
    }
  }
});
