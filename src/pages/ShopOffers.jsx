"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Star,
  Search,
  Sparkles,
  ShoppingBag,
  Flame,
  Timer,
  Zap,
  PackageX,
  Layers,
  Gift,
  ArrowRight,
} from "lucide-react";

export default function FullyFunctionalEpicShopExactOffers() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(70000);
  const [minRating, setMinRating] = useState(0);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyOnSale, setOnlyOnSale] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // حالة العداد التنازلي الحية (بالثواني - ساعتان و 45 دقيقة و 12 ثانية)[cite: 1]
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 45 * 60 + 12);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // تنسيق الثواني إلى ساعات ودقائق وثواني[cite: 1]
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const itemsPerPage = 9;

  // توليد أكثر من 30 منتج (36 منتج)[cite: 1]
  const allProducts = useMemo(() => {
    const categories = [
      "هواتف ذكية",
      "لابتوب وأجهزة",
      "ساعات ذكية",
      "كاميرات",
      "سماعات",
      "ألعاب وكونسول",
      "إكسسوارات",
    ];
    const brands = [
      "Apple",
      "Samsung",
      "Sony",
      "Canon",
      "HP",
      "Huawei",
      "Logitech",
    ];
    const sampleNames = [
      "هاتف ذكي فلاجشيب برو",
      "جهاز لابتوب ألترا سليم",
      "ساعة ذكية رياضية",
      "كاميرا احترافية ديجيتال",
      "سماعات لاسلكية عازلة",
      "دراع تحكم ألعاب",
      "شاحن جداري فائق السرعة",
      "منصة شحن لاسلكية",
      "حقيبة ظهر للأجهزة",
    ];
    const images = [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500&q=80&auto=format&fit=crop",
    ];

    let list = [];
    for (let i = 1; i <= 36; i++) {
      const cat = categories[i % categories.length];
      const brand = brands[i % brands.length];
      const name = `${sampleNames[i % sampleNames.length]} الإصدار ${i}`;
      const price = Math.floor(Math.random() * 55000) + 4000;
      
      const isGeneralDeal = [2, 4, 6, 8, 10].includes(i);
      const isMegaExclusivePair = [12, 15].includes(i);
      const isClearance = [3, 9, 17, 21].includes(i); // منتجات تصفية المخزون

      let oldPrice = null;
      if (isGeneralDeal || isClearance) oldPrice = price + 6000;
      if (isMegaExclusivePair) oldPrice = price + 15000;

      const rating = 5;
      // جعل المخزون منخفضاً للمنتجات الخاصة بالتصفية
      const stock = isClearance ? Math.floor(Math.random() * 2) + 1 : Math.floor(Math.random() * 40) + 5;

      let badgeName = null;
      if (isMegaExclusivePair) badgeName = "عرض مزدوج خارق";
      else if (isClearance) badgeName = "تصفية نهائية";
      else if (isGeneralDeal) badgeName = "عرض لفترة محدودة";
      else if (i % 5 === 0) badgeName = "جديد";

      list.push({
        id: i,
        category: cat,
        brand: brand,
        name: name,
        price: price,
        oldPrice: oldPrice,
        rating: rating,
        reviews: Math.floor(Math.random() * 180) + 12,
        stock: stock,
        image: images[i % images.length],
        badge: badgeName,
        isMegaExclusive: isMegaExclusivePair,
        isClearance: isClearance,
      });
    }
    return list;
  }, []);

  const generalLimitedDeals = useMemo(() => {
    return allProducts.filter((p) => p.oldPrice !== null && !p.isMegaExclusive && !p.isClearance).slice(0, 5);
  }, [allProducts]);

  const megaExclusivePair = useMemo(() => {
    return allProducts.filter((p) => p.isMegaExclusive);
  }, [allProducts]);

  // قائمة منتجات التصفية الكبرى
  const clearanceProducts = useMemo(() => {
    return allProducts.filter((p) => p.isClearance).slice(0, 4);
  }, [allProducts]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div
      className="bg-[#010307] text-slate-100 min-h-screen font-sans selection:bg-violet-600 selection:text-white"
      dir="rtl"
    >
      {/* 1. الترويسة الرئيسية */}
      <section className="relative py-16 px-4 sm:px-6 overflow-hidden border-b border-white/[0.04] bg-gradient-to-b from-[#060812] to-[#010307]">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-violet-600/15 via-fuchsia-600/10 to-pink-600/15 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-6 bg-slate-900/40 p-3.5 rounded-2xl border border-slate-800/80 w-fit backdrop-blur-md">
            <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <span className="text-indigo-400">/</span>
            <Link to="/shop" className="hover:text-white transition-colors">المتجر والعروض الحصرية</Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-black px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-pink-500/10 text-violet-300 border border-violet-500/20 shadow-lg">
                <Sparkles size={14} className="text-pink-400 animate-pulse" />
                <span>عروض تصفية المخزون، باقات التوفير، وكاش باك حصري</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
                خزنة{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300">
                  المنتجات الكبرى والعروض
                </span>
              </h1>

              <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
                تصفح أقوى عروض التصفية، حزم التوفير المزدوجة، واغتنم الهدايا المباشرة والكاش باك[cite: 1].
              </p>
            </div>

            {/* شريط البحث الفوري */}
            <div className="w-full lg:w-[400px]">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative flex items-center bg-[#070a14] border border-white/10 rounded-2xl p-2 backdrop-blur-xl shadow-2xl">
                  <span className="pr-3 pl-2 text-violet-400">
                    <Search size={18} />
                  </span>
                  <input
                    type="text"
                    placeholder="ابحث عن جهاز، لابتوب، أو ماركة..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-xs text-white placeholder-slate-500 h-10 pr-1"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-[10px] text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-white/5 transition-colors ml-1"
                    >
                      مسح
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. سكشن الـ 5 منتجات التي عليها عروض قوية */}
      <section className="py-14 px-4 sm:px-6 border-b border-white/[0.04] bg-gradient-to-b from-[#03050b] to-[#010307]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-600 to-pink-500 flex items-center justify-center text-white shadow-xl shadow-violet-500/20">
              <Flame size={24} className="animate-bounce" />
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
                أبرز عروض الفترة المحدودة
                <span className="text-[11px] bg-violet-500/10 text-violet-300 border border-violet-500/30 px-3 py-1 rounded-full font-mono">
                  5 منتجات مختارة
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {generalLimitedDeals.map((product) => {
              const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
              const isWishlisted = wishlist.includes(product.id);
              return (
                <div key={`gen-deal-${product.id}`} className="group relative bg-[#090e1c] border border-white/10 rounded-3xl p-4 flex flex-col justify-between hover:border-violet-500 transition-all duration-500 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 bg-violet-600 text-white text-[10px] font-black px-3 py-1 rounded-bl-2xl shadow-lg z-10">
                    خصم {discountPercent}%
                  </div>
                  <div className="relative bg-black/50 rounded-2xl p-4 flex items-center justify-center h-44 mb-4 border border-white/5">
                    <button onClick={() => toggleWishlist(product.id)} className={`absolute top-2 left-2 z-10 p-2 rounded-full ${isWishlisted ? "bg-rose-500 text-white" : "bg-black/40 text-slate-400"}`}>
                      <Heart size={14} className={isWishlisted ? "fill-white" : ""} />
                    </button>
                    <img src={product.image} alt={product.name} className="h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="space-y-1.5 flex-grow">
                    <span className="text-[10px] text-violet-400 font-mono font-bold uppercase block">{product.brand}</span>
                    <h3 className="font-black text-slate-100 text-xs line-clamp-1">{product.name}</h3>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 line-through font-mono block">{product.oldPrice.toLocaleString()} ج.م</span>
                      <span className="font-black text-violet-400 text-sm">{product.price.toLocaleString()} ج.م</span>
                    </div>
                    <Link to="/details" className="bg-white/10 hover:bg-violet-600 text-white text-[11px] font-bold px-3 py-2 rounded-xl transition-all flex items-center gap-1">
                      <Zap size={12} />
                      <span>شراء</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. الكارت الحصري يضم منتجين فقط مع عداد تنازلي حي وشغال */}
      <section className="py-12 px-4 sm:px-6 border-b border-white/[0.04] bg-[#020409]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#0d0718] via-[#090d1f] to-[#040812] border-2 border-rose-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-white/10 relative z-10">
              <div className="space-y-2 text-center lg:text-right">
                <span className="text-xs font-black px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  ⚡ عرض الخصم الخارق المزدوج
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  كارت الصفقات الخارقة <span className="text-rose-400">(منتجان فقط)</span>[cite: 1]
                </h3>
              </div>
              <div className="flex items-center gap-3 bg-black/60 border border-rose-500/40 px-6 py-4 rounded-2xl">
                <Timer size={22} className="text-rose-400 animate-pulse" />
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block font-mono">ينتهي العد التنازلي الخاص بهما[cite: 1]:</span>
                  <span className="text-base font-black font-mono text-rose-400 tracking-wider">{formatTime(timeLeft)}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {megaExclusivePair.map((product) => {
                const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
                const isWishlisted = wishlist.includes(product.id);
                return (
                  <div key={`mega-pair-${product.id}`} className="bg-[#050814] border border-rose-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
                    <div className="relative bg-black/60 rounded-xl p-4 w-full sm:w-44 h-44 flex items-center justify-center shrink-0">
                      <span className="absolute top-2 right-2 bg-rose-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-md z-10">خصم {discountPercent}%</span>
                      <button onClick={() => toggleWishlist(product.id)} className={`absolute bottom-2 left-2 z-10 p-1.5 rounded-full ${isWishlisted ? "bg-rose-500 text-white" : "bg-black/40 text-slate-400"}`}>
                        <Heart size={14} className={isWishlisted ? "fill-white" : ""} />
                      </button>
                      <img src={product.image} alt={product.name} className="h-full object-contain" />
                    </div>
                    <div className="flex flex-col justify-between flex-grow w-full space-y-3">
                      <div>
                        <span className="text-[10px] text-rose-400 font-mono font-bold uppercase">{product.brand} · حصري</span>
                        <h4 className="font-black text-white text-base line-clamp-1">{product.name}</h4>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <div>
                          <span className="text-[11px] text-slate-500 line-through font-mono block">{product.oldPrice.toLocaleString()} ج.م</span>
                          <span className="font-black text-rose-400 text-lg">{product.price.toLocaleString()} ج.م</span>
                        </div>
                        <Link to="/details" className="bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-1.5">
                          <Zap size={13} />
                          <span>اغتنم العرض</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. سكشن "تصفية المخزون الكبرى" مع شريط التقدم (Progress Bar) */}
      <section className="py-14 px-4 sm:px-6 border-b border-white/[0.04] bg-[#03050a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-lg">
                <PackageX size={24} />
              </div>
              <div>
                <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
                  تصفية المخزون الكبرى (الفرصة الأخيرة)
                </h2>
                <p className="text-slate-400 text-xs">قطع محدودة للغاية توشك على النفاد نهائياً بسعر التكلفة!</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clearanceProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              // حساب نسبة التقدم للمخزون (افتراض المخزون قطعتين أو 3)
              const stockPercent = Math.min(Math.max((product.stock / 10) * 100, 15), 40);

              return (
                <div key={`clearance-${product.id}`} className="bg-[#070b16] border border-amber-500/30 rounded-3xl p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                  <span className="absolute top-3 right-3 bg-amber-500 text-black text-[10px] font-black px-3 py-1 rounded-full z-10">
                    متبقي {product.stock} قطع فقط!
                  </span>

                  <div className="relative bg-black/40 rounded-2xl p-4 flex items-center justify-center h-48 mb-4">
                    <button onClick={() => toggleWishlist(product.id)} className={`absolute top-2 left-2 z-10 p-2 rounded-full ${isWishlisted ? "bg-rose-500 text-white" : "bg-black/40 text-slate-400"}`}>
                      <Heart size={14} className={isWishlisted ? "fill-white" : ""} />
                    </button>
                    <img src={product.image} alt={product.name} className="h-full object-contain group-hover:scale-105 transition-transform" />
                  </div>

                  <div className="space-y-2 flex-grow">
                    <span className="text-[10px] text-amber-400 font-mono font-bold uppercase">{product.brand}</span>
                    <h3 className="font-black text-white text-xs line-clamp-1">{product.name}</h3>

                    {/* شريط التقدم لتفريغ المخزون */}
                    <div className="space-y-1 pt-2">
                      <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                        <span>حالة المخزون</span>
                        <span className="text-amber-400 font-bold">يكاد ينفد</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-500 to-rose-500 h-full rounded-full" style={{ width: `${stockPercent}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 line-through font-mono block">{product.oldPrice.toLocaleString()} ج.م</span>
                      <span className="font-black text-amber-400 text-sm">{product.price.toLocaleString()} ج.م</span>
                    </div>
                    <Link to="/details" className="bg-amber-500 hover:bg-amber-400 text-black font-black text-xs px-4 py-2.5 rounded-xl transition-all shadow-lg">
                      اطلب الآن
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. سكشن "اكسب أكثر مع باقات التوفير" (Bundle & Save) */}
      <section className="py-14 px-4 sm:px-6 border-b border-white/[0.04] bg-[#020307]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-lg">
              <Layers size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                باقات التوفير الكبرى (كومبو المجموعات)
              </h2>
              <p className="text-slate-400 text-xs">اشتري المنتج مع الإكسسوار الأساسي الخاص به ووفّر حتى 30% من إجمالي السعر.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#0a0e1f] to-[#04060e] border border-indigo-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full font-bold">باقة الهواتف الذكية + السماعات</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">وفر 1,500 ج.م</span>
              </div>
              <div className="flex items-center justify-center gap-4 my-4">
                <div className="bg-black/40 p-4 rounded-2xl border border-white/5 w-32 h-32 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80&auto=format&fit=crop" alt="Phone" className="h-full object-contain" />
                </div>
                <span className="text-2xl font-black text-indigo-400">+</span>
                <div className="bg-black/40 p-4 rounded-2xl border border-white/5 w-32 h-32 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80&auto=format&fit=crop" alt="Watch" className="h-full object-contain" />
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 line-through font-mono block">24,000 ج.م</span>
                  <span className="text-xl font-black text-white">22,500 ج.م للباقة كاملة</span>
                </div>
                <Link to="/details" className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2">
                  <span>احصل على الباقة</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#120a1f] to-[#06040e] border border-violet-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 px-3 py-1 rounded-full font-bold">باقة الألعاب الاحترافية Pro</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">وفر 2,200 ج.م</span>
              </div>
              <div className="flex items-center justify-center gap-4 my-4">
                <div className="bg-black/40 p-4 rounded-2xl border border-white/5 w-32 h-32 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&q=80&auto=format&fit=crop" alt="Controller" className="h-full object-contain" />
                </div>
                <span className="text-2xl font-black text-violet-400">+</span>
                <div className="bg-black/40 p-4 rounded-2xl border border-white/5 w-32 h-32 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80&auto=format&fit=crop" alt="Accessory" className="h-full object-contain" />
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 line-through font-mono block">18,500 ج.م</span>
                  <span className="text-xl font-black text-white">16,300 ج.م للباقة كاملة</span>
                </div>
                <Link to="/details" className="bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2">
                  <span>احصل على الباقة</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. سكشن "هدايا وعروض الكاش باك" */}
      <section className="py-14 px-4 sm:px-6 bg-[#010307]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-[#050b14] border border-emerald-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 text-xs font-black px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                <Gift size={16} className="text-emerald-400 animate-bounce" />
                <span>برنامج الهدايا والكاش باك الفوري</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                استرجع حتى <span className="text-emerald-400">10% كاش باك</span> واحصل على هدية فورية!
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                عند تسوقك بأي مبلغ يزيد عن 5,000 ج.م، سيتم إضافة رصيد كاش باك لمحفظتك فوراً، بالإضافة لشحن مجاني وهدية مفاجأة مع طلبك.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <Link to="/shop" className="bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs px-8 py-4 rounded-2xl shadow-xl transition-all text-center">
                تفعيل الهدية الآن
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}