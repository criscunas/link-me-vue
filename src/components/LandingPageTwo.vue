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
    <h1 class="text-white text-2xl text-center font-semibold"  > Let Get Started </h1>
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


  </div>
</template>