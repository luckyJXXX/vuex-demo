<template>
  <div class="nav" v-if="arr.length > 0">
    <p class="nav-item" v-for="(item, index) of arr" :key="index" @click="toggle(index)" :class="{active: index == active}">{{item}}</p>
  </div>
</template>

<script>
  export default {
    name: 'nav',
    data() {
      return {
        active: 0,
        arr: [
          "事件1",
          "事件1",
          "事件1",
          "事件1",
          "事件1",
          "事件1",
          "事件1",
          "事件1",
          "事件1",
          "事件1"
        ]
      }
    },
  
    methods: {
      toggle(index) {
        this.active = index
      }
    }
  }
</script>

<style lang="less" scoped>
  .nav {
    padding: 0 10pr;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: middle;
    -ms-flex-align: middle;
    align-items: middle;
    overflow: auto;
    .nav-item {
      text-align: center;
      font-size: 20pr;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      padding: 10pr;
      margin: 5pr;
      &.active {
        color: red;
        background: black;
      }
    }
    .active {}
  }
</style>


