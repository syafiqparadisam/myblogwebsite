<script setup lang="ts">
import BlogComponent from '@/components/BlogComponent.vue'
import CardBlog from '@/components/CardBlog.vue'
</script>

<template>
  <BlogComponent>
    <!-- Article Title and Meta -->
    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
      Was the Internet Ever Great or Was It Just My ADHD?
    </h1>

    <p class="text-lg text-gray-600 mb-6 leading-relaxed">
      My ADHD manifests itself some of the feeling, but if there is one more thing
    </p>

    <!-- Featured Image -->
    <div class="relative">
      <img
        src=""
        alt="Make the Internet Great Again hat with Matrix background"
        class="w-full h-64 md:h-96 object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>
    </div>

    <!-- Article Content -->
    <div class="px-6 py-8">
      <div class="prose prose-lg max-w-none">
        <p class="text-gray-700 leading-relaxed mb-6">
          We'd spend the first half hour for respect of the new person and would have to go to
          someone. Well, I haven't read this some personal like the person ADHD is hard to come.
          It's telling you I'd have a part with the person who would have to go to someone. Well, I
          haven't read this some personal.
        </p>

        <p class="text-gray-700 leading-relaxed mb-6">
          I'd spend some and would have to go there since the friend returns and would have to go to
          someone. Well, I haven't read this some personal like the person ADHD is hard to come.
          It's telling you I'd have a part with the person. So someone had that friend, when I tell
          the people, I'd notice that I'd spend some and would have to go there since the friend
          returns and would have to go to someone. Well, I haven't read this some personal.
        </p>

        <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-blue-50 rounded-r">
          <p class="text-gray-700 italic">
            "It's really the social life, of both, as I go through everyone and would have to go to
            someone. Well, I haven't read this some personal like the person ADHD is hard to come."
          </p>
        </blockquote>

        <p class="text-gray-700 leading-relaxed mb-6">
          The internet has fundamentally changed how we process information, interact with others,
          and manage our attention. For those of us with ADHD, this digital landscape presents both
          unprecedented opportunities and unique challenges that previous generations never had to
          navigate.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Paradox of Digital Attention</h2>

        <p class="text-gray-700 leading-relaxed mb-6">
          While the internet provides instant access to information and communities, it also creates
          an environment of constant distraction. The very features that make it powerful -
          notifications, infinite scroll, algorithmic feeds - can be particularly challenging for
          ADHD brains to manage effectively.
        </p>

        <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Constant notifications disrupting focus</li>
          <li>Infinite scroll feeding dopamine-seeking behavior</li>
          <li>Information overload leading to decision paralysis</li>
          <li>Social media comparison affecting self-esteem</li>
        </ul>

        <p class="text-gray-700 leading-relaxed">
          Perhaps the question isn't whether the internet was ever "great," but rather how we can
          shape our relationship with it to better serve our neurological needs and personal goals.
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
          picture="/images/pgp-encryption.webp"
          path="/blog/tech/pgpencryption"
          :reader="10"
          title="OpenPGP Encryption"
          :like-total="1"
          desc="
			OpenPGP is an open standard for encrypting and signing data, widely used for secure email communication.
			"
          :tags="['Cryptography', 'Cyber Security']"
        />
      </div>
    </div>
  </section>
</template>
