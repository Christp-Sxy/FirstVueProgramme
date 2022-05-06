<template>
  <div>
    <p>子组件</p>
    <p>{{num}}</p>
    <button @click="add">增加按钮</button>
    <!-- <slot name="increment"></slot> -->
  </div>
</template>

<script>
export default {
  props: ["num"],
  methods: {
    add() {
      this.$emit("fn", 10)
    }
  }
}
</script>

<style>

</style>