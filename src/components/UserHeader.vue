<template>
    <header class="bg-[#011627]">
        <nav class="p-4 flex flex-row justify-between items-center">
            <h1 class="header-text text-white"> link.me </h1>
            <div tabindex="0" class="dropdown dropdown-end">
                <div class="avatar placeholder">
                    <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span class="text-base capitalize">{{ this.user[0] }}</span>
                    </div>
                </div>
                <ul class="dropdown-content menu shadow bg-base-100 rounded-box list-none mt-4 ">
                    <li class="w-14">
                        <img src='../../public/images/settings.png' />
                    </li>
                    <li @click="logOut" class="w-14">
                        <img src='../../public/images/logout.png' />
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>


<script>

import { mapGetters } from 'vuex'

export default {

    methods: {
        logOut() {
            this.$store.commit('user:logout')
            this.$store.commit('auth:logout')

            this.$router.push('/')
        }
    },

    computed : {
        ...mapGetters([
            'user',
        ])
    },

}

</script>
