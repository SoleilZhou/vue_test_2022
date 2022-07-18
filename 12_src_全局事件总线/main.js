//该文件是整个项目的文件入口
import Vue from 'vue'         //引入Vue
import App from './App.vue'   //引入App组件，它是所有组件的父组件

Vue.config.productionTip = false

new Vue({
    el:'#app',
    render: h => h(App), 
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    }
}) 