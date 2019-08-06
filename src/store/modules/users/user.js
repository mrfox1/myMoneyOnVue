import store from '../../store'
import globalAxios from 'axios';

const state = {
    user: {}
};

const mutations = {
    saveUser(state, data) {
        state.user = data;
    }
};

const actions = {
    createUser({commit}, userData) {
        commit('saveUser', userData);
        globalAxios.post('/users', { user: { name: userData.name, email: userData.email, password: userData.password }})
            .then(res => {
                console.log(res);
            })
            .catch(error => console.log(error));
    },

    createSession({commit}, credentials) {
        globalAxios.post('/users/login', {
            user: {
                email: credentials.email,
                password: credentials.password
            }})
            .then(res => {
                console.log(res.data);
                commit('saveUser', res.data);
            })
            .catch(error => console.log(error));
    }
};

const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
}