<template>
  <div>
    <swiper :list="imgList" :auto="true" :loop="true" :aspect-ratio="400/800"></swiper>

    <div style="padding:10px;">
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
    </div>

    <div class="twtitle">
        <h6>图文详情</h6>
    </div>
    <div class="detailImg" style="margin-bottom:50px">
        <img v-for="i in 5" :key="i" src="https://static.vux.li/demo/3.jpg">
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
            <flexbox-item :span="4/12" style="background:rgb(255, 71, 71)" @click.native="show=!show">
                <div>直接购买</div> 
            </flexbox-item>
            <flexbox-item :span="4/12" style="background:red">
                <div>分享挣钱</div>
            </flexbox-item>
        </flexbox>
     </div>

    <!-- 弹出层 -->
    <popup v-model="show">
    <div class="popupDiv">
        <img class="logo" src="https://static.vux.li/demo/1.jpg" >
        <div class="title">
            <span>ssss</span>
            <icon type="cancel"></icon>
        </div>
        <div>
            <h4>规格</h4>
            <checker
            v-model="demo4"
            default-item-class="demo4-item"
            selected-item-class="demo4-item-selected">
                <checker-item value="花跟叶" > 花跟叶 </checker-item>
                <checker-item value="鸟与树" > 鸟与树 </checker-item>
                <checker-item value="我和你"> 我和你  </checker-item>
                <checker-item value="全套礼品装" >  全套礼品装</checker-item>
            </checker>
        </div>
       
        <div>
            <group>
            <cell title="数量">
                <inline-x-number style="display:block;" :min="0" width="50px" ></inline-x-number>
            </cell>
            </group>
        </div>
    </div>

    <div>
        <flexbox justify="space-between" :gutter="0">
            <flexbox-item :span="6/12" style="background:rgba(254,157,96,0.3)">
                <div @click="addcart">加入购物车</div> 
            </flexbox-item>
            <flexbox-item :span="6/12" style="background:red">
                <div @click="buynow">立即购买</div>
            </flexbox-item>
        </flexbox>
    </div>
    </popup>

  </div>
</template>


<script>
import { Swiper,Flexbox ,FlexboxItem, CellBox ,Popup,Checker, CheckerItem,Group, Cell, InlineXNumber,Icon,Toast  } from "vux";
export default {
  components: {
    Swiper,Flexbox ,FlexboxItem, CellBox ,Popup ,Checker, CheckerItem,Group, Cell, InlineXNumber ,Icon ,Toast 
  },
  data() {
    return {
      show:false,
      demo4:'花跟叶',
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
  methods: {
      addcart:function(){
          this.$vux.toast.show({
            text: '加入购物车成功',
            time:'1000'
          });
          this.show=false;
      },
      buynow:function(){
          this.$router.push("ConfirmOrder")
      }
  }
};
</script>

<style scoped>
p{text-align: left;margin: 10px 0;font-size: 14px;color: #000;}
.price{color: red;font-size: 18px;padding-right: 10px;}
.btnRight{text-align: right}
.tx{text-align: center}
.detailImg img{width: 100%;display: block;}
.tabbar{position:fixed;bottom: 0;width:100%;height: 50px;}

.vux-flexbox .vux-flexbox-item div{color: #fff;width: 100%;height: 50px;text-align: center;line-height: 50px}
.twtitle{background: #fff;padding: 10px 0 10px 10px}

.popupDiv{background:#fff;padding-left: 20px}
img.logo{width: 100px;height: 100px;border-radius: 10px;position: absolute;top: -30px;left: 30px;}
.title{padding-left: 130px;padding-top: 20px;height: 60px;}

.vux-popup-dialog{overflow: inherit}


.demo4-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 5px 10px;
  margin-right: 10px;
  line-height: 18px;
  border-radius: 5px;
}
.demo4-item-selected {
  background-color: #FF3B3B;
  color: #fff;
}
</style>