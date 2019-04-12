import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Costs from './components/costs/Costs.vue';
import Income from './components/income/Income.vue';

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Home},
    {path: '/costs', component: Costs},
    {path: '/income', component: Income}
]

export default new VueRouter({mode: 'history', routes})