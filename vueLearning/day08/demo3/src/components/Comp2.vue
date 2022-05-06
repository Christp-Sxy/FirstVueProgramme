<template>
  <div>
    
  </div>
</template>

<script>
import axios from "axios"
export default {
  data () {
    return {
      
    }
  },
  created () {
    // axios.get('/getdata?id=123456')
    // get请求的params是固定格式，只能这么写
    // axios.get("/getdata", {
    //   params: {
    //     ID: 123456
    //   }
    // })
    // res是axios封装好的一个对象
    // res.data才是后端传过来的对象
    // .then((res) => {
    //   console.log(res);
    // })


    // 传参
    // post中参数就不用params，直接写就行了
    axios.post("/postdata", {
      data: {
        num: 123
      }
    })
    .then((res) => {
      console.log(res);
    })
  }
}
</script>

<style lang = "less" scoped>
  
</style>