<template>

    <h1 class="dashboard-header"> {{ username }}'s links</h1>

    <div class="text-center font-semibold mt-8" v-if="links.length === 0">
        No links added yet.
    </div>

    <ul class="py-4 flex flex-col tablet:grid grid-cols-2 gap-x-8 gap-y-4">
        <li v-for="(link, index) in links" :key="index" class="list-none">
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="flex items-center gap-6 pb-3">
                        <img class="icon" :src="link.img_path" />
                        <p class="font-semibold"> {{ link.caption }} </p>
                    </div>
                    <p class="text-base text-center"> {{ link.url }} </p>
                    <div class="flex gap-6 justify-center pt-2">
                        <LinkEditModal :type = 'editModal' :url="link.url" :caption="link.caption" @submit="onModalSubmit" />
                        <LinkEditModal :type = "deleteModal" :url="link.url" :caption="link.caption" @submit="onModalSubmit" />
                    </div>
                </div>
            </div>
        </li>
    </ul>


    <div class="mt-4">
        <h1 class="dashboard-header mb-8"> {{ username }}'s profile </h1>
        <div class="mt-4 mockup-phone w-[290px] flex justify-center flex-col">
            <div class="camera"></div>
            <div class="display">
                <div class="artboard artboard-demo phone-1" :style="{ backgroundColor: styles.bg_color }">
                    <div class="avatar">
                        <div class="w-24 mask mask-squircle">
                            <img src="../../public/images/avataaars.png" />
                        </div>
                    </div>
                    <p :style="{ color: styles.username_color }" class="font-semibold text-xl mt-2">@{{ username }}</p>
                    <p :style="{ color: styles.bio_color }" class="font-semibold text-base mt-2 "> {{ bio }}</p>
                    <ul class="mt-6">
                        <li v-for="(link, index) in links" :key="index" class="list-none flex items-center py-2 gap-4">
                            <img class="phone-icon" :src="link.img_path" />
                            <p :style="{ color: styles.text_color }" class="font-semibold">{{ link.caption }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import { useUserStore } from '@/store/user';
import LinkEditModal from '@/modals/LinkEditModal.vue';
import axios from 'axios';

export default {

    setup() {
        const userStore = useUserStore()
        return { userStore }
    },

    created() {
        this.getLinks()
    },

    data() {
        return {
            username: this.userStore.user,
            editModal: 'Edit',
            deleteModal: 'Delete' ,
            links: [],
        }
    },


    components: {
        LinkEditModal
    },

    props: {
        bio: String,
        styles: Object,
    },

    methods: {

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

        onModalSubmit(type, {url, caption}) {

            if(type === "Edit") {
                console.log(caption)
            }

            if(type === "Delete") {
                console.log(url)
            }

        }
    }

}
</script>


<style>
.icon {
    height: 3.5rem;
}

.artboard.phone-1 {
    width: auto;
}

.phone-icon {
    height: 2rem;
}

.links-full {
    color: red;
}
</style>

