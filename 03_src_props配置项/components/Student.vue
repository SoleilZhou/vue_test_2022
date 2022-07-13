<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>学生年龄：{{ myAge }}</h2></h2>
        <button @click="updateAge">尝试修改收到的年龄</button>        
    </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        console.log(this)
        return{
            msg:"我是NEFU的学生",
            myAge:this.age
        }
    },
    methods: {
        updateAge(){
            this.myAge ++
        }
    },

    //声明简单接收
    props:['name','sex','age']

    //接收的同时对数据类型进行限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }

    //接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    // props: {
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     age: {
    //         type: Number,
    //         default: 99 //默认值
    //     }
    //     sex: {
    //         type: String,
    //         required: true
    //     }
    // }
}
</script>
