<template>
  <footer class="bg-gray-900 text-white py-8 mt-auto">
    <div class="container mx-auto px-4">
      <div class="flex flex-col space-y-4">
        <div class="flex flex-wrap justify-around w-full ">
          <!-- Main content -->
          <div class="flex flex-col items-center gap-2">

            <div class="text-center">
              <h3 class="md:text-3xl text-xl font-semibold mb-2">Connect with me</h3>
            </div>

            <!-- Social media links -->
            <div class="flex space-x-6 flex-wrap">
              <a href="https://github.com/syafiqparadisam" target="_blank" rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-200" aria-label="GitHub">
                <Github class="w-6 h-6" />
              </a>

              <a href="https://www.linkedin.com/in/syafiq-paradisam-b72749258/" target="_blank"
                rel="noopener noreferrer" class="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn">
                <Linkedin class="w-6 h-6" />
              </a>

              <a href="https://www.instagram.com/syafiqparadisam/" target="_blank" rel="noopener noreferrer"
                class="text-gray-400 hover:text-pink-400 transition-colors duration-200" aria-label="Instagram">
                <Instagram class="w-6 h-6" />
              </a>

            </div>
            <div class="flex flex-col flex-wrap">

              <a href="https://mail.google.com"
                class="text-gray-400 flex md:text-md flex-wrap justify-center text-center  text-sm gap-2 items-center hover:text-red-400 transition-colors duration-200"
                aria-label="Email">
                <Mail class="w-6 h-6 md:inline-block hidden" /><span>syafiqparadisam@gmail.com</span>
              </a>
              <a href="https://portfolio.syafiq-paradisam.my.id"
                class="text-gray-400 flex gap-2 md:text-md text-xs flex-wrap text-center justify-center items-center  hover:text-red-400 transition-colors duration-200"
                aria-label="Email">
                <Link2 class="w-6 h-6 md:inline-block hidden" /><span>https://portfolio.syafiq-paradisam.my.id</span>
              </a>
            </div>
          </div>

          <div class="flex md:mt-0 mt-4 flex-col items-center gap-5">
            <h3 class="md:text-3xl text-xl font-semibold ">Support me</h3>
            <!-- Trakteer -->
            <div class="flex flex-col text-sm  gap-2">

              <a href="https://trakteer.id/syafiqparadisam" target="_blank" class="flex gap-2 items-center">
                <img src="/images/trakteer.webp" alt="Dukung di Trakteer" class="md:w-10 w-5 rounded-md">
                <span>Traktir cendol yuk!</span>
              </a>

              <!-- Ko-fi -->
              <a href="https://ko-fi.com/syafiqparadisam" target="_blank" class="flex gap-2 items-center">
                <img src="https://storage.ko-fi.com/cdn/cup-border.png" alt="Ko-fi" class="md:w-10 w-5">
                <span>Buy me a coffee</span>
              </a>
            </div>


          </div>
        </div>
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
