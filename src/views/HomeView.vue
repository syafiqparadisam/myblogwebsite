<script setup lang="ts"></script>

<template>
  <div>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div
              className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Platform Blogging Terdepan
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 leading-tight">
              Wujudkan Ide
              <span className="text-blue-600"> Kreatif </span>
              Menjadi Konten
              <span className="text-blue-600"> Menginspirasi</span>
            </h1>
            <p className="text-lg text-blue-700/80 leading-relaxed max-w-lg">
              Bergabunglah dengan ribuan blogger yang telah mempercayai platform kami untuk berbagi
              cerita, pengetahuan, dan inspirasi kepada dunia. Mulai perjalanan blogging Anda hari
              ini.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Mulai Menulis Gratis
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              Lihat Template
            </Button>
          </div>

          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-900">10K+</div>
              <div className="text-sm text-blue-600">Active Bloggers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-900">50K+</div>
              <div className="text-sm text-blue-600">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-900">1M+</div>
              <div className="text-sm text-blue-600">Monthly Readers</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Blogger Illustration"
              width="{500}"
              height="{600}"
              className="w-full h-auto"
            />
          </div>

          <div
            className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
          ></div>
          <div
            className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-100/40 rounded-full blur-2xl"
          ></div>

          <div
            className="absolute top-20 -left-8 bg-white rounded-lg shadow-lg p-4 border border-blue-100"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <PenTool className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-blue-900">Easy Writing</div>
                <div className="text-xs text-blue-600">Drag & Drop Editor</div>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-32 -right-8 bg-white rounded-lg shadow-lg p-4 border border-blue-100"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-blue-900">Rich Content</div>
                <div className="text-xs text-blue-600">Media & Templates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
