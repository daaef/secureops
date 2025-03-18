<template>
  <Motion
      as="div"
      :initial="{ opacity: 0, y: 40, filter: 'blur(10px)' }"
      :while-in-view="{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }"
      :transition="{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }"
      class="relative flex container mx-auto flex-col justify-center gap-4 px-4"
  >
    <div class="mx-auto container px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
      <div class="mx-auto max-w-2xl lg:max-w-none">
          <h1>
            <span
            class="block font-display text-base font-semibold text-[#163055]">Our Training Programs</span>
            <span
            class="sr-only"> - </span>
            <span
            class="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-[#163055] [text-wrap:balance] sm:text-6xl"> Enhance your skills and advance your career with our professional training programs</span>
        </h1>
      </div>
      <div class="mt-6 max-w-3xl text-xl text-[#1c5ab1]">
        <p>
          In a rapidly changing digital world, we provide the
          expertise and vigilance needed to protect your technological ecosystem. Let our dedicated team navigate
          the complexities of cybersecurity while you focus on what matters most.
        </p>
      </div>
    </div>
  </Motion>
  <div>

    <!-- Training Programs Section -->
    <section id="trainings" class="py-16 px-4">
      <div class="container px-6 lg:px-8 mx-auto">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
              v-for="training in trainings"
              :key="training.id"
              class="bg-white rounded-[23px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div class="p-6">
              <div class="w-12 h-12 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mb-4">
                <UIcon :name="training.icon" class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">{{ training.title }}</h3>
              <p class="text-gray-600">{{ training.description }}</p>
              <div class="mt-6">
                <lazy-nuxt-link to="/contact-us" class="text-blue-700 hover:text-blue-900 font-medium flex items-center">
                  Learn more
                  <UIcon name="i-heroicons-arrow-right" class=" ml-2" />
                </lazy-nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-blue-50 py-16 px-4">
      <div class="container mx-auto max-w-5xl">
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Ready to Advance Your Skills?</h2>
            <p class="text-lg text-gray-600">
              Join our training programs and take the next step in your professional development journey.
            </p>
          </div>
          <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <lazy-nuxt-link to="/contact-us"
               class="bg-[#163055] hover:bg-[#1c5ab1] text-white px-8 py-3 rounded-[15px] font-semibold transition duration-300 inline-block text-center w-full md:w-auto">
              Contact Us
            </lazy-nuxt-link>
            <a href="#"
               class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-[15px] font-semibold transition duration-300 inline-block text-center w-full md:w-auto">
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-4xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p class="text-gray-600">Find answers to common questions about our training programs</p>
        </div>

        <div class="space-y-6">
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">How long are the training programs?</h3>
            <p class="text-gray-600">Our training programs vary in length depending on the subject matter and depth.
              Most programs range from 2 to 12 weeks, with both part-time and full-time options available.</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Are the trainings available online?</h3>
            <p class="text-gray-600">Yes, all our training programs are available in both online and in-person formats,
              allowing you to choose the learning environment that works best for you.</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Will I receive a certificate upon completion?</h3>
            <p class="text-gray-600">Absolutely! Upon successful completion of any training program, you will receive an
              industry-recognized certificate that validates your new skills and knowledge.</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Do you offer corporate training packages?</h3>
            <p class="text-gray-600">Yes, we offer customized corporate training solutions tailored to your
              organization's specific needs. Contact our team to discuss your requirements.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import {Motion} from 'motion-v';
// useSeoMeta({
//   title: 'Build Sustainable Solutions with SecureOps Solutions',
// });

const colorMode = useColorMode();
useSeo('trainings')

const trainings = [
  {
    id: 1,
    title: 'CRISIS AND RISK MANAGEMENT',
    description: 'Learn to identify, assess, and mitigate risks while developing strategies for crisis management in various organizational contexts.',
    icon: 'i-heroicons-shield-exclamation'
  },
  {
    id: 2,
    title: 'FRONTEND DEVELOPMENT',
    description: 'Master the art of creating responsive, user-friendly interfaces using modern frontend technologies and frameworks.',
    icon: 'i-heroicons-computer-desktop'
  },
  {
    id: 3,
    title: 'SCRUM MASTER',
    description: 'Develop the skills needed to facilitate Scrum processes and lead agile teams to deliver high-value products.',
    icon: 'i-heroicons-academic-cap'
  },
  {
    id: 4,
    title: 'CYBER SECURITY',
    description: 'Gain comprehensive knowledge of security principles, threat detection, and protection strategies for digital assets.',
    icon: 'i-heroicons-lock-closed'
  },
  {
    id: 5,
    title: 'REACTJS',
    description: 'Learn to build dynamic user interfaces with React, one of the most popular JavaScript libraries for web development.',
    icon: 'i-devicon:react'
  },
  {
    id: 6,
    title: 'PROJECT MANAGEMENT',
    description: 'Acquire the tools and techniques to plan, execute, and close projects successfully while meeting stakeholder expectations.',
    icon: 'i-heroicons-clipboard-document-list'
  },
  {
    id: 7,
    title: 'PRODUCT OWNER',
    description: 'Develop expertise in defining product vision, managing backlogs, and maximizing value in agile product development.',
    icon: 'i-heroicons-user-circle'
  },
  {
    id: 8,
    title: 'GRAPHICS DESIGN',
    description: 'Master visual communication principles and design tools to create compelling graphics for various media.',
    icon: 'i-heroicons-paint-brush'
  },
  {
    id: 9,
    title: 'ISO STANDARDS',
    description: 'Understand international standards implementation and auditing processes for quality, security, and business continuity.',
    icon: 'i-heroicons-document-check'
  },
  {
    id: 10,
    title: 'LEADERSHIP',
    description: 'Develop essential leadership skills to inspire teams, drive change, and achieve organizational objectives.',
    icon: 'i-heroicons-user-group'
  },
  {
    id: 11,
    title: 'UI/UX DESIGN',
    description: 'Learn to create intuitive, accessible, and engaging user experiences through research-driven design processes.',
    icon: 'i-devicon:figma'
  },
  {
    id: 12,
    title: 'DATA ANALYSIS',
    description: 'Gain skills in collecting, processing, and analyzing data to derive actionable insights for business decision-making.',
    icon: 'i-heroicons-chart-bar'
  },
  {
    id: 13,
    title: 'BACKEND DEVELOPMENT',
    description: 'Master server-side programming, database management, and API development for robust application backends.',
    icon: 'i-heroicons-server'
  },
  {
    id: 14,
    title: 'ARTIFICIAL INTELLIGENCE',
    description: 'Explore machine learning, neural networks, and AI applications to solve complex problems and automate processes.',
    icon: 'i-heroicons-cpu-chip'
  },
  {
    id: 15,
    title: 'DIGITAL MARKETING',
    description: 'Learn strategies for online brand promotion, customer acquisition, and engagement across digital channels.',
    icon: 'i-heroicons-megaphone'
  },
  {
    id: 16,
    title: 'CONTENT MANAGEMENT',
    description: 'Develop skills in planning, creating, and organizing content to support business goals and engage target audiences.',
    icon: 'i-heroicons-document-text'
  },
  {
    id: 17,
    title: 'VUEJS',
    description: 'Master Vue.js framework for building interactive web interfaces with its progressive and approachable architecture.',
    icon: 'i-devicon:vuejs'
  }
]
onMounted(() => {
  colorMode.preference = 'light';
})

</script>