<template>
  <div>
    <navbar type="post"></navbar>
    <div v-show="loading" class="loader">Loading...</div>
    <header class="sm">
      <div class="post_info">
        <div class="container">
          <h1 v-html="content.title"></h1>
          <p v-html="content.description"></p>
          <div v-show="loading" class="box"></div>
        </div>
      </div>
      <div class="bg_color"></div>
      <div class="bg"></div>
    </header>

    <article class="post">
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
          <div v-html="content.body"></div>
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

import firebase from "~/plugins/firebase";

import axios from "axios";
import vue from "vue";

export default {
  head() {
    return {
      title: this.content.title + " | もりのパーティ!",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.content.description
        },
        {
          property: "og:title",
          content: this.content.title
        },
        {
          property: "og:description",
          content: this.content.description
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
          content: "https://morino.party/" + this.$nuxt.$route.params.page
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
      ]
    };
  },
  components: {
    navbar,
    MoriFooter,
    bottompromo
  },
  data() {
    return {
      content: [],
      loading: true
    };
  },

  mounted: function() {
    firebase
      .firestore()
      .collection("pages")
      .doc(this.$nuxt.$route.params.page)
      .get()
      .then(doc => {
        console.log(doc.data());
        if (doc.data()) {
          this.content = doc.data();
          this.loading = false;
        } else {
          if (doc.data() === undefined) {
            this.content = {
              title: "404",
              description: "このページは存在しません",
              body: "URLをお確かめの上、再度アクセスしてください。"
            };
            this.loading = false;
          }
        }
      })
      .catch(err => {
        console.error("Error: Add Document", err);
        throw err;
      });
  }
};
</script>