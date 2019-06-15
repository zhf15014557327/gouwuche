<template>
  <div class="index">
    <ul >
      <li v-for="item in shppingList"  @click="add2cart(item)">
      <img :src="item.url" alt="">
        <p>
          价格:
          <span>${{item.pic}}</span>
        </p>
        <p>商品名:
            <span>{{item.name}}</span>
        </p>
      
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
      return {
          shppingList:[
              {
                 url: require("../assets/img/01.jpg") ,
                 name:"海边日出图",
                 pic:1000,

              },
              {
                 url: require("../assets/img/02.jpg") ,
                 name:"天使下凡",
                 pic:1500,

              },
              {
                 url: require("../assets/img/03.jpg") ,
                 name:"紫色宇宙图",
                 pic:2000,

              },
              {
                 url: require("../assets/img/04.jpg") ,
                 name:"双鱼戏水图",
                 pic:3000,
              },
         
          ]
      }
  },
  methods: {
      add2cart(data){
          this.$store.commit('addToCart',data)
      }
  },
};
</script>
<style>
.index ul{
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}
.index ul li {
    padding:10px;
    border: 1px solid #000;
    margin: 20px 20px;

}
.index ul li img{

width: 200px;
height: 100px;
}
</style>

