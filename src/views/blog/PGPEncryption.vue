<script setup lang="ts">
import { computed } from 'vue'
import BlogComponent from '@/components/BlogComponent.vue'
import CardBlog from '@/components/CardBlog.vue'
import { useLanguageStore } from '@/store/language'
const lang = useLanguageStore()
const isEnglish = computed(() => lang.language === 'en')
import { getTechBlog, getBlogByArticleCode } from '@/lib/query'
import type { BlogStat } from '@/lib/types'
import { ref, onMounted } from 'vue'

const techBlog = ref<BlogStat[] | null>([])
const tags = ref<string[]>([])
const totalLike = ref<number>(0)
const id = ref<number>(0)
const reader = ref<number>(0)
const datePublished = ref<Date>(new Date())
async function getBlog() {
  const data = await getBlogByArticleCode('openpgp_encryption')
  tags.value = data.tags
  id.value = data.id
  reader.value = data.total_read
  totalLike.value = data.like
  datePublished.value = data.date_published
}

async function fetchTechBlog() {
  try {
    const data = await getTechBlog()
    techBlog.value = data
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getBlog()
  fetchTechBlog()
})
</script>

<template>
  <BlogComponent
    :tags="tags"
    :id="id"
    :total_like="totalLike"
    :date_published="datePublished"
    :reader="reader"
  >
    <!-- Article Title and Meta -->
    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
      Apa itu OpenPGP Encryption
    </h1>

    <p class="text-lg text-gray-600 mb-6 leading-relaxed">
      Di era digital saat ini, menjaga <strong>privasi dan keamanan data</strong> menjadi hal yang
      sangat penting. Salah satu metode populer untuk melindungi komunikasi adalah dengan
      <strong>OpenPGP encryption</strong>.
    </p>

    <!-- Featured Image -->
    <div class="relative">
      <img src="/images/pgp-encryption.webp" class="w-full h-64 md:h-96 object-cover" />
    </div>

    <!-- Article Content -->
    <div class="px-6 py-8">
      <div class="max-w-none">
        <p class="mb-4">
          <strong>OpenPGP (Pretty Good Privacy)</strong> adalah
          <em>standar enkripsi data</em> berbasis kriptografi kunci publik. OpenPGP memungkinkan
          kamu untuk:
        </p>
        <ul class="list-disc list-inside mb-6 space-y-1">
          <li>Mengirim pesan terenkripsi (hanya bisa dibaca oleh penerima tertentu)</li>
          <li>Menandatangani pesan secara digital (untuk memastikan keaslian)</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">🔑 Bagaimana Cara Kerjanya?</h2>
        <p class="mb-4">OpenPGP menggunakan dua kunci:</p>
        <ol class="list-decimal list-inside mb-4 space-y-1">
          <li><strong>Public Key</strong> – dibagikan ke siapa saja</li>
          <li><strong>Private Key</strong> – disimpan rahasia oleh pemilik</li>
        </ol>
        <p class="mb-6">
          🔄 Kamu mengenkripsi pesan dengan <em>public key</em> milik penerima, dan penerima
          mendekripsinya dengan <em>private key</em>-nya.
        </p>

        <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">🧪 Cara Menggunakan OpenPGP</h2>
        <p class="mb-4">Berikut langkah-langkah umum untuk mulai menggunakan OpenPGP:</p>

        <h3 class="text-xl font-medium mt-6 mb-2 text-gray-800">1. Install Aplikasi OpenPGP</h3>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li><strong>GnuPG (GPG)</strong> – command-line gratis</li>
          <li><strong>Kleopatra</strong> – GUI untuk Windows atau linux</li>
          <li><strong>Openkeychain</strong> – untuk android</li>
          <li><strong>PGPro1</strong> – untuk ios</li>
          <li><strong>ProtonMail</strong> – email terenkripsi otomatis</li>
        </ul>

        <h3 class="text-xl font-medium mt-6 mb-2 text-gray-800">2. Buat Key Pair</h3>
        <pre class="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto mb-4">
gpg --full-generate-key
    </pre
        >

        <h3 class="text-xl font-medium mt-6 mb-2 text-gray-800">3. Bagikan Public Key</h3>
        <pre class="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto mb-4">
gpg --armor --export namamu@example.com &gt; publickey.asc
    </pre
        >

        <h3 class="text-xl font-medium mt-6 mb-2 text-gray-800">4. Enkripsi Pesan</h3>
        <pre class="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto mb-4">
gpg --encrypt --recipient email@example.com file.txt
    </pre
        >

        <h3 class="text-xl font-medium mt-6 mb-2 text-gray-800">5. Dekripsi Pesan</h3>
        <pre class="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto mb-4">
gpg --decrypt file.txt.gpg
    </pre
        >

        <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">💡 Tips Keamanan</h2>
        <ul class="list-disc list-inside mb-6 space-y-1">
          <li>Simpan <strong>private key</strong> dengan aman</li>
          <li>Gunakan <strong>passphrase yang kuat</strong></li>
          <li>Backup kunci secara offline</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">
          ✅ Kapan Harus Menggunakan OpenPGP?
        </h2>
        <ul class="list-disc list-inside mb-6 space-y-1">
          <li>Saat mengirim email sensitif</li>
          <li>Berbagi file pribadi melalui cloud</li>
          <li>Menandatangani dokumen digital</li>
          <li>Proyek open source atau komunikasi internal tim</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">✉️ Penutup</h2>
        <p class="mb-2">
          Dengan <strong>OpenPGP</strong>, kamu bisa menjaga komunikasi digital tetap aman dan
          pribadi. Meski terlihat teknis, tools modern seperti ProtonMail atau GPG Suite mempermudah
          penggunaannya.
        </p>
        <p>
          Mulai dari mengenkripsi file penting, hingga mengirim email rahasia — OpenPGP bisa jadi
          pilihan tepat untuk menjaga data dari mata-mata digital.
        </p>
      </div>
    </div>
  </BlogComponent>
  <!-- Related Articles -->
  <section class="mt-12 mx-auto lg:max-w-4xl w-full flex flex-col justify-center pb-8 px-8">
    <h2 class="text-2xl font-bold text-gray-900 text-left mb-6">Related Articles</h2>
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </div>
  </section>
</template>
