import React from 'react'
import { Link } from 'react-router-dom'
import { Building2, Phone, Mail, MapPin, Send, ShieldCheck, HeartHandshake, Award } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-navy-800/80">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">100% Tekshirilgan uylar</h4>
              <p className="text-sm text-slate-400">Har bir e'lon mutaxassislarimiz tomonidan haqiqiyligi tekshiriladi.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">To'g'ridan-to'g'ri narxlar</h4>
              <p className="text-sm text-slate-400">Mulk egalari va rasmiy dasturchilardan vositachilarsiz shaffof narxlar.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">Tez va qulay xizmat</h4>
              <p className="text-sm text-slate-400">Bir necha daqiqa ichida o'zingizga ma'qul xonadon yoki ijarani toping.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          {/* Col 1: About UY MARKET */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-navy-950 font-bold shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center font-extrabold text-xl text-white tracking-tight">
                  <span>UY</span>
                  <span className="text-emerald-400 ml-1">MARKET</span>
                </div>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                  O'zbekiston Ko'chmas Mulk Portali
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              UY MARKET — O'zbekistondagi eng qulay va zamonaviy ko'chmas mulk platformasi. Xonadonlar, hovlilar, yangi qurilishlar va tijorat binolarini xarid qiling, ijaraga bering yoki qulay narxda soting.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-850 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <div className="text-xs text-slate-400 font-medium">
                Telegram kanal: <span className="text-emerald-400">@uymarket_uz</span>
              </div>
            </div>
          </div>

          {/* Col 2: Mulk toifalari */}
          <div>
            <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Mulk Toifalari</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/buy?category=kvartiralar" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Kvartiralar
                </Link>
              </li>
              <li>
                <Link to="/buy?category=hovlilar" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Hovlilar va Kottejlar
                </Link>
              </li>
              <li>
                <Link to="/buy?category=yangi-qurilishlar" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Yangi Qurilishlar
                </Link>
              </li>
              <li>
                <Link to="/buy?category=tijorat-binolari" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Tijorat Binolari
                </Link>
              </li>
              <li>
                <Link to="/buy?category=yer-uchastkalari" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Yer Uchastkalari
                </Link>
              </li>
              <li>
                <Link to="/rent" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Ijara Uylar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Shaharlar */}
          <div>
            <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Mashhur Shaharlar</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/buy?city=Toshkent" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Toshkent shahri
                </Link>
              </li>
              <li>
                <Link to="/buy?city=Samarqand" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Samarqand
                </Link>
              </li>
              <li>
                <Link to="/buy?city=Buxoro" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Buxoro
                </Link>
              </li>
              <li>
                <Link to="/buy?city=Farg'ona" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Farg'ona
                </Link>
              </li>
              <li>
                <Link to="/buy?city=Andijon" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Andijon
                </Link>
              </li>
              <li>
                <Link to="/buy?city=Namangan" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Namangan
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Bog'lanish */}
          <div>
            <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Aloqa</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">Toshkent sh., Mirobod t., Amir Temur shoh ko'chasi, 107B</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+998712000055" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  +998 (71) 200-00-55
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@uymarket.uz" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  info@uymarket.uz
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/sell"
                  className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-xl text-xs font-bold transition-all"
                >
                  Bepul e'lon joylashtirish
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-4 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} UY MARKET — O'zbekiston. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300 transition-colors">Biz haqimizda</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Aloqa va qo'llab-quvvatlash</Link>
            <span className="text-emerald-500 font-semibold">Toshkent, O'zbekiston</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
