<template>
  <div class="top-header">
    <span class="help">帮助</span>
    <span class="user">
      <img src="../assets/images/logo.png" alt="用户logo"/>
      <span>土豆回锅肉</span>
    </span>
    <span class="logout">退出</span>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  .top-header {
    background: #fff;
    width: 100%;
    font-size: 14px;
    color: #979898;
    text-align: right;
    >span {
      display: inline-block;
    }
    .user {
      margin-left: 30px;
      >img {
        width: 30px;
        height: 30px;
        border-radius: 30px;
      }
      >span {
        margin-left: 8px;
      }
    }
    .logout {
      margin: 0 20px 0 30px;
    }
  }
</style>

