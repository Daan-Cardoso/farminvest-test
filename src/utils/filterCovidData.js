export const filterCountries = (countries, params) => {
  const { search, sortBy } = params

  let filteredCountries = countries?.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase())
  })

  switch (sortBy.key) {
    case 'confirmed':
      filteredCountries.sort((a, b) => {
        return sortBy.order == 'asc' ? a.confirmed - b.confirmed : b.confirmed - a.confirmed
      })
      break

    case 'deaths':
      filteredCountries.sort((a, b) => {
        return sortBy.order == 'asc' ? a.deaths - b.deaths : b.deaths - a.deaths
      })
      break

    case 'fatality_rate':
      filteredCountries.sort((a, b) => {
        return sortBy.order == 'asc'
          ? a.fatality_rate - b.fatality_rate
          : b.fatality_rate - a.fatality_rate
      })
      break
    case 'name':
    default:
      filteredCountries.sort((a, b) => {
        return sortBy.order == 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      })
      break
  }

  return filteredCountries
}

export const filterProvinces = (provinces, params) => {
  const { search, sortBy } = params

  let filteredProvinces = provinces.filter((province) => {
    return province.name.toLowerCase().includes(search.toLowerCase())
  })

  switch (sortBy.key) {
    case 'confirmed':
      filteredProvinces.sort((a, b) => {
        return sortBy.order == 'asc' ? a.confirmed - b.confirmed : b.confirmed - a.confirmed
      })
      break

    case 'deaths':
      filteredProvinces.sort((a, b) => {
        return sortBy.order == 'asc' ? a.deaths - b.deaths : b.deaths - a.deaths
      })
      break

    case 'fatality_rate':
      filteredProvinces.sort((a, b) => {
        return sortBy.order == 'asc'
          ? a.fatality_rate - b.fatality_rate
          : b.fatality_rate - a.fatality_rate
      })
      break
    case 'name':
    default:
      filteredProvinces.sort((a, b) => {
        return sortBy.order == 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      })
      break
  }

  return filteredProvinces
}
