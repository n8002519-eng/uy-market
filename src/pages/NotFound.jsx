import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Search, ArrowLeft, Building2 } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 bg-[#F8FAFC]">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-card">
        <div className="w-20 h-20 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
          <Building2 className="w-10 h-10" />
        </div>

        <div className="text-6xl font-black text-navy-900 tracking-tight mb-2">
          404
        </div>

        <h1 className="text-xl font-bold text-navy-900 mb-2">
          Sahifa topilmadi
        </h1>

        <p className="text-xs sm:text-sm text-slate-500 mb-8 leading-relaxed">
          Kechirasiz, siz qidirayotgan sahifa ko'chirilgan, o'chirilgan yoki manzilda xatolik mavjud bo'lishi mumkin.
        </p>

        <div className="space-y-2.5">
          <Link
            to="/"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-600/20 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Bosh sahifaga qaytish</span>
          </Link>

          <Link
            to="/buy"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-sm font-bold transition-all"
          >
            <Search className="w-4 h-4" />
            <span>Ko'chmas mulk qidirish</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
