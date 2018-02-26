<template>
  <div>
    <x-header :left-options="{backText: ''}" title="确认订单"></x-header>
    <group gutter="0" >
      <cell title="ddd" link="/component/radio" inline-desc='eee'></cell>
    </group>
    <group >
      <cell title="订单编号：3242523" ></cell>
      <cell-box>
          <flexbox justify="space-between" :gutter="0" class="prodItem">
                <flexbox-item :span="4/12">
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
      </cell-box>
      <selector title="配送方式" placeholder="Placeholder" :options="['包邮']" v-model="value7"></selector>
      <popup-picker title="提货网点" :data="[['包邮']]" v-model="value5" value-text-align="left"></popup-picker>
      <x-textarea title="买家留言" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
      <cell value="共1件 合计 ￥ 20" ></cell>
    </group>
    <group style="padding-bottom:60px;" >
      <cell title="商品金额" >
          <div>
            <span style="color: red">￥ 20</span>
          </div>
      </cell>
      <cell title="优惠" >
          <div>
            <span style="color: red">￥ 20</span>
          </div>
      </cell>
      <cell title="运费">
          <div>
            <span style="color: red">￥ 20</span>
          </div>
      </cell>
    </group>

    <div class="tabbar">
        <flexbox justify="space-between" :gutter="0">
            <flexbox-item :span="2/12" >
            </flexbox-item>
            <flexbox-item :span="6/12" >
                <div>共1件 合计 ￥ 111</div> 
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
  Group,
  Cell,
  CellBox,
  Selector,
  PopupPicker,
  XTextarea,
  Flexbox,
  FlexboxItem
} from "vux";
export default {
  components: {
    XHeader,
    Group,
    Cell,
    CellBox,
    Selector,
    PopupPicker,
    XTextarea,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.weui-cells {
  margin-top: 0;
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
