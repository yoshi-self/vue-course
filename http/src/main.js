import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = ''; # Firebase URL
Vue.http.interceptors.push((request, next) => {
    console.log(request);
    next();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
