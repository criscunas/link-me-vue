<template>

    <div class="mt-4">
        <h1 class="dashboard-header tablet:"> Customize Profile </h1>
        <div class="grid grid-cols-2 gap-y-4 gap-x-4">
            <FormKit
                type="color"
                v-model="bg_color"
                label="Background color"
                :classes="{
                    label: 'color-label', inner: 'color-inner'
                }"
            />
            <FormKit
                type="color"
                v-model="text_color"
                label="Caption color"
                :classes="{
                    label: 'color-label', inner: 'color-inner'
                }"
            />
            <FormKit
                type="color"
                v-model="username_color"
                label="Username color"
                :classes="{
                    label: 'color-label', inner: 'color-inner'
                }"
            />
            <FormKit
                type="color"
                v-model="bio_color"
                label="Bio color"
                :classes="{
                    label: 'color-label', inner: 'color-inner'
                }"
            />
        </div>
        <div class="text-right mt-2">
            <button class="form-btn" @click="submitStyles">
                Submit
            </button>
        </div>
    </div>


    <div>
        <h1 class="dashboard-header mb-4"> {{ user.username }}'s profile </h1>
        <router-link to="/Profile">
            Preview
        </router-link>
        <div class="mt-4 mockup-phone w-[290px] flex flex-col">
            <div class="camera"></div>
            <div class="display flex justify-center">
                <div class="artboard artboard-demo phone-1" :style="{backgroundColor: styles.bg_color}"  >
                    <div class="avatar">
                        <div class="w-24 mask mask-squircle">
                            <img src="../../public/images/avataaars.png" />
                        </div>
                    </div>
                    <p
                        class="font-semibold text-xl mt-2"
                        :style="{color: styles.username_color}">
                            @{{ user.username }}
                    </p>
                    <p
                        :style="{color: styles.bio_color}"
                        class="font-semibold text-center text-sm mt-2 w-[75%] ">
                            {{ user.bio }}
                    </p>
                    <ul class="mt-6">
                        <li v-for="(link, index) in user.links" :key="index"
                            class="list-none flex items-center py-2 gap-4">
                            <div class="avatar">
                                <div class="w-10 rounded-full">
                                    <img :src="link.img_path" />
                                </div>
                            </div>
                            <p
                                :style="{color: styles.caption_color}"
                                class="font-semibold">
                                    {{ link.caption }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {

    name: 'ProfilePreview',

    data() {
        return {
            bg_color: '',
            text_color: '',
            username_color: '',
            bio_color: '',
        }
    },

    props: {

        user: {
            type: Object,
            links: Object,
        },

        styles :{
            type: Object,
        }
    },

    emits: ['on-submit'],

    methods: {
        submitStyles() {

            let data;

            data = {
                styles : {
                    bg_color: this.bg_color,
                    caption_color: this.text_color,
                    username_color: this.username_color,
                    bio_color: this.bio_color
                }
            }

            this.$emit('on-submit', data)
        }
    }
}
</script>
