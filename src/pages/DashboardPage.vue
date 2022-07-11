<template>
    <LinkModal :title="modal.type" :modalOpen="modal.isOpen" @close-modal="modal.isOpen = false">

        <div class="px-5 py-2">
            <div class="text-sm">
                <div class="mb-3">
                    <div v-if="modal.type !== 'delete'" class="my-4">
                        <label class="block text-sm font-medium mb-1 mx-1" for="default">Edit Caption</label>
                        <FormKit type="text" v-model="values.caption" placeholder="Link Caption" :classes="{
                            inner: 'form-inner',
                            input: 'form-input'
                        }" />

                        <label class="block text-sm font-medium mt-4 mb-1 mx-1" for="default">Edit Url</label>
                        <FormKit type="text" v-model="values.url" placeholder="Link Url" :classes="{
                            inner: 'form-inner',
                            input: 'form-input'
                        }" />
                    </div>
                    <div v-if="modal.type === 'delete'" class="my-4">
                        <p>Are you sure you want to delete this?</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-5 py-4">
            <div class="flex flex-wrap justify-end space-x-2">
                <button class="btn-sm form-btn bg-slate-500 text-white" @click='modal.isOpen = false'>
                    Cancel
                </button>

                <button v-if="this.modal.type !== 'delete'" class="btn-sm form-btn"
                    @click="onModalSubmit(this.modal.type, this.modal.link)">
                    Update
                </button>

                <button v-else class="btn-sm text-white bg-rose-500"
                    @click="onModalSubmit(this.modal.type, this.modal.link)">
                    Delete
                </button>
            </div>
        </div>

    </LinkModal>


    <UserHeader />

    <div class="mt-8 px-4 max-w-6xl m-auto tablet:flex justify-evenly tablet:mt-12">

        <!-- User display & link form. -->
        <div>
            <UserDisplay :username="user.username" :bio="user.bio" @bio-update="bioSubmit" />
            <LinkForm :links="links" @on-submit="addLink" />
        </div>

        <div class="ml-12">

            <h1 class="dashboard-header mb-2">Links</h1>

            <div class="text-center font-semibold mt-8" v-if="links.length === 0">
                No links added yet.
            </div>

            <!-- Rendering links. -->
            <ul class="py-4 flex flex-col tablet:grid grid-cols-2 gap-x-8 gap-y-4">
                <li v-for="(link, index) in links" :key="index" class="list-none">
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title flex">
                            <div class="flex items-center gap-6">
                                <img class="h-10" :src="link.img_path" />
                                <p class="font-semibold"> {{ link.caption }} </p>
                            </div>
                        </div>

                        <div class="collapse-content">
                            <p class="text-base text-center font-semibold"> {{ link.url }} </p>
                            <div class="flex justify-evenly px-2 gap-4 mt-4">
                                <div class="modal-btn" @click="openLinkModal('edit', link)">
                                    Edit
                                </div>
                                <div class="modal-btn bg-red-500" @click="openLinkModal('delete', link)">
                                    Delete
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <div>
                <ProfilePreview :user="user" :styles="styles" :links="links" @on-submit="addStyles" />
            </div>
        </div>
    </div>
</template>



<script>
import UserHeader from '@/components/UserHeader.vue'
import UserDisplay from '@/components/UserDisplay.vue'
import LinkModal from '@/modals/LinkModal.vue'
import LinkForm from '@/components/LinkForm.vue';
import ProfilePreview from '@/components/ProfilePreview.vue';
import { mapGetters } from 'vuex';

export default {

    name: 'DashboardPage',

    computed: {
        ...mapGetters([
            'isAuthenticated',
        ])
    },

    data() {
        return {

            avatar: {
                type: String,
            },

            links: {
                type: Object,
            },

            values: {
                caption: null,
                url: null,
            },

            styles: {
                bg_color: String,
                username_color: String,
                bio_color: String,
                text_color: String,
            },

            user: {
                type: Object,
            },

            modal: {
                isOpen: false,
                type: 'edit',
                link: null,
            },
        }
    },

    beforeCreate() {
        let token = this.$cookies.get('auth');

        if(!token) {
            this.$router.push('/')
        }
        this.$axios.defaults.headers.Authorization = `Bearer ${token}`
    },

    created() {
        this.getUser()
    },

    components: {
        UserHeader,
        UserDisplay,
        LinkForm,
        ProfilePreview,
        LinkModal,
    },

    methods: {

        getUser() {
            this.$axios.get('/user/get')
                .then(({ data }) => {
                    this.user = data.user
                    this.links = data.user.links
                    this.styles = data.user.styles
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        getStyles() {
            this.$axios.get('/profile/styles')
                .then(({ data }) => {
                    this.styles = data.styles
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        addLink({ link }) {
            this.$axios.post('/links', {
                site: link.site,
                url: link.url,
                caption: link.caption,
            })
                .then(({ data }) => {
                    this.links = data.links
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        bioSubmit({ bio }) {
            this.$axios.post('/user/bio', {
                bio: bio
            })
                .then(({ data }) => {
                    this.user.bio = data.bio
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        onModalClose() {
            this.modal.isOpen = false
            this.modal.link = null
        },

        openLinkModal(type, link) {
            this.modal.isOpen = true
            this.modal.type = type
            this.modal.link = link
        },

        onModalSubmit(type, link) {
            this.onModalClose()

            if (type === "delete") {
                this.$axios.delete(`/links/delete/${link.id}`)
                    .then(({ data }) => {
                        this.links = data.links
                    }).catch((error) => {
                        console.log(error)
                    })
            }

            if (type === 'edit') {

                if (!this.values.caption) {
                    this.$axios.put(`/links/url/${link.id}`, {
                        url: this.values.url
                    }).then(({data}) => {
                        this.links = data.links
                        this.values.url = null

                    }).catch((error) => {
                        console.log(error)
                    })

                }

                if (!this.values.url) {
                    this.$axios.put(`/links/caption/${link.id}`, {
                        caption: this.values.caption
                    }).then(({data}) => {
                        this.links = data.links
                        this.values.caption = null
                    }).catch((error) => {
                        console.log(error)
                    })
                }
            }

        },
        addStyles({ style }) {

            // Checking type passed from modal, making api call based off that.
            const { type, color } = style;

            if (type === "bg_color") {
                this.$axios.post('/style/background', {
                    bg_color: color
                }).then(({ data }) => {
                    this.styles.bg_color = data.bg_color
                }).catch((error) => {
                    console.log(error)
                })
            }

            if (type === "username_color") {
                this.$axios.post('/style/username', {
                    username_color: color
                }).then(({ data }) => {
                    this.styles.username_color = data.username_color
                }).catch((error) => {
                    console.log(error)
                })
            }

            if (type === "text_color") {
                this.$axios.post('/style/text', {
                    text_color: color
                }).then(({ data }) => {
                    this.styles.text_color = data.text_color
                }).catch((error) => {
                    console.log(error)
                })
            }

            if (type === "bio_color") {
                this.$axios.post('/style/biography', {
                    bio_color: color
                }).then(({ data }) => {
                    this.styles.bio_color = data.bio_color
                }).catch((error) => {
                    console.log(error)
                })
            }
        },

    }
}

</script>

