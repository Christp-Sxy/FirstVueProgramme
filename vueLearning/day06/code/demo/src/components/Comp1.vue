<template>
<!-- 第一个组件 -->
  <div>
    <p>
      {{num}}
    </p>
    <button @click="add">增加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 20
    }
  },
  methods: {
    add() {
      this.num++;
    }
  }
}
</script>

<style lang="less">

</style>