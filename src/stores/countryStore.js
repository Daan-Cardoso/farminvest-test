import { defineStore } from 'pinia'
import { fetchAllCountries, fetchCountryByName } from '@/services/CovidDataService'
import { groupCountries } from '@/utils/groupCountries'

export const useCountryStore = defineStore('Country', {
  state: () => ({
    countries: [],
    provinces: [],
    isLoading: false,
    initialized: false
  }),
  actions: {
    async fetchCountries(params) {
      this.isLoading = true
      const [err, res] = await fetchAllCountries(params)
      this.isLoading = false

      if (err) return

      const data = groupCountries(res.data)

      this.countries = data
    },

    async fetchCountry(countryName) {
      this.initialized = false
      this.isLoading = true
      const [err, res] = await fetchCountryByName(countryName)
      this.isLoading = false
      this.initialized = true

      if (err) return

      this.provinces = res.data.map((province) => {
        return {
          country: province.region.name,
          name: province.region.province,
          confirmed: province.confirmed,
          deaths: province.deaths,
          fatality_rate: province.fatality_rate
        }
      })
    },

    async init() {
      this.initialized = false

      await this.fetchCountries()

      this.initialized = true
    }
  }
})
