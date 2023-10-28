export const formatNumber = (number) => {
  if (!number) return 'unknown'
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
} 