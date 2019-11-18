import store from '../../store'
import globalAxios from 'axios';

const state = {
    categories: null
};

const mutations = {
    saveCategories(state, data) {
        state.categories = data;
    }
};

const actions = {
    getExpensesFromApi({commit, dispatch}) {
        globalAxios.get('/categories')
            .then(res => {
                commit('saveCategories', res.data);
            })
            .catch(error => console.log(error));
    }
};

const getters = {
   getCategories() {
       return state.categories;
   }
};

export default {
    state,
    mutations,
    actions,
    getters
}