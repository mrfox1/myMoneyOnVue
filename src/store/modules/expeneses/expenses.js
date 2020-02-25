import store from '../../store'
import globalAxios from 'axios';

const state = {
    sumOfExpenses: 0,
    expenses: null
};

const mutations = {
    saveExpenses(state, data) {
        state.expenses = data;
    },

    create(state, data) {
        state.expenses.push(data);
    },
    // must be fixed
    update(state, data) {
        state.expenses[data.index] = {
            date: data.date,
            sum: data.sum,
            category: data.category_id,
            category_name: data.category_name
        }
    },

    updateSumOfExpenses(state) {
        const sum = state.expenses.reduce((accumulator, currentValue) => {
            if (currentValue.isInteger) {
                return accumulator + currentValue.sum;
            } else {
                return accumulator + parseInt(currentValue.sum, 10);
            }
        }, 0);
        state.sumOfExpenses = sum;
    },

    deleteExpenses(state) {
        state.expenses = null;
    }
};

const actions = {
    createExpense({commit, dispatch}, expenseData) {
        globalAxios.post('/expenses', expenseData)
            .then(res => {
                commit('create', res.data);
                dispatch('sumOfExpenses')
            })
            .catch(error => console.log(error));
    },

    updateExpense({commit, dispatch}, newExpenseData) {
        globalAxios.put('/expenses/'+newExpenseData.id, {
            sum: newExpenseData.sum,
            category_id: newExpenseData.category_id,
            date: newExpenseData.date
        })
            .then(res => {
                res.data['index'] = newExpenseData.index;
                commit('update', res.data);
                dispatch('sumOfExpenses');
            })
            .catch(error => console.log(error));
    },

    sumOfExpenses({commit}) {
        commit('updateSumOfExpenses');
    },

    getExpensesFromApi({commit, dispatch}) {
        globalAxios.get('/expenses')
            .then(res => {
                commit('saveExpenses', res.data.expenses);
                dispatch('sumOfExpenses');
            })
            .catch(error => console.log(error));
    }
};

const getters = {
    getExpenses() {
        return state.expenses;
    },
    getExpensesSum() {
        return state.sumOfExpenses;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}