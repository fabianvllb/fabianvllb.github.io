<script setup>
  import { ref } from 'vue';
  const isEmailVisible = ref(false);

</script>

<template>
  <nav class="flex flex-row justify-center">
    <div class="flex w-4/5 justify-between">
      <div class="flex flex-row space-x-10 py-5">
        <div class="space-x-2 hover:text-[#95B2B0]">
          <font-awesome-icon icon="fa-brands fa-github" />
          <a href="https://github.com/fabianvllb" target="_blank">GitHub</a>
        </div>
        <div class="space-x-2 hover:text-[#95B2B0]">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
          <a href="https://www.linkedin.com/in/fabian-villalobos/" target="_blank">LinkedIn</a>
        </div>
        <div class="space-x-2 hover:text-[#95B2B0]">
          <font-awesome-icon icon="fa-regular fa-paper-plane" />
          <a href="https://kitecoms.com/" target="_blank">KiteComs</a>
        </div>
      </div>
      <div class="flex items-center">
        <button  @click="isEmailVisible = !isEmailVisible" v-if="!isEmailVisible" class="rounded-md h-10 px-3 py-2 bg-gradient-to-r from-sky-500 to-blue-500 hover:opacity-90">Contact Me</button>
        <p v-if="isEmailVisible">fwolfcs@gmail.com or through LinkedIn</p>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
