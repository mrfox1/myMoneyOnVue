import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Expenses from './components/expenses/Expenses.vue';
import Income from './components/income/Income.vue';

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Home},
    {path: '/expenses', component: Expenses},
    {path: '/income', component: Income}
]

export default new VueRouter({mode: 'history', routes})