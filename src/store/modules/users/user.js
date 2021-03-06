import store from '../../store'
import globalAxios from 'axios';

const state = {
    user: {
        name: localStorage.getItem('userName') || '',
        token: localStorage.getItem('token') || ''
    }
};

const mutations = {
    saveUserData(state, data) {
        localStorage.setItem("userName", data.name);
        localStorage.setItem("token", data.token);
        state.user.name = localStorage.getItem('userName');
        state.user.token = localStorage.getItem('token');
    },

    deleteSession(state) {
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
        state.user.name = state.user.token = '';
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

    createSession({commit, dispatch}, credentials) {
        globalAxios.post('/users/login', {
            user: {
                email: credentials.email,
                password: credentials.password
            }})
            .then(res => {
                console.log(res.data.user);
                commit('saveUserData', res.data.user);
                globalAxios.defaults.headers.common['Authorization'] = res.data.user.token;
                dispatch('getExpensesFromApi');
                dispatch('getIncomesFromApi')
            })
            .catch(error => console.log(error));
    },

    signOut({commit}) {
        globalAxios.get('/users/logout')
            .then(res => {
                commit('deleteSession');
                commit('deleteIncomes');
                commit('deleteExpenses');
                console.log(res);
            })
            .catch(error => console.log(error));
    },

    checkSession() {
        if (localStorage.getItem('token') !== null) {
            globalAxios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        }
    }
};

const getters = {
    getUserData: state => state.user,

    getCurrentUserName: (state, getters) => getters.getUserData.name,
};

export default {
    state,
    mutations,
    actions,
    getters
}