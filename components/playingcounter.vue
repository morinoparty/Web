<template>
  <div class="counter">
    <h3>
      <span>{{info}}</span>
      <br />人
    </h3>
    <p>参加中！</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
        info: null
    }
  },
  async created() {
    const response = await axios.get('https://api.mcsrvstat.us/2/visit.morino.party')
   console.log(response.data.players.online)
    this.info = response.data.players.online
  }
};
</script>
