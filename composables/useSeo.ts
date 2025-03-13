export const useSeo = (page: 'index' | 'about' | 'services' | 'contact-us') => {
  const baseUrl = 'https://secureops-solutions.tech'

  const seoConfig = {
    index: {
      title: 'SecureOps Solutions - Enterprise Security & Operations',
      description: 'Build sustainable security solutions with SecureOps. We deliver enterprise-grade security and operations solutions focused on sustainable business growth.',
      path: '/'
    },
    about: {
      title: 'About SecureOps Solutions | Our Mission & Vision',
      description: 'Learn about SecureOps Solutions and our commitment to delivering innovative security solutions. Meet our team of security experts and technology leaders.',
      path: '/about'
    },
    services: {
      title: 'Security & Operations Services | SecureOps Solutions',
      description: 'Explore our comprehensive security and operations services. From threat detection to compliance management, we provide end-to-end security solutions.',
      path: '/services'
    },
    'contact-us': {
      title: 'Contact SecureOps Solutions - Get In Touch',
      description: 'Ready to enhance your security posture? Contact SecureOps Solutions for expert consultation and solutions tailored to your business needs.',
      path: '/contact-us'
    }
  }

  const seo = seoConfig[page]

  useSeoMeta({
    title: seo.title,
    description: seo.description,
    ogTitle: seo.title,
    ogDescription: seo.description,
    ogUrl: `${baseUrl}${seo.path}`,
    twitterTitle: seo.title,
    twitterDescription: seo.description
  })

  useHead({
    link: [
      {
        rel: 'canonical',
        href: `${baseUrl}${seo.path}`
      }
    ]
  })
}