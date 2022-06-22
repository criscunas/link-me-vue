
<template>

    <div class="px-2 py-4 mb-4 border rounded-md">
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
                <FormKit type="textarea" v-model="newBio" rows=3 :classes="{
                    inner: 'bio-inner',
                    input: 'bio-input'
                }" />
                <div class="text-right">
                    <button class="form-btn mt-4" @click="onSubmit(newBio)">
                        Submit
                    </button>
                </div>
            </div>
        </label>
    </label>

</template>


<script>


export default {

    data() {
        return {
            newBio: ''
        }
    },

    methods: {
        onSubmit(value) {

            this.$axios.post('user/updateBio', {
                bio: value
            })
                .then((res) => {
                    this.bio = res.data.bio
                })
                .catch((err) => {
                    console.log(err)
                })

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
