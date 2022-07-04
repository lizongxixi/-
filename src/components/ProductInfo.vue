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

        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <div class="grid-content bg-purple" >
                <img :src="prop.pimg" width="400px" height="500px">
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-row>
                <el-col :span="6">
                  <div class="grid-content bg-purple" align="left">
                    商品名称
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple" align="left">
                    {{prop.pname}}
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <div class="grid-content bg-purple" align="left">
                    商品价格
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple" align="left">
                    {{prop.price}}
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="6">
                  <div class="grid-content bg-purple" align="left">
                    商品数量
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple" align="left">
                    <el-input v-model="count" placeholder="请输入商品数量"></el-input>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <div class="grid-content bg-purple" align="left" @click="toCart(prop)">
                  <el-button type="danger">加入购物车</el-button>
                </div>
              </el-row>
            </div>
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
      prop:this.$route.params,
      count:0
    }
  },
  created() {

  },
  methods:{
      toCart:function (prop){
        let userAndProInfo = {
          user_id:16281069,
          pid:prop.pid,
          pcount:this.count,
        }
        this.$router.push({name:'cart',params:userAndProInfo})
      }
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
