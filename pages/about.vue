<template>
  <header class="bg-white pb-24 font-display relative pt-20">
    <div class="container min-h-[70vh] grid items-center mx-auto justify-start overflow-hidden p-8">
      <ClientOnly>
        <div><h1><span
            class="block font-display text-base font-semibold text-[#163055]">About us</span><span
            class="sr-only"> - </span><span
            class="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-[#163055] [text-wrap:balance] sm:text-6xl">Protecting Your Digital World</span>
        </h1>
          <div class="mt-6 max-w-3xl text-xl text-[#1c5ab1]"><p>We are dedicated to enhancing the lives of our clients
            by safeguarding their digital assets. Our state-of-the-art security solutions ensure that your online
            presence
            remains safe and effective, allowing you to focus on what truly matters</p>
            <div class="mt-10 max-w-2xl space-y-6 text-base"><p>SecureOps Solutions LLC is an international cutting edge
              software solution provider, with focus on security. What sets us apart is our passion to empower
              organizations by providing the right solutions with ai needed to strive in this digital age. We are not
              just
              another tech company, we are you trusted partner to a secure and efficient development.</p></div>
          </div>
        </div>
        <Tetris
            class="h-[500px] absolute opacity-[.4] z-10 w-full [mask-image:radial-gradient(450px_circle_at_center,#1c5ab1,transparent)]"
            :base="15"
            square-color="#1c5ab1"
        />
      </ClientOnly>
    </div>
  </header>
  <div class="bg-[#163055] py-24 lg:py-32">
    <div class="mx-auto container px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="max-w-2xl"><h2><span
            class="mb-6 block font-display text-base font-semibold text-white">Our core values</span><span
            class="sr-only"> - </span><span
            class="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-white">Guiding Principles That Define Us</span>
        </h2>
          <div class="mt-6 text-xl text-[#91d9ff]"><p>Our operations are driven and guided by our core values. These
            values reflect our dedication and unwavering commitment to our clients.</p></div>
        </div>
      </div>
    </div>
    <div class="mx-auto container px-6 lg:px-8 mt-16">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div>
          <ul role="list" class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <li class="text-base text-[#91d9ff] before:bg-white after:bg-white/10">
              <div>
                <div
                    class="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <strong class="font-semibold text-white">Custromer focus.</strong> Our clients are at the core of
                  everything we do. Every solution we craft is tailored to your unique needs, delivering exceptional
                  satisfaction every step of the way.
                </div>
              </div>
            </li>
            <li class="text-base text-[#91d9ff] before:bg-white after:bg-white/10">
              <div>
                <div
                    class="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <strong class="font-semibold text-white">Security.</strong> Security lies at the heart of everything
                  we do at SecureOps. We are committed to safeguarding your digital assets with unwavering precision,
                  ensuring your data remains resilient against threats and vulnerabilities. Your trust drives our
                  mission.
                </div>
              </div>
            </li>
            <li class="text-base text-[#91d9ff] before:bg-white after:bg-white/10">
              <div>
                <div
                    class="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <strong class="font-semibold text-white">Transparency.</strong> At SecureOps, openness and clarity are
                  not just values—they’re our foundation. We are dedicated to transparent processes that build trust,
                  foster collaboration, and ensure seamless communication every step of the way.
                </div>
              </div>
            </li>
            <li class="text-base text-[#91d9ff] before:bg-white after:bg-white/10">
              <div>
                <div
                    class="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <strong class="font-semibold text-white">Integrity.</strong> Trust is the cornerstone of every
                  partnership we build at SecureOps. We are committed to upholding the highest standards of integrity,
                  fostering honesty, reliability, and strong relationships in every interaction.
                </div>
              </div>
            </li>
            <li class="text-base text-[#91d9ff] before:bg-white after:bg-white/10">
              <div>
                <div
                    class="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <strong class="font-semibold text-white">Colaboration.</strong> Together, we achieve more. At
                  SecureOps, collaboration is at the heart of amplifying innovation and driving success, empowering us
                  to create meaningful impact through strong partnerships.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-auto container px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div><h1><span
          class="block font-display text-base font-semibold text-primary-950">Our Team</span><span
          class="sr-only"> - </span><span
          class="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-primary-950 [text-wrap:balance] sm:text-6xl">Meet the Experts Behind Our Success</span>
      </h1>
        <div class="mt-6 max-w-3xl text-xl text-[#1c5ab1]"><p>Our diverse and experienced team members bring a wealth
          of knowledge and skills to ensure the success of your projects.</p></div>
      </div>
    </div>
    <div class="px-6 lg:px-8 mt-16">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="space-y-24">
          <div v-for="group in team" :key="group.title">
            <div
                class="relative before:absolute after:absolute before:bg-primary-950 after:bg-primary-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
            ></div>
            <div class="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <div>
                <h2 class="font-display text-2xl font-semibold text-primary-950">
                  {{ group.title }}
                </h2>
              </div>
              <div class="lg:col-span-3">
                <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                  <li v-for="team in group?.people" :key="team.name">
                    <div>
                      <div class="group relative overflow-hidden rounded-3xl bg-primary-100">
                        <div
                            class="relative inset-0 text-center flex flex-col items-stretch justify-end bg-gradient-to-t from-[#1c5ab1] to-[#1c5ab1]/60 to-90% p-6">
                          <div class="text-center">
                            <span :class="`text-white text-[100px] font-serif font-medium ${i === 0 ? 'uppercase' : 'lowercase text-5xl'}`" v-for="(name, i) in team?.name?.split(' ')"
                                  :key="i">
                              {{ name.charAt(0) }}
                            </span>
                          </div>
                          <p class="font-display text-base/6 font-semibold tracking-wide text-white">
                            {{ `${team?.pos ?? ''} ${team.name}` }}</p>
                          <p class="mt-2 text-sm text-white">{{ team?.role }}</p>
                          <button class="mt-2 text-sm text-blue-300">Read Bio</button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="fixed inset-0 z-50 max-w-4xl mx-auto flex items-center justify-center hidden">
            <div class="fixed inset-0 bg-black transition-opacity duration-300 opacity-0"></div>
            <div
                class="p-6 rounded-lg shadow-lg bg-primary-950 text-primary-200 z-10 transition-transform duration-300 opacity-0 translate-y-4">
              <button class="mt-4 text-sm text-blue-200 font-medium">Close</button>
            </div>
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
useSeo('about')
const colorMode = useColorMode();

