<template>
  <BlogsCategory title="Education Blog">
       <div class="w-full h-screen justify-center items-center" v-if="educationBlog?.length == 0">
      <h1 class="text-2xl font-semibold mb-2">Artikel belum terbuat 😕</h1>
      <p class="text-gray-600">Konten sedang disiapkan. Silakan kembali lagi nanti!</p>
    </div>
    <card-blog 
      v-for="blog in educationBlog"
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
  </BlogsCategory>
</template>

<script setup lang="ts">
import BlogsCategory from '@/components/BlogsCategory.vue'
import CardBlog from '@/components/CardBlog.vue'
import { getEducationBlog} from '@/lib/query'
import type { BlogStat } from '@/lib/types'
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Syafiq Blog | Education',
   link: [
    {
      rel: "canonical",
      href: `${import.meta.env.VITE_BASE_URL}/blog/education`
    }
  ],
  meta: [
    {
      name: 'description',
      content: 'This is a education blog',
    },
  ],
})


const educationBlog = ref<BlogStat[] | null>([])

async function fetchEducationBlog() {
  try {
    const data = await getEducationBlog()
    educationBlog.value = data
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  fetchEducationBlog()
})
</script>
