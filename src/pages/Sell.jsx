import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  PlusCircle,
  Building2,
  CheckCircle2,
  Upload,
  Image as ImageIcon,
  DollarSign,
  MapPin,
  BedDouble,
  Maximize2,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import { useProperties } from '../hooks/useProperties'
import { useAuth } from '../hooks/useAuth'

const SAMPLE_IMAGE_PRESETS = [
  { label: 'Zamonaviy kvartira', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Shinam interyer', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Keng hovli / kottej', url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Yangi TJM majmuasi', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Tijorat ofis binosi', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Ijara studiya', url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80' }
]

export default function Sell() {
  const navigate = useNavigate()
  const { addProperty } = useProperties()
  const { user } = useAuth()

  const [formData, setFormData] = useState({
    title: '',
    dealType: 'sotuv',
    category: 'kvartiralar',
    price: '',
    city: 'Toshkent',
    district: '',
    address: '',
    rooms: '3',
    area: '',
    floor: '4',
    totalFloors: '9',
    buildingType: 'G\'ishtli',
    condition: 'Yevro ta\'mir',
    image: SAMPLE_IMAGE_PRESETS[0].url,
    description: '',
    ownerName: user?.name || '',
    ownerPhone: user?.phone || '+998 (90) 123-45-67',
    ownerTelegram: 'uymarket_seller'
  })

  const [submittedPropertyId, setSubmittedPropertyId] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const newPropertyData = {
      title: formData.title,
      dealType: formData.dealType,
      category: formData.category,
      price: Number(formData.price),
      city: formData.city,
      district: formData.district || formData.city,
      address: formData.address,
      rooms: Number(formData.rooms),
      area: Number(formData.area),
      floor: Number(formData.floor),
      totalFloors: Number(formData.totalFloors),
      buildingType: formData.buildingType,
      condition: formData.condition,
      image: formData.image,
      images: [formData.image],
      description: formData.description,
      owner: {
        name: formData.ownerName || 'Mulk egasi',
        phone: formData.ownerPhone || '+998 (90) 123-45-67',
        telegram: formData.ownerTelegram || 'uymarket_uz',
        role: 'Mulk egasi',
        isVerified: true,
        avatar: user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
      }
    }

    const created = await addProperty(newPropertyData)
    setLoading(false)
    setSubmittedPropertyId(created.id)
  }

  return (
    <div className="py-12 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Yangi e'lon joylash</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Ko'chmas mulkingizni soting yoki ijaraga bering
          </h1>
          <p className="text-slate-500 text-sm mt-1 max-w-xl mx-auto">
            E'loningizni bir necha qadamda joylashtiring. UY MARKET da minglab xaridorlar sizning e'loningizni ko'rishadi.
          </p>
        </div>

        {/* Success Screen after submission */}
        {submittedPropertyId ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3">
              E'loningiz muvaffaqiyatli qabul qilindi!
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto mb-8">
              Sizning e'loningiz katalogga qo'shildi va barcha xaridorlar uchun ko'rinmoqda. Quyidagi tugma orqali uni darhol ko'zdan kechirishingiz mumkin.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate(`/property/${submittedPropertyId}`)}
                className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
              >
                <span>E'lonni ko'rish</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setSubmittedPropertyId(null)
                  setFormData((prev) => ({ ...prev, title: '', price: '', description: '' }))
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-sm font-bold transition-all"
              >
                Yana yangi e'lon qo'shish
              </button>
            </div>
          </div>
        ) : (
          /* Submission Form */
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card space-y-8">
            {/* Step 1: Bitim turi va Toifa */}
            <div>
              <h3 className="text-base font-bold text-navy-900 pb-3 border-b border-slate-100 mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">1</span>
                <span>Bitim turi va toifasi</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Bitim turi</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, dealType: 'sotuv' }))}
                      className={`py-3 text-sm font-bold rounded-xl border transition-all ${
                        formData.dealType === 'sotuv'
                          ? 'bg-navy-900 border-navy-900 text-white shadow-sm'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      Sotuv (Sotish)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, dealType: 'ijara' }))}
                      className={`py-3 text-sm font-bold rounded-xl border transition-all ${
                        formData.dealType === 'ijara'
                          ? 'bg-amber-600 border-amber-600 text-white shadow-sm'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      Ijara (Berish)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Mulk toifasi</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-emerald-500 bg-white"
                  >
                    <option value="kvartiralar">Kvartiralar</option>
                    <option value="hovlilar">Hovlilar va Kottejlar</option>
                    <option value="yangi-qurilishlar">Yangi qurilishlar</option>
                    <option value="tijorat-binolari">Tijorat binolari</option>
                    <option value="yer-uchastkalari">Yer uchastkalari</option>
                    <option value="ijara-uylar">Ijara uylar</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  E'lon sarlavhasi (Qisqa va jozibali)
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Masalan: Tashkent City yaqinida shinam 3 xonali yevro kvartira"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Step 2: Manzil va Narx */}
            <div>
              <h3 className="text-base font-bold text-navy-900 pb-3 border-b border-slate-100 mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">2</span>
                <span>Manzil va Narxi</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Shahar / Viloyat</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-emerald-500 bg-white"
                  >
                    <option value="Toshkent">Toshkent</option>
                    <option value="Samarqand">Samarqand</option>
                    <option value="Buxoro">Buxoro</option>
                    <option value="Farg'ona">Farg'ona</option>
                    <option value="Andijon">Andijon</option>
                    <option value="Namangan">Namangan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tuman / Hudud</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="Masalan: Mirobod tumani"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Narxi ({formData.dealType === 'ijara' ? "so'm/oy" : "so'm"})
                  </label>
                  <input
                    type="number"
                    name="price"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    placeholder={formData.dealType === 'ijara' ? "6 500 000" : "850 000 000"}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Aniq manzil (Mo'ljal)</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Ko'cha nomi, uy raqami yoki mo'ljal..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Step 3: Texnik parametrlari */}
            <div>
              <h3 className="text-base font-bold text-navy-900 pb-3 border-b border-slate-100 mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">3</span>
                <span>Texnik parametrlari</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Xonalar soni</label>
                  <select
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 bg-white"
                  >
                    <option value="1">1 xona</option>
                    <option value="2">2 xona</option>
                    <option value="3">3 xona</option>
                    <option value="4">4 xona</option>
                    <option value="5">5+ xona</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Maydoni (m²)</label>
                  <input
                    type="number"
                    name="area"
                    required
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="85"
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Qavat</label>
                  <input
                    type="number"
                    name="floor"
                    value={formData.floor}
                    onChange={handleChange}
                    placeholder="4"
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Jami qavatlar</label>
                  <input
                    type="number"
                    name="totalFloors"
                    value={formData.totalFloors}
                    onChange={handleChange}
                    placeholder="9"
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Bino turi</label>
                  <select
                    name="buildingType"
                    value={formData.buildingType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 bg-white"
                  >
                    <option value="G'ishtli">G'ishtli (Kiprich)</option>
                    <option value="Monolit">Monolit zamonaviy</option>
                    <option value="Panelli">Panelli</option>
                    <option value="Kottej">Kottej / Shaxsiy bino</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Ta'miri (Holati)</label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 bg-white"
                  >
                    <option value="Yevro ta'mir">Yevro ta'mir</option>
                    <option value="Mualliflik dizayni">Mualliflik dizayni</option>
                    <option value="Yaxshi">Yaxshi (Oddiy ta'mir)</option>
                    <option value="Qora suvoq">Qora suvoq (Korobka)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Rasm tanlash yoki URL kiritish */}
            <div>
              <h3 className="text-base font-bold text-navy-900 pb-3 border-b border-slate-100 mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">4</span>
                <span>Fotosurat tanlash</span>
              </h3>

              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Rasm havolasi (URL)</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <span className="block text-xs font-bold text-slate-500 mb-2">Yoki tayyor namuna rasmlardan birini tanlang:</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {SAMPLE_IMAGE_PRESETS.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, image: preset.url }))}
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                        formData.image === preset.url
                          ? 'border-emerald-600 scale-105 shadow-md ring-2 ring-emerald-500/30'
                          : 'border-transparent opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img src={preset.url} alt={preset.label} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-1.5">
                        <span className="text-[10px] text-white font-medium truncate">{preset.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 5: Tavsif va Aloqa */}
            <div>
              <h3 className="text-base font-bold text-navy-900 pb-3 border-b border-slate-100 mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">5</span>
                <span>Tavsif va Bog'lanish ma'lumotlari</span>
              </h3>

              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mulk haqida batafsil ma'lumot</label>
                <textarea
                  name="description"
                  required
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Uyning qulayliklari, infratuzilmasi, yaqin atrofdagi qulayliklar haqida yozing..."
                  className="w-full p-4 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Ismingiz</label>
                  <input
                    type="text"
                    name="ownerName"
                    required
                    value={formData.ownerName}
                    onChange={handleChange}
                    placeholder="Masalan: Sardor"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Telefon raqam</label>
                  <input
                    type="tel"
                    name="ownerPhone"
                    required
                    value={formData.ownerPhone}
                    onChange={handleChange}
                    placeholder="+998 (90) 123-45-67"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Telegram username</label>
                  <input
                    type="text"
                    name="ownerTelegram"
                    value={formData.ownerTelegram}
                    onChange={handleChange}
                    placeholder="@username"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                E'lon joylashtirish orqali siz UY MARKET foydalanish shartlariga rozilik bildirasiz.
              </span>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                {loading ? (
                  <span>Joylashtirilmoqda...</span>
                ) : (
                  <>
                    <PlusCircle className="w-5 h-5" />
                    <span>E'lonni chop etish</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
