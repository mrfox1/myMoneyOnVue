import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store/store'

const API_URL = 'https://my-money-rails-api.herokuapp.com/api/v1';

axios.defaults.baseURL = API_URL;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
