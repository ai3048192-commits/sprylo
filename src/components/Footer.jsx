'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Headphones, Truck, CreditCard, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function EpicFooter() {
  return (
    <footer className="bg-[#020408] text-slate-300 pt-20 pb-10 border-t border-white/[0.05] relative overflow-hidden" dir="rtl">
      
      {/* إضاءات خفيفة في الخلفية */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-950/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-950/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* قسم المميزات السريعة فوق الفوتر */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16 border-b border-white/[0.06]">
  
  {/* كارت الشحن */}
  <div className="group relative p-6 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-violet-500/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xl backdrop-blur-xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10 flex items-center gap-4">
      <div className="relative shrink-0">
        <div className="absolute inset-0 scale-150 blur-lg opacity-40 bg-violet-500 rounded-full" />
        <div className="relative w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
          <Truck size={24} strokeWidth={1.8} />
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold text-sm mb-1 tracking-tight group-hover:text-violet-300 transition-colors">شحن سريع وآمن</h4>
        <p className="text-slate-400 text-xs font-light">توصيل لجميع المحافظات بسرعة</p>
      </div>
    </div>
  </div>

  {/* كارت المنتجات الأصلية */}
  <div className="group relative p-6 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xl backdrop-blur-xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10 flex items-center gap-4">
      <div className="relative shrink-0">
        <div className="absolute inset-0 scale-150 blur-lg opacity-40 bg-emerald-500 rounded-full" />
        <div className="relative w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
          <ShieldCheck size={24} strokeWidth={1.8} />
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold text-sm mb-1 tracking-tight group-hover:text-emerald-300 transition-colors">منتجات أصلية 100%</h4>
        <p className="text-slate-400 text-xs font-light">ضمان معتمد على كافة المنتجات</p>
      </div>
    </div>
  </div>

  {/* كارت الدفع الإلكتروني */}
  <div className="group relative p-6 rounded-[1rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-amber-500/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xl backdrop-blur-xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10 flex items-center gap-4">
      <div className="relative shrink-0">
        <div className="absolute inset-0 scale-150 blur-lg opacity-40 bg-amber-500 rounded-full" />
        <div className="relative w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
          <CreditCard size={24} strokeWidth={1.8} />
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold text-sm mb-1 tracking-tight group-hover:text-amber-300 transition-colors">دفع إلكتروني آمن</h4>
        <p className="text-slate-400 text-xs font-light">طرق دفع متعددة وسهلة</p>
      </div>
    </div>
  </div>

  {/* كارت الدعم الفني */}
  <div className="group relative p-6 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-pink-500/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xl backdrop-blur-xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10 flex items-center gap-4">
      <div className="relative shrink-0">
        <div className="absolute inset-0 scale-150 blur-lg opacity-40 bg-pink-500 rounded-full" />
        <div className="relative w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-pink-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
          <Headphones size={24} strokeWidth={1.8} />
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold text-sm mb-1 tracking-tight group-hover:text-pink-300 transition-colors">دعم فني متواصل</h4>
        <p className="text-slate-400 text-xs font-light">خدمة عملاء جاهزة لخدمتك دائماً</p>
      </div>
    </div>
  </div>

</div>

        {/* محتوى الفوتر الأساسي */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          
          {/* العمود الأول: نبذة عن المتجر */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-black text-white tracking-tight flex items-center gap-2 mb-4">
              <span>متجرك</span>
              <span className="w-2 h-2 rounded-full bg-violet-500"></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              وجهتك الأولى لأحدث الأجهزة التقنية، الساعات الذكية، والإكسسوارات الفاخرة بأفضل الأسعار في مصر مع ضمان الجودة والأصلية.
            </p>
            
            {/* اشتراك النشرة البريدية */}
            <div className="flex items-center gap-2 max-w-md bg-white/[0.03] border border-white/10 rounded-2xl p-1.5 backdrop-blur-md">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني..." 
                className="bg-transparent border-none outline-none px-3 text-xs text-white placeholder-slate-500 w-full"
              />
              <button className="bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shrink-0">
                اشتراك
              </button>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">روابط سريعة</h4>
            <ul className="space-y-3 text-xs">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link to="/shop.html" className="text-slate-400 hover:text-white transition-colors">تصفح المتجر</Link></li>
              <li><Link to="/cart.html" className="text-slate-400 hover:text-white transition-colors">سلة المشتريات</Link></li>
              <li><Link to="/about.html" className="text-slate-400 hover:text-white transition-colors">من نحن</Link></li>
            </ul>
          </div>

          {/* العمود الثالث: الأقسام */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">الأقسام الرائجة</h4>
            <ul className="space-y-3 text-xs">
              <li><Link to="/shop.html" className="text-slate-400 hover:text-white transition-colors">هواتف ذكية</Link></li>
              <li><Link to="/shop.html" className="text-slate-400 hover:text-white transition-colors">ساعات ذكية</Link></li>
              <li><Link to="/shop.html" className="text-slate-400 hover:text-white transition-colors">سماعات لاسلكية</Link></li>
              <li><Link to="/shop.html" className="text-slate-400 hover:text-white transition-colors">أجهزة أبل</Link></li>
            </ul>
          </div>

          {/* العمود الرابع: تواصل معنا */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">تواصل معنا</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-violet-400 shrink-0" />
                <span>القاهرة، مصر</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-violet-400 shrink-0" />
                <span dir="ltr">+20 100 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-violet-400 shrink-0" />
                <span>support@yourstore.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* الشريط السفلي للحقوق */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 جميع الحقوق محفوظة للمتجر.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">سياسة الخصوصية</Link>
            <Link to="/terms" className="hover:text-slate-400 transition-colors">الشروط والأحكام</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}