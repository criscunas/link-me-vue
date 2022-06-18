<template>

  <div class="max-w-md m-auto tablet:flex justify-evenly tablet:max-w-5xl" :style="{backgroundColor: userStyles.bg_color}">
    
    <div class="my-8">

      <div class="flex flex-col">
        <div class="avatar justify-center">
          <div class="w-24 mask mask-squircle">
            <img src="../public/images/profile.png" />
          </div>
        </div>
      
        <h1 
          class="font-semibold text-center mt-4"  
          :style = "{color: userStyles.username_color}" 
        > 
          @{{username}}
        </h1>

        <h1 
          class="font-semibold text-center mt-4"  
          :style = "{color: userStyles.username_color}" 
        > 
          {{bio}}
        </h1> 
    </div>


      <div class="mt-4">
        <div v-for="(link, index) in links" :key="index" class="my-6">
          <div class="flex items-center gap-4">
            <img class="icon" :src="link.img_path" />
            <a 
              class="font-semibold"
              :href="link.url"
              :style="{color: userStyles.text_color}"
            > 
            {{link.caption}} </a>
          </div>
        </div>
      </div>

    </div>
    

  </div>
</template>

<script>

  import { useUserStore } from '@/store/user';
  import {HTTP} from '../http-common';

  export default {

    setup() {
      const userStore = useUserStore()
      return { userStore }
    },

    data () {
      return {
        links : [],
        username: this.userStore.user,
        userStyles : {}, 
        bio: '',
        backgroundColor: '' ,
        usernameColor: '',
        textColor: '',
        bioColor: ''
      }
    },

    created () {
      this.fetchUser()
    },

    methods : {

      fetchUser() {

        const getBio = async () => {
          let user = await HTTP.get('user/get')
          this.bio = user.data.user.bio
        }

        const getLinks = async () => {
          let userLinks = await HTTP.get('link/get')
          this.links = userLinks.data.links
        }

        const getStyles = async () => {
          
          let userStyles = await HTTP.get('profile/styles')

          const {data} = userStyles

          this.userStyles = data

          this.backgroundColor = data.bg_color
          this.usernameColor = data.username_color
          this.textColor = data.text_color
          this.bioColor = data.bio_color
          
        }

        Promise
          .all([getBio(), getLinks(), getStyles()])
          .catch((err) => {
            console.log(err)
          })
        },
    }

  }

</script>




