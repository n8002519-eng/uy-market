import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  Heart,
  Share2,
  MapPin,
  BedDouble,
  Maximize2,
  Layers,
  Calendar,
  Building,
  CheckCircle2,
  Phone,
  Send,
  MessageSquare,
  ArrowLeft,
  ShieldCheck,
  Check,
  Car,
  Sparkles
} from 'lucide-react'
import { useProperties } from '../hooks/useProperties'
import { useFavorites } from '../hooks/useFavorites'
import { formatUZS, formatUSD, formatArea, formatDate } from '../utils/formatters'
import MortgageCalculator from '../components/MortgageCalculator'
import ContactModal from '../components/ContactModal'
import PropertyCard from '../components/PropertyCard'

export default function PropertyDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { properties, getPropertyById } = useProperties()
  const { isFavorite, toggleFavorite } = useFavorites()

  const property = getPropertyById(id)

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  if (!property) {
    return (
      <div className="py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-navy-900 mb-2">Ko'chmas mulk topilmadi</h2>
        <p className="text-slate-500 mb-6 text-sm">Ushbu e'lon o'chirilgan yoki mavjud emas.</p>
        <Link
          to="/buy"
          className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-md"
        >
          Katalogga qaytish
        </Link>
      </div>
    )
  }

  const favorited = isFavorite(property.id)
  const isRent = property.dealType === 'ijara'
  const images = property.images && property.images.length > 0 ? property.images : [property.image]

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Similar properties (same category or same city)
  const similarProperties = properties
    .filter((p) => p.id !== property.id && (p.category === property.category || p.city === property.city))
    .slice(0, 3)

  return (
    <div className="py-8 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb & Back */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-navy-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ortga qaytish</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              title="Havolani nusxalash"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Nusxalandi!' : 'Ulashish'}</span>
            </button>

            <button
              onClick={() => toggleFavorite(property.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-sm ${
                favorited
                  ? 'bg-rose-50 border border-rose-200 text-rose-600'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${favorited ? 'fill-current text-rose-600' : ''}`} />
              <span>{favorited ? 'Saqlangan' : 'Saqlash'}</span>
            </button>
          </div>
        </div>

        {/* Top Title & Price Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`px-3 py-1 text-xs font-extrabold rounded-lg ${
                  isRent ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {isRent ? 'Ijara' : 'Sotuv'}
                </span>
                <span className="px-3 py-1 text-xs font-bold rounded-lg bg-slate-100 text-slate-700">
                  {property.city}
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-navy-50 text-navy-800">
                  E'lon ID: #{property.id.replace('prop-', '')}
                </span>
                <span className="text-xs text-slate-400">
                  Joylashtirildi: {formatDate(property.createdAt)}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight leading-snug">
                {property.title}
              </h1>

              <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{property.city}, {property.district}, {property.address}</span>
              </div>
            </div>

            <div className="lg:text-right shrink-0 bg-slate-50 lg:bg-transparent p-4 lg:p-0 rounded-2xl">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Narxi
              </span>
              <div className="text-3xl sm:text-4xl font-black text-navy-900">
                {formatUZS(property.price, isRent)}
              </div>
              <div className="text-sm font-bold text-emerald-600 mt-0.5">
                {formatUSD(property.price, isRent)}
              </div>
            </div>
          </div>

          {/* Gallery Component */}
          <div className="pt-6">
            {/* Main Active Image */}
            <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-900 shadow-inner mb-4">
              <img
                src={images[activeImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute bottom-4 right-4 bg-navy-950/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-xl font-semibold">
                {activeImageIndex + 1} / {images.length} ta rasm
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-emerald-600 scale-105 shadow-md'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content Layout: Left details, Right Owner Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Specs, Description, Amenities, Mortgage */}
          <div className="lg:col-span-8 space-y-8">
            {/* Key Specifications Grid */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
              <h3 className="text-lg font-bold text-navy-900 mb-5 pb-3 border-b border-slate-100">
                Mulkning asosiy ko'rsatkichlari
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-emerald-600 mb-1">
                    <BedDouble className="w-4 h-4" />
                    <span className="text-xs text-slate-500 font-medium">Xonalar soni</span>
                  </div>
                  <div className="text-lg font-bold text-navy-900">
                    {property.rooms > 0 ? `${property.rooms} xona` : 'Bo\'sh'}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-emerald-600 mb-1">
                    <Maximize2 className="w-4 h-4" />
                    <span className="text-xs text-slate-500 font-medium">Maydoni</span>
                  </div>
                  <div className="text-lg font-bold text-navy-900">
                    {property.area} m²
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-emerald-600 mb-1">
                    <Layers className="w-4 h-4" />
                    <span className="text-xs text-slate-500 font-medium">Qavati</span>
                  </div>
                  <div className="text-lg font-bold text-navy-900">
                    {property.floor > 0 ? `${property.floor} / ${property.totalFloors || '—'}` : '1-qavat'}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-emerald-600 mb-1">
                    <Building className="w-4 h-4" />
                    <span className="text-xs text-slate-500 font-medium">Bino turi</span>
                  </div>
                  <div className="text-lg font-bold text-navy-900 truncate">
                    {property.buildingType || 'Monolit'}
                  </div>
                </div>
              </div>

              {/* Extra Parameters Table */}
              <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-500">Ta'miri (Holati):</span>
                  <span className="font-semibold text-navy-900">{property.condition || 'Yaxshi'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-500">Shift balandligi:</span>
                  <span className="font-semibold text-navy-900">{property.ceilingHeight ? `${property.ceilingHeight} m` : '3.0 m'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-500">Mebellari bilan:</span>
                  <span className="font-semibold text-navy-900">{property.furnished ? 'Ha, to\'liq jihozlangan' : 'Yo\'q'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-500">Avtoturargoh:</span>
                  <span className="font-semibold text-navy-900">{property.parking || 'Mavjud'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-500">Qurilgan yili:</span>
                  <span className="font-semibold text-navy-900">{property.yearBuilt || '2022'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-500">Mulk huquqi:</span>
                  <span className="font-semibold text-emerald-700">Kadastr hujjati mavjud</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
              <h3 className="text-lg font-bold text-navy-900 mb-4 pb-3 border-b border-slate-100">
                Tavsif va batafsil ma'lumot
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Amenities & Features */}
            {property.amenities && property.amenities.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
                <h3 className="text-lg font-bold text-navy-900 mb-4 pb-3 border-b border-slate-100">
                  Qulayliklar va afzalliklar
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 text-slate-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location Map Preview Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
              <h3 className="text-lg font-bold text-navy-900 mb-2">
                Joylashuv xaritasi
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {property.city}, {property.district}, {property.address}
              </p>
              <div className="relative aspect-[16/8] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                  alt="City Map Preview"
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-navy-950/20" />
                <div className="absolute bg-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-900">{property.title.slice(0, 32)}...</div>
                    <div className="text-[11px] text-slate-500">{property.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mortgage Calculator (Only for buy) */}
            {!isRent && (
              <MortgageCalculator defaultPrice={property.price} />
            )}
          </div>

          {/* Right Column: Owner & Contact Card (Sticky) */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
              <div className="text-center pb-6 border-b border-slate-100">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <img
                    src={property.owner?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                    alt={property.owner?.name}
                    className="w-full h-full object-cover rounded-full ring-4 ring-emerald-500/20"
                  />
                  {property.owner?.isVerified && (
                    <div className="absolute bottom-0 right-0 bg-emerald-600 text-white p-1 rounded-full shadow-md" title="Tekshirilgan foydalanuvchi">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  )}
                </div>

                <h4 className="text-lg font-bold text-navy-900">{property.owner?.name || 'Farhod Alimov'}</h4>
                <p className="text-xs text-emerald-700 font-semibold">{property.owner?.role || 'Ko\'chmas mulk agenti'}</p>
                <div className="mt-2 inline-flex items-center gap-1 text-[11px] bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>UY MARKET da tasdiqlangan</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                <a
                  href={`tel:${(property.owner?.phone || '+998901234567').replace(/[^0-9+]/g, '')}`}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-sm font-bold shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4" />
                  <span>{property.owner?.phone || '+998 (90) 123-45-67'}</span>
                </a>

                {property.owner?.telegram && (
                  <a
                    href={`https://t.me/${property.owner.telegram.replace('@', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl text-sm font-bold shadow-md shadow-sky-500/20 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Telegram orqali yozish</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-slate-100 hover:bg-navy-900 text-slate-800 hover:text-white rounded-2xl text-sm font-bold transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Xabar jo'natish</span>
                </button>
              </div>

              {/* Security note */}
              <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-400 space-y-2">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Hech qachon mulkni ko'rmasdan oldindan pul o'tkazmang!</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Banner */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white rounded-3xl p-6 shadow-xl border border-navy-800">
              <h5 className="font-bold text-base mb-1">Mulkni ko'rishni rejalashtiring</h5>
              <p className="text-xs text-slate-300 mb-4">
                Ushbu xonadonni o'zingizga qulay vaqtda mutaxassis bilan birgalikda ko'zdan kechiring.
              </p>
              <button
                onClick={() => setContactModalOpen(true)}
                className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-navy-950 rounded-xl text-xs font-bold transition-all"
              >
                Ko'rish vaqtini belgilash
              </button>
            </div>
          </div>
        </div>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <div className="pt-8 border-t border-slate-200">
            <h3 className="text-2xl font-extrabold text-navy-900 mb-6">
              O'xshash takliflar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Contact Modal */}
      <ContactModal
        property={property}
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  )
}
