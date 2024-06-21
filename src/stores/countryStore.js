import { defineStore } from 'pinia'
import { fetchAllCountries } from '@/services/CovidDataService'
import { groupCountries } from '@/utils/groupCountries'

export const useCountryStore = defineStore('Country', {
  state: () => ({
    countries: [],
    search: '',
    sortBy: 'confirmed',
    isLoading: false,
    error: null,
    initialized: false
  }),
actions: {
   async fetchCountries (params) {
        const [err, res] = await fetchAllCountries(params)
    
        if (err) return
    
        const data = groupCountries(res.data)

        this.countries = data
    
        return [err, data]
      },
    
      async init() {
        const [ err, res ] = await this.fetchCountries()

        this.initialized = true
    
        return [ err, res ]
      }
  }
})

