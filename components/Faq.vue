<script setup lang="ts">

const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
        "Our services include consultancy, cloud migration and optimisation, development and support, DevOps integration, and training.",
  },
  {
    id: 2,
    question: "What is your pricing?\n",
    answer:
        "Our pricing is project-based. We discuss your needs, evaluate them carefully, and then present a cost-effective budget to you.",
  },
  {
    id: 3,
    question: "What is the delivery timeline?",
    answer:
        "This depends on the project specifications as more complex projects typically take more time to complete. However, there will be a visible timeline with deliverables and milestones.\n",
  },
  {
    id: 4,
    question: "How do we get started?",
    answer:
        "We’re glad you’ve taken that step to team with us. The next step is to schedule a call with us through this “link”. This session will help our experts understand what solutions your business needs and how best SecureOps can intervene.\n",
  },
  // More questions...
]
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ( {
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    }
  }))
}
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLd)
    }
  ]
})
</script>

<template>
  <div class="bg-white font-display">
    <div class="mx-auto container px-6 py-16 sm:py-24 lg:px-8">
      <div class="max-w-2xl">
        <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Frequently asked questions</h2>
        <p class="mt-6 text-base/7 text-gray-600">Find answers to the most common questions about our services and
          solutions. If you need further assistance, our
          <nuxt-link href="/" class="font-semibold text-[#1c5ab1] hover:text-[#1a6ed8]">customer support</nuxt-link>
          team is here to help.
        </p>
      </div>
      <div class="mt-16">
        <dl class="space-y-16 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:space-y-0 sm:gap-y-6 lg:gap-x-10">
          <div v-for="faq in faqs" :key="faq.id">
            <dt class="text-base/7 font-semibold text-gray-900">{{ faq.question }}</dt>
            <dd class="mt-2 text-base/7 text-gray-600">{{ faq.answer }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
