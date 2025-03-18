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
        'Our agile project management experts ensure that your projects are executed efficiently as we adapt to evolving requirements.',
  },
  {
    name: 'Training',
    description:
        'We will hold your hand through the process of adapting to new solutions curated to scale your business immensely.',
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
      <div class="grid lg:grid-cols-2 mt-8 gap-8 items-center">
        <svg viewBox="0 0 655 680" fill="none" class="h-full">
          <g clip-path="url(#:S1:-clip)" class="group">
            <g class="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
              <foreignObject width="655" height="680">
                <img alt="Service section image" loading="lazy" width="512" height="512"
                     decoding="async" data-nimg="1"
                     class="w-full bg-primary-100 h-full object-cover"
                     src="/output.jpg">
              </foreignObject>
            </g>
            <use href="#:S1:-shape" stroke-width="2" class="stroke-primary-950/10"></use>
          </g>
          <defs>
            <clipPath id=":S1:-clip">
              <path id=":S1:-shape"
                    d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                    fill-rule="evenodd" clip-rule="evenodd"></path>
            </clipPath>
          </defs>
        </svg>
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <ul role="list" class="text-base text-primary-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <li class="group mt-10 first:mt-0" v-for="(service, index) of services" :key="index">
              <div
                  class="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-primary-950 after:bg-primary-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                <strong class="font-semibold text-[#163055]">{{ service.name }}. </strong>
                <span class="text-[#1c5ab1]">{{ service.description }}</span>
              </div>
            </li>
            <li class="group mt-10 first:mt-0">
              <div
                  class="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-primary-950 after:bg-primary-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                <ULink
                    to="/services"
                    active-class="text-primary"
                    inactive-class="text-gray-800 font-medium dark:text-gray-200 hover:text-[#163055] dark:hover:text-gray-200"
                >
                  View all Services
                </ULink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
