<script setup lang="ts">
const footerNavigation = {
  connect: [
    {name: 'Instagram', href: '#'},
    {name: 'Twitter/X', href: '#'},
    {name: 'LinkedIn', href: '#'},
  ],
  company: [
    {name: 'About', href: '/about'},
    {name: 'Services', href: 'services'},
    {name: 'Blog', href: '#'},
    {name: 'Contact us', href: '/contact-us'},
  ],
}
</script>

<template>
  <footer class="relative font-display mx-auto mt-32 container px-6 lg:px-8">
    <div class="border-t border-gray-900/10 py-16 sm:py-24 lg:py-32">
      <div class="xl:flex xl:justify-between xl:gap-8">
        <img class="h-9" src="/logo.png"
             alt="Company name"/>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:w-[30%] xl:mt-0">
          <div>
            <h3 class="text-sm/6 font-semibold text-gray-900">Solutions</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in footerNavigation.company" :key="item.name">
                <a :href="item.href" class="text-sm/6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm/6 font-semibold text-gray-900">Support</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in footerNavigation.connect" :key="item.name">
                <a :href="item.href" class="text-sm/6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
