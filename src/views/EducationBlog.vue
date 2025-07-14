<template>
  <BlogsCategory title="Education Blog">
    <div class="w-full h-screen justify-center items-center">
      <h1 class="text-2xl font-semibold mb-2">Artikel belum terbuat 😕</h1>
      <p class="text-gray-600">Konten sedang disiapkan. Silakan kembali lagi nanti!</p>
    </div>
  </BlogsCategory>
</template>

<script setup lang="ts">
import BlogsCategory from '@/components/BlogsCategory.vue'
// import CardBlog from '@/components/CardBlog.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Syafiq\' Blog | Education',
  meta: [
    {
      name: 'description',
      content: 'This is a education blog',
    },
  ],
})
</script>
