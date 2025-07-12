<script setup lang="ts">
import CategoryTabs from '@/components/CategoryTabs.vue'
</script>

<template>
  <div>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="flex w-full justify-center items-center">
        <div className="flex-col">
          <div className="flex-col items-center text-center justify-center ">
            <h1 className=" text-4xl lg:text-6xl font-boldtext-center leading-tight">
              Welcome To Syafiq's blog
            </h1>
            <p className="lg:text-lg text-xs md:text-sm mt-5 leading-relaxed text-center">
              Ini adalah ruang pribadiku untuk menulis, menuangkan ide, dan menceritakan kisah yang
              layak dikenang.
            </p>
          </div>

          <div className="flex flex-wrap  items-center justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="lg:text-2xl text-md font-bold text-blue-900">10K+</div>
              <div className="lg:text-sm text-xs text-blue-600">Active Readers</div>
            </div>
            <div className="text-center">
              <div className="lg:text-2xl text-md font-bold text-blue-900">2</div>
              <div className="lg:text-sm text-xs text-blue-600">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="lg:text-2xl text-md font-bold text-blue-900">1M+</div>
              <div className="lg:text-sm text-xs text-blue-600">Monthly Readers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <CategoryTabs />
</template>
