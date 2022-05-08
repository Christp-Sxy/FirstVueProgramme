<template>
  <div class="home">
    这是首页
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// 导入请求
// 由于api.js有许多API，因此要引入可控的变量
import {JingPinAPI} from "../request/api.js"

export default {
  name: 'HomeView',
  components: {
    
  },
  // created () {
  //   /* 
  //     以下代码写在项目中会有缺陷: 
  //       1、无法处理多个携带请求头的链接
  //       2、不便于接口的管理
  //       3、容易出现回调地狱
  //   */
  //   JingPinAPI().then(res => {
  //     console.log(res);
  //   })
  // }

  /* 
    加了async表示这个是个异步函数，在这里是值是异步请求
  */
  async created() {
    let res = await JingPinAPI();
    console.log(res);
  }
}
</script>
