<template>
  <div>
    <navbar type="post"></navbar>
    <div v-show="loading" class="loader">Loading...</div>
    <header class="sm">
      <div class="post_info">
        <div class="container">
          <h1 v-html="title"></h1>
          <div v-show="loading" class="box"></div>
        </div>
      </div>
      <div class="bg_color"></div>
      <div class="bg"></div>
    </header>

    <article>
      <div class="post">
        <div class="container">
          <div v-show="loading" class="box h1"></div>
          <div v-show="loading" class="box ps-1"></div>
          <div v-show="loading" class="box ps-2"></div>
          <div v-show="loading" class="box ps-3"></div>
          <div v-show="loading" class="box ps-4"></div>
          <div v-show="loading" class="box ps-5"></div>
          <div v-show="loading" class="box ps-6"></div>
          <div v-show="loading" class="box ps-7"></div>
          <div v-show="loading" class="box ps-8"></div>
          <div v-show="loading" class="box ps-9"></div>
          <div v-html="content"></div>
        </div>
      </div>
    </article>
    <bottompromo />
    <MoriFooter />
  </div>
</template>

<style>
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  z-index: 100;
  position: fixed;
  margin: 0;
  top: 44px;
  left: 5px;
  width: 40px;
  height: 40px;
  font-size: 10px;
  text-indent: -9999em;
  border-top: 6px solid #007907;
  border-right: 6px solid #007907;
  border-bottom: 6px solid #007907;
  border-left: 6px solid white;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
<script>
import navbar from "~/components/navbar.vue";
import MoriFooter from "~/components/footer.vue";
import bottompromo from "~/components/bottompromo.vue";
import axios from "axios";

export default {
  components: {
    navbar,
    MoriFooter,
    bottompromo
  },
  data() {
    return {
      content: null,
      title: null,
      loading: true
    };
  },
  async created() {
    const response = await axios.get(
      `https://morino.party/wp-json/wp/v2/pages?slug=${this.$route.path}`
    );
    console.log(response);
    this.content = response.data[0].content.rendered;
    this.title = response.data[0].title.rendered;
    this.loading = false;
  }
};
</script>