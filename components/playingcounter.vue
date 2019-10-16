import Vue from "vue";
import API from '~api'
Vue.prototype.$http = axios;
const app = new Vue({
<template>
  <div class="counter">
    <h3>
      <span>{{info}}</span>
      <br />人
    </h3>
    <p>参加中！</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    };
  },
  methods: {
    serverInfo() {
      API.get("~api.js")
        .then(response => {
          this.info = response.players.online;
        })
        .catch(function(error) {
          console.log(error.toJSON());
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>
}