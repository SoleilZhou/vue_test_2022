//引入Vue
import Vue from 'vue' 
//引入App组件，它是所有组件的父组件        
import App from './App.vue' 
//引入插件  
import vueResource from 'vue-resource' 
//引入store
import store from './store'

//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource) 
 

new Vue({
    el:'#app',
    render: h => h(App),
    store,
    beforeCreate(){
        //全局事件总线
        Vue.prototype.$bus = this
    } 
}) 
