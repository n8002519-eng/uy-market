import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Building2,
  Heart,
  PlusCircle,
  Menu,
  X,
  User,
  LogOut,
  ChevronDown,
  Search,
  Home as HomeIcon,
  ShoppingBag,
  KeyRound,
  FileText,
  PhoneCall
} from 'lucide-react'
import { useFavorites } from '../hooks/useFavorites'
import { useAuth } from '../hooks/useAuth'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { favoritesCount } = useFavorites()
  const { user, isAuthenticated, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setUserDropdownOpen(false)
  }, [location.pathname])

  const navLinks = [
    { label: 'Bosh sahifa', path: '/' },
    { label: 'Sotib olish', path: '/buy' },
    { label: 'Ijara', path: '/rent' },
    { label: 'Biz haqimizda', path: '/about' },
    { label: 'Aloqa', path: '/contact' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const handleLogout = () => {
    logout()
    setUserDropdownOpen(false)
    navigate('/')
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-primary-400 shadow-md group-hover:scale-105 transition-transform duration-200">
              <Building2 className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center tracking-tight font-extrabold text-xl text-navy-900">
                <span>UY</span>
                <span className="text-emerald-600 ml-1">MARKET</span>
                <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">UZ</span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase -mt-0.5">
                Ko'chmas Mulk Bozori
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  isActive(link.path)
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Favorites Button with Counter */}
            <Link
              to="/favorites"
              aria-label="Tanlangan uylar"
              className="relative p-2.5 text-slate-600 hover:text-navy-900 hover:bg-slate-100 rounded-xl transition-colors"
              title="Tanlangan uylar"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                  {favoritesCount}
                </span>
              )}
            </Link>

            {/* Sell / Add Listing CTA */}
            <Link
              to="/sell"
              className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all duration-200"
            >
              <PlusCircle className="w-4 h-4" />
              <span>E'lon berish</span>
            </Link>

            {/* Auth Button or User Menu */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 pl-2.5 pr-2 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-sm font-medium text-slate-700"
                >
                  <img
                    src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'}
                    alt={user?.name}
                    className="w-7 h-7 rounded-full object-cover ring-2 ring-emerald-500/30"
                  />
                  <span className="max-w-[100px] truncate text-xs font-bold text-navy-900">{user?.name}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                    <div className="px-4 py-2.5 border-b border-slate-100">
                      <p className="text-xs text-slate-500">Tizimga kirilgan</p>
                      <p className="text-sm font-bold text-navy-900 truncate">{user?.name}</p>
                      <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                    </div>

                    <Link
                      to="/sell"
                      className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <PlusCircle className="w-4 h-4 text-emerald-600" />
                      <span>Mening e'lonlarim</span>
                    </Link>

                    <Link
                      to="/favorites"
                      className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <Heart className="w-4 h-4 text-rose-500" />
                      <span>Saqlangan uylar</span>
                      {favoritesCount > 0 && (
                        <span className="ml-auto text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-semibold">
                          {favoritesCount}
                        </span>
                      )}
                    </Link>

                    <div className="border-t border-slate-100 my-1"></div>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left flex items-center gap-2.5 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 font-medium"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Chiqish</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Kirish
                </Link>
                <Link
                  to="/register"
                  className="px-3.5 py-2 text-sm font-semibold text-navy-900 border border-slate-200 hover:border-navy-900 rounded-xl transition-all"
                >
                  Ro'yxatdan o'tish
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              to="/favorites"
              className="relative p-2 text-slate-700 rounded-lg"
              aria-label="Favorites"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2.5 rounded-xl text-base font-semibold ${
                  isActive(link.path)
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <Link
              to="/sell"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 text-white rounded-xl font-semibold shadow-sm"
            >
              <PlusCircle className="w-5 h-5" />
              <span>E'lon berish (+Sotish)</span>
            </Link>

            {isAuthenticated ? (
              <div className="space-y-1 pt-2">
                <div className="px-3 py-2 bg-slate-50 rounded-xl flex items-center gap-3">
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-navy-900">{user?.name}</p>
                    <p className="text-xs text-slate-500">{user?.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2 text-rose-600 text-sm font-semibold rounded-xl hover:bg-rose-50"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Chiqish</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  to="/login"
                  className="py-2.5 text-center text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50"
                >
                  Kirish
                </Link>
                <Link
                  to="/register"
                  className="py-2.5 text-center text-sm font-semibold text-white bg-navy-900 rounded-xl hover:bg-navy-800"
                >
                  Ro'yxatdan o'tish
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
