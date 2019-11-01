<template>
  <div>
    <div class="loading" v-show="isWaiting">読み込み</div>

    <div v-if="minecraft.mcuuid">
      <navbar type="post"></navbar>
      <div class="userinfo fixed">
        <div v-if="minecraft.mcuuid">
          <img class="head" :src="'https://minotar.net/helm/'+minecraft.mcuuid+'/100.png'" alt />
          <mcname />
          <button @click="logOut" type="button" class="btn btn-sm btn-outline-light">ログアウト</button>
        </div>
      </div>
      <header class="sm">
        <div class="post_info">
          <div class="container">
            <div v-if="minecraft.mcuuid">
              <h1>文章編集：{{body.title}}</h1>
            </div>
          </div>
        </div>
        <div class="bg_color"></div>
        <div class="bg"></div>
      </header>
      <article>
        <div class="post">
          <form @submit.prevent="exec">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="title">タイトル</label>
                    <input id="title" class="form-control" :value="body.title" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="slug">url</label>
                    <input id="slug" class="form-control" :value="this.$nuxt.$route.params.page" />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="description">本文</label>
                    <input id="description" class="form-control" :value="body.description" />
                  </div>
                </div>
              </div>
            </div>
            <div class="container" style="max-width:900px">
              <div class="form-group">
                <label for="body">本文</label>
                <tinymce-editor
                  api-key="ivxgkv84v190xo9m6mjfiwe69ef9emhn3zfhpeyi4pvzon4h"
                  v-model="body.body"
                  :init="{selector: 'textarea',plugins: 'code',content_css:['https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css','https://morino.party/tinymce/editor.css']}"
                  style="height:calc(100vh - 200px)"
                >{{body.body}}</tinymce-editor>
              </div>
            </div>
            <div class="container" style="max-width:900px">
              <div class="form-group">
                <button type="submit" class="btn btn-outline-success">確定</button>
              </div>
            </div>
          </form>
        </div>
      </article>
      <MoriFooter />
    </div>
    <nologin v-else />
  </div>
</template>

<style lang="scss">
.loading {
  position: fixed;
  z-index: 4;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;
}

.form-control {
  border: 0;
  border-radius: 0;
  padding: 5px;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
  &:focus {
    border-color: rgba(0, 121, 6, 0.5);
    box-shadow: 0 0 0 0.1rem rgba(0, 121, 6, 0.25);
  }
}
.form-group {
  margin-bottom: 30px;
  &.col-md-4 {
    margin-bottom: 0;
  }
}
article {
  h1 {
    font-weight: bold;
  }
}

.ql-showHtml:after {
  content: "[source]";
}
</style>

<script>
import navbar from "~/components/navbar.vue";
import MoriFooter from "~/components/footer.vue";
import mcname from "~/components/mcname.vue";
import nologin from "~/components/account/nologin.vue";

import firebase from "~/plugins/firebase";
import Vue from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import { Route } from "vue-router";

import Editor from "@tinymce/tinymce-vue";

export default {
  head: {
    title: "ユーザーポータル" + " | もりのパーティ!",
    meta: [
      {
        content: "ユーザーがログインすることで様々な情報を閲覧できます"
      }
    ],
    script: [
      { src: "https://kit.fontawesome.com/cf7cf76089.js" },
      { src: "https://cdn.quilljs.com/1.3.6/quill.js" }
    ]
  },
  components: {
    navbar,
    MoriFooter,
    mcname,
    nologin,
    "tinymce-editor": Editor // <- Important part
  },
  data() {
    return {
      editorSettings: {
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],

            [{ list: "ordered" }, { list: "bullet" }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ align: [] }],

            ["clean"], // remove formatting button
            ["link", "image"],
            ["showHtml"]
          ]
        }
      }
    };
  },
  asyncData() {
    return {
      isWaiting: true,
      isLogin: false,
      user: [],
      minecraft: [],
      mcname: null
    };
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      this.isWaiting = false;
      if (user) {
        this.isLogin = true;
        this.user = user;
      } else {
        this.isLogin = false;
        this.user = [];
      }
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then(doc => {
          console.log(doc.data());
          if (doc.data()) {
            this.minecraft = doc.data();
          }
        });
    });
    firebase
      .firestore()
      .collection("pages")
      .doc(this.$nuxt.$route.params.page)
      .get()
      .then(doc => {
        console.log(doc.data());
        if (doc.data()) {
          this.body = doc.data();
        } else {
          if (doc.data() === undefined) {
            this.body = {
              title: "404",
              description: "このページは存在しません",
              body: "URLをお確かめの上、再度アクセスしてください。"
            };
            this.loading = false;
          }
        }
      });
  },
  methods: {
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    logOut() {
      firebase.auth().signOut();
    },
    isInternalLink(path) {
      return !/^https?:\/\//.test(path);
    },

    exec: function() {
      // 本来はajax通信をする
      console.log("exec");
      firebase
        .firestore()
        .collection("pages")
        .doc(this.$nuxt.$route.params.page)
        .set({
          title: this.body.title,
          description: this.body.description,
          body: this.body.body,
          date: new Date()
        })
        .then(function(res) {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  },
  computed: {
    list: function() {
      return this.type.filter(function(i) {
        console.log(i);
        return i.path === "grefing";
      });
    }
  }
};
</script>