export const formatNumber = (number) => {
  return new Intl.NumberFormat('pt-BR').format(number)
}

export const formatPercentage = (number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(number)
}
