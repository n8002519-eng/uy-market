import React from 'react'
import { Link } from 'react-router-dom'
import { Building2, ShieldCheck, Users, Target, Award, CheckCircle2, ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Biz haqimizda
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            O'zbekistonda yangi avlod <br className="hidden sm:inline" />
            <span className="text-emerald-600">ko'chmas mulk platformasi</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            UY MARKET — bu xaridorlar, ijarachilar, mulk egalari va professional rieltorlarni bitta zamonaviy, xavfsiz va qulay texnologik ekotizimda birlashtirgan platforma.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-card text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-1">10,000+</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">Faol e'lonlar bazasi</div>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-card text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 mb-1">45,000+</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">Mamnun oilalar</div>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-card text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-1">12 ta</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">Viloyat va poytaxt</div>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-card text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 mb-1">15+</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">Hamkor yirik banklar</div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">
              <Target className="w-3.5 h-3.5" />
              <span>Bizning missiyamiz</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4">
              Har bir inson uchun orzusidagi uyni topish jarayonini oson va shaffof qilish
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
              Ilgari O'zbekistonda uy xarid qilish yoki ijaraga olish ko'plab vositachilar, noaniq narxlar va ishonchsiz e'lonlar tufayli murakkab edi. Biz bu tizimni butunlay o'zgartirish maqsadida UY MARKET ni qurdik.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  Har bir e'lonning rasmlari va narxini sun'iy intellekt va moderatorlar ko'magida tekshiramiz.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  Quruvchilar bilan to'g'ridan-to'g'ri muddatli to'lov va maxsus chegirmalarni taqdim etamiz.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  Xaridorlarga bepul huquqiy va ipoteka hisob-kitob ko'rsatmalarini beramiz.
                </span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="UY MARKET Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="text-lg font-bold">UY MARKET Bosh Binosi</div>
                <div className="text-xs text-slate-300">Toshkent shahri, Amir Temur shoh ko'chasi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
              Bizning asosiy qadriyatlarimiz
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Har bir qarorimiz ortida mijozlarimiz manfaati va ishonchi turadi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Mutlaq Shaffoflik</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Hech qanday ko'z ilg'amas shartlar va yashirin to'lovlarsiz — narxlar mulk egalari tomonidan qanday belgilangan bo'lsa shunday ko'rsatiladi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Mijoz Manfaati</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Biz uchun birinchi o'rinda sizning orzuingizdagi xonadonni xavfsiz va eng maqbul shartlarda topishingiz hisoblanadi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Zamonaviy Texnologiyalar</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Ipoteka kalkulyatori, qulay filtrlash, xarita integratsiyasi va tezkor xabarlashuv tizimi barchasi sizning vaqtingizni tejash uchun.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy-900 rounded-3xl p-8 sm:p-12 text-white text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            O'zingizga mos uyni hoziroq toping
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Katalogimizdagi minglab zamonaviy kvartiralar va hovlilarni o'rganib chiqing yoki o'z e'loningizni bepul joylashtiring.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/buy"
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Uylarni ko'rish</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/sell"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-bold transition-all"
            >
              E'lon berish (+Sotish)
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
