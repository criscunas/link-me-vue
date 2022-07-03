import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import auth from './auth'
import user from './user'

const plugins = [
    new VuexPersistence({
        modules: [
            'auth',
            'user',
        ],
    }).plugin,
]

export default createStore({

    modules: {
        auth,
        user,
    },

    strict: false,

    plugins,
})
