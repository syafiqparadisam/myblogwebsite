<template>
  <div class="w-full mx-auto p-6">
    <!-- Tab Navigation -->
    <div class="w-full border-b overflow-x-scroll border-gray-200" style="scrollbar-width: none;">
      <nav class="flex space-x-8">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'py-2 px-1 border-b-2 min-w-20 font-medium text-sm transition-colors duration-200',
            activeTab === tab.id
              ? 'border-gray-900 text-gray-900'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
          ]"
        >
          {{ tab.label }}
        </button>
      </nav>
    </div>

    <!-- Tab Content -->
    <div class="mt-6 overflow-scroll">
      <!-- Tab 1: foryou Cards -->
      <div
        v-if="activeTab === 'foryou'"
        id="foryou"
        class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6"
      >
        <card-blog
          picture="/images/pgp-encryption.webp"
          path="/blog/tech/pgpencryption"
          :reader="10"
          title="OpenPGP Encryption"
          :like-total="1"
          desc="
			  OpenPGP is an open standard for encrypting and signing data, widely used for secure email communication.
		  "
          :tags="['Cryptography', 'Cyber Security']"
        />
      </div>

      <!-- Tab 2: Analytics Cards -->
      <div v-if="activeTab === 'popular'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>

      <!-- Tab 3: Settings Cards -->
      <div v-if="activeTab === 'newblog'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CardBlog from './CardBlog.vue'

const activeTab = ref('foryou')

const tabs = [
  { id: 'foryou', label: 'For You' },
  { id: 'popular', label: 'Popular' },
  { id: 'newblog', label: 'New blog' },
]
</script>
