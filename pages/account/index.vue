<template>
  <div>
    <div v-if="!isLogin">
      <navbar type="post login"></navbar>
      <header class="login">
        <div class="post_info">
          <div class="container text-center">
            <h1>ログイン</h1>
            <p>
              もりのパーティにログインすると、
              <br />それぞれのプレイヤー情報を検索したり、BAN記録を検索したり、
              <br />運営チームはこのページからユーザーを管理することができます
            </p>
            <button @click="googleLogin" type="button" class="btn btn-primary">
              <svg
                style="width: 20px;margin-right:10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
                class="svg-inline--fa fa-google fa-w-16"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  class
                />
              </svg>Googleでログイン
            </button>
          </div>
        </div>
        <div class="bg_color"></div>
        <div class="bg"></div>
      </header>
    </div>
    <div class="clearfix" v-else>
      <navbar type="post"></navbar>
      <div class="userinfo fixed">
        <img :src="user.photoURL" alt />
        <div class="username">{{ user.displayName }}</div>

        <button @click="logOut" type="button" class="btn btn-sm btn-outline-light">ログアウト</button>
      </div>
      <div class="right">
        <header class="sm">
          <div class="post_info">
            <div class="container">
              <h1>おかえり</h1>
              <p>もりぱの部屋へようこそ。</p>
              <div v-show="loading" class="box"></div>
            </div>
          </div>
          <div class="bg_color"></div>
          <div class="bg"></div>
        </header>
        <article>
          <div class="post">
            <div class="container account">
              <div class="row">
                <div class="col-md-3">
                  <div class="inner">
                    <h2>ステータ</h2>
                    <p>ステータス</p>
                  </div>
                </div>
                <div class="col-md-3">
                  <h2>プレイヤー情報</h2>
                </div>
                <div class="col-md-3">
                  <h2>BANリスト</h2>
                </div>
                <div class="col-md-3">
                  <h2>他なんかある？</h2>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <MoriFooter />
    </div>
  </div>
</template>

<style lang="scss">
article {
  .container.account {
    max-width: 1000px;
    &.account {
      h2 {
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>

<script>
import navbar from "~/components/navbar.vue";
import MoriFooter from "~/components/footer.vue";
import firebase from "~/plugins/firebase";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  head: {
    title: "ユーザーポータル" + " | もりのパーティ!",
    meta: [
      {
        content: "ユーザーがログインすることで様々な情報を閲覧できます"
      }
    ]
  },

  components: {
    navbar,
    MoriFooter
  },

  asyncData() {
    return {
      isWaiting: true,
      isLogin: false,
      user: []
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
    });
  },
  methods: {
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    logOut() {
      firebase.auth().signOut();
    }
  }
};
</script>