import store from '../../store'
import globalAxios from 'axios';

const state = {
    sumOfProfits: 0,
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
            category: data.category_id,
            category_name: data.category_name
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
    },

    deleteIncomes(state) {
        state.profits = null;
    }
};

const actions = {
    createProfit({commit}, profitData) {
        globalAxios.post('/incomes', profitData)
            .then(res => {
                commit('create', res.data);
                store.dispatch('sumOfProfits');
            })
            .catch(error => console.log(error));
    },

    updateIncome({commit}, newProfitData) {
        globalAxios.put('/incomes/'+newProfitData.id, {
            sum: newProfitData.sum,
            category_id: newProfitData.category_id,
            date: newProfitData.date
        })
            .then(res => {
                res.data['index'] = newProfitData.index;
                commit('update', res.data);
                store.dispatch('sumOfProfits');
            })
            .catch(error => console.log(error));
    },

    sumOfProfits({commit}) {
        commit('updateSumOfProfits');
    },

    getIncomesFromApi({commit, dispatch}) {
        globalAxios.get('/incomes')
            .then(res => {
                commit('loadProfits', res.data.incomes);
                dispatch('sumOfProfits');
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