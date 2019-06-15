<template>
  <div id="app">
   <div class="title">
     <h1>如品汇购物车
     </h1>
    <nav>
       <router-link to="/index">首页</router-link>
       <router-link to="/ShppingCart">购物车<span>{{$store.getters.totuNum}}</span></router-link>
    </nav>
   </div>
  <router-view></router-view>
   <!-- <index></index> -->
  </div>
</template>

<script>
// import index from "./components/index"
// import ShppingCart from "./components/ShppingCart"

export default {
  name: 'app',
  components:{
    // index,
    // ShppingCart
  },
  
}
</script>

<style>
.title{
  width: 100%;
  height: 200px;
  background-color:chartreuse;
  display: flex;
  justify-content:center;
  align-content: center;
 position: relative;
}
.title h1{
  display: block;
  color: aliceblue;
  line-height: 200px;
}
.title nav{
position: absolute;
left:0;
bottom: 0
}
.title nav a{
  padding: 20px;
}
</style>
