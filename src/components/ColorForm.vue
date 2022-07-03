<template>

    <div>
        <h1 class="dashboard-header mb-4"> Customize Profile </h1>
        <div class="grid grid-cols-2 gap-y-4 gap-x-4">
            <FormKit type="color" v-model="bg_color" label="Background color" :classes="{
                label: 'color-label', inner: 'color-inner'
            }" />
            <FormKit type="color" v-model="text_color" label="Caption color" :classes="{
                label: 'color-label', inner: 'color-inner'
            }" />
            <FormKit type="color" v-model="username_color" label="Username color" :classes="{
                label: 'color-label', inner: 'color-inner', input: 'color-input'
            }" />
            <FormKit type="color" v-model="bio_color" label="Bio color" :classes="{
                label: 'color-label', inner: 'color-inner'
            }" />
        </div>
        <div class="text-right mt-2">
            <button class="form-btn">
                Submit
            </button>
        </div>
    </div>

</template>


<script>

export default {

    data() {
        return {
            bg_color: '',
            text_color: '',
            username_color: '',
            bio_color: '',
            color: ''
        }
    },
    methods: {
        submitStyles() {
            
        }
    }

}
</script>


<style>
.color-label {
    font-size: 1.1rem;
}

.color-inner {
    padding: 1rem;
}

.color-input {
    padding: 0 1rem;
}
</style>

