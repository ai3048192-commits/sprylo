"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Star,
  Sparkles,
  SlidersHorizontal,
  Flame,
  Compass,
} from "lucide-react";

const LuxuryProductCard = ({ product }) => (
  <div className="group relative bg-[#06080C] border border-white/[0.04] rounded-2xl p-4 flex flex-col justify-between hover:border-violet-500/30 transition-all duration-500 shadow-xl overflow-hidden backdrop-blur-xl">
    {/* خلفية تفاعلية عند الهوفر */}
    <div className="absolute inset-0 bg-gradient-to-t from-violet-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* إطار الصورة والتصميم الرأسي الجذاب */}
    <div className="relative bg-gradient-to-b from-[#0b0e14] to-[#040609] rounded-xl overflow-hidden mb-4 p-4 flex items-center justify-center h-48 border border-white/[0.02]">
      {product.badge && (
        <span
          className={`absolute top-3 right-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-md text-white tracking-wider shadow-md ${
            product.badge === "Sale"
              ? "bg-gradient-to-r from-rose-600 to-pink-600"
              : "bg-gradient-to-r from-violet-600 to-indigo-600"
          }`}
        >
          {product.badge === "Sale" ? "عرض خصم" : "إصدار جديد"}
        </span>
      )}

      <button
        aria-label="Wishlist"
        className="absolute top-3 left-3 z-10 text-slate-400 hover:text-rose-500 transition-colors p-1.5 rounded-lg bg-black/40 backdrop-blur-sm"
      >
        <Heart size={14} />
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="h-full object-contain relative z-0 transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    {/* تفاصيل المنتج */}
    <div className="flex flex-col flex-grow">
      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
        <span className="text-violet-400 font-medium">{product.category}</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          {product.stock} متوفر
        </span>
      </div>

      <Link
        to="/product.html"
        className="font-bold text-slate-100 text-sm hover:text-violet-300 transition-colors mb-2 line-clamp-1 leading-snug"
      >
        {product.name}
      </Link>

      <div className="flex items-center gap-1 text-amber-400 text-xs mb-3">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={11}
              className={
                i < product.rating
                  ? "fill-amber-400 text-amber-400"
                  : "text-slate-700"
              }
            />
          ))}
        </div>
        <span className="text-slate-500 text-[10px] font-mono">
          ({product.reviewsCount})
        </span>
      </div>
    </div>

    {/* التعرّف على السعر وزر الطلب بتصميم Minimalist أنيق */}
    <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/[0.04]">
      <div className="flex flex-col">
        {product.oldPrice && (
          <span className="text-[10px] text-slate-500 line-through font-mono">
            {product.oldPrice}
          </span>
        )}
        <span className="font-black text-slate-100 text-sm tracking-tight">
          {product.price}
        </span>
      </div>

      <Link
        to="/cart.html"
        className="bg-white/5 hover:bg-violet-600 text-slate-200 hover:text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-transparent shadow-md"
      >
        شراء سريع
      </Link>
    </div>
  </div>
);

export default function FilteredTrendingSection() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const products = [
    {
      id: 1,
      category: "هواتف",
      name: "هاتف سامسونج جالاكسي نوت 20 ألترا 5G",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80&auto=format&fit=crop",
      badge: "New",
      stock: 52,
      price: "42,999 ج.م",
      oldPrice: null,
      rating: 5,
      reviewsCount: 56,
    },
    {
      id: 2,
      category: "أجهزة أبل",
      name: "جهاز آي باد الجيل العاشر - مساحة 64 جيجابايت",
      image:
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80&auto=format&fit=crop",
      badge: "Sale",
      stock: 32,
      price: "27,499 ج.م",
      oldPrice: "31,000 ج.م",
      rating: 5,
      reviewsCount: 124,
    },
    {
      id: 3,
      category: "هواتف",
      name: "هاتف سامسونج جالاكسي نوت 20 ألترا (لون نعناعي)",
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&q=80&auto=format&fit=crop",
      badge: null,
      stock: 41,
      price: "41,500 ج.م",
      oldPrice: null,
      rating: 4,
      reviewsCount: 89,
    },
    {
      id: 4,
      category: "هواتف",
      name: "هاتف سامسونج إس 21 ألترا الذكي",
      image:
        "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&q=80&auto=format&fit=crop",
      badge: "New",
      stock: 24,
      price: "38,999 ج.م",
      oldPrice: null,
      rating: 5,
      reviewsCount: 212,
    },
    {
      id: 5,
      category: "هواتف",
      name: "هاتف سامسونج جالاكسي نوت 20 القياسي",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80&auto=format&fit=crop",
      badge: null,
      stock: 67,
      price: "32,500 ج.م",
      oldPrice: null,
      rating: 5,
      reviewsCount: 98,
    },
    {
      id: 6,
      category: "ساعات",
      name: "ساعة ذكية متطورة لتتبع اللياقة البدنية",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80&auto=format&fit=crop",
      badge: "New",
      stock: 19,
      price: "8,499 ج.م",
      oldPrice: null,
      rating: 5,
      reviewsCount: 43,
    },
    {
      id: 7,
      category: "سماعات",
      name: "ساعة أذن لاسلكية عازلة للصوت عود فائقة",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80&auto=format&fit=crop",
      badge: "Sale",
      stock: 45,
      price: "4,200 ج.م",
      oldPrice: "5,500 ج.م",
      rating: 4,
      reviewsCount: 76,
    },
  ];

  const categories = ["الكل", "هواتف", "أجهزة أبل", "ساعات", "سماعات"];

  const filteredProducts =
    activeCategory === "الكل"
      ? products
      : products.filter((item) => item.category === activeCategory);

  return (
    <section
      className="py-24 px-4 sm:px-6 bg-[#020408] overflow-hidden"
      dir="rtl"
    >
      {/* خلفية فخمة بتدرجات ضوئية جديدة غير مألوفة */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* تصميم هيدر عصري ومميز جداً */}
        <div className="bg-[#06080d]/80 border border-white/[0.05] rounded-3xl p-6 sm:p-10 mb-10 backdrop-blur-2xl shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 text-violet-300 text-xs font-bold px-4 py-1.5 rounded-full border border-violet-500/20">
              <Flame size={14} className="text-amber-400" />
              <span>أحدث صيحات التكنولوجيا لعام 2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              المعرض الفاخر{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400">
                للمنتجات الرائجة
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
              تصفح تشكيلتنا المختارة بعناية بتصميم عصري جريء يلبي تطلعاتك
              التقنية بدقة فائقة وسرعة متناهية.
            </p>
          </div>

          <Link
            to="/shop.html"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs px-6 py-3.5 rounded-2xl transition-all shadow-xl group w-fit"
          >
            <span>استعراض المتجر بالكامل</span>
            <Compass
              size={16}
              className="transition-transform group-hover:rotate-45"
            />
          </Link>
        </div>

        {/* أزرار الفلتر الاحترافية بتصميم أفقي انسيابي */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl text-slate-400 text-xs font-bold flex-shrink-0">
            <SlidersHorizontal size={14} />
            <span>فلترة الأقسام:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer flex-shrink-0 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 scale-105"
                  : "bg-[#06080d] border border-white/[0.05] text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* شبكة المنتجات (تعرض المنتجات المفلترة) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <LuxuryProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#06080d]/40 rounded-3xl border border-white/[0.05] text-slate-500 text-sm backdrop-blur-md">
            عذراً، لا توجد منتجات متاحة في هذا القسم حالياً.
          </div>
        )}
      </div>
    </section>
  );
}
