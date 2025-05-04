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
                    +234 802 320 0662</a>
                </dd>
              </div>
            </dl>
          </div>
          <div
              class="mt-16 pt-16 relative before:absolute after:absolute before:bg-[#163055] after:bg-[#163055]/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
            <h2 class="font-display text-base font-semibold text-[#163055]">Follow us</h2>
            <ul role="list" class="flex gap-x-10 text-[#163055] mt-6">
              <li>
                <a aria-label="Instagram" class="transition hover:text-[#1c5ab1]"
                   href="https://www.instagram.com/secureopssolutionsllc?igsh=ZnN2eDFtcTUzcGdv" target="_blank">
                  <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-current">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"></path>
                  </svg>
                </a></li>
              <li>
                <a aria-label="Twitter/X" class="transition hover:text-[#1c5ab1]"
                   href="https://x.com/Secureopsllc?s=09">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                       class="h-6 w-6 fill-current">
                    <rect width="14" height="14" fill="none"/>
                    <g fill="none">
                      <g clip-path="url(#primeTwitter0)">
                        <path fill="currentColor"
                              d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/>
                      </g>
                      <defs>
                        <clipPath id="primeTwitter0">
                          <path fill="#fff" d="M0 0h14v14H0z"/>
                        </clipPath>
                      </defs>
                    </g>
                  </svg>
                </a></li>
              <li>
                <a aria-label="linkedIn" class="transition hover:text-[#1c5ab1]"
                   href="https://www.linkedin.com/company/secureops-solutions-llc">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                       class="h-6 w-6 fill-current">
                    <rect width="24" height="24" fill="none"/>
                    <path fill="currentColor" fill-rule="evenodd"
                          d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.57 2.57 0 0 1-1.82.748a2.6 2.6 0 0 1-1.818-.747A2.55 2.55 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.58 2.58 0 0 1 4.571 2c.682 0 1.336.269 1.819.747s.753 1.126.753 1.803"
                          clip-rule="evenodd"/>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="linkedIn" class="transition hover:text-[#1c5ab1]"
                   href="https://youtube.com/@secureopssolutionsllc">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1792" height="1280" viewBox="0 0 1792 1280"
                       class="h-6 w-6 fill-current">
                    <rect width="1792" height="1280" fill="none"/><path fill="currentColor" d="m711 872l484-250l-484-253zM896 10q168 0 324.5 4.5T1450 24l73 4q1 0 17 1.5t23 3t23.5 4.5t28.5 8t28 13t31 19.5t29 26.5q6 6 15.5 18.5t29 58.5t26.5 101q8 64 12.5 136.5T1792 532v176q1 145-18 290q-7 55-25 99.5t-32 61.5l-14 17q-14 15-29 26.5t-31 19t-28 12.5t-28.5 8t-24 4.5t-23 3t-16.5 1.5q-251 19-627 19q-207-2-359.5-6.5T336 1256l-49-4l-36-4q-36-5-54.5-10t-51-21t-56.5-41q-6-6-15.5-18.5t-29-58.5T18 998q-8-64-12.5-136.5T0 748V572q-1-145 18-290q7-55 25-99.5T75 121l14-17q14-15 29-26.5T149 58t28-13t28.5-8t23.5-4.5t23-3t17-1.5q251-18 627-18"/></svg>
                </a>
              </li>
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