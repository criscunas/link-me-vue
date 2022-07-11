<template>

    <!-- Profile page with user selected styles.  -->
    <div
        :style="{backgroundColor: styles.bg_color}"
        class="max-w-5xl h-[100vh] m-auto tablet:flex justify-evenly tablet:max-w-5xl">

        <div class="py-8">

            <div class="flex flex-col text-center">
                <div class="avatar justify-center">
                    <div class="w-24 mask mask-squircle">
                        <img src="../../public/images/avataaars.png" />
                    </div>
                </div>

                <h1
                    :style="{color: styles.username_color}"
                    class="font-semibold text-center text-xl mt-4"
                >
                    @{{ user.username }}
                </h1>

                <h1
                    :style="{color: styles.bio_color}"
                    class="font-semibold text-center text-lg my-4"
                >
                    {{ user.bio }}
                </h1>


                <div v-for="(link, index) in user.links" :key="index" class="flex flex-col justify-center">
                    <div class="my-4">
                        <div class="avatar">
                            <div class="w-24 rounded">
                                <img :src="link.img_path" />
                            </div>
                        </div>
                        <div>
                            <a
                                :style="{color: styles.text_color}"
                                class="font-semibold"
                                :href="'//' + link.url"
                                target = "_blank"
                            >
                                {{ link.caption }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>



export default {

    name: 'ProfilePage',

    data() {
        return {
            styles : {
                bg_color: String,
                text_color: String,
                bio_color: String,
                username_color:String,
            },
            user: {
                username: String,
                bio: String,
                links: Object,
            }
        }
    },

    created() {
        this.fetchUser()
    },

    methods: {
        // Would change this api route to be accesible for anyone.
        fetchUser() {
            this.$axios.get('/user/get')
                .then(({ data }) => {
                    this.user = data.user
                    this.styles = data.user.styles
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    }

}

</script>

