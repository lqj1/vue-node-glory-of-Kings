import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 导入element组件库
import ElementUI from 'element-ui';
// 导入组件相关样式
import 'element-ui/lib/theme-chalk/index.css';
// 配置vue插件
Vue.use(ElementUI);
Vue.config.productionTip = false;
import http from './http';
Vue.prototype.$http = http; // 加载到Vue实例的的原型上
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
