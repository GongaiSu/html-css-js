import { defineStore } from 'pinia'

const useLoadingStore = defineStore('loading', {
  state: () => ({
    isLoading: false
  })
})

export default useLoadingStore
