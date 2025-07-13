<template>
  <div class="min-h-screen">
    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4">
      <!-- Article Header -->
      <div class="flex justify-end">
        <div class="mt-5 mb-2">
          <Listbox v-model="selectedLanguage">
            <div class="relative mt-1">
              <ListboxButton
                class="relative w-full cursor-default rounded-lg bg-white py-2 pl-6 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
              >
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <Globe class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
                <span class="block truncate md:text-md text-xs">{{ selectedLanguage.name }}</span>
              </ListboxButton>

              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="lang in language"
                    :key="lang.name"
                    :value="lang"
                    as="template"
                  >
                    <li
                      :class="[
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-2',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-medium' : 'font-normal',
                          'block truncate md:text-md text-xs',
                        ]"
                        >{{ lang.name }}</span
                      >
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
      </div>

      <article>
        <slot />
      </article>
      <!-- Article Footer -->
      <div class="px-6 py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-500">Tags:</span>
            <div class="flex space-x-2">
              <div
                v-for="tag in tags"
                :key="tag"
                class="p-2 text-xs flex w-max rounded-full bg-gray-200"
              >
                {{ tag }}
              </div>
              <div class="flex items-center text-gray-600">
                <BookOpen class="h-4 w-4 mr-1" />
                <span>{{ reader }} read</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center flex-wrap">
            <div class="flex p-2">
              <span class="text-sm text-gray-500 mr-1">Share :</span>
              <button @click="copyLink">
                <Link class="p-1 hover:cursor-pointer" />
              </button>
            </div>
            <div class="flex">
              <button @click="toggleLike">
                <Heart
                  :class="[
                    'transition-all duration-200',
                    isLiked ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-300',
                  ]"
                />
              </button>
              <span>{{ likeTotal }}</span>
            </div>
          </div>
          <!-- Alert notification -->
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 transform translate-y-2 scale-95"
            enter-to-class="opacity-100 transform translate-y-0 scale-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 transform translate-y-0 scale-100"
            leave-to-class="opacity-0 transform translate-y-2 scale-95"
          >
            <div
              v-if="showAlert"
              class="fixed z-40 bottom-4 right-4 bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg max-w-sm"
            >
              <div class="flex items-center gap-3">
                <div class="flex-shrink-0">
                  <CheckCircle class="w-5 h-5 text-green-600" />
                </div>
                <div class="flex-1">
                  <p class="text-sm font-medium text-green-800">Copied to clipboard!</p>
                  <p class="text-xs text-green-600 mt-1">Text has been successfully copied</p>
                </div>
                <button
                  @click="hideAlert"
                  class="flex-shrink-0 text-green-400 hover:text-green-600 focus:outline-none"
                >
                  <X :size="16" />
                </button>
              </div>
            </div>
          </Transition>
        </div>
        <p class="text-xs mt-1 text-gray-400 italic">Published on {{ formattedDate }}</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useLanguageStore } from '@/store/language'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { Globe,BookOpen } from 'lucide-vue-next'
const props = defineProps<{
  tags: string[]
  id: number
  total_like: number
  date_published: Date
  reader: number
}>()
const showAlert = ref(false)
let alertTimeout: ReturnType<typeof setTimeout>

const language = [
  { name: 'Indonesia', code: 'id' },
  { name: 'English', code: 'en' },
]
const selectedLanguage = ref(language[0])
watch(selectedLanguage, (newVal) => {
  useLanguageStore().setLanguage(newVal.code)
})

const formattedDate = new Date(props.date_published).toLocaleDateString('en-US', {
  month: 'long',
  day: '2-digit',
  year: 'numeric',
})

const hideAlert = () => {
  showAlert.value = false
  if (alertTimeout) {
    clearTimeout(alertTimeout)
  }
}
import { Link, Heart } from 'lucide-vue-next'
import { decrementLikeByid, incrementLikeByid } from '@/lib/query'
function copyLink() {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      showAlert.value = true
      // Clear existing timeout
      if (alertTimeout) {
        clearTimeout(alertTimeout)
      }

      // Auto hide after 3 seconds
      alertTimeout = setTimeout(() => {
        showAlert.value = false
      }, 3000)
    })
    .catch((err) => {
      console.error('Failed to copy: ', err)
    })
}

// Single heart toggle
const isLiked = ref(false)
const likeTotal = ref(props.total_like)

watch(
  () => props.total_like,
  (newVal) => {
    likeTotal.value = newVal
  },
)

async function liked() {
  await incrementLikeByid(props.id)
}

async function cancelLiked() {
  await decrementLikeByid(props.id)
}
let likeTimeout: ReturnType<typeof setTimeout> | null = null

const toggleLike = () => {
  // Update UI langsung
  isLiked.value = !isLiked.value
  likeTotal.value += isLiked.value ? 1 : -1

  // Hapus timeout sebelumnya (kalau ada)
  if (likeTimeout) clearTimeout(likeTimeout)

  // Jadwalkan update ke server setelah 1 detik tanpa klik tambahan
  likeTimeout = setTimeout(() => {
    if (isLiked.value) {
      liked()
    } else {
      cancelLiked()
    }
  }, 1000)
}
</script>
