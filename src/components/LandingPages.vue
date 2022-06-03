<script>
import LandingPageOne from './LandingPageOne.vue'
import LandingPageTwo from './LandingPageTwo.vue'
import LandingPageThree from './LandingPageThree.vue'
import PageHeader from './PageHeader.vue'

export default {
  components: {
    LandingPageOne,
    LandingPageTwo,
    LandingPageThree,
    PageHeader
  },
  data() {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#264653', '#f4a261', '#db3a34'],
      },
    }
  },
  methods : {
    scrollDown () {
      this.$refs.fullpage.api.moveSectionDown()
    }
  }
}
</script>

<template>
  <div class="absolute top-0 z-10 w-full">
    <PageHeader/>
  </div>
  <full-page :options="options" ref="fullpage">
    <div class="section">
      <LandingPageOne :scrollHandle = "scrollDown"/>
    </div>
    <div class="section">
      <LandingPageTwo />
    </div>
    <div class="section">
      <LandingPageThree />
    </div>
  </full-page>
</template>