onMounted(() => {
  colorMode.preference = 'light';
})

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: "Lola Adeyemi",
        role: "CEO/Founder",
        bio: {
          p1: `Lola Adeyemi (LA) is a Forbes Technology Council member with 20+ years of expertise in Digital Transformation, Scrum Agile, Cybersecurity, Enterprise Architecture, IT Governance, ISO Standards, and Product Management. She's a Chief Strategist, Innovator, and problem solver, known for directing successful projects and achieving revenue targets. She holds a Computer Science degree from the University of Uyo, a postgraduate degree from the University of Leicester, and an EMBA from China Europe International Business School (CEIBS).`,
          p2: `LA is a Fellow of the Nigeria Computer Society (FNCS) with 30+ IT certifications. She's also the President of TechStylers, a non-profit empowering women in tech through free training. LA is a certified Google Mentor, a member of Google for Startups Women Founder, Google for Startups Accelerator, and ADPList Mentor Club. She launched her first book, "The Impact of Corporate Governance on Scrumban" in 2022.(https://bookboon.com/en/the-impact-of-corporate-governance-on-scrumban-ebook)`,
        },
      },
      {
        name: "Benson Olowomuke",
        role: "CTO/Co-Founder",
        bio: {
          p1: "Benson is a serial tech entrepreneur and a co-founder of SecureOps Solutions LLC with over 22 years in the technology industry. His experience spans across Enterprise and Service Providers Network Systems Infrastructure Designs, Testing and Security Operations.",
          p2: "As an Enterprise Architect, he has consulted for several U.S public and private organizations, and he holds several industry certifications including but not limited to AWS, Microsoft, Comptia, Aviatrix, and an active CCIE.",
        },
      },
      {
        pos: 'Engineer',
        name: "Aileme Unuigbe",
        role: "Director",
        bio: {
          p1: "Engineer Unuigbe has over 30 years of experience in Structural/Civil Engineering, and he is an alumnus of the prestigious University of Lagos, where he obtained a Master of Engineering degree.",
          p2: "He has led project teams, including the development of residential buildings, commercial & industrial building facilities, transportation infrastructure, and Construction Support Services. His business practice spans engineering design concerns and public infrastructure development and operations.",
          p3: "He is actively involved in policymaking and the development of engineering practice regulations with professional bodies and industry practitioners.  He is a member of several professional organizations in Nigeria and internationally.",
          p4: "He supports building industry contractors on several projects as a peer/design review and construction review engineer for construct-ability consideration.",
          p5: "Engr. Unuigbe has been a captain to several businesses, and he brings his wealth of experience in the corporate business sector to SecureOps Solutions Limited. His specialty business includes engineering consulting, infrastructure development, and practice framework legislation.",
        },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: "Toluwalola Adeyemi",
        role: "Business Analyst",
        bio: {
          p1: "Toluwalola Adeyemi is a dynamic professional with expertise spanning Business Analysis, Project Management, and Executive Assistance. With a proven track record of delivering results, Toluwalola specializes in transforming complex challenges into innovative solutions that drive organizational success. She is an alumna of the University of Hertfordshire.",
          p2: "Business Analysis: She thrives on digging into data and uncovering insights that drive smart decisions. Whether it’s refining workflows or identifying growth opportunities, Toluwalola enjoys turning complex challenges into clear, actionable solutions.",
          p3: "Project Management: Toluwalola is passionate about bringing ideas to life. Managing teams, timelines, and resources to deliver projects on time and within scope is my forte, and she always aims to create an environment where everyone can succeed.",
          p4: "Executive Assistance: She believes in making life easier for executives so they can focus on what matters most. From handling schedules to coordinating with stakeholders, Toluwalola ensures the details are covered with care and precision",
        },
      },
      {
        name: "Adeyinka Popoola",
        role: "Software Architect",
        bio: {
          p1: "Popoola Adeyinka is a software developer with a strong focus on backend technologies such as Python and Node.js. His journey in this field spans five years, during which he has wholeheartedly devoted himself to crafting efficient and dependable solutions that drive the core of web applications.",
          p2: "Beyond the confines of work, Adeyinka relishes tackling intricate coding challenges, actively contributing to open-source projects, and continually expanding his knowledge in the ever-evolving realm of technology.",
        },
      },
      {
        name: "Oladayo Olatunji",
        role: "Content Creator",
        bio: {
          p1: "Dayo Olatunji, a seasoned creative writer and storyteller, has four years of experience collaborating with local and international brands, infusing their narratives with vitality. While currently pursuing a Bachelor's degree in Computer Science, his sights are set on expanding his horizons into the realm of technology, where he hopes to fuse his creative genius with cutting-edge innovation.",
          p2: "Dayo is also a proud member of Jericho Writers, an international writers' club, and European Young Engineers (EYE), where he embraces the nexus of creativity and engineering. When he's not weaving words or delving into the intricacies of technology, he's gazing towards the cosmos, dreaming of the day he'll embark on a journey to the stars. Dayo is not just a writer; he's a visionary, a wordsmith, and an explorer of the unknown.",
        },
      },
      {
        name: "Ibrahim Olaleye",
        role: "UX/UI Designer",
        bio: {
          p1: "Ibrahim is an experienced UI/UX designer, boasting over 3 years of expertise in creating compelling digital experiences. His passion revolves around seamlessly blending creativity with user-centered design principles to deliver intuitive and visually captivating interfaces. Possessing a sharp eye for detail and a commitment to staying current with design trends, he excels at transforming intricate concepts into user-friendly solutions. ",
          p2: "Yet, his journey extends beyond the conventional, as Ibrahim ventures into the exhilarating world of XR (Extended Reality). His ambitious mission is to push the boundaries of immersive technology, where he endeavors to conjure enchanting interactions that transport individuals to uncharted realms, bringing the extraordinary closer to reality.",
        },
      },
      {
        name: "Michael Abel",
        role: "Full Stack and DevOps Engineer",
        bio: {
          p1: "Michael is a Java Spring Boot developer with five years of professional experience in developing web applications using the Spring framework. He has strong knowledge of Java, Spring Boot, Spring MVC, Spring Data, Spring Security, Hibernate, RESTful APIs, microservices architecture, devops, flutter and reactjs.",
          p2: "Michael has also worked with various databases, such as MySQL, MongoDB, redis and cosmosdb. He’s proficient in using tools like Gradle, Git,GitHub actions, Docker, and Kubernetes for building, testing, and deploying applications. Micheal is also very proficient in other languages: javascript, typescript and flutter.",
        },
      },
      {
        name: "Bot Gbadamosi",
        role: "Frontend Engineer",
        bio: {
          p1: "Afekhide is an experienced frontend engineer with a passion for solving everyday problems through innovative solutions. With about 6 years of experience as a Software Developer, he has honed his logical reasoning and collaboration skills, and enjoys working with teams. He has contributed to various projects for organizations such as nhub Nigeria, Logical Address, Airforce Nigeria, and PayAfrik.",
          p2: "",
        },
      },
      {
        name: "Amina Gamaliel",
        role: "UI/UX Designer",
        bio: {
          p1: "Amina is a skilled Graphic Designer and UI/UX Designer with six years of experience. She began her career in graphic design, spending two years honing her craft before transitioning to UI/UX design, where she has excelled for the past four years, creating intuitive and impactful user experiences.",
          p2: "As an educator and mentor, Amina is dedicated to empowering the next generation of designers. At TechStylers, she doubles as a leader and mentor, teaching UI/UX design to inspire and equip women with the skills to thrive in the tech industry. Her work fosters growth and inclusivity, helping to bridge the gender gap in technology.",
          p3: "Driven by her passion for innovation, Amina is actively pursuing her ultimate goal of becoming a virtual reality designer, shaping the future of immersive and interactive experiences.",
        },
      },
    ],
  },
]
</script>