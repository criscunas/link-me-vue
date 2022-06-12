<script>
  export default {
    props: {
      addLinkHandle: Function,
      linksLength: Number,
    },
    computed : {
      isDisabled () {
        return this.linksLength == 6
      }
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
      <img @click="addSrc('twitter')" class="form-img" src="../../public/images/twitter2.svg" />
    </div>
    <div>
      <img @click="addSrc('github')" class="form-img" src="../../public/images/github2.svg" />
    </div>
    <div>
      <img @click="addSrc('twitch')" class="form-img" src="../../public/images/twitch.svg" />
    </div>
    <div>
      <img @click="addSrc('instagram')" class="form-img" src="../../public/images/instagram.svg" />
    </div>
  </div>

  <div class="image-div">
    <div>
      <img @click="addSrc('snapchat')" class="form-img" src="../../public/images/snapchat.svg" />
    </div>
    <div>
      <img @click="addSrc('youtube')" class="form-img" src="../../public/images/youtube.svg" />
    </div>
    <div>
      <img @click="addSrc('spotify')" class="form-img" src="../../public/images/spotify.svg" />
    </div>
    <div>
      <img @click="addSrc('soundcloud')" class="form-img" src="../../public/images/soundcloud.svg" />
    </div>
  </div>

  <div class="image-div">
    <div class="image-cont">
      <img @click="addSrc('discord')" class="form-img" src="../../public/images/discord.svg" />
    </div>
    <div>
      <img @click="addSrc('tumblr')" class="form-img" src="../../public/images/tumblr.svg" />
    </div>
    <div>
      <img @click="addSrc('onlyfans')" class="form-img" src="../../public/images/onlyfans.svg" />
    </div>
    <div>
      <img @click="addSrc('linkedIn')" class="form-img" src="../../public/images/linkedin.svg" />
    </div>
  </div>

  <div>
    <p class="dashboard-body">Enter link for <span class="font-semibold capitalize"> {{data.site}} </span> </p>
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
      <button class="form-btn mt-2" @click="submitForm" :disabled = "isDisabled">
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