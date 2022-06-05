<script>

  import { useUserStore} from '@/store/user'

  export default {
    setup() {
      const userStore = useUserStore()
      return {userStore}
    },
    props : {
      scrollHandle: Function
    },
    data() {
      return {
        data: {
          username:'',
          email: '',
          password: ''
        }
      }
    },
    methods : {
      onSubmit () {
        this.userStore.createNewUser(this.data)
      }
    }
  }
</script>

<template>
  <div class="mx-4">
    <div>
      <h1 class="text-white text-7xl"> Your Social Space in One Place</h1>
      <h2 class="text-white text-2xl pt-6 pb-12 " >Connect all your platforms into one shareable link.</h2>
    </div>
    
    <div class ="form-div">
      <h1 class="text-3xl pb-2"> Create an account </h1>
        <p class="text-base pb-6"> Already have an account? 
          <span class= "text-decoration-line: underline" @click="scrollHandle" > Log in </span>
        </p>
      <div class="flex flex-col gap-2">
      <FormKit 
        type="text"
        v-model = "data.username"
        label="Username"
        :classes="{
          label: 'form-label',
          inner: 'form-inner',
          input: 'form-input'
        }"
      />
      <FormKit 
        type="text"
        label="Email"
        v-model="data.email"
        :classes="{
          label: 'form-label',
          inner: 'form-inner',
          input: 'form-input'
        }"
      />
      <FormKit 
        label="Password"
        type="password"
        v-model = "data.password"
        :classes="{
          label: 'form-label',
          inner: 'form-inner',
          input: 'form-input'
        }"
      />
      </div>
      <div class="text-right mt-4">
        <button class="form-btn" @click="onSubmit">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>