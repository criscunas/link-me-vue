import { defineStore } from "pinia";
import Cookies from 'js-cookie';
import router from "@/assets/router";
import { useStorage } from "@vueuse/core";
import { HTTP } from "../../http-common";

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: useStorage('user', ""),
  }),
  actions: {
    async logUserIn (values) {
      const userData = await HTTP.post('user/login', {
          username: values.username,
          password: values.password
        })

      if(!userData.data.auth) {
        console.log('not found')
      }
      else {
        this.user = userData.data.username
        Cookies.set('auth', userData.data.auth, {expires: 7})
        router.push('/dashboard')
      }
    },
    async createNewUser(values) {
      const user = await HTTP.post("user/create", {
        username: values.username,
        email: values.email, 
        password: values.password
      })
      if(!user.data.auth) {
        console.log('Error')
      }

      else {
        this.user = user.data.username;
        Cookies.set('auth', user.data.auth, {expires: 7})
        router.push('/dashboard')
      }
    },
    async fetchUser () {
      const res = await HTTP.get('user/get')
      this.user.bio = res.data.user.bio
      console.log(res.data)
    }
  }
})
