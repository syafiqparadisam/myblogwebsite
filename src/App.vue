<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <div className="min-h-screen">
    <NavbarComponent />
    <RouterView />
  </div>
</template>

<style scoped></style>
