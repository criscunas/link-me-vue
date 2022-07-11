<template>

    <!-- v-select options for editing profile  -->
    <div class="mt-4">
        <h1 class="dashboard-header mb-4"> Customize Profile </h1>
        <v-select
            v-model="color.type"
            :options="options"
            :reduce="label => label.name"
            label="label">
        </v-select>
        <div class="mt-4 flex items-center gap-4 justify-center">
            <p class="font-semibold"> Select color </p>
            <FormKit
                type="color"
                v-model="color.value"
            />
        </div>
        <div class="text-right mt-2">
            <button class="form-btn" @click="submitStyles">
                Submit
            </button>
        </div>
    </div>


    <!-- Profile Preview  -->
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
                        <div class="w-24 mask mask-squircle mt-4">
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
                        <li v-for="(link, index) in links" :key="index"
                            class="list-none flex items-center py-2 gap-4">
                            <div class="avatar">
                                <div class="w-10 rounded-full">
                                    <img :src="link.img_path" />
                                </div>
                            </div>
                            <p
                                :style="{color: styles.text_color}"
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
            color : {
                type : 'bg_color',
                value: ''
            },

            options : [
                {name: 'bg_color', label: 'Background Color'},
                {name: 'username_color', label: 'Username Color'},
                {name: 'text_color', label: 'Text Color'},
                {name: 'bio_color', label: 'Biography Color'}
            ]
        }
    },

    props: {

        user: {
            type: Object,
        },

        links : {
            type : Object,
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
                style : {
                    type: this.color.type,
                    color: this.color.value
                }
            }

            this.$emit('on-submit', data)
        },

        setStyleType(type) {
            this.color.type = type
        },
    }
}
</script>
