
<template>

  <div class="px-2 py-4 mb-4 border rounded-md">
    <p class="dashboard-body text-center" v-if = "!bio"> Your bio here.</p>
    <p class="dashboard-body text-center" v-else> {{bio}} </p>
  </div>

  <div class="text-right">
    <label for="bio-modal" class="dashboard-btn"> Edit Bio </label>    
  </div>

    <input type="checkbox" id="bio-modal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box relative">
        <label for="bio-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div class="mt-6">
            <p class="main-text text-[1.2rem] text-black mb-4"> Update your Profile Bio</p>
            <FormKit
              type = "textarea"
              v-model = "newBio"
              rows = 3
              :classes="{
                inner: 'bio-inner',
                input: 'bio-input'
              }"
            />
            <button class="form-btn mt-4" @click="bioHandle(newBio)">
              Submit
            </button>
          </div>
      </div>
  </div>
</template>


<script>
import { useUserStore } from '@/store/user'

export default {
  setup() {
    const userStore = useUserStore()
    return {userStore}
  },
  props: {
    bio: String,
    bioHandle: Function,
  },
  data () {
    return {
      newBio : ''
    }
  },
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
