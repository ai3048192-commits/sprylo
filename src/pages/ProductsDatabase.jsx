"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Glasses,
  Eye,
  Cpu,
  Compass,
  ArrowLeft,
  Sparkles,
  Shield,
} from "lucide-react";

export default function HologramTechVault() {
  const [activeTech, setActiveTech] = useState("glasses");

  const techData = {
    glasses: {
      tag: "AUGMENTED REALITY // 01",
      title: "نظارات الواقع المعزز الذكية (AR Vision)",
      description:
        "نظارة ذكية خفيفة الوزن تعرض لك الإشعارات، الخرائط، وتطبيقاتك المفضلة مباشرة امام عيناك بشاشات هولوجرافية شفافة وعالية الدقة.",
      specs: [
        "الوزن: 45 جرام فقط",
        "البطارية: 12 ساعة متواصلة",
        "الاتصال: واي فاي 7 و بلوتوث فائق",
      ],
      badge: "إصدار المستقبل 2026",
      price: "14,500 ج.م",
      oldPrice: "18,000 ج.م",
      image:
        "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&q=80&auto=format&fit=crop",
    },
    vr: {
      tag: "VIRTUAL REALITY // 02",
      title: "خوذة الواقع الافتراضي الغامر (Meta Matrix Pro)",
      description:
        "انتقل لعوالم افتراضية ثلاثية الأبعاد بدقة 8K مع تتبع حركي دقيق بنسبة 1:1، مصممة لألعاب الجيل القادم وتجارب العمل الافتراضية.",
      specs: [
        "الدقة: 8K ثنائي الشاشة",
        "معدل التحديث: 165 هرتز",
        "التتبع: 6 درجات حرية (6DoF)",
      ],
      badge: "الأكثر طلباً عالمياً",
      price: "24,999 ج.م",
      oldPrice: null,
      image:
        "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=600&q=80&auto=format&fit=crop",
    },
    drone: {
      tag: "AUTONOMOUS DRONE // 03",
      title: "طائرة الدرون السينمائية الذكية (Sky-Cam 4K)",
      description:
        "درون استكشافي ذكي ذاتي القيادة لتصوير مغامراتك بدقة سينمائية مع تتبع ذكي للعوائق ونظام رجوع تلقائي للطوارئ.",
      specs: [
        "التصوير: 4K بمعدل 60 إطار",
        "مدى الطيران: 12 كيلومتر",
        "مقاومة الرياح: معيار عسكري",
      ],
      badge: "عرض حصري محدود",
      price: "19,200 ج.م",
      oldPrice: "22,500 ج.م",
      image:
        "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&q=80&auto=format&fit=crop",
    },
  };

  const currentTech = techData[activeTech];

  return (
    <section
      className="py-24 px-4 sm:px-6 bg-[#040208] relative overflow-hidden font-sans"
      dir="rtl"
    >
      {/* إضاءات خلفية فخمة بلون نيلي وأرجواني عميق */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* هيدر السكشن */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/[0.06] pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold px-4 py-1.5 rounded-full shadow-inner">
              <Sparkles size={14} className="text-fuchsia-400" />
              <span>تكنولوجيا الواقع المختلط والأجهزة الذكية</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              معمل ابتكارات{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-fuchsia-400">
                المستقبل والهولوجرام
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
            اكتشف خط الإنتاج الأكثر تطوراً في عالم التكنولوجيا القابلة للارتداء
            وأنظمة التصوير الذكية ذات الاستجابة الفورية.
          </p>
        </div>

        {/* الأزرار التفاعلية العلوية */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => setActiveTech("glasses")}
            className={`p-5 rounded-2xl border text-right transition-all duration-300 cursor-pointer flex items-center justify-between group ${
              activeTech === "glasses"
                ? "bg-gradient-to-r from-indigo-600/20 to-fuchsia-600/20 border-indigo-500 text-white shadow-xl shadow-indigo-500/10 scale-[1.02]"
                : "bg-white/[0.02] border-white/[0.05] text-slate-400 hover:border-white/20 hover:bg-white/[0.04]"
            }`}
          >
            <div>
              <span className="text-[10px] text-indigo-400 font-mono block mb-1">
                01 // AR VISION
              </span>
              <span className="font-bold text-sm">نظارات الواقع المعزز</span>
            </div>
            <Glasses
              size={22}
              className={
                activeTech === "glasses" ? "text-indigo-400" : "text-slate-600"
              }
            />
          </button>

          <button
            onClick={() => setActiveTech("vr")}
            className={`p-5 rounded-2xl border text-right transition-all duration-300 cursor-pointer flex items-center justify-between group ${
              activeTech === "vr"
                ? "bg-gradient-to-r from-indigo-600/20 to-fuchsia-600/20 border-indigo-500 text-white shadow-xl shadow-indigo-500/10 scale-[1.02]"
                : "bg-white/[0.02] border-white/[0.05] text-slate-400 hover:border-white/20 hover:bg-white/[0.04]"
            }`}
          >
            <div>
              <span className="text-[10px] text-fuchsia-400 font-mono block mb-1">
                02 // IMMERSIVE
              </span>
              <span className="font-bold text-sm">خوذات الواقع الافتراضي</span>
            </div>
            <Eye
              size={22}
              className={
                activeTech === "vr" ? "text-fuchsia-400" : "text-slate-600"
              }
            />
          </button>

          <button
            onClick={() => setActiveTech("drone")}
            className={`p-5 rounded-2xl border text-right transition-all duration-300 cursor-pointer flex items-center justify-between group ${
              activeTech === "drone"
                ? "bg-gradient-to-r from-indigo-600/20 to-fuchsia-600/20 border-indigo-500 text-white shadow-xl shadow-indigo-500/10 scale-[1.02]"
                : "bg-white/[0.02] border-white/[0.05] text-slate-400 hover:border-white/20 hover:bg-white/[0.04]"
            }`}
          >
            <div>
              <span className="text-[10px] text-emerald-400 font-mono block mb-1">
                03 // AUTONOMOUS
              </span>
              <span className="font-bold text-sm">طائرات الدرون الذكية</span>
            </div>
            <Compass
              size={22}
              className={
                activeTech === "drone" ? "text-emerald-400" : "text-slate-600"
              }
            />
          </button>
        </div>

        {/* صندوق العرض الرئيسي */}
        <div className="bg-[#070510] border border-white/[0.08] rounded-[2.5rem] p-6 sm:p-12 relative overflow-hidden backdrop-blur-2xl shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* المحتوى والتفاصيل */}
            <div className="lg:col-span-7 space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 text-xs text-indigo-300 bg-indigo-950/50 border border-indigo-500/30 px-3.5 py-1.5 rounded-lg shadow-sm">
                <Shield size={14} className="text-emerald-400" />
                <span>{currentTech.badge}</span>
              </div>

              <div className="space-y-2">
                <span className="text-xs text-slate-500 font-mono tracking-widest">
                  {currentTech.tag}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  {currentTech.title}
                </h3>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed bg-white/[0.02] border border-white/[0.04] p-4 rounded-2xl">
                {currentTech.description}
              </p>

              {/* المواصفات */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {currentTech.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.02] border border-white/[0.05] p-3.5 rounded-2xl text-center shadow-inner"
                  >
                    <span className="text-[11px] text-slate-200 font-semibold">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>

              {/* السعر وأزرار الطلب */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-black text-white">
                    {currentTech.price}
                  </span>
                  {currentTech.oldPrice && (
                    <span className="text-xs text-slate-500 line-through font-mono">
                      {currentTech.oldPrice}
                    </span>
                  )}
                </div>

                <Link
                  to="/cart.html"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-500 hover:to-fuchsia-500 text-white font-bold text-xs px-8 py-4 rounded-2xl shadow-xl shadow-indigo-600/20 transition-all group"
                >
                  <span>اطلب الجهاز الآن</span>
                  <ArrowLeft
                    size={16}
                    className="transition-transform group-hover:translate-x-[-4px]"
                  />
                </Link>
              </div>
            </div>

            {/* صورة المنتج */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-white/10 bg-[#030206] shadow-2xl group flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-t from-[#040208] via-transparent to-transparent z-10"></div>
                <img
                  src={currentTech.image}
                  alt={currentTech.title}
                  className="w-full h-full object-contain relative z-0 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-25 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-[10px] text-indigo-400 font-mono">
                  HOLO_SYSTEM // ONLINE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
