<template>
  <div id="loginDiv">
      <form>
      <div id="loginForm">
        <group>
            <x-input title="手机号码" mask="999 9999 9999" :max="13" is-type="china-mobile" placeholder="请输入手机号码">
                <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
            </x-input>
        </group>

        <group>
            <x-input title="密码" type="password" placeholder="请输入密码">
                <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
            </x-input>
        </group>

        <group>
        <x-button :text="submit001" :disabled="disable001" @click.native="processButton001" type="primary"></x-button>
        </group>

      </div>
      </form>

      <div v-transfer-dom>
      <popup v-model="show10" position="top" :show-mask="false">
        <div class="position-vertical-demo">
        账号或者密码错误，请重新输入！
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import {TransferDom, XButton, XInput, Group ,Popup,AjaxPlugin } from "vux";

import Vue from 'vue'
Vue.use(AjaxPlugin)
Vue.use(Popup)

export default {
  directives: {
    TransferDom
  },
  components: {
    XButton,
    XInput,
    Group,
    Popup
  },
  data() {
    return {
      submit001: "登陆",
      disable001: false,
      show10: false,
    };
  },
  watch: {
    show10 (val) {
      if (val) {
        setTimeout(() => {
          this.show10 = false
        }, 1000)
      }
    }
  },
  methods: {
    processButton001() {
      this.submit001 = "请求中...";
      this.disable001 = true;
      
        this.$http.get('/src/assets/js/value.js').then(response => {
            // get body data
            if(response.data.status){
              this.$router.push('Index');
            }else{
              this.disable001 = false;
              this.submit001 = '登陆';
              this.show10=true;
            }
          }, response => {
            // error callback
            this.disable001 = false;
            this.submit001 = '登陆';
            this.show10=true;
          });
        
    }
  }
};
</script>

<style scoped>
#loginDiv {
  position: relative;
  overflow: hidden;
  height: 100%;
  background: url("../../assets/img/bg.png");
  background-size: cover;
}
#loginForm {
  background: #f5f2f2f5;
  width: 60%;
  margin: auto;
  margin-top: 50%;
  padding: 10px;
  text-align: center;
}
.position-vertical-demo {
  background-color: #ffe26d;
  color: #000;
  text-align: center;
  padding: 15px;
}
</style>

