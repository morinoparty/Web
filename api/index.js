<script>
import firebase from "~/plugins/firebase";
import { mapActions, mapState, mapGetters } from "vuex";
app.get("/register/:uid/:uuid", function(req, res) {
  res.send(req.params);
  // firebase
  //   .firestore()
  //   .collection("users")
  //   .doc(this.$nuxt.$route.query.uid)
  //   .set({
  //     mcuuid: this.$nuxt.$route.query.uuid
  //   })
  //   .then(function() {
  //     res.send("API server works fine");
  //   })
  //   .catch(function(error) {
  //     console.error("Error: Add Document", error);
  //   });
  module.exports = {
  path: '/api',
  handler: app
}
});
</script>