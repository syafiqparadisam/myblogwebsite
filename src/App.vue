<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div className="min-h-screen">
    <NavbarComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<style scoped></style>
