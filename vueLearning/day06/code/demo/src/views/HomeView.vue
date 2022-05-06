<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 在调用组件 -->
    <Comp1/>
  </div>
</template>

<script>
// @ is an alias to /src
// 引入组件
// import HelloWorld from '@/components/HelloWorld.vue'
import Comp1 from '@/components/Comp7.vue'

export default {
  name: 'HomeView',
  components: {
    Comp1
  }
}
</script>
