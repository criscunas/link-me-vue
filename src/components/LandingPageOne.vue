<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>

<template>
  <div class="mx-4">
    <div>
      <h1 class="text-white text-7xl"> Your Social Space in One Place</h1>
      <h2 class="text-white text-2xl pt-6 " >Connect all your platforms into one shareable link.</h2>
    </div>
    
    <div class="pt-12 flex flex-col gap-4">
      <FormKit 
        type="text"
        v-model="username"
        label="Username"
        :classes="{
          label: 'form-label',
          inner: 'form-inner',
          input: 'form-input'
        }"
      />
      <FormKit 
        label="Password"
        type="password"
        v-model = "password"
        :classes="{
          label: 'form-label',
          inner: 'form-inner',
          input: 'form-input'
        }"
      />
    </div>
    <div class="text-right mt-4">
    <button class="form-btn">
      Submit
    </button>
    </div>
  </div>
</template>