export default {
    state: {
        tokens: {
            core: null,
        },
        is_authenticated: false,
        redirect: false,
    },

    mutations: {
        'auth:login'(state, token) {
            state.tokens.core = token
            state.is_authenticated = true
        },
        'auth:logout'(state) {
            state.is_authenticated = false
            state.tokens.core = null
        }
    },
    getters: {
        tokens(state) {
            return state.tokens
        },
        isAuthenticated(state) {
            return state.is_authenticated
        },
    }
};
