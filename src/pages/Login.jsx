import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Building2, Mail, Lock, LogIn, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleDemoFill = () => {
    setEmail('aziz.realtor@uymarket.uz')
    setPassword('demo12345')
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Iltimos, elektron pochta va parolni kiriting.')
      return
    }

    login(email, password)
    navigate('/')
  }

  return (
    <div className="py-16 bg-[#F8FAFC] min-h-[80vh] flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card">
        {/* Logo and Heading */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-emerald-400">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex font-extrabold text-xl text-navy-900">
              <span>UY</span>
              <span className="text-emerald-600 ml-1">MARKET</span>
            </div>
          </Link>
          <h1 className="text-2xl font-extrabold text-navy-900">Tizimga kirish</h1>
          <p className="text-xs text-slate-500 mt-1">
            Hisobingizga kiring va saqlangan uylaringizni boshqaring
          </p>
        </div>

        {/* Demo Fast Login Banner */}
        <div className="mb-6 p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between gap-3">
          <div className="text-xs text-emerald-900">
            <span className="font-bold block">Demo rejim:</span>
            <span>Bir bosishda demo hisob ma'lumotlarini to'ldiring</span>
          </div>
          <button
            type="button"
            onClick={handleDemoFill}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shrink-0 transition-colors shadow-sm"
          >
            Demo to'ldirish
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-50 text-rose-700 text-xs rounded-xl border border-rose-200 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Elektron pochta (Email)
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="misol@uymarket.uz"
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700 uppercase">
                Parol
              </label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Demo rejimda parol tiklash talab etilmaydi. Iltimos "Demo to\'ldirish" tugmasidan foydalaning.') }} className="text-xs text-emerald-600 hover:underline">
                Parolni unutdingizmi?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="rememberMe"
              defaultChecked
              className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
            />
            <label htmlFor="rememberMe" className="text-xs text-slate-600 cursor-pointer">
              Eslab qolish
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            <span>Tizimga kirish</span>
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100 text-center text-xs text-slate-500">
          Hisobingiz yo'qmi?{' '}
          <Link to="/register" className="text-emerald-600 font-bold hover:underline">
            Ro'yxatdan o'ting
          </Link>
        </div>
      </div>
    </div>
  )
}
