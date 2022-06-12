<script>

import { useUserStore } from '@/store/user'
import {PencilIcon, XCircleIcon} from '@heroicons/vue/solid'

export default {
  setup() {
    const userStore = useUserStore()
    return { userStore }
  },
  components : {
    PencilIcon,
    XCircleIcon
  },
  props: {
    links: Object,
    bio: String,
  },
  data() {
    return {
      username: this.userStore.user,
      backgroundColor: "#ffffff",
      textColor: "#000000",
      nameColor: "#000000",
      bioColor: "#000000"
    }
  }
}
</script>


<template>

  <h1 class="dashboard-header"> {{ username }}'s links</h1>
  
  <ul class="py-4 flex flex-col tablet:grid grid-cols-2 gap-x-8 gap-y-4">
    <li v-for="(link, index) in links" :key="index" class="list-none">
      <div class = "card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class = "flex items-center gap-6 pb-4">
            <img class="icon" :src="link.img_path" />
            <p class="font-semibold"> {{link.caption}} </p>
          </div>
          <p class="text-base"> {{ link.url }} </p>
          <div class="flex gap-6 justify-center pt-2">
            <PencilIcon  class="h-5 w-5 text-blue-500 cursor-pointer" />
            <XCircleIcon class="h-5 w-5 text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </li>
  </ul>

  
  <div class="mt-4">
    <h1 class="dashboard-header mb-8"> {{username}}'s profile </h1>
    <div class="grid grid-cols-2 gap-y-4">
      <FormKit 
        type = "color"
        v-model = "backgroundColor"
        label="Select a background color"
      />
      <FormKit 
        type = "color"
        v-model = "textColor"
        label="Select a caption color"
      />      
      <FormKit 
        type = "color"
        v-model = "nameColor"
        label="Select a username color"
      />      
      <FormKit 
        type = "color"
        v-model = "bioColor"
        label="Select a bio color"
      />
    </div>
    <div class="mt-4 mockup-phone w-[290px] flex justify-center flex-col">
      <div class="camera"></div> 
      <div class="display">
      <div class="artboard artboard-demo phone-1" :style="{backgroundColor: backgroundColor}">
        <div class="avatar">
          <div class="w-24 mask mask-squircle">
            <img src = "../../public/images/profile.png" />
          </div>
        </div>
        <p :style="{color: nameColor}" class="font-semibold text-xl mt-2">@{{username}}</p>
        <p :style="{color:bioColor}" > {{bio}}</p>
        <ul class="mt-6">
          <li v-for="(link, index) in links" :key="index" class="list-none flex items-center py-2 gap-4">
            <img class="phone-icon" :src="link.img_path" />
            <p :style ="{color: textColor}" >{{link.caption}}</p>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<style>
  .icon {
    height: 3.5rem;
  }
  .artboard.phone-1{
    width: auto;
  }
  .phone-icon {
    height: 2rem;
  }
  .links-full {
    color: red;
  }
</style>

