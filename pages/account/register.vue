<template>
  <div>{{ text }}</div>
</template>
<script>
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
  data() {
    return {};
  },
  asyncData() {
    return {
      text: null
    };
  },
  mounted: function() {
    if (this.$nuxt.$route.query.uid || this.$nuxt.$route.query.uuid) {
      firebase
        .firestore()
        .collection("users")
        .doc(this.$nuxt.$route.query.uid)
        .set({
          mcuuid: this.$nuxt.$route.query.uuid
        })
        .then(res => {
          console.log("Add Document with ID:", res.id);
          return res.id;
          this.text = "登録完了";
        })
        .catch(err => {
          console.error("Error: Add Document", err);
          throw err;
          this.text = "登録失敗";
        });
    } else {
      this.text = "登録失敗";
    }
  }
};
</script>