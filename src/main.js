import Vue from 'vue'
import App from './App.vue'
// 导入element-ui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// // 注册一下
// Vue.use(ElementUI);
// 导入全局样式
import "./assets/style.css"
// 导入路由
import router from "./lib/vue-router"
// 导入仓库
import store from "./lib/store"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
