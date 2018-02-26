<template>
  <div>
    <x-header :left-options="{backText: ''}" title="购物车"><a slot="right">编辑</a></x-header>
    <checker v-model="demo3" :max="999" default-item-class="demo3-item" selected-item-class="demo3-item-selected">
      <checker-item value="three">
            <flexbox justify="space-between" :gutter="0" class="prodItem">
                <flexbox-item :span="1/12">
                  <div>
                      <check-icon :value.sync="a"></check-icon>
                  </div>
              </flexbox-item>
              <flexbox-item :span="3/12">
                    <img class="prodImg" src="http://placeholder.qiniudn.com/80x50/FFEF7D/ffffff" alt="">    
              </flexbox-item>
              <flexbox-item :span="8/12">
                  <div>
                      <h5>面霜</h5>
                      <span>￥ 112</span>
                      <span style="float:right">x8</span>
                  </div>
              </flexbox-item>
          </flexbox>
        
      </checker-item>
    </checker>
    <div class="tabbar">
      <flexbox justify="space-between" :gutter="0">
          <flexbox-item :span="2/12" @click.native="show=!show" class="barItem">
              <check-icon :value.sync="a" style="line-height:50px;"></check-icon>
          </flexbox-item>
          <flexbox-item :span="6/12" >
              <div>合计 ￥ 111</div> 
          </flexbox-item>
          <flexbox-item :span="4/12" style="background:red;height:50px;line-height:50px;text-align:center">
              结算
          </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import {
  XHeader,
  Flexbox,
  FlexboxItem,
  Checker,
  CheckerItem,
  CheckIcon
} from "vux";
export default {
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    Checker,
    CheckerItem,
    CheckIcon
  },
  data() {
    return {
      a: false,
      show: false,
      demo3: "one",
      imgList: [
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/1.jpg"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/2.jpg"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/3.jpg"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.vux-checker-item {
  display: block;
}
.prodItem {
  height: 100px;
}
.prodImg {
  width: 80px;
  height: 80px;
}
.tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #fff;
}
.barItem {
  height: 50px;
}
</style>
