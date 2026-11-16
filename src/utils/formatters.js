// Exchange rate demo constant: 1 USD ≈ 12,800 UZS
export const USD_EXCHANGE_RATE = 12800

/**
 * Format price in Uzbek So'm (e.g., 850 000 000 so'm)
 */
export function formatUZS(amount, isRent = false) {
  if (amount === undefined || amount === null) return "0 so'm"
  const formatted = new Intl.NumberFormat('ru-RU').format(amount)
  return `${formatted} so'm${isRent ? "/oy" : ""}`
}

/**
 * Format approximate price in USD
 */
export function formatUSD(amountInUZS, isRent = false) {
  if (!amountInUZS) return "$0"
  const usd = Math.round(amountInUZS / USD_EXCHANGE_RATE)
  const formatted = new Intl.NumberFormat('en-US').format(usd)
  return `~$${formatted}${isRent ? "/oy" : ""}`
}

/**
 * Format area in square meters
 */
export function formatArea(area) {
  if (!area) return '0 m²'
  return `${area} m²`
}

/**
 * Format phone number
 */
export function formatPhone(phone) {
  if (!phone) return '+998 (90) 123-45-67'
  return phone
}

/**
 * Format relative or standard date
 */
export function formatDate(dateString) {
  if (!dateString) return "Bugun"
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return dateString

  return date.toLocaleDateString('uz-UZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
