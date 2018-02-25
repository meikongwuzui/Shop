<template>
  <div>
    <search :auto-fixed="false"></search>
        
    <swiper :list="barnerList" :auto="true" :loop="true" :aspect-ratio="300/800"></swiper>

    <grid :cols="4">
        <grid-item :label="item.title" :link="item.url" v-for="(item,index) in navigateList" :key="index">
            <img slot="icon" :src="item.img" width="50" height="50">
        </grid-item>
    </grid>

    <img class="ad" src="https://static.vux.li/demo/1.jpg">

    <div class="prodList">
        <prodItem class="prodItem" v-for="i in 9" :key="i" ></prodItem>

        <load-more :show-loading="false" tip="再拉也没有了" background-color="#fff" color="#fff"></load-more>
    </div>

    

  </div>
</template>


<script>
import { Search, Swiper,Grid, GridItem ,LoadMore  } from "vux";
import prodItem from '../common/Prod/_prodItem'
export default {
  components: {
    Search,
    Swiper,
    Grid,
    GridItem,
    prodItem,
    LoadMore  
  },
  data() {
    return {
      barnerList: [
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/1.jpg",
          title: "送你一朵fua"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/2.jpg",
          title: "送你一辆车"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/5.jpg",
          title: "送你一次旅行",
          fallbackImg: "https://static.vux.li/demo/3.jpg"
        }
      ],
      navigateList:[
        {
          url: "ProdList",
          img: "https://static.vux.li/demo/1.jpg",
          title: "现金签到"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/1.jpg",
          title: "转盘领现金"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/1.jpg",
          title: "助力享免单"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/1.jpg",
          title: "团购拼单"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/1.jpg",
          title: "面部护理"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/1.jpg",
          title: "身体护理"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/1.jpg",
          title: "女士香水"
        },
        {
          url: "ProdList",
          img: "https://static.vux.li/demo/1.jpg",
          title: "更多分类"
        },
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.ad{width: 100%;height: 120px;margin: 20px 0;}
.prodList{background: #de192d;padding:20px;}
.prodItem{margin-top:20px;}
.prodItem:first-child{margin-top:0;}

.weui-search-bar {
  background-color: #de192d !important;
}
.weui-loadmore_line .weui-loadmore__tips{color: #fff!important;}
</style>