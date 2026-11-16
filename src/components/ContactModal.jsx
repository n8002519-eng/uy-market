import React, { useState } from 'react'
import { X, Phone, Send, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react'

export default function ContactModal({ property, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: `Assalomu alaykum! Men "${property?.title}" e'loni bo'yicha qiziqib bog'lanmoqdaman.`
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen || !property) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      // auto close after 2.5s
      setTimeout(() => {
        setSubmitted(false)
        onClose()
      }, 2000)
    }, 500)
  }

  const owner = property.owner || {
    name: 'Mulk egasi',
    phone: '+998 (90) 123-45-67',
    telegram: 'uymarket_uz',
    role: 'Mulk egasi'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-navy-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-700 border-2 border-emerald-500">
              <img
                src={owner.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                alt={owner.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">{owner.name}</h4>
              <p className="text-xs text-emerald-400">{owner.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">Xabaringiz yuborildi!</h3>
              <p className="text-sm text-slate-500 max-w-xs mx-auto">
                Mulk egasi siz bilan ko'rsatilgan telefon raqami orqali tez fursatda bog'lanadi.
              </p>
            </div>
          ) : (
            <>
              {/* Direct Quick Actions */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a
                  href={`tel:${owner.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-600/20 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Qo'ng'iroq qilish</span>
                </a>

                <a
                  href={`https://t.me/${owner.telegram.replace('@', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-sm font-bold shadow-md shadow-sky-500/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
              </div>

              <div className="relative flex py-2 items-center mb-4">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink mx-4 text-xs font-semibold text-slate-400 uppercase">
                  Yoki xabar qoldiring
                </span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Ismingiz
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masalan: Sardor"
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Telefon raqamingiz
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+998 (90) 123-45-67"
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Xabar matni
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-sm font-bold transition-all shadow-md"
                >
                  Xabarni jo'natish
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
