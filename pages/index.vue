<template>
  <Hero/>
  <Offers/>
  <Services/>
  <Faq/>
</template>
<script setup>
useSeo('index')
const colorMode = useColorMode();

onMounted(() => {
  colorMode.preference = 'light';
})

</script>