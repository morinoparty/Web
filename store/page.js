import { firestoreAction } from "vuexfire";
import firebase from "@/plugins/firebase";

const db = firebase.firestore();
const pages = db.collection("pages");

export const state = () => ({
  pages: []
});

export const actions = {
  initStore: firestoreAction(({ bindFirestoreRef }, payload) => {
    bindFirestoreRef(
      "pages",
      pages.collection("pages"),
      pages.doc(payload.page)
    );
  })
};
