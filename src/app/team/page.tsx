import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import TeamContent from '@/components/TeamContent'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'



export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Our diverse and experienced team members bring a wealth of knowledge and skills to ensure the success of your projects.',
}

export default async function Team() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      <PageIntro eyebrow="Our Team" title="Meet the Experts Behind Our Success">
        <p>
          Our diverse and experienced team members bring a wealth of knowledge
          and skills to ensure the success of your projects.
        </p>
      </PageIntro>

      <TeamContent />

      <ContactSection />
    </>
  )
}
