<template>
  <div>
    <blur :blur-amount="40" :url="url" :height="150" >
        <p class="center">
          <img :src="url" />
          <span>管理员</span>
        </p>
    </blur>
  </div>
</template>

<script>
import { Blur } from "vux";

export default {
  components: {
    Blur
  },
  data() {
    return {
      url: "https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg"
    };
  }
};
</script>

<style scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #ececec;
}
.center span {
  display: block;
  text-align: center;
  padding-top: 2px;
  color: #fff;
  font-size: 18px;
}
</style>