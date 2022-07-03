<template>
    <div class="absolute top-0 z-10 w-full">
        <PageHeader />
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
import PageHeader from '../src/components/PageHeader.vue'
import { nextTick } from 'vue'

export default {

    name: 'LandingView',

    components: {
        PageHeader,
        LandingSignup,
        LandingLogin,
        LandingAbout,
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
                hashed_password: user.password,
            })
                .then(({ data }) => {
                    this.$store.commit('auth:login', decodeURIComponent(data.auth))
                    this.$store.commit('user:login', data.username)

                    nextTick(() => {
                        this.$router.push({ name: 'Dashboard' })
                    })

                })
                .catch((error) => {
                    console.log(error)
                })
        },
        register({ user }) {

            this.$axios.post('/user/register', {
                username: user.username,
                email: user.email,
                hashed_password: user.password,
            }).then(({ data }) => {
                this.$store.commit('auth:login', decodeURIComponent(data.auth))
                this.$store.commit('user:login', data.username)

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
