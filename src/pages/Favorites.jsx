import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Trash2, ArrowRight, Building2 } from 'lucide-react'
import { useFavorites } from '../hooks/useFavorites'
import { useProperties } from '../hooks/useProperties'
import PropertyCard from '../components/PropertyCard'

export default function Favorites() {
  const { favorites, clearFavorites } = useFavorites()
  const { properties } = useProperties()

  const savedProperties = properties.filter((p) => favorites.includes(p.id))

  return (
    <div className="py-12 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Saqlangan e'lonlar</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Sizga yoqqan uylar ro'yxati
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Bu yerda siz yoqtirgan va keyinroq ko'rish uchun saqlab qo'ygan barcha ko'chmas mulklar jamlangan.
            </p>
          </div>

          {savedProperties.length > 0 && (
            <button
              onClick={clearFavorites}
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 hover:border-rose-200 hover:bg-rose-50 text-slate-600 hover:text-rose-600 text-xs font-bold rounded-xl transition-all self-start sm:self-auto"
            >
              <Trash2 className="w-4 h-4" />
              <span>Hammasini tozalash</span>
            </button>
          )}
        </div>

        {/* Content */}
        {savedProperties.length > 0 ? (
          <div>
            <div className="mb-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
              Jami: {savedProperties.length} ta saqlangan uy
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {savedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        ) : (
          <div className="py-20 bg-white rounded-3xl border border-slate-200 text-center p-8 max-w-lg mx-auto shadow-sm">
            <div className="w-20 h-20 bg-rose-50 text-rose-500 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-inner">
              <Heart className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-navy-900 mb-2">
              Hozircha saqlangan uylar yo'q
            </h3>
            <p className="text-sm text-slate-500 mb-8 max-w-sm mx-auto">
              Katalogdagi uylar burchagidagi yurakcha tugmasini bosish orqali ularni ushbu sahifaga saqlab qo'yishingiz mumkin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/buy"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-600/20 transition-all"
              >
                <span>Sotuvdagi uylarni ko'rish</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/rent"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-sm font-bold transition-all"
              >
                <span>Ijaradagi uylar</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
