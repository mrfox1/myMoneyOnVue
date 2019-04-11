import store from '../store'
//test data
//add loading from server in future
const state = {
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
        state.profits[data.index] = {
            date: data.date,
            sum: data.sum,
            category: data.category
        }
    }
};

const actions = {
    createCost({commit}, costData) {
        commit('create', costData);
    },

    updateCost({commit}, newCostData) {
        commit('update', newCostData);
        //store.dispatch('sumOfProfits');
    },
};

const getters = {
    getCosts() {
        return state.costs;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}