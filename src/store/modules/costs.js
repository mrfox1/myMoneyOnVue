//test data
//add loading from server in future

import store from '../store'

const state = {
    sumOfCosts: null,
    costs: [
        {date: '2018-10-23', sum: 40, category: 'food'},
        {date: '2018-10-24', sum: 5, category: 'transport'},
        {date: '2018-10-24', sum: 50, category: 'transport'},
        {date: '2018-10-24', sum: 100, category: 'other'},
        {date: '2018-10-24', sum: 200, category: 'food'}
    ]
};

const mutations = {
    create(state, data) {
        state.costs.push(data);
    },

    update(state, data) {
        state.costs[data.index] = {
            date: data.date,
            sum: data.sum,
            category: data.category
        }
    },

    updateSumOfCosts(state) {
        const sum = state.costs.reduce((accumulator, currentValue) => {
            if (currentValue.isInteger) {
                return accumulator + currentValue.sum;
            } else {
                return accumulator + parseInt(currentValue.sum, 10);
            }
        }, 0);
        state.sumOfCosts = sum;
    }
};

const actions = {
    createCost({commit}, costData) {
        commit('create', costData);
        store.dispatch('sumOfCosts')
    },

    updateCost({commit}, newCostData) {
        commit('update', newCostData);
        store.dispatch('sumOfCosts');
    },

    sumOfCosts({commit}) {
        commit('updateSumOfCosts');
    }
};

const getters = {
    getCosts() {
        return state.costs;
    },
    getCostsSum() {
        return state.sumOfCosts;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}