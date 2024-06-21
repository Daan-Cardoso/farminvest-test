import axios from 'axios'

const api = axios.create({
  baseURL: 'https://covid-api.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const fetchAllCountries = async (params) => {
  try {
    const response = await api.get('/reports', { params })

    const { data } = response

    return [null, data]
  } catch (error) {
    return [error, null]
  }
}

export const fetchCountryByName = async (country) => {
  const params = { iso: country }
  try {
    const response = await api.get('/reports', { params })

    const { data } = response

    return [null, data]
  } catch (error) {
    return [error, null]
  }
}
