<template>
  <div id="app">
    <transition
        @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
        :name="viewTransition" :css="!!direction">
          <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
import { Loading, TransferDom } from "vux";
import { mapState, mapActions } from "vuex";

export default {
  directives: {
    TransferDom
  },
  name: "app",
  
  beforeDestroy() {
    this.box && this.box.removeEventListener("scroll", this.handler, false);
  },
  watch: {
    path(path) {
        this.box && this.box.removeEventListener("scroll", this.handler, false);
    }
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      deviceready: state => state.app.deviceready,
      demoTop: state => state.vux.demoScrollTop,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    headerTransition() {
      if (!this.direction) return "";
      return this.direction === "forward"
        ? "vux-header-fade-in-right"
        : "vux-header-fade-in-left";
    },
    componentName() {
      if (this.route.path) {
        const parts = this.route.path.split("/");
        if (/component/.test(this.route.path) && parts[2]) return parts[2];
      }
    },
    title() {
      if (this.route.path === "/") return "Home";
    },
    viewTransition() {
      if (!this.direction) return "";
      return "vux-pop-" + (this.direction === "forward" ? "in" : "out");
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}

html,
body,
#app,
#app-box {
  height: 100%;
}

.router-view {
  width: 100%;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>


