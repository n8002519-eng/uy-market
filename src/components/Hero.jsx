import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, MapPin, Building, KeyRound, ArrowRight, ShieldCheck, Star, Users } from 'lucide-react'

export default function Hero() {
  const navigate = useNavigate()
  const [dealType, setDealType] = useState('sotuv') // 'sotuv' or 'ijara'
  const [city, setCity] = useState('All')
  const [category, setCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const targetPath = dealType === 'ijara' ? '/rent' : '/buy'
    const params = new URLSearchParams()
    if (city !== 'All') params.set('city', city)
    if (category !== 'All') params.set('category', category)
    if (searchQuery) params.set('query', searchQuery)

    navigate({
      pathname: targetPath,
      search: params.toString() ? `?${params.toString()}` : ''
    })
  }

  return (
    <div className="relative bg-navy-950 text-white overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Architecture"
          className="w-full h-full object-cover opacity-20 filter contrast-125 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>O'zbekistonda #1 Zamonaviy Ko'chmas Mulk Bozori</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            O'zingiz orzu qilgan <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              uyni toping
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Toshkent, Samarqand, Buxoro va O'zbekistonning barcha viloyatlaridagi tasdiqlangan kvartiralar, kottejlar va tijorat binolari bitta platformada.
          </p>
        </div>

        {/* Search Widget Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-3 sm:p-5 shadow-2xl text-slate-900 border border-white/20 backdrop-blur-xl">
          {/* Switcher: Sotib olish vs Ijaraga olish */}
          <div className="flex items-center gap-2 mb-4 p-1 bg-slate-100 rounded-2xl w-fit">
            <button
              type="button"
              onClick={() => setDealType('sotuv')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 ${
                dealType === 'sotuv'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              <span>Sotib olish</span>
            </button>
            <button
              type="button"
              onClick={() => setDealType('ijara')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 ${
                dealType === 'ijara'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              <span>Ijaraga olish</span>
            </button>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Input: Query / Location */}
            <div className="md:col-span-5 relative">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
                Qidiruv so'zi
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Mirobod, Tashkent City, 3 xonali..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Select: City */}
            <div className="md:col-span-3">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
                Shahar
              </label>
              <div className="relative">
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 appearance-none cursor-pointer"
                >
                  <option value="All">Barcha shaharlar</option>
                  <option value="Toshkent">Toshkent</option>
                  <option value="Samarqand">Samarqand</option>
                  <option value="Buxoro">Buxoro</option>
                  <option value="Farg'ona">Farg'ona</option>
                  <option value="Andijon">Andijon</option>
                  <option value="Namangan">Namangan</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Select: Category */}
            <div className="md:col-span-2">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
                Toifa
              </label>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 appearance-none cursor-pointer"
                >
                  <option value="All">Barchasi</option>
                  <option value="kvartiralar">Kvartira</option>
                  <option value="hovlilar">Hovli</option>
                  <option value="yangi-qurilishlar">Yangi qurilish</option>
                  <option value="tijorat-binolari">Tijorat</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                  <Building className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] mt-5 md:mt-0"
              >
                <Search className="w-4 h-4" />
                <span>Qidirish</span>
              </button>
            </div>
          </form>
        </div>

        {/* Quick Stats Bar */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-slate-800/80 pt-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">10,000+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Ko'chmas mulk e'lonlari</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Tekshirilgan mulklar</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">45,000+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Mamnun mijozlar</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">12 ta</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Viloyat va shahar</div>
          </div>
        </div>
      </div>
    </div>
  )
}
