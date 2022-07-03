<template>
    <div class="mx-4">
        <div>
            <h1 class="text-white text-7xl"> Your Social Space in One Place</h1>
            <h2 class="text-white text-2xl pt-6 pb-12 ">Connect all your platforms into one shareable link.</h2>
        </div>

        <div class="form-div">
            <h1 class="text-3xl pb-2"> Create an account </h1>
            <p class="text-base pb-6"> Already have an account?
                <span class="text-decoration-line: underline" @click="scrollHandle"> Log in </span>
            </p>
            <div class="flex flex-col gap-2">
                <FormKit type="text" v-model="values.username" label="Username" :classes="{
                    label: 'form-label',
                    inner: 'form-inner',
                    input: 'form-input'
                }" />
                <FormKit type="text" label="Email" v-model="values.email" :classes="{
                    label: 'form-label',
                    inner: 'form-inner',
                    input: 'form-input'
                }" />
                <FormKit label="Password" type="password" v-model="values.password" :classes="{
                    label: 'form-label',
                    inner: 'form-inner',
                    input: 'form-input'
                }" />
            </div>
            <div class="text-right mt-4">
                <button class="form-btn" @click="onSubmit">
                    Submit
                </button>
            </div>
        </div>
    </div>
</template>



<script>

export default {

    name: 'LandingSignup',

    props: {
        scrollHandle: Function
    },

    emit: ['register-user'],

    data() {
        return {
            values: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {

            let data;

            data = {
                user : {

                username: this.values.username,
                email: this.values.email,
                password: this.values.password
                }
            }

            this.values.username = ""
            this.values.email = ""
            this.values.password = ""


            this.$emit('register-user', data)
        }
    }
}
</script>
