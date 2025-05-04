<script setup lang="ts">
import {useStore} from "~/store";

const store = useStore()

const { ltd } = storeToRefs(store)

const onClickLtd = () =>  ltd.value = !ltd.value
const footerNavigation = {
  connect: [
    {name: 'Instagram', href: 'https://www.instagram.com/secureopssolutionsllc?igsh=ZnN2eDFtcTUzcGdv'},
    {name: 'Twitter/X', href: 'https://x.com/Secureopsllc?s=09'},
    {name: 'LinkedIn', href: 'https://www.linkedin.com/company/secureops-solutions-llc'},
    {name: 'YouTube', href: 'https://youtube.com/@secureopssolutionsllc'},
  ],
  company: [
    {name: 'About', href: '/about'},
    {name: 'Services', href: 'services'},
    {name: 'Trainings', href: '/trainings'},
    // {name: 'Blog', href: '#'},
    {name: 'Contact us', href: '/contact-us'},
  ],
}
</script>

<template>
  <footer class="relative font-display mx-auto mt-32 container px-6 lg:px-8">
    <div class="border-t border-gray-900/10 py-16 sm:py-24 lg:py-32">
      <div class="xl:flex xl:justify-between xl:gap-8">
        <nuxt-link to="/ltd" v-if="ltd">
          <img class="h-9" src="/logo-ltd.png"
               alt="SecureOps Solutions LTD"/>
        </nuxt-link>
        <nuxt-link to="/" v-else>
          <img class="h-9" src="/logo.png"
               alt="SecureOps Solutions LLC"/>
        </nuxt-link>
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
                <a :href="item.href" class="text-sm/6 text-gray-600 hover:text-gray-900" target="_blank">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
