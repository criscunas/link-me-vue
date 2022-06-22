<template>
    <label for="delete-link-modal" v-if="type === 'Delete'">
        <XCircleIcon class="h-5 w-5 text-red-500 cursor-pointer" />
    </label>

    <input type="checkbox" id="delete-link-modal" class="modal-toggle" v-if="type === 'Delete'" />
    <label for="delete-link-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="edit-link-modal">
            <div>
                Are you sure you want to delete?
            </div>
            <button @click="onSubmit">
                Delete
            </button>
        </label>
    </label>


    <label for="edit-link-modal" v-if="type === 'Edit'">
        <PencilIcon class="h-5 w-5 text-green-500 cursor-pointer" />
    </label>

    <input type="checkbox" id="edit-link-modal" class="modal-toggle" v-if='type === "Edit"' />
    <label for="edit-link-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="edit-link-modal">
            <div>
                <p>Edit url link: {{caption}} </p>

                <FormKit v-model="newLink" placeholder="Enter new link." :classes="{
                    inner: 'form-inner',
                    input: 'form-input'
                }" />
            </div>
            <button @click="onSubmit">
                Edit Link
            </button>
        </label>
    </label>
</template>



<script>
import { PencilIcon, XCircleIcon } from '@heroicons/vue/solid';

export default {

    props: {
        type: String,
        url: String,
        caption: String,
    },

    emits: ['submit'],

    data () {
        return {
            newLink: ''
        }
    },

    components: {
        PencilIcon,
        XCircleIcon
    },

    methods : {
        onSubmit() {
            let data;

            if(this.type === "Delete") {

                data = {
                    url: this.url
                }

            }

            if(this.type === "Edit") {

                data = {
                    caption: this.caption
                }
                console.log('Editing List')
            }

            this.$emit('submit', this.type, data)
        }
    },
}

</script>
