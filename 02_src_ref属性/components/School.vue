<template>
    <div id="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
export default {
    name:"School",
    data(){
        return{
            name:'NEFU',
            address:'Harbin'
        }
    },
    methods:{
        showName(){
            alert(this.name)
        }
    } 
}
</script>

<style >
    #demo{
        background-color: pink;
    }
</style>