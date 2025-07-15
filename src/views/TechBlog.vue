<template>
  <BlogsCategory title="Tech Blog">
    <card-blog
      v-for="blog in techBlog"
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
import { getTechBlog } from '@/lib/query'
import type { BlogStat } from '@/lib/types'
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Syafiq Blog | Tech ',
   link: [
    {
      rel: "canonical",
      href: `${import.meta.env.VITE_BASE_URL}/blog/tech`
    }
  ],
  meta: [
    {
      name: 'description',
      content: 'This is a tech blog',
    },
  ],
})

const techBlog = ref<BlogStat[] | null>([])

async function fetchTechBlog() {
  try {
    const data = await getTechBlog()
    techBlog.value = data
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  fetchTechBlog()
})
</script>
