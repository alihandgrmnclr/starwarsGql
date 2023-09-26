export const formatNumber = (number) => {
  const fixedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return fixedNumber
} 