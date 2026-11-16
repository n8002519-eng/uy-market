import { useState, useEffect, useMemo, useCallback } from 'react'
import { INITIAL_PROPERTIES } from '../data/properties'
import { getFromStorage, saveToStorage, STORAGE_KEYS } from '../utils/storage'
import { getPropertiesFromSupabase, savePropertyToSupabase } from '../services/supabase'

export function useProperties(initialFilters = {}) {
  const [properties, setProperties] = useState(() => {
    const saved = getFromStorage(STORAGE_KEYS.CUSTOM_PROPERTIES, [])
    return [...saved, ...INITIAL_PROPERTIES]
  })

  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({
    query: '',
    city: 'All',
    category: 'All',
    dealType: 'All', // 'All', 'sotuv', 'ijara'
    minPrice: '',
    maxPrice: '',
    rooms: 'All',
    sortBy: 'newest', // 'newest', 'cheapest', 'expensive', 'area-desc'
    ...initialFilters
  })

  // Attempt to load from Supabase if available
  useEffect(() => {
    let isMounted = true
    async function loadRemote() {
      const remoteData = await getPropertiesFromSupabase()
      if (remoteData && remoteData.length > 0 && isMounted) {
        const localCustom = getFromStorage(STORAGE_KEYS.CUSTOM_PROPERTIES, [])
        setProperties([...localCustom, ...remoteData, ...INITIAL_PROPERTIES])
      }
    }
    loadRemote()
    return () => {
      isMounted = false
    }
  }, [])

  // Filter properties based on active criteria
  const filteredProperties = useMemo(() => {
    return properties.filter((item) => {
      // Query search (title, address, district, city)
      if (filters.query) {
        const q = filters.query.toLowerCase().trim()
        const matchTitle = item.title?.toLowerCase().includes(q)
        const matchAddress = item.address?.toLowerCase().includes(q)
        const matchDistrict = item.district?.toLowerCase().includes(q)
        const matchCity = item.city?.toLowerCase().includes(q)
        if (!matchTitle && !matchAddress && !matchDistrict && !matchCity) {
          return false
        }
      }

      // City filter
      if (filters.city && filters.city !== 'All') {
        if (item.city.toLowerCase() !== filters.city.toLowerCase()) {
          return false
        }
      }

      // Category filter
      if (filters.category && filters.category !== 'All') {
        if (item.category !== filters.category) {
          return false
        }
      }

      // Deal type filter (sotuv / ijara)
      if (filters.dealType && filters.dealType !== 'All') {
        if (item.dealType !== filters.dealType) {
          return false
        }
      }

      // Number of rooms
      if (filters.rooms && filters.rooms !== 'All') {
        if (filters.rooms === '4+') {
          if (item.rooms < 4) return false
        } else {
          if (item.rooms !== Number(filters.rooms)) return false
        }
      }

      // Min Price
      if (filters.minPrice) {
        if (item.price < Number(filters.minPrice)) return false
      }

      // Max Price
      if (filters.maxPrice) {
        if (item.price > Number(filters.maxPrice)) return false
      }

      return true
    }).sort((a, b) => {
      if (filters.sortBy === 'cheapest') {
        return a.price - b.price
      }
      if (filters.sortBy === 'expensive') {
        return b.price - a.price
      }
      if (filters.sortBy === 'area-desc') {
        return b.area - a.area
      }
      // Default: newest
      return new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
    })
  }, [properties, filters])

  // Add new property
  const addProperty = useCallback(async (newProperty) => {
    setLoading(true)
    const propertyToSave = {
      ...newProperty,
      id: 'custom-' + Date.now(),
      createdAt: new Date().toISOString().split('T')[0],
      featured: false,
      images: newProperty.images && newProperty.images.length > 0
        ? newProperty.images
        : [newProperty.image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'],
      amenities: newProperty.amenities || ['Avtoturargoh', 'Suv va gaz', 'Internet', 'Bolalar maydonchasi']
    }

    // Save to local storage
    const existing = getFromStorage(STORAGE_KEYS.CUSTOM_PROPERTIES, [])
    const updated = [propertyToSave, ...existing]
    saveToStorage(STORAGE_KEYS.CUSTOM_PROPERTIES, updated)

    // Save to Supabase if configured
    await savePropertyToSupabase(propertyToSave)

    setProperties((prev) => [propertyToSave, ...prev])
    setLoading(false)
    return propertyToSave
  }, [])

  const resetFilters = useCallback(() => {
    setFilters({
      query: '',
      city: 'All',
      category: 'All',
      dealType: 'All',
      minPrice: '',
      maxPrice: '',
      rooms: 'All',
      sortBy: 'newest'
    })
  }, [])

  const getPropertyById = useCallback((id) => {
    return properties.find((p) => p.id === id) || null
  }, [properties])

  return {
    properties,
    filteredProperties,
    filters,
    setFilters,
    resetFilters,
    addProperty,
    getPropertyById,
    loading,
    totalCount: filteredProperties.length
  }
}
