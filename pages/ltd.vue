<template>
  <Hero/>
  <Offers/>
  <Services/>
  <Faq/>
</template>
<script setup>
useSeo('ltd')
const colorMode = useColorMode();

onMounted(() => {
  colorMode.preference = 'light';
})

</script>