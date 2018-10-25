//test data
//add loading from server in future
const state = {
    profits: [
        {date: '2018-10-23', sum: 400, category: 'salary'},
        {date: '2018-10-24', sum: 500, category: 'salary'},
        {date: '2018-10-24', sum: 500, category: 'salary'},
        {date: '2018-10-24', sum: 500, category: 'salary'},
        {date: '2018-10-24', sum: 500, category: 'salary'}
    ]
};

const mutations = {
    create(state, data) {
        state.profits.push(data);
    }
};

const actions = {
    createProfit({commit}, profitData) {
        commit('create', profitData);
    }
};

const getters = {
    getProfits() {
        return state.profits;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}