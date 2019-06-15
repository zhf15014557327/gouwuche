import Vue from "vue";
import Vuex from "vuex"
// vue插件ues注册一下
Vue.use(Vuex);
// 创建一个store仓库

let store  = new Vuex.Store({
   state:{
    cartInfo:JSON.parse(window.localStorage.getItem('cartInfo')) || {}
   },
   mutations:{
    //    添加数据的方法
        addToCart(state,data){
            if(state.cartInfo[data.name]!= undefined){
                state.cartInfo[data.name].num++
            }else{
                // state.cartInfo[data.name] = data
                // 新添加的属性没有set,get属性Vue无法跟踪,需要经过Vue.set()添加get,set方法才能是实现数据的响应式
                Vue.set(state.cartInfo,data.name,data)
                Vue.set(state.cartInfo[data.name],"num",1)
              
            }
        },
        // 删除方法
        delet(state,data){
            console.log( data );
          Vue.delete(state.cartInfo,data.name)
        }
   },
 
   getters:{
        totuNum(state){
            let totaNum = 0; 
          for (const key in state.cartInfo) {
            totaNum += state.cartInfo[key].num
          }
            return totaNum
        }
   }
})

window.onbeforeunload = function(){
    window.localStorage.setItem('cartInfo',JSON.stringify(store.state.cartInfo));
}

export default store