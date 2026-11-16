import { useState, useEffect, useCallback } from 'react'
import { getFromStorage, saveToStorage, removeFromStorage, STORAGE_KEYS } from '../utils/storage'

const AUTH_EVENT = 'uy_market_auth_updated'

export function useAuth() {
  const [user, setUser] = useState(() => {
    return getFromStorage(STORAGE_KEYS.CURRENT_USER, {
      id: 'demo-user-1',
      name: 'Aziz Rahimov',
      email: 'aziz.realtor@uymarket.uz',
      phone: '+998 (90) 123-45-67',
      role: 'Foydalanuvchi',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      isLoggedIn: true
    })
  })

  useEffect(() => {
    const handleAuthChange = () => {
      const stored = getFromStorage(STORAGE_KEYS.CURRENT_USER, null)
      setUser(stored)
    }

    window.addEventListener(AUTH_EVENT, handleAuthChange)
    window.addEventListener('storage', handleAuthChange)
    return () => {
      window.removeEventListener(AUTH_EVENT, handleAuthChange)
      window.removeEventListener('storage', handleAuthChange)
    }
  }, [])

  const login = useCallback((email, password) => {
    // Demo login validation
    const newUser = {
      id: 'user-' + Date.now(),
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email: email,
      phone: '+998 (90) 876-54-32',
      role: 'Foydalanuvchi',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      isLoggedIn: true
    }
    saveToStorage(STORAGE_KEYS.CURRENT_USER, newUser)
    setUser(newUser)
    window.dispatchEvent(new Event(AUTH_EVENT))
    return { success: true, user: newUser }
  }, [])

  const register = useCallback((formData) => {
    const newUser = {
      id: 'user-' + Date.now(),
      name: formData.name || 'Foydalanuvchi',
      email: formData.email,
      phone: formData.phone || '+998 (90) 000-00-00',
      role: formData.role || 'Mulk egasi',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      isLoggedIn: true
    }
    saveToStorage(STORAGE_KEYS.CURRENT_USER, newUser)
    setUser(newUser)
    window.dispatchEvent(new Event(AUTH_EVENT))
    return { success: true, user: newUser }
  }, [])

  const logout = useCallback(() => {
    removeFromStorage(STORAGE_KEYS.CURRENT_USER)
    setUser(null)
    window.dispatchEvent(new Event(AUTH_EVENT))
  }, [])

  return {
    user,
    isAuthenticated: Boolean(user && user.isLoggedIn),
    login,
    register,
    logout
  }
}
