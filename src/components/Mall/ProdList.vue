<template>
  <div>
    <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
        <tab style="width:500px;">
            <tab-item selected >精华</tab-item>
            <tab-item>防晒</tab-item>
            <tab-item>爽肤水</tab-item>
            <tab-item>洁面</tab-item>
            <tab-item>面膜</tab-item>
            <tab-item>面霜</tab-item>
            <tab-item>防晒</tab-item>
            <tab-item>爽肤水</tab-item>
            <tab-item>洁面</tab-item>
            <tab-item>面膜</tab-item>
            <tab-item>面霜</tab-item>
        </tab>
    </div>

    <div class="divsearch">
        <search :auto-fixed="false"></search>
    </div>

    <grid :cols="2">
        <grid-item v-for="i in 8" :key="i">
            <prodItem2></prodItem2>
        </grid-item>
    </grid>
    
  </div>
</template>


<script>
import { Search,Tab, TabItem , Grid, GridItem } from "vux";
import prodItem2 from '../common/Prod/_prodItem2'
export default {
  components: {
    Search, Tab, TabItem, Grid, GridItem,prodItem2
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
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>

</style>

