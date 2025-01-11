import { SectionIntro } from '@/components/SectionIntro'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'Our services include consultancy, cloud migration and optimisation, development and support, DevOps integration, and training.'
  },
  {
    question: 'What is your pricing?',
    answer:
      'Our pricing is project-based. We discuss your needs, evaluate them carefully, and then present a cost-effective budget to you.'
  },
  {
    question: 'What is the delivery timeline?',
    answer:
      'This depends on the project specifications as more complex projects typically take more time to complete. However, there will be a visible timeline with deliverables and milestones.'
  },
  {
    question: 'How do we get started?',
    answer:
      'We’re glad you’ve taken that step to team with us. The next step is to schedule a call with us through this “link”. This session will help our experts understand what solutions your business needs and how best SecureOps can intervene.'
  }
]

export default function Faq() {
  return (
    <>
      <SectionIntro
        eyebrow="Frequently asked questions"
        title="Your Questions, Answered"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Find answers to the most common questions about our services and
          solutions. If you need further assistance, our{' '}
          <a
            href="#"
            className="font-semibold text-primary-600 hover:text-primary-500"
          >
            customer support
          </a>{' '}
          team is here to helpsupport team is here to help.
        </p>
      </SectionIntro>
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div className="mt-10 lg:col-span-7 lg:mt-0">
          <dl className="space-y-10">
            <FadeInStagger>
              {faqs.map((faq) => (
                <FadeIn key={faq.question}>
                  <dt className="text-base/7 mt-4 font-semibold text-primary-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base/7 text-primary-600">
                    {faq.answer}
                  </dd>
                </FadeIn>
                ))}
            </FadeInStagger>
          </dl>
        </div>
      </div>
    </>
  )
}
