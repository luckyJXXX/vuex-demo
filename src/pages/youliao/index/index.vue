<template>
  <div class="index-wrapper">
    <div class="sidebar">
      <Siderbar></Siderbar>
    </div>
    <div class="content">
      <div class="top-header">
        <Topheader></Topheader>
      </div>
      <!-- 有料帖子 -->
      <Feed ref="feed" v-if="!showFeed"></Feed>
      <!-- 有料频道 -->
      <Channel ref="channel" v-else></Channel>
    </div>
  </div>
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
.index-wrapper {
  display: flex;
  flex-direction: row;
  color: #979898;
  .sidebar {
    width: 15%;
  }
  .content {
    width: 85%;
    .top-header {
      height: 60px;
      line-height: 60px;
      width: 100%;
    }
    
  }
}
</style>

