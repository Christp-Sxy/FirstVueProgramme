<template>
  <div>
    <table>
      <tr>
        <th>
          <input type="checkbox" v-model="checkAll">全选/全不选
        </th>
        <th v-for="item in titles" :key="item.index">{{item}}</th>
      </tr>
      <tr v-for="item,index in books" :key="index">
        <td><input type="checkbox" v-model="checkList[index]"></td>
        <td>{{item.name}}</td>
        <td>{{item.date}}</td>
        <td>{{"¥" +item.price.toFixed(2)}}</td>
        <td>
          <button @click="redu(index)">-</button>
          {{item.num}}
          <button @click="add(index)">+</button>
        </td>
        <td>
          <button @click="del(index)">移除</button>
        </td>
      </tr>
      <tr>
        <td colspan="6" style="text-align:right">总价:{{total}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
data () {
    return {
      // 用来记录每个框是否被勾选
      checkList: [],
      titles: ['书籍名称', '出版日期', '价格', '数量', '操作'],
      books: [
        {
          name: '算法导论',
          date: '2006-9',
          price: 85,
          num: 1
        },
        {
          name: 'UNIX编程艺术',
          date: '2006-2',
          price: 59,
          num: 1
        },
        {
          name: 'Vue程序设计',
          date: '2008-10',
          price: 35,
          num: 1
        },
        {
          name: '颈椎康复',
          date: '2006-3',
          price: 129,
          num: 1
        },
      ]
    }
  },
  computed:{
    checkAll:{
      get () {
        // 如果checkList里面包含false那么全选就为false
      return !this.checkList.includes(false);
      },
      set(newVal) {
        console.log(newVal);
        // 下面这种方法不可以，forEach是在另一处地址重新建立一个新的数组，对其修改与原数组无关
        // this.checkList.forEach(item => {item = newVal});
        this.checkList = this.checkList.map(() => newVal);
      }
    },
    total(){
      // reduce 有四个参数
      /* 
        1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
        2、currentValue （数组中当前被处理的元素）
        3、index （当前元素在数组中的索引）
        4、array （调用 reduce 的数组）
      */
      let ret = this.books.reduce((pre, cur, index)=>{
        if(this.checkList[index]){
          return pre+cur.price*cur.num;
        }else {
          return pre;
        }
        
      },0)
      return "¥"+ret.toFixed(2) + "元"
    }
  },
  methods:{
    del(i){
      this.books.splice(i,1);
      this.checkList.splice(i,1);
    },
    add(i){
      this.books[i].num++
    },
    redu(i){
      // if(this.books[i].num===1){
      //   return
      // }
      // this.books[i].num--
      this.books[i].num>1? this.books[i].num--:""
    }
  },
  created(){
    // 在页面刷新时初始化数组的值
    this.checkList = this.books.map(() => false);
  },
}
</script>

<style lang = "less" scoped>
  table,td,th{
      border: 1px solid #000;
    }
    table{
      border-collapse: collapse;
    }
    td,th{
      padding: 10px;
    }
</style>