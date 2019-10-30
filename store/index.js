import firebase from "~/plugins/firebase";

export const state = () => ({
  user: null, // ログインユーザー
  pages: [], // ユーザーが登録したTODO一覧
  content: [],
  loading: true,
  function() {
    firebase
      .firestore()
      .collection("pages")
      .doc('first')
      .get()
      .then(doc => {
        console.log(doc.data());
        if (doc.data()) {
          this.content = doc.data();
          this.loading = false;
        }
      });
  }
});

export const mutations = {
  function() {
    firebase
      .firestore()
      .collection("pages")
      .doc("first")
      .get()
      .then(doc => {
        console.log(doc.data());
        if (doc.data()) {
          this.content = doc.data();
          this.loading = false;
        }
      });
  }
};
export const actions = {};
