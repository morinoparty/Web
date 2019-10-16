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
  asyncData () {
    const response = axios.get('https://api.mcsrvstat.us/2/visit.morino.party')
      .then((res) => {
        return { info: res.data.players.online }
      })
  }
}
</script>
