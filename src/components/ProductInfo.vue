<template>
  <div>
    <el-container>
      <el-header height="100px">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple" align="left">
              <img src="/static/images/logo.png" height="100px" width="130px">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light" align="right" >
              <el-button>注册</el-button>
              <el-button>登录</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
      <!-- 商品图片，商品名称，商品价格-->
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple" >
                <img :src="prop.pimg" width="400px" height="500px">
            </div>
          </el-col>

<!--          第二、第三列都放列放三行-->
          <!--这是第二列  名称：商品名字、商品价格-->
          <el-col :span="8">
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple" align="right">
                  商品名称
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple" align="right">
                  商品价格
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple" align="right">

                </div>
              </el-col>
            </el-row>
          </el-col>


          <!--这是第三列  放具体的参数：商品名字、商品价格-->
          <el-col :span="8">
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple" align="left">
                  {{prop.pname}}
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple" align="left">
                  {{prop.price}}
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple" align="left">
                  <el-button type="danger">加入购物车</el-button>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>

      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  data(){
    return{
      prop:this.$route.params
    }
  },
  created() {

  },
  methods:{

  }

}
</script>

<style >
.el-header{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
}


.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 60px;

}


</style>
