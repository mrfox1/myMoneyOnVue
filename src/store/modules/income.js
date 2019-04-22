//test data
//add loading from server in future

import store from '../store'
import globalAxios from 'axios';

const state = {
    sumOfProfits: null,
    profits: null
};

const mutations = {
    loadProfits(state, data) {
      state.profits = data;
    },

    create(state, data) {
        state.profits.push(data);
    },

    update(state, data) {
        state.profits[data.index] = {
            date: data.date,
            sum: data.sum,
            category: data.category
        }
    },

    updateSumOfProfits(state) {
        const sum = state.profits.reduce((accumulator, currentValue) => {
            if (currentValue.sum.isInteger) {
                return accumulator + currentValue.sum;
            } else {
                return accumulator + parseInt(currentValue.sum, 10);
             }
        }, 0);
        state.sumOfProfits = sum;
    }
};

const actions = {
    createProfit({commit}, profitData) {
        commit('create', profitData);
        store.dispatch('sumOfProfits');
        globalAxios.post('/incomes', profitData)
            .then(res => {
                console.log(res);
            })
            .catch(error => console.log(error));
    },

    updateProfit({commit}, newProfitData) {
        commit('update', newProfitData);
        store.dispatch('sumOfProfits');
    },

    sumOfProfits({commit}) {
        commit('updateSumOfProfits');
    },

    getIncomesFromApi({commit}) {
        globalAxios.get('/incomes')
            .then(res => {
                console.log(res);
                commit('loadProfits', res.data);
                store.dispatch('sumOfProfits');
            })
            .catch(error => console.log(error));
    }
};

const getters = {
    getProfits() {
        return state.profits;
    }, 
    getSum() {
        return state.sumOfProfits;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}