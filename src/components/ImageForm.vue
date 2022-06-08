<script>
  export default {
    data () {
      return {
        file: ''
      }
    }    
  }
</script>

<template>

  <div class="text-center">
    <div class="avatar">
      <div class="w-24 mask mask-squircle">
        <img src="../../public/images/profile.png"/>
      </div>
    </div>
  </div>

  
  <div class="flex mt-4 justify-center">
    <FormKit 
      type="file"
      v-model = "file"
      accept=".jpg,.png,.pdf"
      :classes="{
        label: 'dashboard-btn'
      }"
      label="Upload"
    />
  </div>
  
  
</template>

<style>
  .formkit-no-files{
    display: none;
  }
  input[type="file"] {
    display: none;
  }

</style>