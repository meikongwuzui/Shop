<template>
  <div>
    <com-head></com-head>

    <div id="mainBody">
        <flexbox>
            <flexbox-item>
                <div class="flex-demo">
                    <p>348</p>
                    <p>零钱</p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <p>583</p>
                    <p>全部积分</p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <p>545</p>
                    <p>消费总额</p>
                </div>
            </flexbox-item>
        </flexbox>

        <div style="padding:10px; margin-top:10px;border-bottom:1px solid #eee">
            <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" alt="" width="20" height="20">
            <span>商城订单</span>
        </div>
        <flexbox>
            <flexbox-item >
                <router-link to="/MyRechargeRecord">
                    <div class="flex-demo">
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                        <p>代付款</p>
                    </div>
                </router-link>
            </flexbox-item>
            <flexbox-item>
                <router-link to="/LowerRecharge">
                    <div class="flex-demo">
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                        <p>待分享</p>
                    </div>
                </router-link>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                    <p>待发货</p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                    <p>待收货</p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                    <p>已完成</p>
                </div>
            </flexbox-item>
        </flexbox>

        <flexbox style="margin-top:10px;">
            <flexbox-item >
                <router-link to="/MyRechargeRecord">
                    <div class="flex-demo">
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                        <p>我的资产</p>
                    </div>
                </router-link>
            </flexbox-item>
            <flexbox-item>
                <router-link to="/LowerRecharge">
                    <div class="flex-demo">
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                        <p>我的特权</p>
                    </div>
                </router-link>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                    <p>退货/售后</p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" width="40" height="40" alt="">
                    <p>收货地址</p>
                </div>
            </flexbox-item>
        </flexbox>

        <panel  :list="list" type="3"></panel>

        <tabbar style="position: fixed">
            <tabbar-item link="Index">
                <img slot="icon" src="https://static.vux.li/demo/1.jpg">
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item >
                <img slot="icon" src="https://static.vux.li/demo/1.jpg">
                <span slot="label">线下体验店</span>
            </tabbar-item>
            <tabbar-item link="Cart">
                <img slot="icon" src="https://static.vux.li/demo/1.jpg">
                <span slot="label">购物车</span>
            </tabbar-item>
            <tabbar-item selected>
                <img slot="icon" src="https://static.vux.li/demo/1.jpg">
                <span slot="label">个人中心</span>
            </tabbar-item>
        </tabbar>
    </div>
  </div>

</template>

<script>
import { Flexbox, FlexboxItem, Grid, GridItem, Tabbar, TabbarItem ,Panel} from "vux";
import comHead from "../../common/_head";
export default {
  components: {
    comHead,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,Panel
  },
  data() {
    return {
        list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }]
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
#mainBody div {
  background: #fff;
}

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
