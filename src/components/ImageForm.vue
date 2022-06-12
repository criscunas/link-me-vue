<script>

import { useUserStore } from '@/store/user'

export default {
  setup() {
    const userStore = useUserStore()
    return { userStore }
  },
  props: {
    imgHandle: Function,
  },
  data() {
    return {
      file: [],
      username: this.userStore.user,
    }
  }
}
</script>

<template>

  <div class="py-6 tablet:py-10">
    <h1 class="dashboard-header pb-6"> Hello {{ username }} <span class="ml-2">👋</span> </h1>
    <div class="flex justify-center ">
      <div class="avatar">
        <div class="w-24 mask mask-squircle">
          <img src="../../public/images/profile.png" />
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
            <button class="form-btn" @click="imgHandle(this.file)">
              Submit
            </button>
          </div>
        </label>
      </label>
    </div>
  </div>
</template>

<style>
.formkit-no-files {
  display: none;
}

input[type="file"] {
  text-align: center;
}

.img-form_label {
  font-weight: 600;
  font-size: 1rem;
}

.img-form_input {
  margin: 0.5rem 0;
}

.img-form_inner {
  overflow: hidden;
}

.formkit-file-name {
  display: none;
}
</style>

