import store from '../store'
//test data
//add loading from server in future
const state = {
    sumOfProfits: null,
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
            if (currentValue.isInteger) {
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
        store.dispatch('sumOfProfits')
    },

    updateProfit({commit}, newProfitData) {
        commit('update', newProfitData);
        store.dispatch('sumOfProfits');
    },

    sumOfProfits({commit}) {
        commit('updateSumOfProfits');
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