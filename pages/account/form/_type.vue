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
              <h1>
                <i class="fas" :class="'fa-'+body.icon"></i>
                {{body.title}}
              </h1>
              <p>{{body.description}}</p>
            </div>
          </div>
        </div>
        <div class="bg_color"></div>
        <div class="bg"></div>
      </header>
      <article>
        <div class="post">
          <div class="container">
            {{mcid}}
            <form @submit.prevent="exec">
              <div class="form-group" v-for="(body, i) in body.input" :key="`bad-sample_${i}`">
                <label :for="body.id">{{body.title}}</label>
                <div v-if="body.type == 'multiple'" class="row">
                  <div
                    v-for="(content, i) in body.input"
                    :key="`bad-sample_${i}`"
                    class="form-group"
                    :class="content.class"
                  >
                    <label :for="content.id">{{content.title}}</label>
                    <component
                      :is="content.type"
                      :id="content.id"
                      :model="checkedVal"
                      :bind:value="content"
                      class="form-control"
                    ></component>
                  </div>
                </div>
                <div v-else>
                  <component
                    :is="body.type"
                    :id="body.id"
                    :model="checkedVal"
                    :bind:value="body"
                    class="form-control"
                  ></component>
                </div>
              </div>
              {{ checkedVal }}
              <button type="submit" class="btn btn-outline-success">確定</button>
            </form>
          </div>
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

export default {
  head: {
    title: "ユーザーポータル" + " | もりのパーティ!",
    meta: [
      {
        content: "ユーザーがログインすることで様々な情報を閲覧できます"
      }
    ],
    script: [{ src: "https://kit.fontawesome.com/cf7cf76089.js" }]
  },

  components: {
    navbar,
    MoriFooter,
    mcname,
    nologin
  },
  data() {
    return {
      body: [],
      type: [
        {
          path: "grefing",
          icon: "balance-scale",
          title: "荒らし被害を報告",
          description:
            "荒らし被害を見つけたら、こちらから報告してください。ある一定の条件で自動的に処罰されます。",
          input: [
            {
              title: "該当するMinecraftIDを入力してください",
              type: "input",
              value: "mcid"
            },
            {
              title: "荒らされているポイントを入力してください",
              input: [
                { title: "X座標", value: "t" },
                { title: "Y座標", value: "position_y" },
                { title: "Z座標", value: "position_z" }
              ],
              type: "multiple"
            },
            {
              title: "現在の状態/その他の情報",
              type: "input",
              value: "body"
            }
          ]
        },
        {
          path: "areaprotect",
          icon: "eraser",
          title: "エリア保護解除申請",
          description:
            "保護のルールに基づき不要と思われるエリア保護を見つけたら、こちらから申請してください。",
          input: [
            {
              title: "該当するMinecraftIDを入力してください",
              type: "input",
              value: "mcid"
            },
            {
              title: "荒らされているポイントを入力してください",
              input: [
                { title: "X座標", value: "position_x" },
                { title: "Y座標", value: "position_y" },
                { title: "Z座標", value: "position_z" }
              ],
              type: "multiple"
            },
            {
              title: "現在の状態/その他の情報",
              type: "input",
              value: "body"
            }
          ]
        }
      ]
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
      .collection("form")
      .doc(this.$nuxt.$route.params.type)
      .get()
      .then(doc => {
        console.log(doc.data());
        if (doc.data()) {
          this.body = doc.data();
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