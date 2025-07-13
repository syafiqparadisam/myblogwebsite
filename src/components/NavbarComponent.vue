<script setup lang="ts">
import { ref } from 'vue'
import { PenTool, Menu, X } from 'lucide-vue-next'

const isOpen = ref(false)
</script>

<template>
  <nav class="bg-white/80 border-b border-blue-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex w-full justify-between items-center h-16">
        <RouterLink to="/" class="flex items-center justify-center">
          <PenTool class="md:w-5 hidden md:block md:h-5 text-black" />
          <span class="md:text-xl text-lg font-bold text-blue-900">Syafiq's Blog</span>
        </RouterLink>
        <div class="hidden md:flex items-center justify-between space-x-20">
          <RouterLink to="/">
            <span class="text-md text-blue-900">Home</span>
          </RouterLink>
          <RouterLink to="/blog/tech">
            <span class="text-md text-blue-900">Tech</span>
          </RouterLink>
          <RouterLink to="/blog/education">
            <span class="text-md text-blue-900">Education</span>
          </RouterLink>
          <RouterLink to="/blog/healthy">
            <span class="text-md text-blue-900">Healthy</span>
          </RouterLink>
          <RouterLink to="/blog/politic">
            <span class="text-md text-blue-900">Politic</span>
          </RouterLink>
        </div>

        <div class="flex gap-2 md:mt-0 md:mb-1 mt-2 justify-center items-center">
          <div class="md:hidden block">
            <Button variant="ghost" size="sm" class="" @click="isOpen = !isOpen">
              <component :is="isOpen ? X : Menu" class="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div class="md:hidden border-blue-100" v-if="isOpen">
        <div class="flex flex-col font-medium mb-2 items-start justify-between space-y-3">
          <RouterLink to="/" class="w-full">
            <span class="text-md text-blue-900 hover:text-blue-600 transition duration-200"
              >Home</span
            >
          </RouterLink>
           <RouterLink to="/blog/tech" class="w-full">
            <span class="text-md text-blue-900 hover:text-blue-600 transition duration-200"
              >Tech</span
            >
          </RouterLink>
          <RouterLink to="/blog/education" class="w-full">
            <span class="text-md w-full text-blue-900 hover:text-blue-600 transition duration-200"
              >Education</span
            >
          </RouterLink>
          <RouterLink to="/blog/healthy" class="w-full">
            <span class="text-md text-blue-900 hover:text-blue-600 transition duration-200"
              >Healthy</span
            >
          </RouterLink>
          <RouterLink to="/blog/politic" class="w-full">
            <span class="text-md text-blue-900 hover:text-blue-600 transition duration-200"
              >Politic</span
            >
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
