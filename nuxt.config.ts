// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASS: process.env.SMTP_PASS
    },
    compatibilityDate: '2024-11-01',
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },
    modules: [
      '@nuxt/ui',
      '@nuxtjs/sitemap',
      '@nuxtjs/robots',
      '@pinia/nuxt',
      'pinia-plugin-persistedstate'
    ],
    colorMode: {
        classSuffix: '',
        preference: 'light'
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    sitemap: {
        hostname: 'https://secureops-solutions.tech',
        gzip: true,
        exclude: [
            '/admin/**'
        ]
    },
    robots: {
        UserAgent: '*',
        Allow: '/',
        Sitemap:  'https://secureops-solutions.tech/sitemap.xml'
    }
})