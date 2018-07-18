<template>
  <div class="side-bar">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="有料logo">
      <span>有料管理平台</span>
    </div>
    <el-row class="tac">
      <el-col>
        <el-menu default-active="1" class="el-menu-vertical-demo" 
         @open="handleOpen"
        @close="handleClose" 
        background-color="#666666" 
        active-background-color="#FDDB00"
        active-text-color="#333"
        text-color="#fff" style="border-right: none;">
          <el-menu-item index="1" class="index">
            <i class="el-icon-menu"></i>
            <span slot="title" >有料帖子</span>
          </el-menu-item>
          <el-menu-item index="2" class="index">
            <i class="el-icon-document"></i>
            <span slot="title">有料频道</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'side-bar',
    data() {
      return {
        activeIndex: '1'
      }
    },
    created() {

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less" scoped>
  .side-bar {
    width: 100%;
    background: #666666;
    height: 100%;
    color: #fff;
    .logo {
      padding: 15px 15px 0 15px;
      >img {
        height: 50px;
      }
      >span {
        font-size: 20px;
        margin-left: 6px;
      }
    }
    .tac {
      width: 100%;
      height: 100%;
      padding-top: 20px;
    }
  }
</style>

