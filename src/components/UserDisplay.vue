<template>

    <div class="pb-6 tablet:pb-10">
        <h1 class="dashboard-header pb-6"> Hello {{ username }} <span class="ml-2">👋</span> </h1>
        <div class="flex justify-center ">
            <div class="avatar">
                <div class="w-24 mask mask-squircle">
                    <img src="../../public/images/avataaars.png" />
                </div>
            </div>


            <label for="img-modal" class="text-xl font-bold self-end ml-2 cursor-pointer "> + </label>
            <input type="checkbox" id="img-modal" class="modal-toggle" />
            <label for="img-modal" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <FormKit type="file" v-model="file" accept=".jpg,.png,.pdf" label="Upload Profile Photo" :classes="{
                        inner: 'img-form_inner',
                        input: 'img-form_input',
                        label: 'img-form_label'
                    }" />
                    <div class="text-right mt-2">
                        <button class="form-btn">
                            Submit
                        </button>
                    </div>
                </label>
            </label>
        </div>

        <div class="px-2 py-4 my-4 border rounded-md">
            <p class="dashboard-body text-center" v-if="!bio"> Your bio here.</p>
            <p class="dashboard-body text-center" v-else> {{ bio }} </p>
        </div>

        <div class="text-right">
            <label for="my-modal-4" class="form-btn modal-button">Edit Bio</label>
        </div>

        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <label for="my-modal-4" class="modal cursor-pointer">
            <label class="modal-box relative" for="">
                <div>
                    <p class="main-text text-[1.2rem] text-black mb-4"> Update your Profile Bio</p>
                    <form class="w-full">
                        <div class="md:flex md:items-center mb-6">
                            <div class="">
                                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="inline-full-name">
                                    Full Name
                                </label>
                            </div>
                            <div class="w-full">
                                <input
                                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="inline-full-name" type="text" v-model="values.newBio">
                            </div>
                        </div>

                    </form>
                    <div class="text-right">
                        <button class="form-btn mt-4" @click="bioSubmit">
                            Submit
                        </button>
                    </div>
                </div>
            </label>
        </label>
    </div>

</template>


<script>

export default {

    data() {
        return {
            file: [],
            values: {
                newBio: ''
            },
        }
    },

    props: {
        username: {
            type: String,
        },
        bio: {
            type: String,
        },
    },

    emits: ['bio-update'],

    methods: {
        bioSubmit() {

            let data;

            data = {
                bio: this.values.newBio
            }

            this.$emit('bio-update', data)
        }
    }
}


</script>


<style>
.bio-input {
    resize: none;
    width: 100%;
    height: max-content;
}

.bio-inner {
    border: 1px solid gray;
    border-radius: 8px;
    overflow: hidden;
}
</style>
