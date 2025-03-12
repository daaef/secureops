<script setup lang="ts">
const navigation = [
  {name: 'About', href: '/about'},
  {name: 'Services', href: '/services'},
  {name: 'Contact', href: '/contact-us'},
]
const mobileMenuOpen = ref(false)
// Add these new refs
const lastScrollPosition = ref(0)
const isNavVisible = ref(true)
const isAtTop = ref(true)

// Add scroll handler
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  const currentScrollPosition = window.scrollY
  isAtTop.value = currentScrollPosition === 0

  // Determine scroll direction and visibility
  if (currentScrollPosition < 2) return

  if (currentScrollPosition > lastScrollPosition.value) {
    isNavVisible.value = false // Scrolling down
  } else {
    isNavVisible.value = true // Scrolling up
  }

  lastScrollPosition.value = currentScrollPosition
}
</script>

<template>
    <nav :class="[
      'w-full top-0 z-[100] fixed transition-all duration-300',
      {
        'translate-y-0': isNavVisible,
        '-translate-y-full': !isNavVisible,
        'bg-transparent': isAtTop,
        'bg-white/80 backdrop-blur-sm shadow-sm': !isAtTop
      }
    ]" aria-label="Global">
      <div class="flex mx-auto container items-center justify-between p-6 lg:px-8">
        <nuxt-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto md:block hidden" src="/logo.png" alt=""/>
          <img class="h-8 w-auto md:hidden block" src="/logo-alone.png" alt=""/>
        </nuxt-link>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <UIcon name="i-heroicons-bars-3-bottom-right-solid" class="size-6"/>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
             class="text-sm/6 font-semibold text-[#163055]">{{ item.name }}</a>
        </div>
      </div>
    </nav>
    <USlideover v-model="mobileMenuOpen">
      <div class="inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#163055]/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="/logo-alone.png" alt=""/>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <UIcon name="i-heroicons-x-mark" class="size-6 text-primary-500"/>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#163055] hover:bg-gray-50">{{
                  item.name
                }}</a>
            </div>
          </div>
        </div>
      </div>
    </USlideover>
</template>

<style scoped>
.translate-y-0 {
  transform: translateY(0);
}

.-translate-y-full {
  transform: translateY(-100%);
}
</style>
