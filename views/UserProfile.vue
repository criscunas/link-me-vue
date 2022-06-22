<template>

  <div class="max-w-md m-auto tablet:flex justify-evenly tablet:max-w-5xl" :style="{backgroundColor: userStyles.backgroundColor}">
    
    <div class="my-8">

      <div class="flex flex-col">
        <div class="avatar justify-center">
          <div class="w-24 mask mask-squircle">
            <img src="../public/images/profile.png" />
          </div>
        </div>
      
        <h1 
          class="font-semibold text-center mt-4"  
          :style = "{color: userStyles.usernameColor}" 
        > 
          @{{username}}
          {{this.$router.query}}
        </h1>

        <h1 
          class="font-semibold text-center mt-4"  
          :style = "{color: userStyles.bioColor}" 
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
              :style="{color: userStyles.textColor}"
            > 
            {{link.caption}} </a>
          </div>
        </div>
      </div>

    </div>
    

  </div>
</template>

<script>

  import { HTTPnoAuth } from '../http-common';

  export default {

    data () {
      return {
        links : [],
        username: this.$route.params.username,
        userStyles : {}, 
        bio: '',
      }
    },

    created () {
      this.fetchUser()
    },

    methods : {
      fetchUser() {
        
        HTTPnoAuth
          .get("user/get/" + this.username)
          .then(({data}) => {
            this.links = data.links
            this.bio = data.bio,
            this.userStyles = data.styles
          })
          .catch((err) => {
            console.log(err)
          })

      },
    }

  }

</script>




