<template>
    <div class="mx-4">
        <div class="form-div">
            <h1 class="text-black text-2xl text-center"> Welcome back <span class="ml-2">👋</span> </h1>
            <div class="pt-6 flex flex-col gap-4">
                <FormKit type="text" v-model="values.username" label="Username" :classes="{
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

    name: 'LandingLogin',

    data() {
        return {
            values: {
                username: '',
                password: ''
            }
        }
    },

    emits: ['login-user'],

    methods: {
        onSubmit() {
            let data;

            data = {
                user: {
                    username: this.values.username,
                    password: this.values.password
                }
            }

            this.$emit('login-user', data)

        }
    }
}
</script>
