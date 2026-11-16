import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Building2, SearchX } from 'lucide-react'
import PropertyCard from '../components/PropertyCard'
import FilterBar from '../components/FilterBar'
import { useProperties } from '../hooks/useProperties'

export default function Buy() {
  const [searchParams] = useSearchParams()
  const cityParam = searchParams.get('city') || 'All'
  const categoryParam = searchParams.get('category') || 'All'
  const queryParam = searchParams.get('query') || ''

  const {
    filteredProperties,
    filters,
    setFilters,
    resetFilters,
    totalCount
  } = useProperties({
    dealType: 'sotuv',
    city: cityParam,
    category: categoryParam,
    query: queryParam
  })

  // Synchronize when query params change in URL
  useEffect(() => {
    if (cityParam !== 'All' || categoryParam !== 'All' || queryParam) {
      setFilters((prev) => ({
        ...prev,
        dealType: 'sotuv',
        city: cityParam,
        category: categoryParam,
        query: queryParam
      }))
    }
  }, [cityParam, categoryParam, queryParam, setFilters])

  return (
    <div className="py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            Mulk sotib olish
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Ko'chmas mulk sotib olish katalogi
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            O'zbekiston bo'ylab eng ishonchli va tekshirilgan sotuvdagi xonadonlar, hovlilar va yangi qurilishlar
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          resetFilters={resetFilters}
          totalCount={totalCount}
        />

        {/* Properties Grid or Empty State */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="py-20 bg-white rounded-3xl border border-slate-200 text-center p-8 max-w-lg mx-auto">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto text-slate-400 mb-4">
              <SearchX className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Hech qanday e'lon topilmadi
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Kiritilgan mezonlar bo'yicha e'lonlar mavjud emas. Filtrlarni o'zgartirib yoki tozalab qayta urinib ko'ring.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-sm font-bold shadow-md transition-all"
            >
              Filtrlarni tozalash
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
