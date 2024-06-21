export const groupCountriesInfo = (data) => {
  const result = data.reduce((acc, item) => {
    const { iso } = item.region
    
    if (!acc[iso]) {
      acc[iso] = { ...item.region, confirmed: 0, deaths: 0, fatality_rate: 0 }
    }

    acc[iso].confirmed += item.confirmed
    acc[iso].deaths += item.deaths
    acc[iso].fatality_rate += item.fatality_rate

    return acc
  }, {})

  return Object.values(result)
}