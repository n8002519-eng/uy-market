import { useState, useEffect, useCallback } from 'react'
import { getFromStorage, saveToStorage, STORAGE_KEYS } from '../utils/storage'

const FAVORITES_EVENT = 'uy_market_favorites_updated'

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    return getFromStorage(STORAGE_KEYS.FAVORITES, ['prop-1', 'prop-3'])
  })

  useEffect(() => {
    const handleStorageChange = () => {
      setFavorites(getFromStorage(STORAGE_KEYS.FAVORITES, []))
    }

    window.addEventListener(FAVORITES_EVENT, handleStorageChange)
    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener(FAVORITES_EVENT, handleStorageChange)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const toggleFavorite = useCallback((propertyId) => {
    setFavorites((prev) => {
      const exists = prev.includes(propertyId)
      const next = exists ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]
      saveToStorage(STORAGE_KEYS.FAVORITES, next)
      window.dispatchEvent(new Event(FAVORITES_EVENT))
      return next
    })
  }, [])

  const isFavorite = useCallback(
    (propertyId) => {
      return favorites.includes(propertyId)
    },
    [favorites]
  )

  const clearFavorites = useCallback(() => {
    saveToStorage(STORAGE_KEYS.FAVORITES, [])
    setFavorites([])
    window.dispatchEvent(new Event(FAVORITES_EVENT))
  }, [])

  return {
    favorites,
    favoritesCount: favorites.length,
    toggleFavorite,
    isFavorite,
    clearFavorites
  }
}
