import React from 'react'
import { ShieldCheck, SearchCheck, BadgePercent, Clock, Headphones, Award } from 'lucide-react'

export default function WhyUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Tekshirilgan E'lonlar",
      description: "Bizning moderatorlarimiz har bir e'lonning narxi, kadastr holati va fotosuratlari haqiqiyligini sinchkovlik bilan tekshiradi."
    },
    {
      icon: BadgePercent,
      title: "Vositachilarsiz Shaffoflik",
      description: "Ko'chmas mulk egalari va nufuzli dasturchi kompaniyalar bilan to'g'ridan-to'g'ri aloqa o'rnating. Yashirin to'lovlar yo'q."
    },
    {
      icon: SearchCheck,
      title: "Aqlli Qidiruv va Filtrlar",
      description: "Shahar, tuman, xonalar soni, narx va bino toifasi bo'yicha orzuingizdagi uyni bir necha soniyada aniqlang."
    },
    {
      icon: Clock,
      title: "Tezkor va Qulay Jarayon",
      description: "Ipoteka kalkulyatori yordamida oylik to'lovni hisoblang, uy egasi bilan darhol qo'ng'iroq yoki Telegram orqali bog'laning."
    },
    {
      icon: Headphones,
      title: "24/7 Qo'llab-quvvatlash",
      description: "Bizning mutaxassislarimiz har qanday savol va huquqiy maslahatlarda sizga doimo ko'maklashishga tayyor."
    },
    {
      icon: Award,
      title: "O'zbekistonda Ishonchli Brend",
      description: "Minglab oilalar UY MARKET orqali o'zlarining shinam xonadonlari va daromadli investitsiyalariga ega bo'lishdi."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Bizning Afzalliklarimiz
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Nega aynan UY MARKET ni tanlashadi?
          </h2>
          <p className="text-slate-500 text-base mt-2">
            Biz ko'chmas mulk bozorida shaffoflik, ishonch va qulaylikni birinchi o'ringa qo'yamiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-emerald-500/40 hover:bg-white hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
