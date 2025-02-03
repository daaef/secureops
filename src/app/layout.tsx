import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - SecureOPs Solutions',
    default: 'Build Sustainable Solutions with SecureOps',
  },
}

const schema =  {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://secureops-solutions.tech/#organization',
      name: 'SecureOPS Solutions',
      url: 'https://secureops-solutions.tech/',
      sameAs: [
        // 'https://web.facebook.com/senexpay/',
        // 'https://twitter.com/senexpay/',
        'https://www.linkedin.com/company/secureops-solutions-llc',
        // 'https://www.youtube.com/@senexpayhq'
      ],
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://secureops-solutions.tech/#logo',
        inLanguage: 'en-US',
        url: 'https://secureops-solutions.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-alone.0a4d6c5b.png&w=64&q=75',
        contentURL: 'https://secureops-solutions.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-alone.0a4d6c5b.png&w=64&q=75',
        width: 47,
        height: 43,
        caption: 'Build Sustainable Solutions with SecureOps'
      },
      foundingDate: '2023-01-01',
      slogan: 'Build Sustainable Solutions with SecureOps',
      image: { '@id': 'https://secureops-solutions.tech/#logo' }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://secureops-solutions.tech/#website',
      url: 'https://secureops-solutions.tech/',
      name: 'SecureOPs Solutions',
      description:
        'At secure ops, we empower you by building efficient scalable solutions tailored to meet your needs.',
      publisher: { '@id': 'https://secureops-solutions.tech/#organization' }
    },
    {
      '@type': 'WebPage',
      '@id': 'https://secureops-solutions.tech/about/#webpage',
      isPartOf: { '@id': 'https://secureops-solutions.tech/#website' },
      url: 'https://secureops-solutions.tech/about/',
      inLanguage: 'en-US',
      name: 'Guiding Principles That Define Us | SecureOPs Solutions',
      about: {
        '@id': 'https://secureops-solutions.tech/#organization'
      },
      datePublished: '2016-09-14T08:13:22+00:00',
      dateModified: '2022-08-31T12:27:02+00:00',
      description:
        'Our operations are driven and guided by our core values. These values reflect our dedication and unwavering commitment to our clients.',
      potentialAction: {
        '@type': 'ReadAction',
        target: ['https://secureops-solutions.tech/about/']
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://secureops-solutions.tech/#faq',
      url: 'https://secureops-solutions.tech/#faq/',
      isPartOf: {
        '@id': 'https://secureops-solutions.tech/#website'
      },
      about: {
        '@id': 'https://secureops-solutions.tech/about/#webpage'
      },
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our services include consultancy, cloud migration and optimisation, development and support, DevOps integration, and training.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is your pricing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our pricing is project-based. We discuss your needs, evaluate them carefully, and then present a cost-effective budget to you.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the delivery timeline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This depends on the project specifications as more complex projects typically take more time to complete. However, there will be a visible timeline with deliverables and milestones.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do we get started?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We’re glad you’ve taken that step to team with us. The next step is to schedule a call with us through this “link”. This session will help our experts understand what solutions your business needs and how best SecureOps can intervene.'
          }
        }
      ]
    },
  ]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    <html lang="en" className="h-full bg-primary-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  </>
  )
}
