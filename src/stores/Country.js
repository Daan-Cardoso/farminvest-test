import { defineStore } from 'pinia'
import { fetchAllCountries } from '@/services/Covid'
import { groupCountriesInfo } from '@/helpers/countryHelpers'



export const useCountryStore = defineStore('Country', () => {
  const fetchCountries = async (params) => {
    const [err, res] = await fetchAllCountries(params)

    if (err) return

    const data = groupCountriesInfo(res.data)


    return [err, data]
  }

  const init = async () => {
    const [ err, res ] = await fetchCountries()

    return [ err, res ]
  }

  return { init, fetchCountries }
})
