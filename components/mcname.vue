<template>
  <div class="username">{{ mcname }}</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      mcname: null
    };
  },
  async created() {
    const response = await axios.get(
      "https://api.minetools.eu/uuid/" + this.$parent.minecraft.mcuuid
    );
    console.log(response.data.name);
    this.mcname = response.data.name;
  }
};
</script>