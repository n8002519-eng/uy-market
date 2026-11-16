import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import { POPULAR_CITIES } from '../data/cities'

export default function CityCards() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-100 text-navy-900 text-xs font-bold uppercase tracking-wider mb-2">
            Hududlar bo'ylab qidiruv
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            O'zbekistonning mashhur shaharlari
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Poytaxt va viloyat markazlaridagi eng talab yuqori bo'lgan ko'chmas mulk manzillari
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_CITIES.map((city) => (
            <Link
              key={city.slug}
              to={`/buy?city=${encodeURIComponent(city.name)}`}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-200/90 bg-white transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-navy-900 shadow-sm flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{city.region}</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-navy-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-emerald-400">
                  {city.propertiesCount}+ e'lon
                </div>
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-emerald-600 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                    {city.description}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center text-slate-600 transition-colors shrink-0 ml-3">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
