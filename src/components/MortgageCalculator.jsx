import React, { useState, useMemo } from 'react'
import { Calculator, Percent, Calendar, DollarSign, CheckCircle2 } from 'lucide-react'
import { formatUZS } from '../utils/formatters'

export default function MortgageCalculator({ defaultPrice = 1000000000 }) {
  const [price, setPrice] = useState(defaultPrice)
  const [downPaymentPercent, setDownPaymentPercent] = useState(25) // 25%
  const [termYears, setTermYears] = useState(15) // 15 years
  const [interestRate, setInterestRate] = useState(17.5) // 17.5% standard in UZ

  const calculations = useMemo(() => {
    const downPaymentAmount = Math.round((price * downPaymentPercent) / 100)
    const principal = Math.max(0, price - downPaymentAmount)
    const monthlyRate = interestRate / 100 / 12
    const totalMonths = termYears * 12

    let monthlyPayment = 0
    if (principal > 0 && monthlyRate > 0) {
      monthlyPayment = Math.round(
        (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      )
    }

    const totalPayment = monthlyPayment * totalMonths
    const totalInterest = Math.max(0, totalPayment - principal)

    return {
      downPaymentAmount,
      principal,
      monthlyPayment,
      totalPayment,
      totalInterest
    }
  }, [price, downPaymentPercent, termYears, interestRate])

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-navy-900">
            Ipoteka kalkulyatori
          </h3>
          <p className="text-xs text-slate-500">
            Oylik to'lov va kredit shartlarini oldindan hisoblang
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-5">
          {/* Mulk narxi */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase">
                Ko'chmas mulk narxi:
              </label>
              <span className="text-sm font-extrabold text-navy-900">
                {formatUZS(price)}
              </span>
            </div>
            <input
              type="range"
              min="200000000"
              max="6000000000"
              step="50000000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          {/* Boshlang'ich to'lov % */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase">
                Boshlang'ich to'lov ({downPaymentPercent}%):
              </label>
              <span className="text-sm font-bold text-emerald-700">
                {formatUZS(calculations.downPaymentAmount)}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-2">
              {[15, 20, 30, 50].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setDownPaymentPercent(p)}
                  className={`py-1.5 text-xs font-bold rounded-lg border transition-all ${
                    downPaymentPercent === p
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {p}%
                </button>
              ))}
            </div>
          </div>

          {/* Kredit muddati */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase">
                Kredit muddati:
              </label>
              <span className="text-sm font-extrabold text-navy-900">
                {termYears} yil ({termYears * 12} oy)
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[5, 10, 15, 20].map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setTermYears(yr)}
                  className={`py-1.5 text-xs font-bold rounded-lg border transition-all ${
                    termYears === yr
                      ? 'bg-navy-900 border-navy-900 text-white'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {yr} yil
                </button>
              ))}
            </div>
          </div>

          {/* Yillik foiz stavkasi */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase">
                Yillik foiz stavkasi:
              </label>
              <span className="text-sm font-extrabold text-navy-900">
                {interestRate}%
              </span>
            </div>
            <input
              type="range"
              min="14"
              max="24"
              step="0.5"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>
        </div>

        {/* Calculation Result Box */}
        <div className="lg:col-span-5 bg-navy-950 text-white rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Taxminiy oylik to'lov
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-2">
              {formatUZS(calculations.monthlyPayment)}
            </div>
            <p className="text-xs text-slate-400">
              * Banklar tomonidan tasdiqlangan ipoteka dasturlariga qarab o'zgarishi mumkin.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-navy-800 text-xs">
            <div className="flex justify-between text-slate-300">
              <span>Kredit summasi:</span>
              <span className="font-bold text-white">{formatUZS(calculations.principal)}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Boshlang'ich to'lov:</span>
              <span className="font-bold text-emerald-400">{formatUZS(calculations.downPaymentAmount)}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Jami foiz summasi:</span>
              <span className="font-bold text-white">{formatUZS(calculations.totalInterest)}</span>
            </div>
          </div>

          <div className="pt-5 mt-4">
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-800/40">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>O'zbekistondagi 15+ hamkor banklar orqali rasmiylashtirish mumkin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
