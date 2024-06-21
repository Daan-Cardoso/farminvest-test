export const filterCountries = (countries, params) => {
  const { search, sortBy } = params

  let filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase())
  })

  switch (sortBy) {
    case 'confirmed':
      filteredCountries.sort((a, b) => {
        return b.confirmed - a.confirmed
      })
      break

    case 'deaths':
      filteredCountries.sort((a, b) => {
        return b.deaths - a.deaths
      })
      break

    case 'fatality':
      filteredCountries.sort((a, b) => {
        return a.fatality_rate - b.fatality_rate
      })
      break
  }

  return filteredCountries
}
