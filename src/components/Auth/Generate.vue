<template>
  <div>
    <com-head></com-head>

    <div v-transfer-dom>
      <popup v-model="show" position="top" is-transparent="true">
        <div  class="win-user-login">
          <icon type="cancel" class="close" @click.native="close()"></icon>
          <div class="itemCenter">
            <h5>分享授权链接</h5>
            <select id="FKGradeID" name="FKGradeID">
                <option value="-1">选择代理授权级别</option>
                    <option value="9">分公司</option>
                    <option value="13">联合创始人</option>
                    <option value="17">执行董事</option>
                    <option value="21">代理</option>
            </select>
            <select id="IsMultiplexing" name="IsMultiplexing">
                <option value="2">单人注册</option>
                <option value="1">多人注册</option>
            </select>
            <select id="AuthorizeDay" name="AuthorizeDay">
                <option value="1">有效期：1天</option>
                <option value="7">有效期：7天</option>
                <option value="30">有效期：1月</option>
                <option value="365">有效期：1年</option>
            </select>
            <x-button type="primary">确认</x-button>
          </div>
        </div>
      </popup>
    </div>

    <group style="margin:0 20px;">
      <cell title="分享" style="border:1px solid #eee;" is-link @click.native="open()">
        <img slot="icon" width="40" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
    </group>

    <group style="margin:0 20px;">
      <cell title="分享" style="border:1px solid #eee;" is-link  @click.native="open()">
        <img slot="icon" width="40" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
    </group>

    <group style="margin:0 20px;">
      <cell title="分享" style="border:1px solid #eee;" is-link  @click.native="open()">
        <img slot="icon" width="40" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
    </group>

  </div>
</template>

<script>
import comHead from "../common/_head";
import { Group, Cell, TransferDom, Popup, XButton,Icon } from "vux";
import { fail } from "assert";
export default {
  directives: {
    TransferDom
  },
  components: {
    comHead,
    Group,
    Cell,
    TransferDom,
    Popup,
    XButton,
    Icon
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    }
  }
};
</script>


<style scoped>
.win-user-login {
  position: relative;
  background: #fff;
  width: 80%;
  margin: auto;
  margin-top: 30%;
  border: 1px #ccc solid;
  border-radius: 5px;
  text-align: center;
}
.itemCenter {
  width: 80%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
select {
  display: block;
  margin: auto;
  font-size: 14px;
  height: auto;
  margin-top: 1px;
  border: 1px solid #e6e6e6 !important;
  background-color: #fff;
  line-height: 21px;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px 15px;
  border-radius: 3px;
  outline: 0;
}
h5{
  margin: 20px 0;
}
.close{
  position:absolute;
  right: -16px;
  top: -13px;
}
</style>
