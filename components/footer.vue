<template>
  <footer>
    <div class="container">
      <div
        class="description"
      >Minecraft copyrights of Mojang AB. and this site is not affiliated with Mojang AB.</div>
      <div class="description">
        もりのパーティは、有志で運営されている日本のMinecraftサーバーです。
        <br />内容は、古いものが含まれる場合があります。詳細については、Discordを確認してください。
      </div>
      <div class="d-flex flex-wrap justify-content-between align-self-center bottom">
        <div class="link">
          <component
            v-for="(link, i) in links"
            :key="`bad-sample_${i}`"
            :is="isInternalLink(link.path) ? 'nuxt-link' : 'a'"
            :to="isInternalLink(link.path) ? link.path : ''"
            :href="isInternalLink(link.path) ? '' : link.path"
          >{{ link.label }}</component>
        </div>
        <div class="copy">©︎ もりのパーティ</div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { label: "はじめての方へ!", path: "/first" },
        { label: "コマンド", path: "/command" },
        { label: "保護のかけ方", path: "/protect" },
        { label: "お金関連", path: "/createshop" },
        { label: "釣り大会", path: "/fishing" },
        { label: "配信者向け", path: "/forstreamers" },
        { label: "投票ボーナス", path: "/vote" },
        { label: "寄付", path: "/donate" },
        { label: "discord", path: "/discord" },
        { label: "運営チーム", path: "/team" },
        { label: "Status", path: "/status" },
        { label: "ログイン", path: "/account" }
      ]
    };
  },
  methods: {
    isInternalLink(path) {
      return !/^https?:\/\//.test(path);
    }
  }
};
</script>