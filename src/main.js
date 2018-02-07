import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import { sync } from 'vuex-router-sync'
import { DatetimePlugin, ConfigPlugin, BusPlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin } from 'vux'

Vue.use(VueRouter)
Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
  }
})

Vue.use(store)

store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateDemoPosition(state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection(state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
    updateDemoPosition({ commit }, top) {
      commit({ type: 'updateDemoPosition', top: top })
    }
  }
})

Vue.use(store)

// global VUX config
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})

// plugins
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(BusPlugin)
Vue.use(DatetimePlugin)

const routes = [
  {
    path: '/',
    component: () => import('./components/Cus/Login')
  },
  {
    path: '/Login',
    component: () => import('./components/Cus/Login')
  },
  {
    path: '/Index',
    component: () => import('./components/Cus/Index')
  },
  {
    path: '/MyRechargeRecord',
    component: () => import('./components/Recharge/MyRechargeRecord')
  },
  {
    path: '/LowerRecharge',
    component: () => import('./components/Recharge/LowerRecharge')
  },
  {
    path: '/AuthGenerate',
    component: () => import('./components/Auth/Generate')
  },
  {
    path: '/AuthExamine',
    component: () => import('./components/Auth/Examine')
  }
]

const router = new VueRouter({
  routes
})

sync(store, router)

FastClick.attach(document.body)

Vue.config.productionTip = false

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', { isLoading: true })

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', { direction: 'forward' })
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', { direction: '' })
      } else {
        store.commit('updateDirection', { direction: 'reverse' })
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', { direction: 'forward' })
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach(function (to) {
  isPush = false
  store.commit('updateLoadingStatus', { isLoading: false })
})

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
