'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Flame } from 'lucide-react';

export default function TextOnlyDealsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 " dir="rtl" style={{ paddingTop: 0 }}>
      <div className="max-w-7xl mx-auto">
        
        {/* شبكة البانرات النصية الصافية */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* الكارت الأول */}
          <article className="group relative bg-gradient-to-br from-[#0a0d1a] via-[#050811] to-[#010307] border border-violet-500/20 rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-violet-500/50 transition-all duration-500">
            
            {/* خلفية جمالية بالأرقام */}
            <div className="absolute left-[-20px] bottom-[-20px] text-[150px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-violet-500/[0.04] transition-colors">
              50%
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-black px-3.5 py-1.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-6">
                <Flame size={14} className="text-orange-400" /> عرض الأسبوع الحصري
              </span>

              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                خصومات كبرى على<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">الساعات الذكية</span>
              </h3>

              <p className="text-slate-400 text-sm max-w-md mb-8">
                تخفيضات تصل إلى نصف الثمن على تشكيلة مختارة من أرقى الساعات الذكية بتصميمات المستقبل.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/5">
              <span className="text-2xl font-black text-emerald-400">خصم 50%</span>
              <Link 
                to="/shopoffers" 
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-white hover:bg-violet-100 px-6 py-3 rounded-2xl transition-all shadow-lg group-hover:scale-105"
              >
                <span>تصفح العرض</span>
                <ArrowRight size={14} className="rotate-180 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </article>


          {/* الكارت الثاني */}
          <article className="group relative bg-gradient-to-br from-[#120817] via-[#07040d] to-[#010307] border border-pink-500/20 rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-pink-500/50 transition-all duration-500">
            
            {/* خلفية جمالية بالأرقام */}
            <div className="absolute left-[-20px] bottom-[-20px] text-[150px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-pink-500/[0.04] transition-colors">
              30%
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-black px-3.5 py-1.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-6">
                <Zap size={14} className="text-pink-400" /> إصدار محدود للغاية
              </span>

              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                تخفيضات خاصة على<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">سماعات ستوديو برو</span>
              </h3>

              <p className="text-slate-400 text-sm max-w-md mb-8">
                استمتع بصوت نقي وعزل ضوضاء فائق مع عروض حصرية لفترة محدودة للغاية.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/5">
              <span className="text-2xl font-black text-emerald-400">خصم 30%</span>
              <Link 
                to="/shopoffers" 
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-white hover:bg-pink-100 px-6 py-3 rounded-2xl transition-all shadow-lg group-hover:scale-105"
              >
                <span>تصفح العرض</span>
                <ArrowRight size={14} className="rotate-180 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}