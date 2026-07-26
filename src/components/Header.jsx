"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function CleanEliteHeaderFixed() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  // قائمة المنتجات الفعلية المتاحة للبحث (يمكنك ربطها بـ API لاحقاً)
  const availableProducts = [
    { name: "ساعة ذكية بشاشة AMOLED وتصميم تيتانيوم", price: "2,499 ج.م", category: "إلكترونيات" },
    { name: "سماعة أذن لاسلكية مع عزل فعال للضوضاء", price: "1,150 ج.م", category: "إلكترونيات" },
    { name: "عطر رجالي فاخر بتركيبة تدوم طويلاً", price: "850 ج.م", category: "عطور" },
    { name: "هاتف ذكي بشاشة 120Hz وتصميم عصري", price: "8,999 ج.م", category: "إلكترونيات" },
    { name: "حقيبة ظهر مخصصة لأجهزة اللابتوب مقاومة للماء", price: "650 ج.م", category: "إكسسوارات" },
    { name: "ساعات Ultra الذكية الرياضية", price: "3,200 ج.م", category: "إلكترونيات" },
    { name: "سماعات AirPods Pro الأصلية", price: "5,400 ج.م", category: "إلكترونيات" },
    { name: "عطر صيفي نسائي منعش", price: "920 ج.م", category: "عطور" },
  ];

  // عمليات البحث الرائجة الجاهزة للاختيار السريع
  const trendingTags = [
    "ساعات Ultra الذكية",
    "سماعات AirPods Pro",
    "أجهزة لابتوب الألعاب",
    "عطور صيفية فاخرة",
    "هواتف آيفون برو ماكس",
    "ساعات يد كلاسيكية",
  ];

  // تصفية المنتجات بناءً على ما يكتبه المستخدم في خانة البحث (Live Filtering)
  const filteredProducts = searchQuery.trim() === ""
    ? availableProducts.slice(0, 5) // عرض أول 5 منتجات مقترحة في حال كان الحقل فارغاً
    : availableProducts.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // إغلاق نافذة البحث عند النقر خارجها
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-800 py-3.5 px-4 sm:px-8 sticky top-0 z-[100] shadow-sm transition-all"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* === الشعار الأنيق (Logo) === */}
        <a
          href="/"
          className="flex items-center gap-3 group shrink-0 select-none"
        >
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-700 via-indigo-600 to-violet-500 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-indigo-600/30 group-hover:scale-105 group-hover:shadow-indigo-600/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10 tracking-tighter">S</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors leading-none">
                Sprylo
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
            </div>
            <span className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-indigo-600 to-violet-600 tracking-[0.2em] uppercase mt-1">
              Store Elite
            </span>
          </div>
        </a>

        {/* === سيرش تفاعلي وشغال فعلياً (Live Search) === */}
        <div
          className="hidden md:block flex-1 max-w-xl relative z-[110]"
          ref={searchRef}
        >
          <div
            className={`flex items-center bg-slate-50 border rounded-2xl overflow-hidden transition-all duration-200 ${
              isSearchActive
                ? "border-indigo-600 bg-white ring-4 ring-indigo-600/10 shadow-lg"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="pr-4 text-slate-400">
              <Search size={18} />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchActive(true)}
              placeholder="ابحث عن أحدث الساعات، الهواتف الذكية، أو العطور..."
              className="w-full py-2.5 px-3 focus:outline-none text-xs text-slate-800 bg-transparent font-medium placeholder:text-slate-400 text-right"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                title="مسح البحث"
              >
                <X size={15} />
              </button>
            )}

            <button 
              onClick={() => {
                if(searchQuery.trim()) {
                  alert(`جاري تنفيذ البحث عن: ${searchQuery}`);
                }
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <span>بحث</span>
            </button>
          </div>

          {/* نافذة البحث الفاعلة (Drop-down Live Results) */}
          {isSearchActive && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 z-[9999] animate-in fade-in zoom-in-95 duration-150 text-right">
              
              {/* عمليات البحث الرائجة */}
              <div className="mb-3">
                <div className="flex items-center justify-end gap-1.5 text-[11px] font-bold text-slate-400 mb-2">
                  <span>عمليات البحث الرائجة الآن</span>
                  <TrendingUp size={13} className="text-indigo-600" />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {trendingTags.map((tag, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchQuery(tag)}
                      className="bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 text-[11px] px-3 py-1.5 rounded-lg transition-colors font-medium cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* نتائج البحث الحية (تتغير تلقائياً مع الكتابة) */}
              <div className="border-t border-slate-100 pt-3">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 text-right flex items-center justify-between">
                  <span>{searchQuery ? `نتائج البحث (${filteredProducts.length})` : "منتجات مقترحة لك"}</span>
                  {searchQuery && (
                    <span className="text-indigo-600 lowercase font-medium">الكلمة: "{searchQuery}"</span>
                  )}
                </div>

                <div className="space-y-1 max-h-60 overflow-y-auto">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                            {item.price}
                          </span>
                          <ArrowRight
                            size={13}
                            className="text-slate-400 group-hover:-translate-x-0.5 transition-transform rotate-180"
                          />
                        </div>
                        <div className="text-xs font-semibold text-slate-700 group-hover:text-indigo-600 text-right">
                          {item.name}
                        </div>
                      </a>
                    ))
                  ) : (
                    <div className="text-center py-6 text-slate-400 text-xs font-medium">
                      عذراً، لم نتمكن من العثور على منتج يطابق بحثك "{searchQuery}"
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* === الأيقونات والأزرار (حسابي، السلة) === */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href="/login"
            aria-label="Account"
            className="group relative p-2.5 rounded-2xl bg-slate-50 hover:bg-indigo-50/80 border border-slate-200/60 hover:border-indigo-100 transition-all duration-200 text-slate-600 hover:text-indigo-600 shadow-sm hover:shadow"
          >
            <User
              size={20}
              className="transition-transform duration-200 group-hover:scale-110"
            />
          </a>

          <a
            href="/cart"
            aria-label="Cart"
            className="relative flex items-center gap-2 bg-gradient-to-l from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-3.5 py-2 rounded-2xl transition-all duration-200 shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30 group"
          >
            <div className="relative">
              <ShoppingBag
                size={20}
                className="transition-transform duration-200 group-hover:rotate-6"
              />
              <span className="absolute -top-1.5 -right-1.5 bg-white text-indigo-600 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow ring-1 ring-indigo-600/20">
                2
              </span>
            </div>
            <span className="hidden lg:inline text-xs font-bold tracking-wide">
              السلة
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}