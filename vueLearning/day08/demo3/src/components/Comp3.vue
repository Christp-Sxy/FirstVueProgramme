<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      arr: [10, 20]
    }
  },
  created () {
    axios.get("/getnews")
    .then((response) => {
      this.arr = response.data;
    })
  }
}
</script>

<style lang = "less" scoped>
  
</style>