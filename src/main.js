
import Vue from 'vue'
//vue脚手架 帮我们将组件可以封装成.vue文件
import App from './App.vue'
import router from './router'
import './assets/index.less';//公用样式
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad);
import VueScroller  from 'vue-scroller';
Vue.use(VueScroller);//引用这个组件后 会多一个全局组件 scroller
import store from './store'
new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
