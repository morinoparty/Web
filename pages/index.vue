<template>
  <div>
    <header>
      <playingcounter />
      <div class="title">
        <img src="/assets/title.svg" alt />
        <img src="/assets/subtitle.svg" alt />
      </div>
      <div class="arrow">
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="bg_color"></div>
      <div class="bg"></div>
    </header>
    <nav id="page_nav" class="global d-flex justify-content-center top">
      <div class="d-flex justify-content-start scl">
        <a href="http://morino.party">
          <div class="li">ホーム</div>
        </a>
        <a href="https://morino.party/first/">
          <div class="li">はじめての方へ！</div>
        </a>
        <a href="https://morino.party/command/">
          <div class="li">コマンド</div>
        </a>
        <a href="https://morino.party/protect/">
          <div class="li">土地の保護</div>
        </a>
        <a href="https://morino.party/createshop/">
          <div class="li">お金関連</div>
        </a>
        <a href="https://morino.party/fishing/">
          <div class="li">釣り大会</div>
        </a>
        <a href="https://morino.party/forstreamers/">
          <div class="li">配信者向け</div>
        </a>
        <a href="https://morino.party/vote/">
          <div class="li">投票ボーナス</div>
        </a>
        <a href="https://morino.party/donate/">
          <div class="li">寄付</div>
        </a>
        <a href="https://morino.party/discord/">
          <div class="li">Discord</div>
        </a>
        <a href="https://morino.party/team/">
          <div class="li">運営チーム</div>
        </a>
        <a href="https://morino.party/status/">
          <div class="li">Server Status</div>
        </a>
      </div>
    </nav>
    <section class="about">
      <div class="content">
        <div class="container">
          <h2>
            <img src="/assets/section_1_1.svg" class="svgtitle" alt />
            <img src="/assets/section_1_2.svg" class="svgtitle" alt />
          </h2>
          <p>ふと、日常から離れて目の前の現実から離れる、そんな瞬間が、このサーバーに。</p>
        </div>
      </div>
      <div class="image" style="background-image: url(/assets/background_ap_2.webp);"></div>
    </section>
    <section class="about">
      <div class="content">
        <div class="container">
          <h2>
            <img src="/assets/section_about_2_1.svg" class="svgtitle" alt />
            <img src="/assets/section_about_2_2.svg" class="svgtitle" alt />
          </h2>
          <p>メインマップは純粋な1.14のマップ。その広大な世界を開拓するのはあなたです。</p>
        </div>
      </div>
      <div class="image" style="background-image: url(/assets/background_ap_1.webp);"></div>
    </section>
    <section class="about">
      <div class="content">
        <div class="container">
          <h2>
            <img src="/assets/section_about_3_1.svg" class="svgtitle" alt />
            <img src="/assets/section_about_3_2.svg" class="svgtitle" alt />
          </h2>
          <p>YouTubeで活躍中のいろんなクラフターとコラボなど、様々なイベントを開催予定です！</p>
        </div>
      </div>
      <div class="image" style="background-image: url(/assets/background_ap_3.webp);"></div>
    </section>
    <section id="rules">
      <div class="container">
        <h2>
          <img src="/assets/section_2_1.svg" class="svgtitle" alt />
        </h2>
        <div class="thisisrule">
          <img src="/assets/section_2_rule.svg" alt />
        </div>
        <p>すべてはみんなが楽しめるように。ご協力ください！</p>
      </div>
    </section>
    <section id="first" class="dark" style="background-color: #58c8ec">
      <div class="container">
        <h2>
          <img src="/assets/section_fornoob_1.svg" class="svgtitle" alt />
        </h2>
        <p style="margin-bottom: 50px">
          参加する際に「必須」な参加条件や、絶対にやらなければいけないことを説明しています！
          <strong>絶対</strong>確認してください！
        </p>
        <a style="color: #58c8ec" class="btn btn-light btn-lg" href="/first" role="button">いますぐ確認</a>
      </div>
    </section>
    <section id="links" class="dark">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="content" style="background-color: #7289DA">
              <div class="container">
                <h2>
                  <img src="/assets/section_link_discord.svg" class="svgtitle" alt />
                </h2>
                <p style="margin-bottom: 25px">参加することで、アップデート情報やサーバー内チャットをどこでも閲覧できます！</p>
                <a
                  style="color: #7289DA"
                  class="btn btn-light btn-lg"
                  href="https://discord.gg/9HdanPM"
                  role="button"
                >
                  <svg
                    class="svg-inline--fa fa-discord fa-w-14"
                    aria-hidden="true"
                    data-prefix="fab"
                    data-icon="discord"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"
                    />
                  </svg>
                  <!-- <i class="fab fa-discord"></i> -->
                  いますぐ確認
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="content" style="background-color: #FF8DAD">
              <div class="container">
                <h2>
                  <img src="/assets/section_link_command.svg" class="svgtitle" alt />
                </h2>
                <p style="margin-bottom: 25px">サーバー内で使える最強で便利なコマンドをご紹介！</p>
                <a
                  style="color: #FF8DAD"
                  class="btn btn-light btn-lg"
                  href="/command"
                  role="button"
                >
                  <svg
                    class="svg-inline--fa fa-magic fa-w-16"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="magic"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"
                    />
                  </svg>
                  いますぐ確認
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="content" style="background-color: #428BCA">
              <div class="container">
                <h2>
                  <img src="/assets/section_link_vote.svg" class="svgtitle" alt />
                </h2>
                <p style="margin-bottom: 25px">サーバーに投票すると、とってもいいことがあります！</p>
                <a style="color: #428BCA" class="btn btn-light btn-lg" href="/vote" role="button">
                  <svg
                    class="svg-inline--fa fa-vote-yea fa-w-20"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="vote-yea"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M608 320h-64v64h22.4c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8H96v-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm-96 64V64.3c0-17.9-14.5-32.3-32.3-32.3H160.4C142.5 32 128 46.5 128 64.3V384h384zM211.2 202l25.5-25.3c4.2-4.2 11-4.2 15.2.1l41.3 41.6 95.2-94.4c4.2-4.2 11-4.2 15.2.1l25.3 25.5c4.2 4.2 4.2 11-.1 15.2L300.5 292c-4.2 4.2-11 4.2-15.2-.1l-74.1-74.7c-4.3-4.2-4.2-11 0-15.2z"
                    />
                  </svg>
                  <!-- <i class="fas fa-vote-yea"></i> -->
                  いますぐ確認
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="content" style="background-color: #FFAF62">
              <div class="container">
                <h2>
                  <img src="/assets/section_link_forstreamer.svg" class="svgtitle" alt />
                </h2>
                <p style="margin-bottom: 25px">配信者の方に知ってほしい、このサーバーでできること！</p>
                <a
                  style="color: #FFAF62"
                  class="btn btn-light btn-lg"
                  href="/forstreamers"
                  role="button"
                >
                  <svg
                    class="svg-inline--fa fa-youtube fa-w-18"
                    aria-hidden="true"
                    data-prefix="fab"
                    data-icon="youtube"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    />
                  </svg>
                  <!-- <i class="fab fa-youtube"></i> -->
                  いますぐ確認
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <playingcounterbottom />
    <MoriFooter />
  </div>
</template>

<script>
import MoriFooter from "~/components/footer.vue";
import playingcounter from "~/components/playingcounter.vue";
import playingcounterbottom from "~/components/section#now.vue";

export default {
  components: {
    MoriFooter,
    playingcounter,
    playingcounterbottom
  }
};
</script>