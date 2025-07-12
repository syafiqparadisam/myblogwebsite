<script setup lang="ts">
import { Globe, PenTool } from 'lucide-vue-next'
</script>

<template>
  <nav class="bg-white/80 border-b border-blue-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <RouterLink to="/">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center">
              <PenTool class="w-5 h-5 text-black mr-[-20px]" />
            </div>
            <span class="text-xl font-bold text-blue-900">Syafiq's Blog</span>
          </div>
        </RouterLink>

        <div class="hidden md:flex items-center space-x-8">
          <div class="flex gap-1"><Globe /> ID</div>
        </div>

        <div class="md:hidden">
          <Button variant="ghost" size="sm"> ts </Button>
        </div>
      </div>

      <div class="md:hidden py-4 border-t border-blue-100">
        <div class="flex flex-col space-y-3"></div>
      </div>
    </div>
  </nav>
</template>
