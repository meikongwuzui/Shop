<template>
  <div>
    <swiper :list="imgList" :auto="true" :loop="true" :aspect-ratio="400/800"></swiper>

    <div style="padding:10px;margin-bottom:50px">
        <p>很长很长的一段文本很长很长的一段文本很长很长的一段文本很长</p>
        

        <flexbox justify="space-between">
            <flexbox-item>
                <p><span class="price">￥139</span>  <del>199</del> </p>
            </flexbox-item>
            <flexbox-item>
                <div class="btnRight">
                    <span>分享99次</span>
                </div>
            </flexbox-item>
        </flexbox>

        <flexbox justify="space-between">
            <flexbox-item class="tx">
                <span>假一赔十</span>
            </flexbox-item>
            <flexbox-item class="tx">
                <span>假一赔十</span>
            </flexbox-item>
        </flexbox>

        <group>
            <cell title="商品评价" value="查看全部" link="ProdList"></cell>
            <cell-box>
                感觉不错很好吃
            </cell-box>
            <cell-box>
                感觉不错很好吃
            </cell-box>
        </group>

        <div class="detailImg">
            <img v-for="i in 5" :key="i" src="https://static.vux.li/demo/3.jpg">
        </div>

    </div>
     
     <div class="tabbar">
        <flexbox justify="space-between" :gutter="0">
            <flexbox-item :span="2/12" style="background:#ffff;">
                <div>
                    <img src="https://static.vux.li/demo/3.jpg" alt="">
                </div> 
            </flexbox-item>
            <flexbox-item :span="2/12" style="background:#ffff;">
                <div>
                    <img src="https://static.vux.li/demo/3.jpg" alt="">
                </div> 
            </flexbox-item>
            <flexbox-item :span="4/12" style="background:rgb(255, 71, 71)">
                <div>直接购买</div> 
            </flexbox-item>
            <flexbox-item :span="4/12" style="background:red">
                <div>分享挣钱</div>
            </flexbox-item>
        </flexbox>
     </div>
  </div>
</template>


<script>
import { Swiper,Flexbox ,FlexboxItem,Group, Cell, CellBox } from "vux";
export default {
  components: {
    Swiper,Flexbox ,FlexboxItem,Group, Cell, CellBox
  },
  data() {
    return {
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
p{text-align: left;margin: 10px 0;font-size: 14px;color: #000;}
.price{color: red;font-size: 18px;padding-right: 10px;}
.btnRight{text-align: right}
.tx{text-align: center}
.detailImg img{width: 100%;}
.tabbar{position:fixed;bottom: 0;width:100%;height: 50px;}

.vux-flexbox .vux-flexbox-item div{color: #fff;width: 100%;height: 50px;text-align: center;line-height: 50px}
</style>