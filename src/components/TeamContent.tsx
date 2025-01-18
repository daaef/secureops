'use client'
import { useState, ReactNode, useEffect } from 'react'
import Image from 'next/image'
import LA from '@/images/team/LA.png'
import ben from '@/images/team/ben.png'
import abel from '@/images/team/abel.png'
import cerdo from '@/images/team/cerdo.png'
import DO from '@/images/team/DO.png'
import IB from '@/images/team/ib.png'
import chosen from '@/images/team/chosen.png'
import bot from '@/images/team/aef.png'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import clsx from 'clsx'

function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: ReactNode }) {
  const [visible, setVisible] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      setVisible(true)
    } else {
      const timer = setTimeout(() => setVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <div className={clsx('fixed inset-0 z-50 max-w-4xl mx-auto flex items-center justify-center', visible ? 'block' : 'hidden')}>
      <div
        className={clsx(
          'fixed inset-0 bg-black transition-opacity duration-300',
          isOpen ? 'opacity-50' : 'opacity-0'
        )}
        onClick={onClose}
      ></div>
      <div
        className={clsx(
          'p-6 rounded-lg shadow-lg bg-primary-950 text-primary-200 z-10 transition-transform duration-300',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
      >
        {children}
        <button onClick={onClose} className="mt-4 text-sm text-blue-200 font-medium">Close</button>
      </div>
    </div>
  )
}

function TeamMember({
  name,
  role,
  // image,
  bio,
  onClick,
}: {
  name: string
  role: string
  // image: any
  bio: {}
  onClick: () => void
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-primary-100">
      <div className="relative inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-primary-800 to-primary-800/60 to-90% p-6">
        <p className="font-display text-base/6 font-semibold tracking-wide text-white">
          {name}
        </p>
        <p className="mt-2 text-sm text-white">{role}</p>
        <button onClick={onClick} className="mt-2 text-sm text-blue-300">
          Read Bio
        </button>
      </div>
    </div>
  )
}

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
        image: LA,
      },
      {
        name: "Benson Olowomuke",
        role: "CFO/Co-Founder",
        bio: {
          p1: "Benson is a serial tech entrepreneur and a co-founder of SecureOps Solutions LLC with over 22 years in the technology industry. His experience spans across Enterprise and Service Providers Network Systems Infrastructure Designs, Testing and Security Operations.",
          p2: "As an Enterprise Architect, he has consulted for several U.S public and private organizations, and he holds several industry certifications including but not limited to AWS, Microsoft, Comptia, Aviatrix, and an active CCIE.",
        },
        image: ben,
      },
      {
        name: "Engineer Aileme Unuigbe",
        role: "Director",
        bio: {
          p1: "Engineer Unuigbe has over 30 years of experience in Structural/Civil Engineering, and he is an alumnus of the prestigious University of Lagos, where he obtained a Master of Engineering degree.",
          p2: "He has led project teams, including the development of residential buildings, commercial & industrial building facilities, transportation infrastructure, and Construction Support Services. His business practice spans engineering design concerns and public infrastructure development and operations.",
          p3: "He is actively involved in policymaking and the development of engineering practice regulations with professional bodies and industry practitioners.  He is a member of several professional organizations in Nigeria and internationally.",
          p4: "He supports building industry contractors on several projects as a peer/design review and construction review engineer for construct-ability consideration.",
          p5: "Engr. Unuigbe has been a captain to several businesses, and he brings his wealth of experience in the corporate business sector to SecureOps Solutions Limited. His specialty business includes engineering consulting, infrastructure development, and practice framework legislation.",
        },
        image: abel,
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: "Adeyinka Popoola",
        role: "Software Architect",
        bio: {
          p1: "Popoola Adeyinka is a software developer with a strong focus on backend technologies such as Python and Node.js. His journey in this field spans five years, during which he has wholeheartedly devoted himself to crafting efficient and dependable solutions that drive the core of web applications.",
          p2: "Beyond the confines of work, Adeyinka relishes tackling intricate coding challenges, actively contributing to open-source projects, and continually expanding his knowledge in the ever-evolving realm of technology.",
        },
        image: cerdo,
      },
      {
        name: "Oladayo Olatunji",
        role: "Content Creator",
        bio: {
          p1: "Dayo Olatunji, a seasoned creative writer and storyteller, has four years of experience collaborating with local and international brands, infusing their narratives with vitality. While currently pursuing a Bachelor's degree in Computer Science, his sights are set on expanding his horizons into the realm of technology, where he hopes to fuse his creative genius with cutting-edge innovation.",
          p2: "Dayo is also a proud member of Jericho Writers, an international writers' club, and European Young Engineers (EYE), where he embraces the nexus of creativity and engineering. When he's not weaving words or delving into the intricacies of technology, he's gazing towards the cosmos, dreaming of the day he'll embark on a journey to the stars. Dayo is not just a writer; he's a visionary, a wordsmith, and an explorer of the unknown.",
        },
        image: DO,
      },
      {
        name: "Ibrahim Olaleye",
        role: "UX/UI Designer",
        bio: {
          p1: "Ibrahim is an experienced UI/UX designer, boasting over 3 years of expertise in creating compelling digital experiences. His passion revolves around seamlessly blending creativity with user-centered design principles to deliver intuitive and visually captivating interfaces. Possessing a sharp eye for detail and a commitment to staying current with design trends, he excels at transforming intricate concepts into user-friendly solutions. ",
          p2: "Yet, his journey extends beyond the conventional, as Ibrahim ventures into the exhilarating world of XR (Extended Reality). His ambitious mission is to push the boundaries of immersive technology, where he endeavors to conjure enchanting interactions that transport individuals to uncharted realms, bringing the extraordinary closer to reality.",
        },
        image: IB,
      },
      {
        name: "Michael Abel",
        role: "Full Stack and DevOps Engineer",
        bio: {
          p1: "Michael is a Java Spring Boot developer with five years of professional experience in developing web applications using the Spring framework. He has strong knowledge of Java, Spring Boot, Spring MVC, Spring Data, Spring Security, Hibernate, RESTful APIs, microservices architecture, devops, flutter and reactjs.",
          p2: "Michael has also worked with various databases, such as MySQL, MongoDB, redis and cosmosdb. He’s proficient in using tools like Gradle, Git,GitHub actions, Docker, and Kubernetes for building, testing, and deploying applications. Micheal is also very proficient in other languages: javascript, typescript and flutter.",
        },
        image: abel,
      },
      {
        name: "Afekhide Bot Gbadamosi",
        role: "Frontend Engineer",
        bio: {
          p1: "Afekhide is an experienced frontend engineer with a passion for solving everyday problems through innovative solutions. With about 6 years of experience as a Software Developer, he has honed his logical reasoning and collaboration skills, and enjoys working with teams. He has contributed to various projects for organizations such as nhub Nigeria, Logical Address, Airforce Nigeria, and PayAfrik.",
          p2: "",
        },
        image: bot,
      },
    ],
  },
]


