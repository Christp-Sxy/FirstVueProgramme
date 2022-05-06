<template>
  <div>
    <h1>{{doubleNum}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed: {
    doubleNum() {
      // 这里的参数state可以让我们快速获取到仓库中的数据
      return this.$store.getters.doubleNum;
    }
  }
}
</script>

<style lang = "less" scoped>
  
</style>