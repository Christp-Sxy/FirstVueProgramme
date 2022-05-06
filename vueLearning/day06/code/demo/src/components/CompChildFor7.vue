<template>
  <div>
    <!-- <p>子组件</p>
    <p>{{num}}</p>
    <button @click="add">增加按钮</button>
    <slot name="increment"></slot> -->
  </div>
</template>

<script>
export default {
  props: ["num"],
  data () {
    return {
      sdas: 32134
    }
  },
  methods: {
    print() {
      alert("点击了");
    }
  }
}
</script>

<style>

</style>