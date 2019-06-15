<template>
    <div class="shpping-conten">
        <h1>购物车</h1>
        <template>
  <el-table
    :data="shppingList"
    style="width: 100%">
    <el-table-column
        prop="name"
        label="商品名"
        width="180">
      </el-table-column>

    <el-table-column label="图片">
      <template slot-scope="prop">
       <img :src="prop.row.url" alt="" class="img">
      </template>
        </el-table-column>

    <el-table-column label="数量">
      <template slot-scope="prop">
        <el-input-number v-model="prop.row.num"  :min="1"  label="描述文字"></el-input-number>
      </template>
        </el-table-column>
   <el-table-column
        prop="pic"
        label="价格"
        width="180">
      </el-table-column>
    <el-table-column label="总价">
      <template slot-scope="prop">
        {{prop.row.pic*prop.row.num}}
      </template>
        </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="prop">
        <el-button
          size="mini"
          type="danger"
          @click="del(prop.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <p>总金额: <span>{{totaopic}}</span> </p></p>
  <button @click="shanchu">结算</button>
</template>

    </div>
</template>
<script>
export default {
    name:"shppingCart",
    data() {
        return {
            shppingList:[],
        }
    },
    created() {
        for (const key in this.$store.state.cartInfo) {
            this.shppingList.push( this.$store.state.cartInfo[key])   
        }
    },
    methods: {
        del(val){
               this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
               let i = this.shppingList.indexOf(val);
           this.shppingList.splice(i,1)
           this.$store.commit('delet',val);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        
        },
        shanchu(){
            for (let index = this.shppingList.length-1; index >= 0; index--) {
                // console.log( this.shppingList[index] );
                 this.$store.commit('delet',this.shppingList[index]);
                this.shppingList.splice(index,1);
            }
        }
    },
computed: {
    totaopic(){
        var zpic =  0;
        this.shppingList.forEach(v => {
            zpic += v.pic*v.num
        })
        return zpic
    }
},
}
</script>
<style>
.shpping-conten  .img{
width: 100px;
height: 50px;
}
</style>