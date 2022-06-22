<template>
    <UserHeader />
    <div class="mx-4 max-w-md m-auto tablet:max-w-7xl">

        <!-- User Avatar and Bio -->
        <div>
            <ImageForm />
            <BioForm />
        </div>

        <div>
            <IconForm :links="links" @submit="addLink" />
        </div>

        <div>
            <RenderLinksVue
                :links="links"
                :styles="styles"
                :bio="bio"
            />
        </div>

    </div>
</template>



<script>
import { useUserStore } from '@/store/user'
import UserHeader from '@/components/UserHeader.vue'
import ImageForm from '@/components/ImageForm.vue'
import BioForm from '@/components/BioForm.vue';
import IconForm from '@/components/IconForm.vue';
import RenderLinksVue from '@/components/RenderLinks.vue';
import { HTTP } from '../http-common';
import axios from 'axios';


export default {

    setup() {

        const userStore = useUserStore()
        return { userStore }

    },

    data() {
        return {
            username: this.userStore.user,
            bio: '',
            avatar: '',
            links: [],
            styles: {},

        }
    },

    created() {

        if (!this.$cookies.get('auth')) {
            this.$router.push('/')
        }

        else {
            this.getUser()
            this.getStyles()
            this.getLinks()
        }

    },

    components: {
        UserHeader,
        ImageForm,
        BioForm,
        IconForm,
        RenderLinksVue
    },

    methods: {

        getUser() {

            axios.get('http://localhost:4040/user/get', {
                headers: {
                    Authorization: 'Bearer ' + this.$cookies.get('auth')
                }
            })
                .then(({ data }) => {
                    this.bio = data.user.bio
                })
                .catch((error) => {
                    console.log(error)
                })

        },

        getLinks() {

            axios
                .get('http://localhost:4040/link/get', {
                    headers: {
                        Authorization: 'Bearer ' + this.$cookies.get('auth')
                    }
                })
                .then(({ data }) => {
                    this.links = data.links
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        addLink({ url, site, caption }) {

            console.log(url, site, caption)

        },

        getStyles() {
            HTTP
                .get('profile/styles')
                .then(({ data }) => {
                    this.styles = data.styles
                })
        }

    }
}

</script>

