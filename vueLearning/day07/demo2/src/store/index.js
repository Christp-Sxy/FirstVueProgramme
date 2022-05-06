import Vue from 'vue'
import Vuex from 'vuex'
// 引入
import changeNum from './changeNum'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // 注册
    changeNum
  }
})
