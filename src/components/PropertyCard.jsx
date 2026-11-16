import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, MapPin, BedDouble, Maximize2, Layers, Eye, ArrowRight } from 'lucide-react'
import { formatUZS, formatUSD, formatArea } from '../utils/formatters'
import { useFavorites } from '../hooks/useFavorites'

export default function PropertyCard({ property }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorited = isFavorite(property.id)

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(property.id)
  }

  const isRent = property.dealType === 'ijara'

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-slate-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full">
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Overlay for badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
          <span
            className={`px-2.5 py-1 text-xs font-bold rounded-lg shadow-sm backdrop-blur-md ${
              isRent
                ? 'bg-amber-500/90 text-white'
                : 'bg-emerald-600/90 text-white'
            }`}
          >
            {isRent ? 'Ijara' : 'Sotuv'}
          </span>

          {property.featured && (
            <span className="px-2.5 py-1 text-xs font-bold rounded-lg shadow-sm bg-navy-900/85 backdrop-blur-md text-emerald-400">
              Tavsiya etiladi
            </span>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          type="button"
          onClick={handleFavoriteClick}
          aria-label={favorited ? "Sevimlilardan o'chirish" : "Sevimlilarga qo'shish"}
          className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md transition-all duration-200 shadow-md ${
            favorited
              ? 'bg-rose-500 text-white scale-110 shadow-rose-500/30'
              : 'bg-white/80 text-slate-700 hover:bg-white hover:text-rose-500 hover:scale-105'
          }`}
        >
          <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
        </button>

        {/* Bottom image overlay tag (Property category) */}
        <div className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-navy-950/70 text-slate-200 backdrop-blur-sm">
          {property.category === 'kvartiralar' && 'Kvartira'}
          {property.category === 'hovlilar' && 'Hovli'}
          {property.category === 'yangi-qurilishlar' && 'Yangi qurilish'}
          {property.category === 'tijorat-binolari' && 'Tijorat'}
          {property.category === 'yer-uchastkalari' && 'Yer uchastkasi'}
          {property.category === 'ijara-uylar' && 'Ijara'}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Price Row */}
        <div className="mb-2">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight">
              {formatUZS(property.price, isRent)}
            </span>
          </div>
          <p className="text-xs font-medium text-emerald-700">
            {formatUSD(property.price, isRent)}
          </p>
        </div>

        {/* Title */}
        <Link to={`/property/${property.id}`} className="block group-hover:text-emerald-700 transition-colors">
          <h3 className="font-bold text-base text-navy-900 line-clamp-2 leading-snug mb-2">
            {property.title}
          </h3>
        </Link>

        {/* Location */}
        <div className="flex items-center text-slate-500 text-xs mb-4 gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">{property.city}, {property.district || property.address}</span>
        </div>

        {/* Specs Row */}
        <div className="mt-auto pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs text-slate-600 mb-4">
          <div className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-slate-50">
            <div className="flex items-center gap-1 font-bold text-navy-900 text-sm">
              <BedDouble className="w-3.5 h-3.5 text-emerald-600" />
              <span>{property.rooms > 0 ? property.rooms : '—'}</span>
            </div>
            <span className="text-[11px] text-slate-400">xonali</span>
          </div>

          <div className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-slate-50">
            <div className="flex items-center gap-1 font-bold text-navy-900 text-sm">
              <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{property.area}</span>
            </div>
            <span className="text-[11px] text-slate-400">m² maydon</span>
          </div>

          <div className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-slate-50">
            <div className="flex items-center gap-1 font-bold text-navy-900 text-sm">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>{property.floor > 0 ? `${property.floor}/${property.totalFloors || '—'}` : '—'}</span>
            </div>
            <span className="text-[11px] text-slate-400">qavat</span>
          </div>
        </div>

        {/* Action Button: View Details */}
        <Link
          to={`/property/${property.id}`}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 hover:bg-navy-900 text-slate-800 hover:text-white rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 group/btn"
        >
          <Eye className="w-4 h-4 text-slate-500 group-hover/btn:text-white transition-colors" />
          <span>Batafsil ko'rish</span>
          <ArrowRight className="w-3.5 h-3.5 ml-0.5 opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
        </Link>
      </div>
    </div>
  )
}
