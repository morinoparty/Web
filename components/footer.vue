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
        {
          label: "YouTubeチャンネル",
          path: "https://www.youtube.com/channel/UC5huN7nu_9RJKB-rPk8Z0hQ"
        },
        { label: "Twitter", path: "https://twitter.com/morinoparty" },
        { label: "Wiki", path: "https://wiki.morino.party" }
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