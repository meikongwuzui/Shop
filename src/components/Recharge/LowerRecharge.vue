<template>
  <div>
    <com-head></com-head>

    <group :gutter="10">
        <selector title="下级代理" :options="['请选择','工艺技术', '其他']" ></selector>
        <x-input type="number" title="金额"></x-input>
        <div style="padding:15px;">
            <x-button type="primary">确定充值</x-button>
        </div>
    </group>

    <group :gutter="10"></group>

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
import { Group, Selector,Sticky ,FormPreview,XButton,XInput } from 'vux'
import comHead from '../common/_head'
export default {
  components: {
    comHead,Group,Selector,Sticky ,FormPreview,XButton,XInput 
  },
  data() {
      return{
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
      }
  }
}
</script>

<style scoped>
.contTitle{background: #fff;line-height: 40px;padding-left: 15px;}
.listItem{margin: 10px 0;}
</style>


