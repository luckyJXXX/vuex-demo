<template>
  <div class="topmenu">
    <!-- 类似今日头条顶部滑动导航 -->
    <Nav ref="nav"></Nav>
    <div>
      <p>vuex getters 用法</p>
      <p>通过属性访问：{{todosCount}}</p>
      <p>通过方法访问：{{todos}}</p>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import Nav from '../components/nav.vue'
  export default {
    components: {
      Nav
    },
    data() {
      return {
        
      }
    },
    created() {
  
    },
    mounted() {

    },
    computed: {
      ...mapState('vueIndex', {
        count: state => state.count
      }),
      ...mapGetters('vueIndex',{
        todos: 'doneTodos',
        todosCount: 'doneTodosCount'
      }),
    },
    methods: {
  
    }
  }
</script>

<style lang="less" scoped>
  .topmenu {
    border-bottom: 1px solid #CCCCCC;
    width: 100%;
    overflow: hidden;
  }
</style>
