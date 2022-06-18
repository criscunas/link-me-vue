<script>

  import { useUserStore } from "./store/user";
  import {HTTP} from '../http-common'

  export default {

    name: 'App', 

    setup () { 
      const userStore = useUserStore()
      return {userStore}
    },

    created () {
      console.log('created')

      this.getUser()
    },

    methods : {
      async getUser() {
        
        if(!this.$cookies.get('auth')) {
          console.log('No user')
        }
        
        else {
          const res = await HTTP.get('user/get')
        
          if(res.data.user) {
            
            this.$patch((state) => {
              state.user = res.data.user,
              state.isAuth = true
            })

            this.$router.push('/dashboard')
          }
        }
        
      }
    }
  }

</script>

<template>
    <router-view/>
</template>

<style>
</style>

<!-- 
    async fetchUser () {
      
      if(!Cookies.get('auth')) {
        this.$patch((state) => {
          state.isAuth = false
        })
      }
      
      else {
        
        const res = await HTTP.get('user/get')
        
        if(res.data.user) {
          this.$patch((state) => {
            state.user = res.data.user,
            state.isAuth = true
          })
        }

        else {
          console.log('failed')
        }
      
      }

    } -->