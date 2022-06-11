<script>
  import { useUserStore } from '@/store/user'
  import UserHeader from '@/components/UserHeader.vue'
  import IconForm from '@/components/IconForm.vue'
  import ImageForm from '@/components/ImageForm.vue'
  import RenderLinks from '@/components/RenderLinks.vue'
  import BioForm from '@/components/BioForm.vue'
  import {HTTP} from '../http-common';
  

  export default {
    setup() {
      const userStore = useUserStore()
      return { userStore }
    },
    async created () {
      const user = await HTTP.get('user/get')
      this.bio = user.data.user.bio
    },
    components: {
    UserHeader,
    IconForm,
    ImageForm,
    BioForm,
    RenderLinks
},
    methods : {
      newBio(value) {
        HTTP.post('user/updateBio', {
          bio: value
        })
        .then((res) => {
          this.bio = res.data.bio
        })
        .catch((err) => {
          console.log(err)
        })
      },
      uploadImage(value) {
        console.log(value)
      }
    },
    data() {
      return {
        username: this.userStore.user,
        bio: '',
        avatar: '',
        links: [
          {site : "github", url:"github.com", img: "../../public/images/github2.svg"}, 
          {site: "twitter" , url: "twitter.com", img : "../../public/images/twitter2.svg"},
          {site: "instagram" , url: "instagram.com", img: "../../public/images/instagram.svg"}
          ],
      }
  }
}

</script>

<template>
  <UserHeader />
  <div class="px-4 py-8">
    <h1 class="text-xl font-semibold mb-6"> Hello, {{username}}  <span class="ml-2" >👋</span> </h1>
    <div>
      <ImageForm :img-handle="uploadImage"/>
    </div>

    <div class="my-6">
      <BioForm :bio = "bio" :bioHandle = "newBio"/>
    </div>

    <div>
      <IconForm/>
    </div>

    <div>
      <RenderLinks :links = "links" :bio = "bio" />
    </div>
  </div>
</template>