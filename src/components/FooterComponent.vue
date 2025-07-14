<template>
  <footer class="bg-gray-900 text-white py-8 mt-auto">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center space-y-4">
        <!-- Main content -->
        <div class="text-center">
          <h3 class="text-3xl font-semibold mb-2">Connect with me</h3>
          <p class="text-gray-400 text-sm">Follow me on social media for updates</p>
        </div>

        <!-- Social media links -->
        <div class="flex space-x-6">
          <a
            href="https://github.com/syafiqparadisam"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github class="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/syafiq-paradisam-b72749258/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-blue-600 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin class="w-6 h-6" />
          </a>

          <a
            href="https://www.instagram.com/syafiqparadisam/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-pink-400 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram class="w-6 h-6" />
          </a>

        </div>
        <a
          href="https://mail.google.com"
          class="text-gray-400 flex gap-2 hover:text-red-400 transition-colors duration-200"
          aria-label="Email"
        >
          <Mail class="w-6 h-6" /> syafiqparadisam@gmail.com
        </a>
          <a
          href="https://portofolio.syafiq-paradisam.my.id"
          class="text-gray-400 flex gap-2 hover:text-red-400 transition-colors duration-200"
          aria-label="Email"
        >
        <Link2  class="w-6 h-6" /> https://portfolio.syafiq-paradisam.my.id
        </a>

        <!-- Copyright -->
        <div class="text-center pt-4 border-t border-gray-800 w-full">
          <p class="text-gray-500 text-sm">© {{ currentYear }} Syafiq. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Github, Linkedin, Instagram, Mail, Link2 } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
