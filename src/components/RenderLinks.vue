<script>

import { useUserStore } from '@/store/user'

export default {
  setup() {
    const userStore = useUserStore()
    return { userStore }
  },
  props: {
    links: Object,
    bio: String,
  },
  data() {
    return {
      username: this.userStore.user
    }
  }
}
</script>


<template>

  <h1 class="text-xl font-semibold"> {{ username }}'s links</h1>

  <p v-if="links.length == 0"> Add a link to get started </p>

  <ul class="py-4">
    <li v-for="(link, index) in links" :key="index" class="list-none flex items-center py-2 gap-4">
      <div v-if="link.site == 'github'">
        <img class="icon" src="../../public/images/github.svg" />
      </div>
      <div v-if="link.site == 'twitter'">
        <img class="icon" src="../../public/images/twitter2.svg" />
      </div>
      <div v-if="link.site == 'instagram'">
        <img class="icon" src="../../public/images/instagram.svg" />
      </div>
      <div v-if="link.site == 'spotify'">
        <img class="icon" src="../../public/images/spotify.svg" />
      </div>
      <div v-if="link.site == 'snapchat'">
        <img class="icon" src="../../public/images/snapchat.svg" />
      </div>
      <div v-if="link.site == 'tumblr'">
        <img class="icon" src="../../public/images/tumblr.svg" />
      </div>

      <div v-if="link.site == 'twitch'">
        <img class="icon" src="../../public/images/twitch.svg" />
      </div>

      <div v-if="link.site == 'soundcloud'">
        <img class="icon" src="../../public/images/soundcloud.svg" />
      </div>

      <div v-if="link.site == 'youtube'">
        <img class="icon" src="../../public/images/youtube.svg" />
      </div>
      <div v-if="link.site == 'linkedin'">
        <img class="icon" src="../../public/images/linkedin.svg" />
      </div>
      <div v-if="link.site == 'onlyfans'">
        <img class="icon" src="../../public/images/onlyfans.svg" />
      </div>

      <p> {{ link.url }} </p>
    </li>
  </ul>

  
  <div class="mockup-phone w-[290px] flex justify-center flex-col">
    <div class="camera"></div> 
    <div class="display">
    <div class="artboard artboard-demo phone-1">
      <div class="avatar">
        <div class="w-24 mask mask-squircle">
          <img src = "../../public/images/profile.png" />
        </div>
      </div>
      <p class="font-semibold text-xl mt-2">@{{username}}</p>
      <p> {{bio}}</p>
    </div>
  </div>
</div>


</template>

<style>
  .icon {
    height: 3.5rem;
  }
  .artboard.phone-1{
    width: auto
  }
</style>