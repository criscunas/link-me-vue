<script>
  import LandingPages from './components/LandingPages.vue'
  import PageHeader from './components/PageHeader.vue'

  export default {
    name: 'App',
    components: {
      PageHeader,
      LandingPages
    }
}
</script>

<template>
  <div>
    <div class="absolute top-0 z-10 w-full">
      <PageHeader/>
    </div>
  <LandingPages />
  </div>
</template>

<style>
</style>


