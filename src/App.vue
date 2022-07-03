<template>
    <router-view />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created() {
        if (this.isAuthenticated) {
            this.bootstrapAxios()
        }
    },

    computed: {
        ...mapGetters([
            'tokens',
            'isAuthenticated',
        ]),
    },


    methods: {
        bootstrapAxios() {
            this.$axios.defaults.headers.Authorization = `Bearer ${this.tokens.core}`
        },
    }
}
</script>
