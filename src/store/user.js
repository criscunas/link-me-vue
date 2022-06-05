import { defineStore } from "pinia";
import Cookies from 'js-cookie';
import axios from 'axios';
import router from "@/assets/router";



const checkForUser = async () => {
  let auth = Cookies.get('auth')

  if(!auth) {
    return null
  }

  const userInfo = await axios
    .get('http://localhost:4040/user/get', {
      headers: {
        Authorization: `Bearer ${auth}`
      }
    })
  
    return userInfo.data.username    
    
  }

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: checkForUser(),
    isLoggedIn: false
  }),
  actions: {
    async logUserIn (values) {
      const username = await axios.post("http://localhost:4040/user/login", {
          username: values.username,
          password: values.password
        })

      if(!username.data.auth) {
        console.log('not found')
      }
      else {
        this.user = username.data.username
        this.isLoggedIn = true;
        Cookies.set('auth', username.data.auth, {expires: 7})
        router.push('/dashboard')
      }
    },
    async createNewUser(values) {
      const user = await axios.post('http://localhost:4040/user/create', {
        username: values.username,
        email: values.email, 
        password: values.password
      })
      if(!user.data.auth) {
        console.log('Error')
      }

      else {
        this.user = user.data.username;
        this.isLoggedIn = true;
        Cookies.set('auth', user.data.auth, {expires: 7})
        router.push('/dashboard')
      }
    }
  }
})
