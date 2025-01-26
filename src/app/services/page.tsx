import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-primary-300 before:content-['/_'] after:text-primary-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-primary-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-primary-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-primary-100 stroke-primary-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'We provide the expertise and vigilance needed to protect your technological ecosystem.',
}

export default function Services() {
  return (
    <>
      <PageIntro eyebrow="Our services" title="Securing Tomorrow's Technology, Today">
        <p>
          In a rapidly changing digital world, we provide the expertise and vigilance needed to protect your technological ecosystem. Let our dedicated team navigate the complexities of cybersecurity while you focus on what matters most.
        </p>
      </PageIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="WebDevOps as a Service (DaS)">
              Free your team to focus on innovation while we take care of the
              operational aspects, ensuring a secure and efficient DevOps
              pipeline.
          </GridListItem>
          <GridListItem title="Security Consulting and Implementation">
              We identify vulnerabilities, design robust security measures, and
              ensure their effective integration throughout your development
              pipeline.
          </GridListItem>
          <GridListItem title="Cloud Migration and Support">
              We assist in seamless migration to cloud environments and provide continuous support to optimize your cloud infrastructure.
          </GridListItem>
          <GridListItem title="Agile Project Management">
              Our agile project management experts ensure that your projects are
              executed efficiently as we adapt to evolving requirements.
          </GridListItem>
          <GridListItem title="Training">
              We will hold your hand through the process of adapting to new
              solutions curated to scale your business immensely.
          </GridListItem>
          <GridListItem title="DevOps Consulting and Implementation">
              SecureOps provides expert guidance and implementation services for adopting DevOps practices in your company.
          </GridListItem>
          <GridListItem title="Continuous Integration and Continuous Delivery (CI/CD)">
              Reap the benefits of rapid, error-free deployments, reduced manual intervention, and improved collaboration among development and operations teams.
          </GridListItem>
          <GridListItem title="Business Improvement">
              Beyond technology, we focus on enhancing your overall business operations. SecureOps identifies bottlenecks in your business processes as well as improvement opportunities.
          </GridListItem>
          <GridListItem title="Automated Security Testing">
            Security is paramount in today’s digital landscape. We implement automated security testing to identify vulnerabilities early in the development process.          </GridListItem>
        </GridList>
      </Container>

      <ContactSection />
    </>
  )
}
