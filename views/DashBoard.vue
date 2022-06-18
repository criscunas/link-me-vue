<template>
  <UserHeader />
  <div class="max-w-md m-auto tablet:flex justify-evenly tablet:max-w-5xl">
    <div>
      <ImageForm :img-handle="uploadImage" />
      <BioForm :bio="bio" :bioHandle="newBio" />
      <IconForm :addLinkHandle="addLink" :linksLength="links.length" />
    </div>
    <div class="py-8 tablet:py-10 pl-8">
      <RenderLinks :links="links" :bio="bio" />
    </div>
  </div>
</template>



<script>
import { useUserStore } from '@/store/user'
import UserHeader from '@/components/UserHeader.vue'
import IconForm from '@/components/IconForm.vue'
import ImageForm from '@/components/ImageForm.vue'
import RenderLinks from '@/components/RenderLinks.vue'
import BioForm from '@/components/BioForm.vue'
import { HTTP } from '../http-common';


export default {

  setup() {

    const userStore = useUserStore()

    return { userStore }

  },


  created() {

    if (!this.$cookies.get('auth')) {
      this.$router.push('/')
    }

    else {
      this.getUser()
    }

  },

  components: {
    UserHeader,
    IconForm,
    ImageForm,
    BioForm,
    RenderLinks
  },

  methods: {

    getUser() {

      const getUser = async () => {
        let user = await HTTP.get('user/get')
        this.bio = user.data.user.bio
      }

      const getLinks = async () => {
        let userLinks = await HTTP.get('link/get')
        this.links = userLinks.data.links
      }

      Promise
        .all([getUser(), getLinks()])
        .catch((err) => {
          console.log(err)
        })
    },


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
    addLink(value) {
      HTTP.post('link/add', {
        site: value.site,
        url: value.url,
        caption: value.caption,
      })
        .then((res) => {
          this.links = res.data.links
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
      links: [],
    }
  }
}

</script>

