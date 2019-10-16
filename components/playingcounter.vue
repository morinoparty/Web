
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
import Vue from 'vue';
import axios from "axios";

Vue.prototype.$http = axios;
var vm = new Vue({
  data: {
    info: ''
  }
})
export default {
  async asyncData(req) {
    let { data } = await axios.get('https://api.mcsrvstat.us/2/visit.morino.party')
    this.info = response.players.online;
    return {
      info: null,
      loading: true,
      errored: false
    };
  },
  methods: {
    serverInfo() {
    //created() {
      axios.get('https://api.mcsrvstat.us/2/visit.morino.party')
        .then((res) => {
          this.info = response.players.online;
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
        .finally(() => (this.loading = false));
        
    },
  header: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    responseType: "json"
  },
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
  withCredentials: true
  }
};
</script>
