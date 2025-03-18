import {defineStore} from 'pinia'

export const useStore = defineStore( 'main', {
    state: () => ({
        ltd: false
    }),
    persist: {
        storage: piniaPluginPersistedstate.cookies(),
    },
})