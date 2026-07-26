"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, ShieldCheck, Zap } from "lucide-react";
import ProductCard from "./ProductCard";
import DiscountBanners from "./DiscountBanners";
import ProductsDatabase from "./ProductsDatabase";

export default function UniqueCreativeHero() {
  // شرائح السلايدر التلقائي (تتغير كل 5 ثوانٍ مع العنوان، الوصف، والزر)
  const slides = [
    {
      id: 1,
      badge: "الإصدار الفاخر · 2026",
      title: "عصر جديد من الأداء والاستجابة",
      highlight: "تجربة تكنولوجية لا تُعوض",
      description:
        "اكتشف الجيل الجديد من الأجهزة الذكية المصممة خصيصاً لتلبية احتياجاتك اليومية بأعلى معايير السرعة والكفاءة.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      tag: "01 // PRIME",
    },
    {
      id: 2,
      badge: "حصري ومطور · الذكاء الاصطناعي",
      title: "قوة معالجة خارقة بين يديك",
      highlight: "أناقة التصميم وقسوة الأداء",
      description:
        "منظومة متكاملة من الحلول الرقمية التي تمنحك تحكماً مطلقا وتجربة بصرية استثنائية لم ترها من قبل.",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80",
      tag: "02 // ULTIMATE",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // مؤقت لتغيير السلايد كل 5 ثوانٍ تلقائياً
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative py-24 px-4 sm:px-6 bg-[#030305] overflow-hidden"
      dir="rtl"
    >
      {/* خلفية ضوئية متحركة ومتفاعلة بنفس الألوان والكود القديم */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/15 to-rose-600/10 rounded-full blur-[150px] pointer-events-none transition-all duration-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* الكارت المتحرك التفاعلي (Interactive Slider Card) */}
        <div className="relative bg-gradient-to-br from-slate-900/90 via-[#0a0b10] to-indigo-950/20 border border-white/10 rounded-[3rem] p-8 sm:p-14 overflow-hidden backdrop-blur-2xl shadow-2xl transition-all duration-700">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* هيدر الكارت العلوي */}
          <div className="relative z-10 flex items-center justify-between mb-10 border-b border-white/5 pb-6">
            <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 text-slate-200 text-xs font-bold px-4 py-2 rounded-full">
              <Sparkles size={14} className="text-amber-400 animate-spin" />
              <span>{currentSlide.badge}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-500 text-xs font-mono tracking-widest">
                {currentSlide.tag}
              </span>
              {/* مؤشرات التنقل اليدوي */}
              <div className="flex gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentIndex === idx
                        ? "w-8 bg-indigo-500"
                        : "w-2 bg-white/20"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* المحتوى المتحرك (النصوص والصورة) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* قسم النصوص والعنوان والزر */}
            <div className="lg:col-span-7 space-y-6 transition-all duration-500 transform">
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
                {currentSlide.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
                  {currentSlide.highlight}
                </span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light max-w-xl">
                {currentSlide.description}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                {/* زر يوديك للمتجر */}
                <Link
                  to="/product"
                  className="inline-flex items-center gap-3 bg-white hover:bg-slate-200 text-slate-950 px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-xl group"
                >
                  <span>اكتشف تفاصيل المتجر</span>
                  <ArrowLeft
                    size={18}
                    className="group-hover:translate-x-[-4px] transition-transform"
                  />
                </Link>

                <div className="flex items-center gap-6 text-xs text-slate-400 px-4 py-2 border border-white/5 rounded-2xl bg-white/[0.01]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-400" /> ضمان
                    رسمي
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap size={14} className="text-amber-400" /> شحن فوري
                  </span>
                </div>
              </div>
            </div>

            {/* قسم الصورة التي تتغير كل 5 ثواني مع تأثير إبهار بَصري */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-white/10 bg-slate-950/80 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 to-transparent z-10"></div>
                <img
                  key={currentSlide.id}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover animate-fade-in group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-4 right-4 z-20 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] text-indigo-300 font-mono">
                  تحديث تلقائي كل 5 ثوانٍ ⚡
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <ProductCard />
      </div>
      <div className="max-w-7xl mx-auto mt-12">
        <DiscountBanners />
      </div>
      <div className="max-w-7xl mx-auto mt-12">
        <ProductsDatabase />
      </div>
    </section>
  );
}
