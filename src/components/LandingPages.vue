<script>
import LandingPageOne from './LandingPageOne.vue'
import LandingPageTwo from './LandingPageTwo.vue'
import LandingPageThree from './LandingPageThree.vue'


export default {
  components: {
    LandingPageOne,
    LandingPageTwo,
    LandingPageThree
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
  }
}
</script>

<template>
  <full-page :options="options" id="fullpage" ref="fullpage">
    <div class="section">
      <LandingPageOne />
    </div>
    <div class="section">
      <LandingPageTwo />
    </div>
    <div class="section">
      <LandingPageThree />
    </div>
  </full-page>
</template>