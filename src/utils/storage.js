export const STORAGE_KEYS = {
  FAVORITES: 'uy_market_favorites',
  CUSTOM_PROPERTIES: 'uy_market_custom_properties',
  CURRENT_USER: 'uy_market_current_user',
  CURRENCY_PREF: 'uy_market_currency_pref',
}

export function getFromStorage(key, defaultValue) {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error)
    return defaultValue
  }
}

export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(`Error writing ${key} to localStorage:`, error)
  }
}

export function removeFromStorage(key) {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error deleting ${key} from localStorage:`, error)
  }
}
