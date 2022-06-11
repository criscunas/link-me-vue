<script>
  export default {
    data () {
      return {
        url: '',
        site:'',
      }
    },
    methods: {
      addSrc (site) {
        this.site = site
      },
      submitLink(val) {
        this.url = val

        let linkObj = {
          url: this.url,
          website: this.site
        }
        console.log(linkObj)
        this.url = ''
        this.site = ''
     }
    }
  }
</script>

<template>
  <div class="flex justify-between pb-8">
    <div>
      <img @click="addSrc('Twitter')" class="form-img" src="../../public/images/twitter2.svg" />
    </div>
    <div>
      <img @click="addSrc('Github')" class="form-img" src="../../public/images/github2.svg" />
    </div>
    <div>
      <img @click="addSrc('Twitch')" class="form-img" src="../../public/images/twitch.svg" />
    </div>
    <div>
      <img @click="addSrc('Instagram')" class="form-img" src="../../public/images/instagram.svg" />
    </div>
  </div>

  <div class="flex justify-between pb-8">
    <div>
      <img @click="addSrc('Snapchat')" class="form-img" src="../../public/images/snapchat.svg" />
    </div>
    <div>
      <img @click="addSrc('Youtube')" class="form-img" src="../../public/images/youtube.svg" />
    </div>
    <div>
      <img @click="addSrc('Spotify')" class="form-img" src="../../public/images/spotify.svg" />
    </div>
    <div>
      <img @click="addSrc('Soundcloud')" class="form-img" src="../../public/images/soundcloud.svg" />
    </div>
  </div>

  <div class="flex justify-between pb-8">
    <div>
      <img @click="addSrc('Discord')" class="form-img" src="../../public/images/discord.svg" />
    </div>
    <div>
      <img @click="addSrc('Tumblr')" class="form-img" src="../../public/images/tumblr.svg" />
    </div>
    <div>
      <img @click="addSrc('Onlyfans')" class="form-img" src="../../public/images/onlyfans.svg" />
    </div>
    <div>
      <img @click="addSrc('LinkedIn')" class="form-img" src="../../public/images/linkedin.svg" />
    </div>
  </div>

  <div>
    <p>Enter link for {{site}}</p>
    <FormKit
      type="url"
      v-model="url"
      placeholder="https://www.yourlinkhere.com..."
       :classes="{
          inner: 'form-inner',
          input: 'form-input'
        }" 
    />
    <div class="text-right">
      <button class="form-btn mt-2" @click="submitLink(this.url)">
        Submit
      </button>
    </div>
  </div>

</template>

<style>
  .form-img {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
</style>