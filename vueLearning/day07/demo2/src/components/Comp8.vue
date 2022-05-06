<template>
  <div>
    <h1>{{num}}</h1>
    <h2>{{title}}</h2>
    <h1>{{doubleNum}}</h1>
    <button @click="addNum(10)">按钮</button>
    <button @click="hdClick">按钮2</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState(["num", "title"]),
    ...mapGetters(["doubleNum"])
  },
  methods: {
    ...mapMutations(["addNum"]),
    hdClick() {
      this.addNum(4);
    }
  }
}
</script>

<style lang = "less" scoped>
  
</style>