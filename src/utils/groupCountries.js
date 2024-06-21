export const groupCountries = (data) => {
  const result = data.reduce((acc, item) => {
    const { iso } = item.region

    if (!acc[iso]) {
      acc[iso] = {
        ...item.region,
        confirmed: 0,
        deaths: 0,
        fatality_rate: 0,
        hasProvincesInfo: false
      }
    }

    acc[iso].confirmed += item.confirmed
    acc[iso].deaths += item.deaths
    acc[iso].fatality_rate = acc[iso].deaths / acc[iso].confirmed
    acc[iso].hasProvincesInfo = acc[iso].hasProvincesInfo || !!item.region.province

    return acc
  }, {})

  return Object.values(result)
}
