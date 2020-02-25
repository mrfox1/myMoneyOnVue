import Vue from 'vue';
import Vuex from 'vuex';
import globalAxios from 'axios';

import income from './modules/incomes/income';
import expenses from './modules/expeneses/expenses';
import user from './modules/users/user';
import categories from "./modules/categories/categories";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    income,
    expenses,
    user,
    categories
  }
});