<template>
  <div>
    <h1>{{num}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed: {
    num() {
      return this.$store.state.num;
    }
  }
}
</script>

<style lang = "less" scoped>
  
</style>