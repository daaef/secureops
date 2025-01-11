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
            Our clientele is our heart. We center every solution on your unique needs, ensuring unparalleled customer satisfaction.
          </GridListItem>
          <GridListItem title="Security" invert>
            Security is the foundation of our services. At SecureOps, we prioritize the safety and privacy of your digital assets, ensuring that your data is bulletproof to threats and vulnerabilities.
          </GridListItem>
          <GridListItem title="Transparency" invert>
            We believe in openness and clarity. SecureOps commits to transparent processes, fostering trust and communication at every stage of our collaboration.
          </GridListItem>
          <GridListItem title="Integrity" invert>
            Trust is an essential part of our partnership. SecureOps upholds the highest standards of integrity, ensuring honesty and reliability in all our interactions.
          </GridListItem>
          <GridListItem title="Colaboration" invert>
            Together, we can achieve more. SecureOps considers collaboration as an essential factor in amplifying innovation and driving success.
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


      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
