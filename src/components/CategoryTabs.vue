<template>
  <div class="w-full mx-auto p-6">
    <!-- Tab Navigation -->
    <div class="w-full border-b overflow-x-scroll border-gray-200" style="scrollbar-width: none">
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
    <div class="mt-6 overflow-scroll" style="scrollbar-width: none">
      <!-- Tab 1: foryou Cards -->
      <div
        v-if="activeTab === 'foryou'"
        id="foryou"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <card-blog
          v-for="blog in forYouBlog"
          :key="blog.id"
          :id="blog.id"
          :picture="blog.picture_path"
          :path="blog.path"
          :reader="blog.total_read"
          :title="blog.title"
          :like-total="blog.like"
          :desc="blog.description"
          :tags="blog.tags"
          :date_published="blog.date_published"
        />
      </div>

      <!-- Tab 2: Analytics Cards -->
      <div
        v-if="activeTab === 'popular'"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
      <card-blog
          v-for="blog in popularBlog"
          :key="blog.id"
          :id="blog.id"
          :picture="blog.picture_path"
          :path="blog.path"
          :reader="blog.total_read"
          :title="blog.title"
          :like-total="blog.like"
          :desc="blog.description"
          :tags="blog.tags"
          :date_published="blog.date_published"
        />
    </div>

      <!-- Tab 3: Settings Cards -->
      <div
        v-if="activeTab === 'newblog'"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
      <card-blog
          v-for="blog in newBlog"
          :key="blog.id"
          :id="blog.id"
          :picture="blog.picture_path"
          :path="blog.path"
          :reader="blog.total_read"
          :title="blog.title"
          :like-total="blog.like"
          :desc="blog.description"
          :tags="blog.tags"
          :date_published="blog.date_published"
        />
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CardBlog from './CardBlog.vue'
import { getDataForYou,getPopularBlog, getNewBlog } from '@/lib/query'
import type { BlogStat } from '@/lib/types'

const forYouBlog = ref<BlogStat[] | null>([])
const popularBlog = ref<BlogStat[] | null>([])
const newBlog = ref<BlogStat[] | null>([])

async function fetchForYouBlog() {
  try {
    const data = await getDataForYou()
    forYouBlog.value = data
  } catch (err) {
    console.log(err)
  }
}

async function fetchPopularBlog() {
 try {
    const data = await getPopularBlog()
    popularBlog.value = data
  } catch (err) {
    console.log(err)
  }
}


async function fetchNewBlog() {
 try {
    const data = await getNewBlog()
    newBlog.value = data
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  fetchForYouBlog()
  fetchPopularBlog()
  fetchNewBlog()
})

const activeTab = ref('foryou')
const tabs = [
  { id: 'foryou', label: 'For You' },
  { id: 'popular', label: 'Popular' },
  { id: 'newblog', label: 'New blog' },
]
</script>
