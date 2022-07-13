//该文件是整个项目的文件入口
import Vue from 'vue'         //引入Vue
import App from './App.vue'   //引入App组件，它是所有组件的父组件
import plugins from './plugin' //引入插件

Vue.config.productionTip = false

Vue.use(plugins,1,2,3)

new Vue({
    el:'#app',
    render: h => h(App),  //render函数完成了这个功能，将App组件放入到容器中
}) //.$mount('#app')