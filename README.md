# 🏢 UY MARKET - O'zbekistondagi Zamonaviy Ko'chmas Mulk Bozori

> **UY MARKET** — O'zbekiston bo'ylab xonadonlar, hovlilar, yangi turar-joy majmualari (TJM), tijorat binolari va ijara uylarini sotish hamda sotib olish uchun mo'ljallangan zamonaviy, to'liq funksional ko'chmas mulk platformasi.

![UY MARKET Banner](https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80)

---

## 🌟 Asosiy Xususiyatlar (Features)

- **🎨 Premium Dizayn**: Airbnb va Zillow uslubidagi toza oq va quyuq to'q-ko'k (Navy) palitrasi, yashil (Emerald) aksent ranglar va chiroyli tipografiya.
- **⚡ Qidiruv va Aqlli Filtrlar**:
  - Shaharlar bo'yicha (Toshkent, Samarqand, Buxoro, Farg'ona, Andijon, Namangan)
  - Bitim turi bo'yicha (Sotuv / Ijara)
  - Mulk toifasi bo'yicha (Kvartiralar, Hovlilar, Yangi qurilishlar, Tijorat, Yer uchastkalari, Ijara uylar)
  - Narx oralig'i (Min / Max UZS)
  - Xonalar soni bo'yicha (1, 2, 3, 4+)
  - Saralash (Eng yangi, Eng arzon, Eng qimmat, Katta maydon)
- **❤️ Sevimlilar Tizimi (Favorites)**:
  - `localStorage` orqali doimiy saqlash
  - Dinamik Navbar hisoblagichi
  - Bir bosishda saqlash va olib tashlash
- **📋 E'lon Berish Tizimi (Sell Property)**:
  - Qulay ko'p bosqichli forma
  - Rasmlar va tayyor shablonlar
  - Yangi e'lonlar zudlik bilan qidiruv va katalogda aks etadi
- **🧮 Interaktiv Ipoteka Kalkulyatori**:
  - Boshlang'ich to'lov, kredit muddati va foiz stavkasi asosida oylik to'lovni avtomat hisoblash
- **📞 Bog'lanish & Aloqa**:
  - Mulk egasi / rieltor bilan to'g'ridan-to'g'ri telefon qo'ng'irog'i
  - Telegram orqali yozish (`https://t.me/...`)
  - Interaktiv xabar qoldirish shakli
- **🔐 Demo Autentifikatsiya**:
  - Demo kirish va ro'yxatdan o'tish
  - Foydalanuvchi profili va e'lonlar boshqaruvi
- **🚀 Supabase Tayyorligi**:
  - Supabase mijozi va konfiguratsiyasi integratsiya qilingan, kalitlar kiritilmaganda avtomatik ravishda `localStorage` rejimida ishlaydi.

---

## 🛠 Texnologiyalar (Tech Stack)

