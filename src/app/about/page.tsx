import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { loadArticles } from '@/lib/mdx'
import TeamContent from '@/components/TeamContent'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-primary-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our core values"
        title="Guiding Principles That Define Us"
        invert
      >
        <p>
          Our operations are driven and guided by our core values. These values reflect our dedication and unwavering commitment to our clients.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Custromer focus" invert>
          Our clients are at the core of everything we do. Every solution we craft is tailored to your unique needs, delivering exceptional satisfaction every step of the way.
          </GridListItem>
          <GridListItem title="Security" invert>
          Security lies at the heart of everything we do at SecureOps. We are committed to safeguarding your 
digital assets with unwavering precision, ensuring your data remains resilient against threats and 
vulnerabilities. Your trust drives our mission.
          </GridListItem>
          <GridListItem title="Transparency" invert>
          At SecureOps, openness and clarity are not just values—they’re our foundation. We are dedicated to 
transparent processes that build trust, foster collaboration, and ensure seamless communication every step 
of the way.
          </GridListItem>
          <GridListItem title="Integrity" invert>
          Trust is the cornerstone of every partnership we build at SecureOps. We are committed to upholding the 
          highest standards of integrity, fostering honesty, reliability, and strong relationships in every interaction.
          </GridListItem>
          <GridListItem title="Colaboration" invert>
          Together, we achieve more. At SecureOps, collaboration is at the heart of amplifying innovation and 
          driving success, empowering us to create meaningful impact through strong partnerships.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We are dedicated to enhancing the lives of our clients by safeguarding their digital assets. Our state-of-the-art security solutions ensure that your online presence remains safe and effective, allowing you to focus on what truly matters',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Protecting Your Digital World">
        <p>
          We are dedicated to enhancing the lives of our clients by safeguarding their digital assets. Our state-of-the-art security solutions ensure that your online presence remains safe and effective, allowing you to focus on what truly matters
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            SecureOps Solutions LLC is an international cutting edge software solution provider, with focus on security. What sets us apart is our passion to empower organizations by providing the right solutions with ai needed to strive in this digital age. We are not just another tech company, we are you trusted partner to a secure and efficient development.
          </p>
        </div>
      </PageIntro>
     {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>*/}

      <Culture />

      <PageIntro eyebrow="Our Team" title="Meet the Experts Behind Our Success">
        <p>
          Our diverse and experienced team members bring a wealth of knowledge
          and skills to ensure the success of your projects.
        </p>
      </PageIntro>

      <TeamContent />


      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      /> */}

      <ContactSection />
    </>
  )
}
