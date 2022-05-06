import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
export default {
  namespaced: true,   // 命名空间：是为了让组件中所写的changeNum文件夹起作用
  state,
  getters,
  mutations,
  actions,
}