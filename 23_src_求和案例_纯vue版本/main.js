//该文件是整个项目的文件入口
import Vue from 'vue'         //引入Vue
import App from './App.vue'   //引入App组件，它是所有组件的父组件
import vueResource from 'vue-resource'  //引入插件

Vue.config.productionTip = false

Vue.use(vueResource)  //使用插件

new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        //全局事件总线
        Vue.prototype.$bus = this
    } 
}) 