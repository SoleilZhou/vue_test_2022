//该文件用于创建vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person' 
//使用vuex插件
Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})
