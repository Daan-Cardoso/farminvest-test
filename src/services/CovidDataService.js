import axios from "axios";
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 15 * 60 * 1000 // 15 minutes
})


const api = axios.create({
  baseURL: "https://covid-api.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  adapter: cache.adapter
})

export const fetchAllCountries = async (params) => {
  try {
    const response = await api.get('/reports', { params })

    const { data } = response

    return [ null, data ]
  }
  catch (error) {
    return [ error, null ] 
  }
}