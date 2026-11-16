import React, { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  MessageSquare
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Ko\'chmas mulk bo\'yicha maslahat',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Ko\'chmas mulk bo\'yicha maslahat',
        message: ''
      })
    }, 4000)
  }

  const faqs = [
    {
      q: "UY MARKET da e'lon berish bepulmi?",
      a: "Ha, oddiy foydalanuvchilar va mulk egalari uchun e'lon joylashtirish mutlaqo bepul. Siz bemalol kvartirangiz yoki hovlingiz rasmlarini yuklab, narxini ko'rsatgan holda e'lon berishingiz mumkin."
    },
    {
      q: "E'lon qancha vaqt ichida saytda ko'rinadi?",
      a: "Bizning moderatorlarimiz e'lonlarni 15 daqiqadan 1 soatgacha bo'lgan vaqt oralig'ida tekshirib, tasdiqlaydilar. Tasdiqlanishi bilan e'lon qidiruvda paydo bo'ladi."
    },
    {
      q: "Ipoteka orqali xonadon sotib olishda yordam berasizmi?",
      a: "Albatta! Saytimizdagi har bir mulk sahifasida 'Ipoteka kalkulyatori' mavjud. Shuningdek, bizning mutaxassislarimiz O'zbekistonning 15 dan ortiq yirik banklarida ipoteka kreditini rasmiylashtirishda bepul maslahat beradilar."
    },
    {
      q: "Mulk egasi bilan qanday bog'lanish mumkin?",
      a: "Har bir e'lon sahifasida mulkdorning telefon raqami, Telegram havolasi va to'g'ridan-to'g'ri xabar yuborish shakli ko'rsatilgan. Siz to'g'ridan-to'g'ri bog'lanib, savollaringizni berishingiz mumkin."
    }
  ]

  return (
    <div className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Biz bilan bog'lanish
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Savollaringiz bormi? Yordam berishga tayyormiz!
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Mulk xaridi, ijara yoki platformada e'lon berish bo'yicha har qanday masalada mutaxassislarimiz bilan bog'laning.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-navy-900 text-sm mb-1">Bosh ofis</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Toshkent sh., Mirobod t., Amir Temur shoh ko'chasi, 107B
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-navy-900 text-sm mb-1">Telefon raqamlar</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                +998 (71) 200-00-55 <br />
                +998 (90) 123-45-67
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-navy-900 text-sm mb-1">Elektron pochta</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                info@uymarket.uz <br />
                support@uymarket.uz
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-navy-900 text-sm mb-1">Ish vaqti</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Dush - Shan: 09:00 - 19:00 <br />
                Yakshanba: Dam olish kuni
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form & Map / Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-card">
            <h3 className="text-xl font-extrabold text-navy-900 mb-2">
              Bizga xabar qoldiring
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Ma'lumotlaringizni to'ldiring va operatorlarimiz 15 daqiqa ichida siz bilan bog'lanishadi.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-3 bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-950">Xabaringiz muvaffaqiyatli qabul qilindi!</h4>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                  Tez orada mutaxassislarimiz siz ko'rsatgan aloqa vositasi orqali javob berishadi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Ismingiz</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ulug'bek"
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Telefon raqam</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+998 (90) 123-45-67"
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Elektron pochta</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ulugbek@mail.uz"
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mavzu</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 bg-white"
                    >
                      <option value="Ko'chmas mulk bo'yicha maslahat">Ko'chmas mulk bo'yicha maslahat</option>
                      <option value="E'lon joylashtirish bo'yicha">E'lon joylashtirish bo'yicha</option>
                      <option value="Ipoteka maslahati">Ipoteka maslahati</option>
                      <option value="Hamkorlik va reklama">Hamkorlik va reklama</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Xabar matni</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Qanday mulk qidiryapsiz yoki qanday savolingiz bor?.."
                    className="w-full p-4 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Xabarni yuborish</span>
                </button>
              </form>
            )}
          </div>

          {/* Location / Telegram Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-950 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Tezkor Onlayn Yordam
                </span>
                <h4 className="text-2xl font-extrabold mt-2 mb-3">
                  Telegram orqali 24/7 aloqa
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Savollaringizga bir zumda javob olish uchun bizning Telegram botimiz yoki mutaxassislarimizga murojaat qiling.
                </p>

                <div className="space-y-3 mb-8 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Tezkor 5 daqiqalik javob</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Hujjatlar va shartnomalar bo'yicha maslahat</span>
                  </div>
                </div>
              </div>

              <a
                href="https://t.me/uymarket_uz"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-navy-950 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Telegram botga o'tish (@uymarket_uz)</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-navy-900">
              Ko'p beriladigan savollar (FAQ)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Foydalanuvchilarimiz tomonidan eng ko'p so'ralgan savollarga javoblar
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-navy-900 hover:text-emerald-700"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-50 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
