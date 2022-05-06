export default {
  addNum(state, num) {
    /* 
      mutations中不允许异步操作
    */
    // setInterval(() => {
    //   state.num += num;
    // }, 1000)

    state.num += num;
  }
}