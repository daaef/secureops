<template>
  <div class="mx-auto container px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div style="opacity: 1; transform: none;"><h1><span
          class="block font-display text-base font-semibold text-[#163055]">Contact us</span><span
          class="sr-only"> - </span><span
          class="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-[#163055] [text-wrap:balance] sm:text-6xl">Let’s work together</span>
      </h1>
        <div class="mt-6 max-w-3xl text-xl text-[#1c5ab1]"><p>We can’t wait to hear from you.</p></div>
      </div>
    </div>
  </div>
  <div class="mx-auto container px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
        <div class="lg:order-last" style="opacity: 1; transform: none;">
          <form @submit.prevent="handleSubmit">
            <h2 class="font-display text-base font-semibold text-[#163055]">Work inquiries</h2>
            <div class="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
              <div class="group relative z-0 transition-all focus-within:z-10">
                <input id=":S1:" v-model="formData.name" autocomplete="name"
                       placeholder=" "
                       class="peer block w-full border border-[#1c5ab1] bg-transparent px-6 pb-4 pt-12 text-base/6 text-[#163055] ring-4 ring-transparent transition focus:border-[#163055] focus:outline-none focus:ring-[#163055]/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                       type="text" name="name"><label
                  for=":S1:"
                  class="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-[#1c5ab1] transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-[#163055] peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-[#163055]">Name</label>
              </div>
              <div class="group relative z-0 transition-all focus-within:z-10">
                <input id=":S2:" autocomplete="email" v-model="formData.email" placeholder=" "
                       class="peer block w-full border border-[#1c5ab1] bg-transparent px-6 pb-4 pt-12 text-base/6 text-[#163055] ring-4 ring-transparent transition focus:border-[#163055] focus:outline-none focus:ring-[#163055]/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                       type="email" name="email">
                <label
                    for=":S2:"
                    class="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-[#1c5ab1] transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-[#163055] peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-[#163055]">Email</label>
              </div>
              <div class="group relative z-0 transition-all focus-within:z-10">
                <input id=":S3:"
                       v-model="formData.company"
                       autocomplete="organization"
                       placeholder=" "
                       class="peer block w-full border border-[#1c5ab1] bg-transparent px-6 pb-4 pt-12 text-base/6 text-[#163055] ring-4 ring-transparent transition focus:border-[#163055] focus:outline-none focus:ring-[#163055]/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                       type="text"
                       name="company">
                <label for=":S3:"
                       class="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-[#1c5ab1] transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-[#163055] peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-[#163055]">Company</label>
              </div>
              <div class="group relative z-0 transition-all focus-within:z-10">
                <input
                    v-model="formData.phone"
                    id=":S4:" autocomplete="tel"
                    placeholder=" "
                    class="peer block w-full border border-[#1c5ab1] bg-transparent px-6 pb-4 pt-12 text-base/6 text-[#163055] ring-4 ring-transparent transition focus:border-[#163055] focus:outline-none focus:ring-[#163055]/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                    type="tel" name="phone"><label
                  for=":S4:"
                  class="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-[#1c5ab1] transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-[#163055] peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-[#163055]">Phone</label>
              </div>
              <div class="group relative z-0 transition-all focus-within:z-10">
                <input
                    id=":S5:"
                    placeholder=" "
                    v-model="formData.message"
                    class="peer block w-full border border-[#1c5ab1] bg-transparent px-6 pb-4 pt-12 text-base/6 text-[#163055] ring-4 ring-transparent transition focus:border-[#163055] focus:outline-none focus:ring-[#163055]/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                    type="text"
                    name="message"><label for=":S5:"
                                          class="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-[#1c5ab1] transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-[#163055] peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-[#163055]">Message</label>
              </div>
            </div>
            <button
                class="mt-10 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-[#1c5ab1] text-white hover:bg-[#163055]"
                type="submit"><span class="relative top-px">Let’s work together</span></button>
          </form>
        </div>
        <div><h2 class="font-display text-base font-semibold text-[#163055]">
          Our offices</h2>
          <ul role="list" class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <li>
              <address class="text-sm not-italic text-[#1c5ab1]"><strong class="text-[#163055]">US</strong><br>16192
                Coastal Highway, Lewes,<br>Delaware 19958, United States of America.
              </address>
            </li>
            <li>
              <address class="text-sm not-italic text-[#1c5ab1]"><strong
                  class="text-[#163055]">Nigeria</strong><br>10B Tinubu Road,<br>Ilupeju, Lagos, Nigeria
              </address>
            </li>
          </ul>
          <div
              class="mt-16 pt-16 relative before:absolute after:absolute before:bg-[#163055] after:bg-[#163055]/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
            <h2 class="font-display text-base font-semibold text-[#163055]">Email or Call us</h2>
            <dl class="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
              <div>
                <dt class="font-semibold text-[#163055]">Info</dt>
                <dd><a class="text-[#1c5ab1] hover:text-[#163055]" href="mailto:hello@secureops-solutions.tech">hello@secureops-solutions.tech</a>
                </dd>
              </div>
              <div>
                <dt class="font-semibold text-[#163055]">Phone</dt>
                <dd class="flex gap-x-2">
                  <a class="text-[#1c5ab1] text-sm hover:text-[#163055]" href="tel:+19197916158">
                    +1 (919) 791 6158</a> /
                  <a class="text-[#1c5ab1] text-sm hover:text-[#163055]" href="tel:+2347040003055">
                    +234 704 000 3055</a>
                </dd>
              </div>
            </dl>
          </div>
          <div
              class="mt-16 pt-16 relative before:absolute after:absolute before:bg-[#163055] after:bg-[#163055]/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
            <h2 class="font-display text-base font-semibold text-[#163055]">Follow us</h2>
            <ul role="list" class="flex gap-x-10 text-[#163055] mt-6">
              <li><a aria-label="Instagram" class="transition hover:text-[#1c5ab1]" href="https://instagram.com">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-current">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"></path>
                </svg>
              </a></li>
              <li>
                <a aria-label="Twitter/X" class="transition hover:text-[#1c5ab1]"
                   href="https://secureops-solutions.tech/contact">
                  <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-current">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path>
                  </svg>
                </a></li>
              <li><a aria-label="linkedIn" class="transition hover:text-[#1c5ab1]" href="https://dribbble.com">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-current">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.42 25.42 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.688 8.688 0 0 1 12 3.475Zm-3.633.803a53.889 53.889 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.523 8.523 0 0 1-2.191-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.402 8.402 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715Z"></path>
                </svg>
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// useSeoMeta({
//   title: 'Build Sustainable Solutions with SecureOps Solutions',
// });

const colorMode = useColorMode();
useSeo('contact-us')
onMounted(() => {
  colorMode.preference = 'light';
})
const formData = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: ''
})

async function handleSubmit() {
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formData
    })
    // Clear form on success
    formData.value = {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    }
  } catch (error) {
    console.error('Error sending message:', error)
  }
}
</script>