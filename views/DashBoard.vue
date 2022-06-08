<script>
  import { useUserStore } from '@/store/user'
  import UserHeader from '@/components/UserHeader.vue'
  import IconForm from '@/components/IconForm.vue'
  import ImageForm from '@/components/ImageForm.vue'
  import BioForm from '@/components/BioForm.vue'

export default {
  setup() {
    const userStore = useUserStore()
    return { userStore }
  },
  components: {
    UserHeader,
    IconForm,
    ImageForm,
    BioForm
  },
  data() {
    return {
      user: this.userStore.user,
      bio: ''
    }
  }
}
</script>

<template>
  <UserHeader />
  <div class="px-4 py-8">
    <div>
      <ImageForm/>
    </div>

    <div class="my-6">
      <BioForm :bio = "bio"/>
    </div>

    <div class="p-2">
      <IconForm/>
    </div>
    
  </div>
</template>