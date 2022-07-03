export default {
    state: {
        user: {
            username: null,
        },
    },

    mutations: {
        'user:login'(state, username) {
            state.user.username = username
        },
        'user:logout'(state) {
            state.user.username = null
        }
    },
    getters: {
        user(state) {
            return state.user.username
        },
    }
};
