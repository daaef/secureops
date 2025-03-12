<template>
  <AuroraBackground>
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
          <div style="opacity: 1; transform: none;"><h1><span
              class="block font-display text-base font-semibold text-[#163055]">Our services</span><span
              class="sr-only"> - </span><span
              class="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-[#163055] [text-wrap:balance] sm:text-6xl">Securing Tomorrow's Technology, Today</span>
          </h1>
            <div class="mt-6 max-w-3xl text-xl text-[#1c5ab1]"><p>In a rapidly changing digital world, we provide the
              expertise and vigilance needed to protect your technological ecosystem. Let our dedicated team navigate
              the complexities of cybersecurity while you focus on what matters most.</p></div>
          </div>
        </div>
      </div>
    </Motion>
  </AuroraBackground>
  <div class="mx-auto container px-6 lg:px-8 mt-24">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div>
        <ul role="list" class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <li class="text-base text-[#1c5ab1] before:bg-[#163055] after:bg-[#daf1ff]">
            <div style="opacity: 1; transform: none;">
              <div
                  class="pl-8 relative before:absolute after:absolute before:bg-[#163055] after:bg-[#163055]/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                <strong class="font-semibold text-[#163055]">WebDevOps as a Service (DaS).</strong> Free your team
                to focus on innovation while we take care of the operational aspects, ensuring a secure and efficient
                DevOps pipeline.
              </div>
            </div>
          </li>
          <li class="text-base text-[#1c5ab1] before:bg-[#163055] after:bg-[#daf1ff]">
            <div style="opacity: 1; transform: none;">
              <div
                  class="pl-8 relative before:absolute after:absolute before:bg-[#163055] after:bg-[#163055]/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                <strong class="font-semibold text-[#163055]">Security Consulting and Implementation.</strong> We
                identify vulnerabilities, design robust security measures, and ensure their effective integration
                throughout your development pipeline.
              </div>
            </div>
          </li>
          <li class="text-base text-[#1c5ab1] before:bg-[#163055] after:bg-[#daf1ff]">
            <div style="opacity: 1; transform: none;">
              <div
                  class="pl-8 relative before:absolute after:absolute before:bg-[#163055] after:bg-[#163055]/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                <strong class="font-semibold text-[#163055]">Cloud Migration and Support.</strong> We assist in
                seamless migration to cloud environments and provide continuous support to optimize your cloud
                infrastructure.
              </div>
            </div>
          </li>
          <li class="text-base text-[#1c5ab1] before:bg-[#163055] after:bg-[#daf1ff]">
            <div style="opacity: 1; transform: none;">
              <div
                  class="pl-8 relative before:absolute after:absolute before:bg-[#163055] after:bg-[#163055]/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                <strong class="font-semibold text-[#163055]">Agile Project Management.</strong> Our agile project
                management experts ensure that your projects are executed efficiently as we adapt to evolving
                requirements.
              </div>
            </div>
          </li>
          <li class="text-base text-[#1c5ab1] before:bg-[#163055] after:bg-[#daf1ff]">
            <div style="opacity: 1; transform: none;">
              <div
                  class="pl-8 relative before:absolute after:absolute before:bg-[#163055] after:bg-[#163055]/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                <strong class="font-semibold text-[#163055]">Training.</strong> We will hold your hand through the
                process of adapting to new solutions curated to scale your business immensely.
              </div>
            </div>
          </li>
          <li class="text-base text-[#1c5ab1] before:bg-[#163055] after:bg-[#daf1ff]">
            <div style="opacity: 1; transform: none;">
              <div
                  class="pl-8 relative before:absolute after:absolute before:bg-[#163055] after:bg-[#163055]/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                <strong class="font-semibold text-[#163055]">DevOps Consulting and Implementation.</strong>
                SecureOps provides expert guidance and implementation services for adopting DevOps practices in your
                company.
              </div>
            </div>
          </li>
          <li class="text-base text-[#1c5ab1] before:bg-[#163055] after:bg-[#daf1ff]">
            <div style="opacity: 1; transform: none;">
              <div
                  class="pl-8 relative before:absolute after:absolute before:bg-[#163055] after:bg-[#163055]/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                <strong class="font-semibold text-[#163055]">Continuous Integration and Continuous Delivery
                  (CI/CD).</strong> Reap the benefits of rapid, error-free deployments, reduced manual intervention,
                and improved collaboration among development and operations teams.
              </div>
            </div>
          </li>
          <li class="text-base text-[#1c5ab1] before:bg-[#163055] after:bg-[#daf1ff]">
            <div style="opacity: 1; transform: none;">
              <div
                  class="pl-8 relative before:absolute after:absolute before:bg-[#163055] after:bg-[#163055]/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                <strong class="font-semibold text-[#163055]">Business Improvement.</strong> Beyond technology, we
                focus on enhancing your overall business operations. SecureOps identifies bottlenecks in your business
                processes as well as improvement opportunities.
              </div>
            </div>
          </li>
          <li class="text-base text-[#1c5ab1] before:bg-[#163055] after:bg-[#daf1ff]">
            <div style="opacity: 1; transform: none;">
              <div
                  class="pl-8 relative before:absolute after:absolute before:bg-[#163055] after:bg-[#163055]/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                <strong class="font-semibold text-[#163055]">Automated Security Testing.</strong> Security is
                paramount in today’s digital landscape. We implement automated security testing to identify
                vulnerabilities early in the development process.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import {Motion} from 'motion-v';
// useSeoMeta({
//   title: 'Build Sustainable Solutions with SecureOps Solutions',
// });

const colorMode = useColorMode();

onMounted(() => {
  colorMode.preference = 'light';
})

</script>