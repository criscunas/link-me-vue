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
  <div class="mx-4 bg-white rounded-lg px-4 py-6">
    <h1 class="text-black text-2xl"> Welcome back <span class="ml-2" >👋</span> </h1>
    <div class="pt-6 flex flex-col gap-4">
      <FormKit type="text" v-model="username" label="Username" :classes="{
        label: 'form-label',
        inner: 'form-inner',
        input: 'form-input'
      }" />
      <FormKit label="Password" type="password" v-model="password" :classes="{
        label: 'form-label',
        inner: 'form-inner',
        input: 'form-input'
      }" />
    </div>
      <div class="text-right mt-4">
        <button class="form-btn">
          Submit 
        </button>
      </div>
  </div>
</template>