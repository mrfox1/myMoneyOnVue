import store from '../../store'
import globalAxios from 'axios';

const state = {
    categories: null
};

const mutations = {
    saveCategory(state, data) {
        if (state.categories === null) {
            state.categories = data;
        } else {
            state.categories.push(data);
        }
    }
};

const actions = {
    createCategory({commit, dispatch}, categoryData) {
        globalAxios.post('/categories', categoryData)
            .then(res => {
                commit('saveCategory', res.data);
            })
            .catch(error => console.log(error));
    },

    getCategoriesFromApi({commit, dispatch}) {
        globalAxios.get('/categories')
            .then(res => {
                commit('saveCategory', res.data);
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