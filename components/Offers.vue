<script setup lang="ts">

const features = [
  {
    name: 'Efficient & Scalability',
    icon: 'gauge',
  },
  {
    name: 'Data-driven Solutions',
    icon: 'data',
  },
  {
    name: 'Flexibility & Customization',
    icon: 'custom',
  },
  {
    name: 'A+ Security',
    icon: 'fingerprint',
  },
  {
    name: 'Expert Team',
    icon: 'expert',
  },
  {
    name: 'Collaboration',
    icon: 'people',
  },
  {
    name: 'On-time Delivery',
    icon: 'package',
  }]
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto container">
      <div class="relative isolate overflow-hidden bg-[#163055] px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-16">
        <div class="flex items-center gap-x-8" style="opacity: 1; transform: none;">

          <BoxReveal
              color="#163055"
              :duration="0.8"
          >
            <h2
                class="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">What we
              offer
              our clients</h2>
          </BoxReveal>
          <div class="h-px flex-auto bg-[#1c5ab1]"></div>
        </div>
        <div>
          <ul role="list" class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            <li v-for="(feat, i) in features" :key="i">
              <BoxReveal
                  color="#163055"
                  :duration="0.8"
              >
                <div style="opacity: 1; transform: none;">
                  <div class="flex gap-3">

                    <img :alt="feat?.name" loading="lazy" width="32" height="32"
                         decoding="async" data-nimg="1" style="color:transparent"
                         :src="`/${feat?.icon}.svg`">
                    <p class="text-white">{{ feat?.name }}</p>
                  </div>
                </div>
              </BoxReveal>
            </li>
          </ul>
        </div>
        <svg viewBox="0 0 1024 1024"
             class="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
             aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7"/>
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stop-color="#163055"/>
              <stop offset="1" stop-color="#1a6edd"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
