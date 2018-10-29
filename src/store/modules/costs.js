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
    
};

const actions = {
    
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