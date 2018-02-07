<template>
  <div>
    <com-head></com-head>

    <div id="mainBody">
        <flexbox>
            <flexbox-item>
                <div class="flex-demo">
                    <p>348</p>
                    <p>我的盈利</p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <p>583</p>
                    <p>我的充值</p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <p>545</p>
                    <p>订货总量</p>
                </div>
            </flexbox-item>
        </flexbox>

        <group-title style="margin-bottom:0">预充值管理</group-title>
        <flexbox>
            <flexbox-item >
                <router-link to="/MyRechargeRecord">
                    <div class="flex-demo">
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                        <p>我的充值</p>
                    </div>
                </router-link>
            </flexbox-item>
            <flexbox-item>
                <router-link to="/LowerRecharge">
                    <div class="flex-demo">
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                        <p>下级充值</p>
                    </div>
                </router-link>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                    <p>我的盈利</p>
                </div>
            </flexbox-item>
        </flexbox>

        <group-title style="margin-bottom:0">授权管理</group-title>
        <flexbox>
            <flexbox-item >
                <router-link to="/AuthGenerate">
                    <div class="flex-demo">
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                        <p>授权生成</p>
                    </div>
                </router-link>
            </flexbox-item>
            <flexbox-item>
                <router-link to="/AuthExamine">
                    <div class="flex-demo">
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                        <p>下级审核</p>
                    </div>
                </router-link>
            </flexbox-item>
            <flexbox-item>
                <router-link to="/AuthGenerate">
                    <div class="flex-demo">
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                        <p>授权生成</p>
                    </div>
                </router-link>
            </flexbox-item>
        </flexbox>
    </div>
  </div>

</template>

<script>
import { Flexbox, FlexboxItem,  Grid, GridItem, GroupTitle } from "vux";
import comHead from '../common/_head'
export default {
  components: {
    comHead,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    GroupTitle
  },
  data() {
    return {
    };
  },
  methods: {
    onItemClick() {
      console.log("on item click");
    }
  }
};
</script>

<style scoped>
#mainBody {
  background: #eee;
  z-index: -3;
}
#mainBody div{background: #fff;}

.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.flex-demo {
  text-align: center;
  color: #111;
  padding: 8px;
}
</style>
