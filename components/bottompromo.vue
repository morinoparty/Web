<template>
  <section class="morinopromo">
    <div class="container">
      <div class="inner">
        <div>
          <h2>
            <span>
              もりのパーティで
              <strong>一緒に遊びませんか？</strong>
            </span>
          </h2>
        </div>
        <div>
          <p>
            <span>
              現在
              <strong>{{count}}</strong>クラフターが共同生活しています。
            </span>
            <br />
            <span>あなたもいますぐ参加しよう！</span>
          </p>
          <p>
            <span>
              バージョン :
              <strong>{{version}}</strong>
            </span>
          </p>
          <p>
            <span>
              IP :
              <strong>visit.morino.party</strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import vue from "vue";
import axios from "axios";

export default {
  data() {
    return {
      count: null,
      version: null
    };
  },
  async created() {
    const response = await axios.get(
      "https://api.mcsrvstat.us/2/visit.morino.party"
    );
    this.count = response.data.players.online;
    this.version = response.data.version;
  }
};
</script>