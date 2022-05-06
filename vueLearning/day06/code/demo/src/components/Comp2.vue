<template>
  <!-- 父传子，子传父 -->
  <div>
    <p>父组件的值为: {{fatherNum}}</p>
    <Child :num="fatherNum" @fn="add">
      <!-- <button slot="increment" @click="add">增加</button> -->
    </Child>
  </div>
</template>

<script>
import Child from "./CompChild.vue"
export default {
  data() {
    return {
      fatherNum: 20
    }
  },
  methods: {
    add(val) {
      this.fatherNum += val;
    }
  },
  components: {
    Child
  }
}
</script>

<style>

</style>