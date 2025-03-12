<script setup lang="ts">
const services = [
  {
    name: 'WebDevOps as a Service (DaS)',
    description:
        ' Free your team to focus on innovation while we take care of the operational aspects, ensuring a secure and efficient DevOps pipeline.',
  },
  {
    name: 'Security Consulting and Implementation',
    description:
        'We identify vulnerabilities, design robust security measures, and ensure their effective integration throughout your development pipeline.',
  },
  {
    name: 'Agile Project Management',
    description:
        'Our agile project management experts ensure that your projects are executed efficiently as we adapt to evolving requirements.\n',
  },
]
</script>

<template>
  <div class="bg-white font-display py-24 sm:py-32">
    <div class="mx-auto px-8 container">
      <div class="max-w-2xl ">

        <BoxReveal
            color="#163055"
            :duration="0.8"
        >
          <h2 class="text-base/7 font-semibold text-">Services</h2>
        </BoxReveal>

        <BoxReveal
            color="#163055"
            :duration="0.8"
        >
          <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#163055] sm:text-5xl lg:text-balance">
            Navigating Technology, Securing Your Future.
          </p>
        </BoxReveal>

        <BoxReveal
            color="#163055"
            :duration="0.8"
        >
          <p class="mt-6 text-lg/8 text-[#1c5ab1]">
            We understand the ever-evolving landscape of technology and the critical importance of security, let us
            handle it.
          </p>
        </BoxReveal>
      </div>
      <div class="mx-auto mt-16 max-w-2xl mb-6 sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="service in services" :key="service.name" class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-[#163055]">
              {{ service.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base/7 text-[#1c5ab1]">
              <p class="flex-auto">{{ service.description }}</p>
            </dd>
          </div>
        </dl>
      </div>
      <ULink
          to="/services"
          active-class="text-primary"
          inactive-class="text-gray-800 font-medium dark:text-gray-200 hover:text-[#163055] dark:hover:text-gray-200"
      >
        View all Services
      </ULink>
    </div>
  </div>
</template>

<style scoped></style>
