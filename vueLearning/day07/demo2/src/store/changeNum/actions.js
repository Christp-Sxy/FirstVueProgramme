export default {
  // 这里可以存放异步操作
    // context相当于上下文, 在这里相当于所处的大对象也就是store
    asyncAddnum({commit}, num) { // 相当于let commit = context
      setTimeout(() => {
        commit("addNum", num);
      }, 1000);
    }
}