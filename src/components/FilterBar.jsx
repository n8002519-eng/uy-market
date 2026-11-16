import React, { useState } from 'react'
import { Search, SlidersHorizontal, RotateCcw, X, DollarSign, Building, MapPin } from 'lucide-react'

export default function FilterBar({ filters, setFilters, resetFilters, totalCount }) {
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleInputChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const roomOptions = ['All', '1', '2', '3', '4+']

  return (
    <div className="bg-white rounded-2xl shadow-card border border-slate-200/90 p-4 sm:p-5 mb-8">
      {/* Top Main Row: Search + DealType + City + Category + Toggle Button */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* Keyword Search */}
        <div className="md:col-span-4 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filters.query || ''}
            onChange={(e) => handleInputChange('query', e.target.value)}
            placeholder="Shahar, tuman, manzil yoki majmua..."
            className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm text-slate-800 placeholder:text-slate-400"
          />
          {filters.query && (
            <button
              onClick={() => handleInputChange('query', '')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* City Filter */}
        <div className="md:col-span-3">
          <div className="relative">
            <select
              value={filters.city || 'All'}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 appearance-none font-medium cursor-pointer"
            >
              <option value="All">Barcha shaharlar (O'zbekiston)</option>
              <option value="Toshkent">Toshkent shahri</option>
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

        {/* Category Filter */}
        <div className="md:col-span-3">
          <div className="relative">
            <select
              value={filters.category || 'All'}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 appearance-none font-medium cursor-pointer"
            >
              <option value="All">Barcha toifalar</option>
              <option value="kvartiralar">Kvartiralar</option>
              <option value="hovlilar">Hovlilar va Kottejlar</option>
              <option value="yangi-qurilishlar">Yangi qurilishlar</option>
              <option value="tijorat-binolari">Tijorat binolari</option>
              <option value="yer-uchastkalari">Yer uchastkalari</option>
              <option value="ijara-uylar">Ijara uylar</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
              <Building className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Toggle Filters Button */}
        <div className="md:col-span-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-sm font-semibold transition-all ${
              showAdvanced
                ? 'bg-navy-900 border-navy-900 text-white'
                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filtrlar</span>
          </button>
        </div>
      </div>

      {/* Advanced Filter Collapse */}
      {showAdvanced && (
        <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in slide-in-from-top-2 duration-200">
          {/* Deal Type Switcher */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
              Mulk holati
            </label>
            <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl">
              {[
                { label: 'Barchasi', value: 'All' },
                { label: 'Sotuv', value: 'sotuv' },
                { label: 'Ijara', value: 'ijara' }
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleInputChange('dealType', opt.value)}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    (filters.dealType || 'All') === opt.value
                      ? 'bg-white text-navy-900 shadow-sm'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rooms Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
              Xonalar soni
            </label>
            <div className="flex items-center gap-1.5">
              {roomOptions.map((room) => (
                <button
                  key={room}
                  type="button"
                  onClick={() => handleInputChange('rooms', room)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                    (filters.rooms || 'All') === room
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {room === 'All' ? 'Har qanday' : room}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
              Narx oralig'i (so'm)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                value={filters.minPrice || ''}
                onChange={(e) => handleInputChange('minPrice', e.target.value)}
                placeholder="Min so'm"
                className="w-full px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
              />
              <input
                type="number"
                value={filters.maxPrice || ''}
                onChange={(e) => handleInputChange('maxPrice', e.target.value)}
                placeholder="Max so'm"
                className="w-full px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Sort By & Reset */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
              Saralash tartibi
            </label>
            <div className="flex items-center gap-2">
              <select
                value={filters.sortBy || 'newest'}
                onChange={(e) => handleInputChange('sortBy', e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg bg-white font-medium text-slate-700 focus:outline-none focus:border-emerald-500"
              >
                <option value="newest">Eng yangi e'lonlar</option>
                <option value="cheapest">Eng arzon narx</option>
                <option value="expensive">Eng qimmat narx</option>
                <option value="area-desc">Maydoni bo'yicha (Kattasi)</option>
              </select>

              <button
                type="button"
                onClick={resetFilters}
                className="p-2 border border-slate-200 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-800 transition-colors"
                title="Filtrlarni tozalash"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Count & Active Tags */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
        <div>
          Topildi: <span className="font-bold text-navy-900">{totalCount} ta e'lon</span>
          {filters.city !== 'All' && <span className="ml-2 font-medium text-emerald-700">({filters.city})</span>}
          {filters.category !== 'All' && <span className="ml-1 font-medium text-emerald-700">({filters.category})</span>}
        </div>

        {(filters.query || filters.city !== 'All' || filters.category !== 'All' || filters.rooms !== 'All' || filters.minPrice || filters.maxPrice || filters.dealType !== 'All') && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Tozalash</span>
          </button>
        )}
      </div>
    </div>
  )
}
