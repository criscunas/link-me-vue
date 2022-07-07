<template>
    <LinkModal :title="modal.type" :modalOpen="modal.isOpen" @close-modal="modal.isOpen = false">

        <div class="px-5 py-2">
            <div class="text-sm">
                <div class="mb-3">
                    <div v-if="modal.type !== 'delete'" class="my-4">
                        <label class="block text-sm font-medium mb-1 mx-1" for="default">Link Name</label>
                        <FormKit
                            type="text"
                            v-model="values.name"
                            placeholder="Link Caption"
                            :classes="{
                                inner: 'form-inner',
                                input: 'form-input'
                            }"
                        />
                    </div>
                    <div v-if="modal.type === 'delete'" class="my-4">
                        <p>Are you sure you want to delete this?</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-5 py-4">
            <div class="flex flex-wrap justify-end space-x-2">
                <button
                    class="btn-sm form-btn bg-slate-500 text-white"
                    @click='modal.isOpen = false'
                >
                    Cancel
                </button>

                <button
                    v-if="this.modal.type !== 'delete'"
                    class="btn-sm form-btn"
                    @click="onModalSubmit(this.modal.type, this.modal.link)"
                >
                    Update
                </button>

                <button
                    v-else class="btn-sm text-white bg-rose-500"
                    @click="onModalSubmit(this.modal.type, this.modal.link)"
                >
                    Delete
                </button>
            </div>
        </div>

    </LinkModal>


    <div class="">

        <UserHeader />

        <div class="mt-8 max-w-5xl m-auto tablet:flex tablet:mt-12">

            <!-- User display & link form. -->
            <div>
                <UserDisplay
                    :username="user.username"
                    :bio="user.bio"
                    @bio-update="bioSubmit"
                />
                <LinkForm
                    :links="links"
                    @on-submit="addLink"
                />
            </div>

            <div class="ml-12">

                <h1 class="dashboard-header mb-2">Links</h1>

                <div class="text-center font-semibold mt-8" v-if="links.length === 0">
                    No links added yet.
                </div>

                <!-- Rendering links. -->
                <ul class="py-4 flex flex-col tablet:grid grid-cols-2 gap-x-8 gap-y-4">
                    <li v-for="(link, index) in user.links" :key="index" class="list-none">
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title flex">
                                <div class="flex items-center gap-6">
                                    <img class="h-10" :src="link.img_path" />
                                    <p class="font-semibold"> {{ link.caption }} </p>
                                </div>
                            </div>

                            <div class="collapse-content">
                                <p class="text-base text-center font-semibold"> {{ link.url }} </p>
                                <div class="flex justify-evenly px-2 gap-6 mt-4">
                                    <div
                                        class="modal-btn"
                                        @click="openLinkModal('editUrl', link)"
                                    >
                                        Edit Url
                                    </div>
                                    <div
                                        class="modal-btn"
                                        @click="openLinkModal('editCaption', link)"
                                    >
                                        Edit Caption
                                    </div>
                                    <div
                                        class="modal-btn bg-red-500"
                                        @click="openLinkModal('delete', link)"
                                    >
                                        Delete
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <div>
                    <ProfilePreview
                        :user="user"
                        :styles = "this.styles"
                        :links="user.links"
                        @on-submit="addStyles"
                    />
                </div>
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

            links: [],

            values: {
                name: ""
            },

            styles : {
                type: Object
            },

            user: {
                type: Object,
                links: Object,
            },

            modal: {
                isOpen: false,
                type: 'editUrl',
                link: null,
            },
        }
    },



    created() {
        this.getUser()
        this.getStyles()
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
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        getStyles() {
            this.$axios.get('/profile/styles')
                .then(({data}) => {
                    this.styles = data.styles
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        addLink({ link }) {
            this.$axios.post('/link/add', {
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
            this.$axios.post('/user/updateBio', {
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

                let body = {
                    id: link.id,
                }

                this.$axios.delete('/link/delete', {
                    data: body,
                }).then(({ data }) => {
                    this.links = data.payload.links
                }).catch((error) => {
                    console.log(error)
                })
            }

            if (type === "editUrl") {
                this.$axios.put('/link/url', {
                    id: link.id,
                    url: this.values.name,
                }).then(({ data }) => {
                    this.links = data.payload.links
                }).catch((error) => {
                    console.log(error)
                })
            }

            if (type === "editCaption") {
                this.$axios.put('/link/url', {
                    id: link.id,
                    caption: this.values.name,
                }).then(({ data }) => {
                    this.links = data.payload.links
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        addStyles({ styles }) {
            this.styles = styles
        },

    }
}

</script>

