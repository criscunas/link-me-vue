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

  <h1 class="dashboard-header"> {{ username }}'s links</h1>

  <ul class="py-4 grid grid-cols-2 gap-x-8 gap-y-4">
    <li v-for="(link, index) in links" :key="index" class="list-none flex items-center py-2 gap-4">
      <div v-if="link.site == 'Github'">
        <img class="icon" src="../../public/images/github.svg" />
      </div>
      <div v-if="link.site == 'Twitter'">
        <img class="icon" src="../../public/images/twitter2.svg" />
      </div>
      <div v-if="link.site == 'Instagram'">
        <img class="icon" src="../../public/images/instagram.svg" />
      </div>
      <div v-if="link.site == 'Spotify'">
        <img class="icon" src="../../public/images/spotify.svg" />
      </div>
      <div v-if="link.site == 'Snapchat'">
        <img class="icon" src="../../public/images/snapchat.svg" />
      </div>
      <div v-if="link.site == 'Tumblr'">
        <img class="icon" src="../../public/images/tumblr.svg" />
      </div>

      <div v-if="link.site == 'Twitch'">
        <img class="icon" src="../../public/images/twitch.svg" />
      </div>

      <div v-if="link.site == 'Soundcloud'">
        <img class="icon" src="../../public/images/soundcloud.svg" />
      </div>

      <div v-if="link.site == 'Youtube'">
        <img class="icon" src="../../public/images/youtube.svg" />
      </div>
      <div v-if="link.site == 'LinkedIn'">
        <img class="icon" src="../../public/images/linkedin.svg" />
      </div>
      <div v-if="link.site == 'Onlyfans'">
        <img class="icon" src="../../public/images/onlyfans.svg" />
      </div>

      <div class="flex flex-col gap-1">
        <p class="font-semibold"> {{link.caption}} </p>
        <p> {{ link.url }} </p>
      </div>
    </li>
  </ul>

  
  <div class="mt-4 mockup-phone w-[290px] flex justify-center flex-col">
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