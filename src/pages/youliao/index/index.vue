<template>
  <el-container class="container">
  <el-aside width="250px">
    <Siderbar></Siderbar>
  </el-aside>
  <el-container>
    <el-header>
      <Topheader></Topheader>
    </el-header>
    <el-main>
      <!-- 有料频道 -->
      <!-- <Channel></Channel> -->
      <!-- 有料帖子 -->
      <Feed></Feed>
    </el-main>
  </el-container>
</el-container>

</template>

<script>
import Siderbar from "../../../components/sidebar";
import Topheader from "../../../components/topheader";
import Feed from "../feed/index.vue";
import Channel from "../channel/index.vue";
export default {
  name: "feed",
  components: {
    Siderbar,
    Topheader,
    Feed,
    Channel
  },
  data() {
    return {
      showFeed: true
    }
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>
  .el-header, .el-footer {
    line-height: 60px;
  }
  
  .el-aside {
    background-color: 666666;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #F6F6F6;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .container {
    height: 100%;
  }
</style>

