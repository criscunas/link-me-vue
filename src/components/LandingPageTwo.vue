<template>
  <div class="mx-4">
  <div class="form-div">
      <h1 class="text-black text-2xl text-center"> Welcome back <span class="ml-2" >👋</span> </h1>
      <div class="pt-6 flex flex-col gap-4">
        <FormKit type="text" v-model="data.username" label="Username" :classes="{
          label: 'form-label',
          inner: 'form-inner',
          input: 'form-input'
        }" />
        <FormKit label="Password" type="password" v-model="data.password" :classes="{
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

import { useUserStore } from '@/store/user'
import { HTTP } from "../../http-common"

export default {
  setup() {
    const userStore = useUserStore()
    return {userStore}
  },
  data() {
    return {
       data: {
          username:'',
          password: ''
        }
    }
  },
  methods : {
    async onSubmit () {
      
      const res = await HTTP.post('user/login', {
          username: this.data.username,
          password: this.data.password
      })
      
      if(res.data.auth) {
        
        this.$cookies.set('auth', res.data.auth)
        
        this.userStore.$patch((state) => {
          state.isAuth = true ,
          state.user = this.data.username
        })

        this.$router.push('/dashboard')
      }

      else {
        console.log('Bad Login')
      }

    }
  }
}
</script>
