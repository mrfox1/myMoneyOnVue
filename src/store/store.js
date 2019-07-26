import Vue from 'vue';
import Vuex from 'vuex';
import globalAxios from 'axios';

import income from './modules/incomes/income';
import expenses from './modules/expeneses/expenses';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    income,
    expenses
  }
});