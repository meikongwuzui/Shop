<template>
  <div>
      <sticky  :check-sticky-support="false">
            <tab :animate="false" v-model="index">
                <tab-item active-class="ired" :badge-label="pending" selected @click.native="change('v-a')">待审核</tab-item>
                <tab-item @click.native="change('v-b')">已审核(2)</tab-item>
                <tab-item active-class="iblack" @click.native="change('v-c')">黑名单(3)</tab-item>
            </tab>
            <div>
                <transition name="component-fade" mode="out-in">
                    <!-- <div class="cont-item" :key="1" :class="{'cont-item-active': index===0}">dd</div>
                    <div class="cont-item" :key="2" :class="{'cont-item-active': index===1}">ee</div>
                    <div class="cont-item" :key="3" :class="{'cont-item-active': index===2}">ff</div> -->
                    <component v-bind:is="view"></component>
                </transition>
            </div>
        </sticky>
  </div>
</template>

<script>
import { Sticky, Tab, TabItem } from "vux";
export default {
  components: {
    Sticky,
    Tab,
    TabItem,
    "v-a": {
      template: "<div>Component A</div>"
    },
    "v-b": {
      template: "<div>Component B</div>"
    },
    "v-c": {
      template: "<div>Component c</div>"
    }
  },
  data() {
    return {
      index: 0,
      pending: "4",
      view: "v-a"
    };
  },
  methods: {
    change(v) {
      this.view = v;
    }
  }
};
</script>

<style scoped>
.ired {
  color: rgb(218, 16, 43) !important;
  border-color: rgb(218, 16, 43) !important;
}
.iblack {
  color: rgb(20, 19, 19) !important;
  border-color: rgb(20, 19, 19) !important;
}
.cont-item {
  display: none;
}
.cont-item-active {
  display: block;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>

