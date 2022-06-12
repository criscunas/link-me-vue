<script>
  export default {
    props: {
      addLinkHandle: Function,
    },
    data () {
      return {
        data : {
          url: '',
          site:'',
          caption: '',
        }
      }
    },
    methods: {
      addSrc (site) {
        this.data.site = site
      },
      submitForm() {
        this.addLinkHandle(this.data)
        this.data.url = ""
        this.data.site = ""
        this.data.caption = ""
      }
    }
  }
</script>

<template>
  <div class="py-8 tablet:py-10">
  <div class="image-div">
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

  <div class="image-div">
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

  <div class="image-div">
    <div class="image-cont">
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
    <p class="dashboard-body">Enter link for <span class="font-semibold"> {{data.site}} </span> </p>
    <FormKit
      type="text"
      v-model="data.url"
      placeholder="https://www.yourlinkhere.com..."
       :classes="{
          inner: 'form-inner',
          input: 'form-input'
        }" 
    />
    <p class="dashboard-body mt-4">Enter Caption</p>
    <FormKit
      type="text"
      v-model="data.caption"
      placeholder="Link Caption"
       :classes="{
          inner: 'form-inner',
          input: 'form-input'
        }" 
    />
    
    <div class="text-right">
      <button class="form-btn mt-2" @click="submitForm">
        Submit
      </button>
    </div>
  </div>
</div>
</template>

<style>
  .form-img {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
  .image-div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
  }
  @media only screen and (min-width:768px) {
    .image-div {
      gap: 1.5rem;
    }
  }

</style>