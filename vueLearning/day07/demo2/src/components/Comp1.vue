<template>
    <div>
        <div class="top">
            <span>名称</span>
            <input type="text" v-model.trim="txtVal" placeholder="请输入要查询的内容" @keyup="hdKeyUp"> 
            <button @click="search">查询</button>
        </div>
        <table>		
            <tr>		
                <th v-for="item in titles" :key="item">{{item}}</th>
            </tr>		
            <tr v-for="item, index in info" :key="index" v-show="item.is_show">
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>{{item.price_info.toFixed(2)}}</td>
                <td><button @click.enter="del(index)">删除</button></td>
            <tr>
                <td colspan=5>总价为: {{ total }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            titles: ["ID", "主标题", "起步价格", "操作"],
            info: [{
                "id": 287,
                "title": "严选新式样板间",
                "price_info": 29.9,
                "is_show": true
            },{
                "id": 286,
                "title": "无\"油\"无虑的酥脆",
                "price_info": 45,
                "is_show": true
            },{
                "id": 283,
                "title": "孩子成长中少不了的一双鞋",
                "price_info": 78,
                "is_show": true
            },{
                "id": 282,
                "title": "成就一室笋香",
                "price_info": 121,
                "is_show": true
            },{
                "id": 281,
                "title": "条纹新风尚",
                "price_info": 29,
                "is_show": true
            }],
            txtVal: "",
        }
    },
    methods: {
        del(i) {
            this.info.splice(i, 1)
        },
        search() {
            if(!this.txtVal){
                alert("请输入要查询的内容")
            }

            this.info.forEach((item) => {
                // 查询数组中是否包含这一项
                // if(item.title.includes(this.txtVal)){
                //     item.is_show = true;
                // }else {
                //     item.is_show = false;
                // }
                item.is_show = item.title.includes(this.txtVal);
            })
        },
        hdKeyUp() {
            // 如果用户输入的值为空，就把所有的数据都显示出来
            if(!this.txtVal) {
                this.info.forEach((item) => {
                    item.is_show = true;
                })
            }
        },
    },
    computed: {
        total() {
            let ret = this.info.reduce((pre, cur) => {
                if (cur.is_show){
                    return pre + cur.price_info;
                }else {
                    return pre;
                }
            }, 0)
            return "￥"+ ret + "元"
        }
    }
}
</script>

<style lang = "less" scoped>
  *{margin: 0;padding: 0;}
        body{font-size: 14px; color:#666; padding-left: 50px;padding-top: 30px; position: relative; align-items: center;}
        input,button{outline-style: none;}
        table{border: 1px solid #ddd;border-collapse: collapse; }
        td,th{border: 1px solid #ddd; width: 130px; height: 30px;text-align: left; padding: 10px;}
        .top{   
            display: flex;
            margin-bottom: 10px;
        }
        .top>*{
            margin-right: 20px;
        }
        .top span{
            line-height: 40px;
        }
        .top input{
            border:1px solid #ccc;
            border-radius:4px;
            padding-left: 8px;
            color:#666;
        }
        button{
            border:0;
            padding:10px 15px; background-color: skyblue;
            color:#fff;
            border-radius:4px;
            cursor: pointer;
        }
</style>