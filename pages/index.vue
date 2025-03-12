<template>
  <Hero />
  <main class="font-display">
    <Offers />
    <Services />
    <Faq />
    <Contact />
  </main>
  <!-- Footer -->
  <Footer />
</template>
<script setup>
// useSeoMeta({
//   title: 'Build Sustainable Solutions with SecureOps Solutions',
// });

const colorMode = useColorMode();

onMounted(() => {
  colorMode.preference = 'light';
})

</script>