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
        <div v-else>
          <img :src="user.photoURL" alt />
          <div class="username">{{ user.displayName }}</div>
          <button @click="logOut" type="button" class="btn btn-sm btn-outline-light">ログアウト</button>
        </div>
      </div>
      <header class="sm">
        <div class="post_info">
          <div class="container">
            <div v-if="minecraft.mcuuid">
              <h1>おかえり</h1>
              <p>もりぱの部屋へようこそ。</p>
            </div>
          </div>
        </div>
        <div class="bg_color"></div>
        <div class="bg"></div>
      </header>
      <article>
        <div class="post">
          <div class="container account">
            <div class="row">
              <div class="col-md-12">
                <section class="msg notice">
                  <h2>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="bullhorn"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      class="svg-inline--fa fa-bullhorn fa-w-18"
                    >
                      <path
                        fill="currentColor"
                        d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"
                        class
                      />
                    </svg>あなたへのお知らせ
                  </h2>
                  <figure>
                    <h3>タイトルテキスト</h3>
                    <p>本文</p>
                  </figure>
                </section>
              </div>
              <component
                v-for="(link, i) in links"
                :key="`bad-sample_${i}`"
                :is="isInternalLink(link.path) ? 'nuxt-link' : 'a'"
                :to="isInternalLink(link.path) ? link.path : ''"
                :href="isInternalLink(link.path) ? '' : link.path"
                class="col-md-6 tab"
              >
                <div class="li">
                  <section class="msg" :class="link.type">
                    <h2>
                      <i class="fas" :class="'fa-'+link.icon"></i>
                      {{link.title}}
                    </h2>
                    <figure>
                      <p>{{link.description}}</p>
                    </figure>
                  </section>
                </div>
              </component>
            </div>
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
.login-msg {
  background: #ffffff;
  max-width: 300px;
  padding: 100px 20px;
  border-radius: 10px;
  margin: auto;
  color: #007907;
  h1 {
    font-size: 1.8rem;
    color: #007907 !important;
    margin-bottom: 30px;
  }
  code {
    color: #ffb200;
    background-color: #fff9ea;
    padding: 5px;
    margin-bottom: 30px;
    border-radius: 5px;
    font-size: 0.9rem;
    display: block;
  }
  p {
    color: #007907 !important;
    margin-bottom: 30px;
    font-size: 0.9rem;
  }
}
a,
a:hover {
  text-decoration: none;
}
.col-md-12.tab {
  margin-bottom: 20px;
}
section {
  &.msg {
    background-color: #f6f6f6;
    border-left: 6px solid;
    border-right: 6px solid;
    padding: 20px;
    margin-bottom: 0px;
    text-align: left;
    &.notice {
      border-color: #ff9800;
      margin-bottom: 50px;
      h2,
      h3 {
        color: #ff9800;
      }
    }
    &.form {
      border-color: #4ba7cc;
      h2,
      p {
        color: #4ba7cc;
      }
    }

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: left;
      svg {
        height: 1.5rem;
        margin-right: 15px;
      }
    }
    figure {
      margin-left: 42px;
      margin-top: 15px;
      margin-bottom: 0;
      h3 {
        font-size: 1rem;
        display: inline-block;
        font-weight: bold;
        border-radius: 5px;
        margin-bottom: 0;
      }
      p {
        opacity: 0.7;
        font-size: 0.9rem;
        display: inline-block;
      }
    }
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
import { mapActions, mapState, mapGetters } from "vuex";
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
      links: [
        {
          type: "form",
          icon: "balance-scale",
          title: "荒らし被害を報告",
          description:
            "荒らし被害を見つけたら、こちらから報告してください。ある一定の条件で自動的に処罰されます。",
          path: "/account/form/grefing"
        },
        {
          type: "form",
          icon: "eraser",
          title: "エリア保護解除申請",
          description:
            "保護のルールに基づき不要と思われるエリア保護を見つけたら、こちらから申請してください。",
          path: "/account/form/areaprotect"
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
    }
  }
};
</script>