<template>
    <div class="absolute top-0 z-10 w-full">
    <header class="px-8 py-4">
        <nav class="flex justify-between">
            <h1 class="header-text text-white">link.me</h1>
            <p class="header-text text-base text-white"> About </p>
        </nav>
    </header>
    </div>
    <full-page :options="options" ref="fullpage">
        <div class="section">
            <LandingSignup :scrollHandle="scrollDown" @register-user="register" />
        </div>
        <div class="section">
            <LandingLogin @login-user="login" />
        </div>
        <div class="section">
            <LandingAbout />
        </div>
    </full-page>
</template>


<script>

import LandingLogin from '../src/subpages/LandingLogin.vue'
import LandingSignup from '../src/subpages/LandingSignup.vue'
import LandingAbout from '../src/subpages/LandingAbout.vue'
import { nextTick } from 'vue'

export default {

    name: 'LandingView',

    components: {
        LandingSignup,
        LandingLogin,
        LandingAbout,
    },

    created() {
        if(this.$cookies.isKey('auth')) {
            this.$router.push('/dashboard')
        }
    },

    data() {
        return {
            options: {
                licenseKey: 'YOUR_KEY_HEERE',
                menu: '#menu',
                anchors: ['page1', 'page2', 'page3'],
                sectionsColor: ['#264653', '#f4a261', '#db3a34'],
            },
        }
    },

    methods: {
        scrollDown() {
            this.$refs.fullpage.api.moveSectionDown()
        },

        login({ user }) {
            this.$axios.post('/user/login', {
                username: user.username,
                password: user.password,
            })
                .then(({ data }) => {
                    this.$cookies.set("auth", decodeURIComponent(data.auth))

                    nextTick(() => {
                        this.$router.push({ name: 'Dashboard' })
                    })

                })
                .catch((error) => {
                    console.log(error)
                })
        },
        register({ user }) {

            this.$axios.post('/user/create', {
                username: user.username,
                password: user.password,
            }).then(({ data }) => {

                this.$cookies.set("auth", decodeURIComponent(data.auth))

                nextTick(() => {
                    this.$router.push({ name: 'Dashboard' })
                })

            }).catch((error) => {
                console.log(error)
            })
        }
    },
}
</script>
