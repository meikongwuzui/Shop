<template>
  <div class="prodItem">
    <img src="https://static.vux.li/demo/1.jpg" width="50%">
    <p>很长很长的一段文本很长很长的一段文本很长很长的一段文本很长</p>
    <flexbox justify="space-between">
      <flexbox-item><span>￥139 分享200次</span></flexbox-item>
      <flexbox-item>
          <div class="btnRight">
              <x-button type="warn" mini="true" link="ProdDetail">分享挣33</x-button>
          </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, XButton } from "vux";
export default {
  components: {
    Flexbox,
    FlexboxItem,
    XButton
  },
  data() {
    return {};
  },
  methods: {}
};
</script>


<style scoped>
.prodItem {
  background: #fff;
  text-align: center;
  padding: 20px;
}
p {
  text-align: left;
  margin: 10px 0;
}
.btnRight {
  text-align: right;
}
</style>
