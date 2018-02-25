<template>
  <div class="prodItem">
      <img src="https://static.vux.li/demo/1.jpg" width="100%">
      <p>很长很长的一段文本很长很长的一段文本很长很长的一段文本很长</p>
      
      <p><span>￥139</span>  <del>199</del> </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {}
};
</script>


<style scoped>
.prodItem{background: #fff;text-align: center;padding: 10px;}
p{text-align: left;margin: 10px 0;font-size: 14px;color: #000;}
span{color: red;font-size: 18px;padding-right: 10px;}
</style>
