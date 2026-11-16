import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Home, Building, Briefcase, Trees, KeyRound } from 'lucide-react'
import { PROPERTY_CATEGORIES } from '../data/categories'

const iconMap = {
  Building2: Building2,
  Home: Home,
  Building: Building,
  Briefcase: Briefcase,
  Trees: Trees,
  KeyRound: KeyRound
}

export default function CategorySection() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
              Ko'chmas mulk toifalari
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Barcha ehtiyojlar uchun qulay toifalar
            </h2>
            <p className="text-slate-500 text-sm mt-1 max-w-xl">
              Xoh xonadon, xoh hovli yoki biznesingiz uchun qulay ofis bo'lsin — barchasini UY MARKET dan toping.
            </p>
          </div>
          <Link
            to="/buy"
            className="mt-4 md:mt-0 inline-flex items-center gap-1 text-sm font-bold text-emerald-600 hover:text-emerald-700 group"
          >
            <span>Barcha e'lonlarni ko'rish</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTY_CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Building2
            const targetUrl = cat.id === 'ijara-uylar' ? '/rent' : `/buy?category=${cat.slug}`

            return (
              <Link
                key={cat.id}
                to={targetUrl}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-200/80 transition-all duration-300 flex flex-col h-64"
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col justify-between h-full text-white">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-slate-200">
                      {cat.count}+ e'lon
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-1 text-white group-hover:text-emerald-400 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-1 mb-3">
                      {cat.description}
                    </p>
                    <div className="flex items-center text-xs font-bold text-emerald-400 group-hover:text-emerald-300 gap-1">
                      <span>Katalogga o'tish</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
