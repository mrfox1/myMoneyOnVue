import Vue from 'vue';
import Vuex from 'vuex';

import income from './modules/income';
import costs from './modules/costs';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    income,
    costs
  }
});