<template>
    <div>
        <h2>当前求和为:{{sum}}</h2>
        <h3>当前求和放大10倍为:{{bigSum}}</h3>
        <h3>我在{{school}}，学习{{subject}}</h3>
        <h3 style="color:green">Person组件的总人数是:{{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'',
        data() {
            return{
                n:1,  //用户选择的数字
            }
        },
        computed:{
            //借助mapState生成计算属性,从stste中读取数据（数组写法）
            ...mapState(['sum','school','subject','personList']),
            //借助mapGetters生成计算属性,从getters中读取数据（数组写法）
            ...mapGetters(['bigSum']),
        },
        methods:{
            //借助mapMutations生成对应的方法，方法会调用commit去联系mutations（对象写法）
            ...mapMutations({increment:'ADD',decrement:'MINUS'}),
            //借助mapActions生成对应的方法，方法会调用dispatch去联系actions（对象写法）
            ...mapActions({incrementOdd:'addOdd',inrementWait:'addWait'}),
   
        },
        mounted(){
            const x = mapState({sum:'sum',school:'school',subject:'subject'})
            console.log(x)
        }
    }
</script>

<style scoped>
    button {
        margin-left: 5px;
    }
</style>