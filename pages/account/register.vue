<template>
  <div>{{ text }} / {{ this.$nuxt.$route.query.uid }} / {{ this.$nuxt.$route.query.uuid }}</div>
</template>
<script>
import firebase from "~/plugins/firebase";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  head: {},
  asyncData() {
    return {
      text: null
    };
  },
  mounted: function() {
    if (this.$nuxt.$route.query.uid) {
      firebase
        .firestore()
        .collection("users")
        .doc(this.$nuxt.$route.query.uid)
        .set({
          mcuuid: this.$nuxt.$route.query.uuid
        })
        .then(function() {
          console.log("登録完了");
          this.text = "登録完了";
        })
        .catch(function(error) {
          console.error("Error: Add Document", error);
          this.text = "登録失敗";
        });
    } else {
      this.text = "登録失敗";
    }
  }
};
</script>