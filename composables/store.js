import { reactive } from 'vue'

export const store = reactive({
    hasLogin: false,
    modalOpen: false,
    user: {}
})