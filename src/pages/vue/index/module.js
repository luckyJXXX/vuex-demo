export default {
  namespaced: true,
  state: {
    count: 0,
    todos: [
			{ id: 1, text: '水果类', done: true },
			{ id: 2, text: '苹果', done: true },
			{ id: 3, text: '苹果', done: false}
    ]
  },
  mutations: {

  },
  getters: {
    doneTodos: state => {
      // 通过方法访问
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      // 通过属性访问
      return getters.doneTodos.length
    }
  },
  actions: {
    
  }
}