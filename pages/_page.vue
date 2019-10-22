<template>
  <div>
    <navbar type="post"></navbar>
    <header class="sm">
      <div class="post_info">
        <div class="container">
          <h1 v-html="title"></h1>
        </div>
      </div>
      <div class="bg_color"></div>
      <div class="bg"></div>
    </header>
    <article>
      <div class="post">
        <div class="container" v-html="content"></div>
      </div>
    </article>
    <bottompromo />
    <MoriFooter />
  </div>
</template>

<script>
import navbar from "~/components/navbar.vue";
import MoriFooter from "~/components/footer.vue";
import bottompromo from "~/components/bottompromo.vue";
import axios from "axios";

export default {
  components: {
    navbar,
    MoriFooter,
    bottompromo
  },
  data() {
    return {
      content: null,
      title: null
    };
  },
  async created() {
    const response = await axios.get(
      `https://morino.party/wp-json/wp/v2/pages?slug=${this.$route.path}`
    );

    console.log(response);
    this.content = response.data[0].content.rendered;
    this.title = response.data[0].title.rendered;
  }
};
</script>