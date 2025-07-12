<template>
  <div class="min-h-screen">
    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 py-8">
      <!-- Article Header -->
      <article>
        <slot />
      </article>
      <!-- Article Footer -->
      <div class="px-6 py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-500">Tags:</span>
            <div class="flex space-x-2">
              <div class="p-2 text-xs flex w-max rounded-full bg-gray-200">Cryptography</div>
            </div>
          </div>
          <div class="flex justify-center items-center flex-wrap space-x-2">
            <div class="flex">
              <span class="text-sm text-gray-500 mr-1">Share :</span>
              <Link class="p-1 hover:cursor-pointer" @click="copyLink" />
            </div>
            <div class="flex">
              <button @click="toggleLike">
                <Heart
                  :class="[
                    'transition-all duration-200',
                    isLiked ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-300',
                  ]"
                />
              </button>
              <span>{{ likeTotal }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>

   
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Link, Heart } from 'lucide-vue-next'
function copyLink() {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      console.log('URL copied to clipboard!')
    })
    .catch((err) => {
      console.error('Failed to copy: ', err)
    })
}

// Single heart toggle
const isLiked = ref(false)
const likeTotal = ref(1)

const toggleLike = () => {
  if (!isLiked.value) {
    likeTotal.value += 1
  } else {
    likeTotal.value -= 1
  }
  isLiked.value = !isLiked.value
}
</script>