export default function TeamList() {
  const [activeMember, setActiveMember] = useState<{
    name: string
    bio: {},
    // image: '',
    role: string
  } | null>(null)

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-primary-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map(
                    (person: {
                      name: string
                      role: string
                      // image: any
                      bio: {}
                    }) => (
                      <li key={person.name}>
                        <FadeIn>
                          <TeamMember
                            {...person}
                            onClick={() => setActiveMember(person)}
                          />
                        </FadeIn>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
        <Modal
          isOpen={!!activeMember && !!activeMember?.bio}
          onClose={() => setActiveMember(null)}
        >
          {activeMember && (
            <div className="flex">
              <div className="w-1/3 pr-4">
                {/* <Image
                  alt={activeMember?.name}
                  src={activeMember.image}
                  className="rounded-lg"
                /> */}
                <h2 className="mt-4 text-lg font-semibold">
                  {activeMember.name}
                </h2>
                <p className="mt-2 text-sm text-primary-300">
                  {activeMember.role}
                </p>
              </div>
              <div className="w-2/3 pl-4">
                <h2 className="mt-4 text-lg font-semibold">
                  {`${activeMember.name}'s Bio`}
                </h2>
                {Object.entries(activeMember?.bio).map(([key, value]) => (
                  <p key={key} className="my-3 text-sm">
                    {value as ReactNode}
                  </p>
                ))}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </Container>
  )
}