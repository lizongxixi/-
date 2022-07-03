<template>
  <div>
    <el-container>
      <el-header height="100px">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple" align="left">
              <img src="../assets/logo.png" height="100px" width="130px">
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
        商品详情{{this.$route.params.pid}}
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "ProductInfo"
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
  line-height: 160px;
}
</style>
