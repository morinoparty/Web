<template>
  <section id="now">
    <div class="content">
      <div class="container">
        <h2>
          <img src="/assets/section_now_title.svg" class="svgtitle" alt />
        </h2>
        <div class="row">
          <div class="col-md-6">
            <div class="status">
              現在
              <span>{{count}}</span>クラフター 参加中！
              <br />バージョン :
              <span>{{version}}</span>
              <br />IP :
              <span>visit.morino.party</span>
              <br />
            </div>
          </div>

          <div class="col-md-6">
            <figure class="user">
              <h3>オンラインのユーザー</h3>
              <br />
              <img
                v-for="playermain in playermain"
                :key="playermain"
                class="head"
                :src="'https://minotar.net/cube/'+playermain+'/100.png'"
                alt
              />
              <img
                v-for="playerres in playerres"
                :key="playerres"
                class="head"
                :src="'https://minotar.net/cube/'+playerres+'/100.png'"
                alt
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="bg_color"></div>
    <div class="bg"></div>
  </section>
</template>

<script>
import vue from "vue";
import axios from "axios";

export default {
  data() {
    return {
      count: null,
      playermain: {},
      playerres: {},
      version: null
    };
  },
  async created() {
    const response = await axios.get(
      "https://api.mcsrvstat.us/2/visit.morino.party"
    );
    this.count = response.data.players.online;

    this.version = response.data.version;

    const main = await axios.get(
      "https://api.mcsrvstat.us/2/main3.srv.morino.party"
    );
    this.playermain = main.data.players.list;
    console.log(this.playermain);
    const res = await axios.get(
      "https://api.mcsrvstat.us/2/res2.srv.morino.party"
    );
    this.playerres = res.data.players.list;
    console.log(this.playerres);
  }
};
</script>
