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
    modules: ['@nuxt/ui'],
    colorMode: {
        classSuffix: '',
        preference: 'light'
    },
})