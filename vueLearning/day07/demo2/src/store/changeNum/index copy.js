export default {
  namespaced: true,   // 命名空间：是为了让组件中所写的changeNum文件夹起作用
  state: {
    num: 5,
    title: 'wdnmd'
  },
  getters: {
    doubleNum(state) {
      return state.num * 2;
    }
  },
  mutations: {
    addNum(state, num) {
      /* 
        mutations中不允许异步操作
      */
      // setInterval(() => {
      //   state.num += num;
      // }, 1000)

      state.num += num;
    }
  },
  actions: {
    // 这里可以存放异步操作
    // context相当于上下文, 在这里相当于所处的大对象也就是store
    asyncAddnum({commit}, num) { // 相当于let commit = context
      setTimeout(() => {
        commit("addNum", num);
      }, 1000);
    }
  },
}