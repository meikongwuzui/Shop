<template>
  <div>
        <com-head></com-head>

        <div id="mainBody">
            <flexbox>
                <flexbox-item>
                    <div class="flex-demo">
                        <p>可充值金额</p>
                        <p>12341</p>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo">
                        <p>可下单金额</p>
                        <p>2342</p>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>

        <div style="height:10px;background:#fbf9fe"></div>

        <div style="height:44px;">
            <sticky  :check-sticky-support="false">
                <div style="height:45px;background:#fbf9fe">
                    <p class="contTitle">充值记录</p>
                </div>
            </sticky>
        </div>

        <div>
          <form-preview v-for="i in 10" :key="i" class="listItem" header-label="收入" header-value="¥2400.00" :body-items="list"></form-preview>
        </div>
  </div>
</template>

<script>
import { Flexbox, Sticky, FlexboxItem, FormPreview } from "vux";
import comHead from "../common/_head";

export default {
  components: {
    comHead,
    Flexbox,
    FlexboxItem,
    FormPreview,
    Sticky
  },
  data() {
    return {
      list: [
        {
          label: "单号",
          value: "2018012023221127849"
        },
        {
          label: "类型",
          value: "上级充值"
        },
        {
          label: "时间",
          value: "2017-12-12"
        }
      ]
    };
  }
};
</script>

<style scoped>
#mainBody {
  background: #eee;
  z-index: -3;
}
.flex-demo {
  text-align: center;
  color: #111;
  padding: 8px;
}
.listItem {
  margin: 10px 0;
}
.contTitle {
  background: #fff;
  line-height: 40px;
  padding-left: 15px;
}
</style>