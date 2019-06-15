import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 导入组件
import index from "../components/index.vue"
import ShppingCart from "../components/ShppingCart.vue"
// 创建路由
let router = new VueRouter({
    // 路由规则
    routes:[
        {
            path:"/",
            component:index
        },
        {
            path:"/index",
            component:index
        },
        {
            path:"/ShppingCart",
            component:ShppingCart
        }
    ]
    
})
export default router