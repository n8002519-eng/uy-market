import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, PlusCircle, CheckCircle } from 'lucide-react'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import CityCards from '../components/CityCards'
import WhyUs from '../components/WhyUs'
import PropertyCard from '../components/PropertyCard'
import { useProperties } from '../hooks/useProperties'

export default function Home() {
  const { properties } = useProperties()

  // Featured properties
  const featuredProperties = properties.filter((p) => p.featured).slice(0, 4)

  // Latest listings
  const latestProperties = [...properties]
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .slice(0, 8)

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Property Categories */}
      <CategorySection />

      {/* 3. Featured Properties (Tavsiya etilgan e'lonlar) */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Eksklyuziv takliflar</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                Tavsiya etilgan eng sara uylar
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Moderatorlarimiz tomonidan saralangan yuqori darajadagi ko'chmas mulklar
              </p>
            </div>
            <Link
              to="/buy"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 group"
            >
              <span>Barchasini ko'rish ({properties.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Popular Cities */}
      <CityCards />

      {/* 5. Latest Listings (Eng so'nggi e'lonlar) */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-100 text-navy-900 text-xs font-bold uppercase tracking-wider mb-2">
                Yangi takliflar
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                So'nggi qo'shilgan e'lonlar
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Bozorga endigina chiqarilgan eng yangi va dolzarb uylar
              </p>
            </div>
            <Link
              to="/buy"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 group"
            >
              <span>Ko'proq ko'rish</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose UY MARKET */}
      <WhyUs />

      {/* 7. Sell Property Call to Action Banner */}
      <section className="py-16 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-navy-900 to-navy-850 rounded-3xl p-8 sm:p-12 border border-navy-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
                Mulk egalari va quruvchilar uchun
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-3">
                Uyingizni qulay va tez fursatda sotmoqchimisiz?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                UY MARKET platformasida har kuni 50,000+ dan ziyod xaridorlar o'zlariga mos uy qidirishmoqda. E'loningizni hoziroq bepul joylashtiring va xaridorlar bilan to'g'ridan-to'g'ri bog'laning.
              </p>
              <div className="flex flex-wrap gap-4 mt-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Mutlaqo bepul e'lon joylash</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Tezkor moderatsiya (15 daqiqa)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>O'zbekiston bo'ylab 1M+ auditoriya</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Link
                to="/sell"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-base font-bold shadow-lg shadow-emerald-600/30 transition-all duration-200 hover:scale-105"
              >
                <PlusCircle className="w-5 h-5" />
                <span>E'lon berish (+Sotish)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
