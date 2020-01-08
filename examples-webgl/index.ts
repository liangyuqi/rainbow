import Vue from 'vue';
import App from './vue/module/app/app.vue';
import router from './vue/module/app/router'


window['app'] = new Vue({
  el: '#app',
  router,
  render: h => h(App)
  //   render: function (createElement) {
  //     return createElement('h2', 'Hello Vue!');
  // }
});

