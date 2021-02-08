import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './utils/http'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//自定义过滤器
Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
})

Vue.use(ElementUI);

Vue.config.productionTip = false
// Vue.use(VueAxios,axios);
//定义全局
Vue.prototype.$http=http;
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  // render: h => h(App)
}).$mount('#app')
