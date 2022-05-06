<template>
  <div class="home">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Comp10.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created () {
    
  },
  activated() {
    // 改代码在组件被激活的时候执行，被切换回来的时候，被展示在页面上的时候执行
  },
  deactivated() {
    // 与上面相反，离开的时候执行
  }
}
</script>
