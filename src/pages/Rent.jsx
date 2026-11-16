import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { KeyRound, SearchX } from 'lucide-react'
import PropertyCard from '../components/PropertyCard'
import FilterBar from '../components/FilterBar'
import { useProperties } from '../hooks/useProperties'

export default function Rent() {
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
    dealType: 'ijara',
    city: cityParam,
    category: categoryParam,
    query: queryParam
  })

  useEffect(() => {
    if (cityParam !== 'All' || categoryParam !== 'All' || queryParam) {
      setFilters((prev) => ({
        ...prev,
        dealType: 'ijara',
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            <KeyRound className="w-3.5 h-3.5" />
            <span>Ko'chmas mulk ijarasi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Uzoq va qisqa muddatli ijara uylar
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Toshkent va boshqa yirik shaharlardagi qulay jihozlangan, barcha sharoitga ega xonadonlar
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
              Ijara bo'yicha e'lon topilmadi
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Kiritilgan parametrlar bo'yicha ijara uylari mavjud emas. Filtrlarni tozalab qayta urinib ko'ring.
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
