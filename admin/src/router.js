import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import CategoryEdit from './views/CategoryEdit.vue';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/categories/create', // 这里的path在Main.vue中定义，需要在el-main中添加router
          component: CategoryEdit,
        },
      ],
    },
  ],
});
