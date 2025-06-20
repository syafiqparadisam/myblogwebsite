<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">

  <NavbarComponent />
  <RouterView />
  </div>
</template>

<style scoped></style>
