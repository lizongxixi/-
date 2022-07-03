<template>
  <div id="Home">
    <el-container>
      <el-header height="90px">
        <el-row >
          <el-col :span="12" >
            <div class="grid-content bg-purple" align="left"  >
              <img src="../assets/logo.png" height="90px" width="120px">
            </div>
          </el-col>
          <el-col :span="12" >
            <div class="grid-content bg-purple-light" align="right" >
              <el-button >注册</el-button>
              <el-button>登录</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <div class="block">
          <el-carousel height="650px" >
            <el-carousel-item v-for="item in imgs" :key="item">
              <h3 class="small">
                <img :src="item" width="750px" height="450px">
              </h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="products">
          <div v-for="pro in props" class="product" >
            <img :src="pro.pimg" height="200px" width="160px">
            <h4>{{pro.pname}}</h4>
            <h4>{{pro.price}}</h4>
            <el-button type="primary" round><router-link :to="{name:'ProductInfo',params:{pid:pro.pid}}">立即购买</router-link></el-button>
          </div>
        </div>
      </el-main>
      <el-footer height="160px">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      imgs:[
        "./static/images/b1.png",
        "./static/images/b2.png",
        "./static/images/b3.png",
        "./static/images/b4.png"
      ],
      // props: [
      //   {
      //     "pid": 10001,
      //     "pname": "iPhone13pro",
      //     "price": 10086,
      //     "pimg": "./static/images/iPhone13pro.png"
      // ]
      props:null
    }
  },
  created(){
    this.getList()
  },
  methods:{
    getList:function (){
      let vm = this
      this.axios({
        method:'GET',
        url:"http://localhost:8081/the_shop_backend_war_exploded/product/list"
      }).then(function (resp){
        vm.props = resp.data ;
        console.log(resp.data.props)
      })

    }

  }
}
</script>

<style >


.product{


  display: inline-block;
  width: 30%;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 85px;
}


.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 60px;

}
</style>
