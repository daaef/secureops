import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Faq from '@/components/Faq'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import gauge from '@/images/gauge.svg'
import parcel from '@/images/package.svg'
import data from '@/images/data.svg'
import expert from '@/images/expert.svg'
import security from '@/images/fingerprint.svg'
import settings from '@/images/custom.svg'
import people from '@/images/people.svg'
import imageLaptop from '@/images/output.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import React from 'react'

const clients = [
  ['Efficient & Scalability', gauge],
  ['Data-driven Solutions', data],
  ['Flexibility & Customization', settings],
  ['A+ Security', security],
  ['Expert Team', expert],
  ['Collaboration', people],
  ['On-time Delivery', parcel],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-primary-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            What we offer our clients
          </h2>
          <div className="h-px flex-auto bg-primary-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <div className="flex gap-3">
                    <Image height={32} width={32} src={logo} alt={client} />
                    <p className="text-white">{client}</p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-primary-950/5 transition hover:bg-primary-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-primary-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-primary-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-primary-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-primary-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Navigating Technology, Securing Your Future."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We understand the ever-evolving landscape of technology and the
          critical importance of security, let us handle it.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="WebDevOps as a Service (DaS)">
              Free your team to focus on innovation while we take care of the
              operational aspects, ensuring a secure and efficient DevOps
              pipeline.
            </ListItem>
            <ListItem title="Security Consulting and Implementation">
              We identify vulnerabilities, design robust security measures, and
              ensure their effective integration throughout your development
              pipeline.
            </ListItem>
            <ListItem title="Agile Project Management">
              Our agile project management experts ensure that your projects are
              executed efficiently as we adapt to evolving requirements.
            </ListItem>
            <ListItem title="Training">
              We will hold your hand through the process of adapting to new
              solutions curated to scale your business immensely.
            </ListItem>
            <ListItem>
              <Link href={'/services'}>View All Services</Link>
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  title: 'SecureOps Solutions Technology',
  description:
    'At secure ops, we empower you by building efficient scalable solutions tailored to meet your needs.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-primary-950 [text-wrap:balance] sm:text-7xl">
            Build Sustainable Solutions with SecureOps
          </h1>
          <p className="mt-6 text-xl text-primary-600">
            At secure ops, we empower you by building efficient scalable
            solutions tailored to meet your needs.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      {/*<CaseStudies caseStudies={caseStudies} />*/}

      {/*      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>*/}

      <Services />
      <Faq />
      <ContactSection />
    </>
  )
}
