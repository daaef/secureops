<script setup lang="ts">
import {useStore} from "~/store";

const store = useStore()

const {ltd} = storeToRefs(store)
</script>

<template>
  <header class="bg-white min-h-[70vh] relative overflow-hidden grid items-center pt-20">
    <div class="container mx-auto font-display justify-start overflow-hidden p-8">
      <BoxReveal color="#163055">
        <p class="text-5xl font-medium text-[#163055] tracking-tight [text-wrap:balance] sm:text-7xl">
          Build Sustainable<br>
          Solutions with<br>
          SecureOps Solutions<span class="text-[#1a6edd]">.</span></p>
      </BoxReveal>

      <BoxReveal
          color="#163055"
          :duration="0.8"
      >
        <h2 class="mt-6 text-xl text-[#1c5ab1]">
          At secure ops, we empower you by building efficient scalable solutions tailored to meet your needs.
        </h2>
      </BoxReveal>
      <InteractiveGridPattern
          v-if="ltd"
          :class="[
        '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
        'inset-0 h-[100%] top-0 skew-y-12 w-full',
      ]"
          :width="30"
          :height="30"
          :squares="[80, 80]"
          squares-class-name="hover:fill-blue-500"
      />
      <InteractiveGridPattern
          v-else
          :class="[
        '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
        'inset-0 h-[100%] top-0 skew-y-12 w-full',
      ]"
          :width="20"
          :height="20"
          :squares="[80, 80]"
      />
    </div>
  </header>
</template>

<style scoped></style>
