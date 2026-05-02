<script setup>
import { ref } from "vue";
const isEmailVisible = ref(false);
</script>

<template>
  <nav
    class="sticky top-0 z-50 bg-[#2c2c2c]/90 backdrop-blur-sm border-b border-[#474747]"
  >
    <div class="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
      <!-- Social links -->
      <div class="flex items-center gap-5 text-sm">
        <a
          href="https://github.com/fabianvllb"
          target="_blank"
          class="flex items-center gap-1.5 text-[#ccc] hover:text-white transition-colors"
        >
          <font-awesome-icon icon="fa-brands fa-github" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/fabian-villalobos/"
          target="_blank"
          class="flex items-center gap-1.5 text-[#ccc] hover:text-white transition-colors"
        >
          <font-awesome-icon icon="fa-brands fa-linkedin" />
          LinkedIn
        </a>
        <a
          href="https://kitecoms.com/"
          target="_blank"
          class="flex items-center gap-1.5 text-[#ccc] hover:text-white transition-colors"
        >
          <font-awesome-icon icon="fa-regular fa-paper-plane" />
          KiteComs
        </a>
      </div>

      <!-- Section anchors -->
      <div class="hidden md:flex items-center gap-6 text-sm text-[#9ca3af]">
        <a href="#education" class="hover:text-white transition-colors"
          >Education</a
        >
        <a href="#experience" class="hover:text-white transition-colors"
          >Experience</a
        >
        <a href="#projects" class="hover:text-white transition-colors"
          >Projects</a
        >
        <a href="#skills" class="hover:text-white transition-colors">Skills</a>
      </div>

      <!-- Contact -->
      <div class="flex items-center text-sm">
        <button
          v-if="!isEmailVisible"
          @click="isEmailVisible = true"
          class="rounded-md px-3 py-1.5 bg-gradient-to-r from-sky-500 to-blue-500 hover:opacity-90 transition-opacity font-medium"
        >
          Contact Me
        </button>
        <span v-else class="text-[#ccc]">
          fwolfcs@gmail.com ·
          <button
            @click="isEmailVisible = false"
            class="underline text-[#9ca3af] hover:text-white transition-colors"
          >
            close
          </button>
        </span>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
