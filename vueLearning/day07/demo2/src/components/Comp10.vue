<template>
  <!-- store拆分之后数据的获取 -->
  <div>
    <!-- 
      <p>{{$store.state.num}}</p>
      这个已经获取不到了。因为store中的数据没了。全部转换到新建功能里了
    -->
    
    <h1>{{ num }}</h1>
    <h1>{{ title }}</h1>
    <h1>{{ doubleNum }}</h1>
    <button @click="addNum(10)">增加</button>
    <button @click="asyncAddnum(100)">延时增加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from "vuex"
export default {
  data () {
    return {
      
    }
  },
  methods: {
    ...mapMutations({
      addNum: "changeNum/addNum"
    }),
    ...mapActions({
      asyncAddnum: "changeNum/asyncAddnum"
    })
  },
  computed: {
    ...mapState({
      num: state => state.changeNum.num,
      title: state => state.changeNum.title
    }),
    ...mapGetters({
      doubleNum: "changeNum/doubleNum",
    }),
  },
}
</script>

<style lang = "less" scoped>
  
</style>