- **Frontend**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Yo'naltirish**: [React Router Dom v6](https://reactrouter.com/)
- **Stillashtirish**: [Tailwind CSS v3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Belgilar (Icons)**: [Lucide React](https://lucide.dev/)
- **Ma'lumotlar Saqlash**: Browser `localStorage` + [Supabase JS Client](https://supabase.com/)
- **Deploy**: Vercel (`vercel.json` SPA rewrite sozlangan)

---

## 📂 Loyiha Tuzilmasi (Project Structure)

```text
UY MARKET/
├── public/
├── src/
│   ├── assets/              # Statik rasmlar va media
│   ├── components/          # Qayta ishlatiluvchi UI komponentlar
│   │   ├── Navbar.jsx           # Asosiy navigatsiya paneli va hisoblagich
│   │   ├── Footer.jsx           # Podval, havolalar va aloqa
│   │   ├── PropertyCard.jsx     # Ko'chmas mulk kartochkasi
│   │   ├── FilterBar.jsx        # Filtrlash va qidiruv paneli
│   │   ├── Hero.jsx             # Katta bosh qism va tezkor qidiruv
│   │   ├── CategorySection.jsx  # Mulk toifalari
│   │   ├── CityCards.jsx        # Shaharlar bloklari
│   │   ├── WhyUs.jsx            # Afzalliklar bo'limi
│   │   ├── MortgageCalculator.jsx # Ipoteka kalkulyatori
│   │   └── ContactModal.jsx     # Mulkdor bilan bog'lanish modali
│   ├── data/                # Dastlabki demo ma'lumotlar
│   │   ├── properties.js        # 14+ haqiqiy O'zbekiston mulklari
│   │   ├── categories.js        # 6 ta toifa ma'lumotlari
│   │   └── cities.js            # Shaharlar ro'yxati
│   ├── hooks/               # Custom React hooklar
│   │   ├── useProperties.js     # Mulklar, filtrlash va qo'shish
│   │   ├── useFavorites.js      # Sevimlilar holati
│   │   └── useAuth.js           # Demo foydalanuvchi holati
│   ├── pages/               # Marshrutlar (Sahifalar)
│   │   ├── Home.jsx             # Bosh sahifa (/)
│   │   ├── Buy.jsx              # Sotib olish (/buy)
│   │   ├── Rent.jsx             # Ijara (/rent)
│   │   ├── PropertyDetails.jsx  # Mulk tafsilotlari (/property/:id)
│   │   ├── Favorites.jsx        # Sevimlilar (/favorites)
│   │   ├── Sell.jsx             # E'lon berish (/sell)
│   │   ├── Login.jsx            # Kirish (/login)
│   │   ├── Register.jsx         # Ro'yxatdan o'tish (/register)
│   │   ├── About.jsx            # Biz haqimizda (/about)
│   │   ├── Contact.jsx          # Aloqa (/contact)
│   │   └── NotFound.jsx         # 404 Xatolik sahifasi (*)
│   ├── services/
│   │   └── supabase.js          # Supabase mijoz va integratsiyasi
│   ├── utils/
│   │   ├── formatters.js        # UZS/USD narx, maydon va sana
│   │   └── storage.js           # Xavfsiz localStorage utilitlari
│   ├── App.jsx              # Asosiy dastur komponenti va marshrutlar
│   ├── index.css            # Global uslublar va shriftlar
│   └── main.jsx             # Dastur kirish nuqtasi
├── .env.example             # Supabase o'zgaruvchilari namunasi
├── .gitignore               # Git istisno fayli
├── index.html               # Asosiy HTML hujjati
├── package.json             # Paketlar va skriptlar
├── postcss.config.js        # PostCSS konfiguratsiyasi
├── tailwind.config.js       # Tailwind konfiguratsiyasi
├── vercel.json              # Vercel SPA sozlamalari
└── vite.config.js           # Vite konfiguratsiyasi
```

---

## 🚀 O'rnatish va Ishga Tushirish (Getting Started)

### 1. Bog'liqliklarni o'rnatish:
```bash
npm install
```

### 2. Dasturni mahaliy ishlab chiqish rejimida ishga tushirish:
```bash
npm run dev
```
Brauzerda oching: `http://localhost:3000`

### 3. Loyihani ishlab chiqarish uchun yig'ish (Production Build):
```bash
npm run build
```
Natija `dist/` papkasida tayyor bo'ladi.

### 4. Build natijasini tekshirish (Preview):
```bash
npm run preview
```

---

## ☁️ Vercel orqali Deploy Qilish

Loyihada allaqachon `vercel.json` fayli sozlangan:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

1. Loyihani GitHub-ga yuklang.
2. [Vercel](https://vercel.com/) platformasiga kiring.
3. **"Add New Project"** tugmasini bosing va o'zingizning GitHub repository-ingizni tanlang.
4. **Deploy** tugmasini bosing — loyihangiz bir necha soniyada butun dunyoga taqdim etiladi!

---

## 🗄 Supabase Integratsiyasi (Ixtiyoriy)

Loyihada Supabase orqali haqiqiy ma'lumotlar bazasi va autentifikatsiyani ulash uchun barcha mexanizmlar tayyorlangan.
Agar Supabase ulamoqchi bo'lsangiz:
1. `.env.example` faylidan nusxa olib `.env` faylini yarating:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```
2. Supabase SQL muharririda `properties` jadvalini yarating.
3. Sayt avtomatik tarzda Supabase-dagi ma'lumotlarni o'qiydi va yangi qo'shilgan e'lonlarni bazaga saqlaydi!

---

## 📄 Litsenziya

MIT License © 2026 UY MARKET. Barcha huquqlar himoyalangan.

