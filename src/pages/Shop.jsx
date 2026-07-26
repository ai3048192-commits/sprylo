"use client";

import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Star,
  Search,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ShoppingBag,
} from "lucide-react";

export default function FullyFunctionalEpicShop() {
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

  const itemsPerPage = 9;

  // توليد أكثر من 30 منتج (36 منتج)
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
      const oldPrice =
        i % 3 === 0 ? price + Math.floor(Math.random() * 6000) + 1500 : null;
      const rating = i % 3 === 0 ? 3 : i % 2 === 0 ? 5 : 4;
      const stock = Math.floor(Math.random() * 40) + 5;

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
        badge: oldPrice ? "خصم خاص" : i % 5 === 0 ? "جديد" : null,
      });
    }
    return list;
  }, []);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const handleBrandToggle = (brand) => {
    setCurrentPage(1);
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // تطبيق كافة الفلاتر والبحث والترتيب بدقة تامة
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((item) => {
        const matchesCategory =
          selectedCategory === "الكل" || item.category === selectedCategory;
        const matchesBrand =
          selectedBrands.length === 0 || selectedBrands.includes(item.brand);
        const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
        const matchesRating = item.rating >= minRating;
        const matchesStock = !onlyInStock || item.stock > 0;
        const matchesSale = !onlyOnSale || item.oldPrice !== null;
        const matchesSearch =
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.brand.toLowerCase().includes(searchQuery.toLowerCase());

        return (
          matchesCategory &&
          matchesBrand &&
          matchesPrice &&
          matchesRating &&
          matchesStock &&
          matchesSale &&
          matchesSearch
        );
      })
      .sort((a, b) => {
        if (sortBy === "low-high") return a.price - b.price;
        if (sortBy === "high-low") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return b.id - a.id; // الأكثر شعبية
      });
  }, [
    allProducts,
    selectedCategory,
    selectedBrands,
    minPrice,
    maxPrice,
    minRating,
    onlyInStock,
    onlyOnSale,
    searchQuery,
    sortBy,
  ]);

  // حساب الصفحات
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  return (
    <div
      className="bg-[#010307] text-slate-100 min-h-screen font-sans selection:bg-violet-600 selection:text-white"
      dir="rtl"
    >
      {/* 1. ترويسة الصفحة */}
      {/* 1. ترويسة الصفحة السينمائية الجديدة (Ultra Epic Header) */}
      <section className="relative py-20 px-4 sm:px-6 overflow-hidden border-b border-white/[0.04] bg-gradient-to-b from-[#060812] to-[#010307]">
        {/* إضاءات خلفية متحركة وفخمة */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-violet-600/15 via-fuchsia-600/10 to-pink-600/15 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
        
    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-8 bg-slate-900/40 p-3.5 rounded-2xl border border-slate-800/80 w-fit backdrop-blur-md">
          <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
          <span className="text-indigo-400">/</span>
          <Link to="/shop" className="hover:text-white transition-colors"> المتجر</Link>
        </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            {/* العنوان والـ Badge المبتكر */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-black px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-pink-500/10 text-violet-300 border border-violet-500/20 shadow-lg shadow-violet-500/5">
                <Sparkles size={14} className="text-pink-400 animate-pulse" />
                <span>تكنولوجيا الجيل القادم · فلترة فورية بالكامل</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
                خزنة{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 drop-shadow-sm">
                  المنتجات الكبرى
                </span>
              </h1>

              <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
                اكتشف تشكيلة واسعة من أحدث الأجهزة الذكية والتقنيات العالمية
                مصنفة بدقة لتناسب احتياجاتك الفخمة.
              </p>
            </div>

            {/* شريط البحث الفوري بتصميم زجاجي (Liquid Glass Search) */}
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
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-transparent border-none outline-none text-xs text-white placeholder-slate-500 h-10 pr-1"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-[10px] text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors ml-1"
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

      {/* 2. المحتوى وشبكة المنتجات */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* الفلاتر الجانبية الشغالة 100% */}
            <aside className="lg:col-span-1 bg-[#060913] border border-white/5 rounded-3xl p-6 h-fit backdrop-blur-xl shadow-xl space-y-8">
              {/* ترويسة الفلاتر وإعادة الضبط */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <span className="text-sm font-bold text-white">
                  تصفية النتائج
                </span>
                <button
                  onClick={() => {
                    setSelectedCategory("الكل");
                    setSelectedBrands([]);
                    setMinPrice(2500);
                    setMaxPrice(70000);
                    setMinRating(0);
                    setOnlyInStock(false);
                    setOnlyOnSale(false);
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className="text-[10px] text-pink-400 hover:underline font-bold"
                >
                  إعادة ضبط الكل
                </button>
              </div>

              {/* الأقسام */}
              <div>
                <h3 className="text-xs font-black text-slate-300 uppercase tracking-wider mb-4">
                  الأقسام
                </h3>
                <div className="space-y-1.5">
                  {[
                    "الكل",
                    "هواتف ذكية",
                    "لابتوب وأجهزة",
                    "ساعات ذكية",
                    "كاميرات",
                    "سماعات",
                    "ألعاب وكونسول",
                    "إكسسوارات",
                  ].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-right px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                        selectedCategory === cat
                          ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg"
                          : "text-slate-400 hover:bg-white/[0.03] hover:text-white"
                      }`}
                    >
                      <span>{cat}</span>
                      <span className="text-[10px] opacity-60 font-mono">
                        {cat === "الكل"
                          ? allProducts.length
                          : allProducts.filter((p) => p.category === cat)
                              .length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* نطاق السعر (شغال بالـ Sliders) */}
              <div className="pt-6 border-t border-white/5">
                <h3 className="text-xs font-black text-slate-300 uppercase tracking-wider mb-3">
                  نطاق السعر
                </h3>
                <div className="flex justify-between font-mono text-[11px] text-slate-400 mb-2">
                  <span>من: {minPrice.toLocaleString()} ج.م</span>
                  <span>إلى: {maxPrice.toLocaleString()} ج.م</span>
                </div>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="2500"
                    max="70000"
                    step="1000"
                    value={maxPrice}
                    onChange={(e) => {
                      setMaxPrice(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="w-full accent-violet-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* العلامة التجارية (Multi-select) */}
              <div className="pt-6 border-t border-white/5">
                <h3 className="text-xs font-black text-slate-300 uppercase tracking-wider mb-4">
                  العلامة التجارية
                </h3>
                <div className="space-y-2.5 text-xs">
                  {[
                    "Apple",
                    "Samsung",
                    "Sony",
                    "Canon",
                    "HP",
                    "Huawei",
                    "Logitech",
                  ].map((brand) => {
                    const isChecked = selectedBrands.includes(brand);
                    return (
                      <label
                        key={brand}
                        className="flex items-center justify-between text-slate-400 hover:text-white cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleBrandToggle(brand)}
                            className="accent-violet-600 rounded w-4 h-4 cursor-pointer"
                          />
                          <span
                            className={isChecked ? "text-white font-bold" : ""}
                          >
                            {brand}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-600">
                          ({allProducts.filter((p) => p.brand === brand).length}
                          )
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* التقييم */}
              <div className="pt-6 border-t border-white/5">
                <h3 className="text-xs font-black text-slate-300 uppercase tracking-wider mb-4">
                  التقييم الأدنى
                </h3>
                <div className="space-y-2 text-xs">
                  {[
                    { label: "جميع التقييمات", val: 0 },
                    { label: "★★★★☆ (4 نجوم فأعلى)", val: 4 },
                    { label: "★★★☆☆ (3 نجوم فأعلى)", val: 3 },
                  ].map((item) => (
                    <label
                      key={item.val}
                      className="flex items-center gap-2.5 text-slate-400 hover:text-white cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="ratingFilter"
                        checked={minRating === item.val}
                        onChange={() => {
                          setMinRating(item.val);
                          setCurrentPage(1);
                        }}
                        className="accent-violet-600 cursor-pointer"
                      />
                      <span
                        className={
                          minRating === item.val ? "text-white font-bold" : ""
                        }
                      >
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* التوافر والعروض */}
              <div className="pt-6 border-t border-white/5 space-y-3 text-xs">
                <label className="flex items-center gap-2.5 text-slate-400 hover:text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => {
                      setOnlyInStock(e.target.checked);
                      setCurrentPage(1);
                    }}
                    className="accent-violet-600 rounded w-4 h-4"
                  />
                  <span>متوفر في المخزون فقط</span>
                </label>
                <label className="flex items-center gap-2.5 text-slate-400 hover:text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={onlyOnSale}
                    onChange={(e) => {
                      setOnlyOnSale(e.target.checked);
                      setCurrentPage(1);
                    }}
                    className="accent-violet-600 rounded w-4 h-4"
                  />
                  <span>المنتجات المخفضة فقط</span>
                </label>
              </div>
            </aside>

            {/* عرض المنتجات */}
            <div className="lg:col-span-3">
              {/* شريط التحكم العلوي */}
              <div className="bg-[#060913] border border-white/5 rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-xl">
                <span className="text-xs font-mono text-slate-400">
                  عرض الصفحة{" "}
                  <span className="text-white font-bold">{currentPage}</span> من{" "}
                  <span className="text-white font-bold">{totalPages}</span>{" "}
                  (إجمالي{" "}
                  <span className="text-white font-bold">
                    {filteredProducts.length}
                  </span>{" "}
                  منتج مطابق)
                </span>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <span className="text-xs text-slate-400 font-mono">
                    ترتيب حسب:
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="bg-[#020408] border border-white/10 text-xs text-white rounded-xl px-4 py-2.5 outline-none cursor-pointer focus:border-violet-500"
                  >
                    <option value="popular">الأكثر شعبية</option>
                    <option value="low-high">السعر: من الأقل للأعلى</option>
                    <option value="high-low">السعر: من الأعلى للأقل</option>
                    <option value="rating">الأعلى تقييماً</option>
                  </select>
                </div>
              </div>

              {/* شبكة المنتجات */}
              {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {currentProducts.map((product) => {
                    const isWishlisted = wishlist.includes(product.id);
                    return (
                      <article
                        key={product.id}
                        className="group relative bg-[#060913] border border-white/5 rounded-3xl p-5 flex flex-col justify-between hover:border-violet-500/40 transition-all duration-500 shadow-xl backdrop-blur-md"
                      >
                        {/* الإطار والصور */}
                        <div className="relative bg-gradient-to-b from-[#0b0e17] to-[#030509] rounded-2xl p-4 flex items-center justify-center h-52 mb-4 border border-white/5 overflow-hidden shadow-inner">
                          {product.badge && (
                            <span className="absolute top-3 right-3 z-10 text-[10px] font-black px-3 py-1 rounded-full bg-violet-600 text-white shadow-md">
                              {product.badge}
                            </span>
                          )}

                          <button
                            onClick={() => toggleWishlist(product.id)}
                            aria-label="أضف للمفضلة"
                            className={`absolute top-3 left-3 z-10 p-2 rounded-full backdrop-blur-md transition-colors ${
                              isWishlisted
                                ? "bg-rose-500 text-white"
                                : "bg-black/40 text-slate-400 hover:text-white"
                            }`}
                          >
                            <Heart
                              size={14}
                              className={isWishlisted ? "fill-white" : ""}
                            />
                          </button>

                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full object-contain transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500"
                          />
                        </div>

                        {/* تفاصيل المنتج */}
                        <div className="flex flex-col flex-grow">
                          <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1.5 mb-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                            متوفر · {product.stock} قطعة
                          </div>

                          <span className="text-[10px] text-violet-400 font-mono mb-1">
                            {product.brand} · {product.category}
                          </span>

                          <h3 className="font-black text-slate-100 text-sm hover:text-violet-300 transition-colors mb-2 line-clamp-1">
                            {product.name}
                          </h3>

                          <div className="flex items-center gap-1 text-amber-400 text-xs mb-4">
                            <div className="flex items-center gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={11}
                                  className={
                                    i < product.rating
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-slate-600"
                                  }
                                />
                              ))}
                            </div>
                            <span className="text-slate-500 text-[10px] font-mono">
                              ({product.reviews})
                            </span>
                          </div>
                        </div>

                        {/* السعر وزر الطلب */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                          <div className="flex flex-col">
                            {product.oldPrice && (
                              <span className="text-[11px] text-slate-500 line-through font-mono">
                                {product.oldPrice.toLocaleString()} ج.م
                              </span>
                            )}
                            <span className="font-black text-white text-base">
                              {product.price.toLocaleString()} ج.م
                            </span>
                          </div>

                          <Link
                            to="/details"
                            className="bg-white hover:bg-violet-600 text-slate-950 hover:text-white text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-md group-hover:scale-105"
                          >
                            <ShoppingBag size={13} />
                            <span>اطلب الآن</span>
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-24 text-slate-400 text-sm bg-[#060913] rounded-3xl border border-white/5">
                  لا توجد منتجات مطابقة لخيارات الفلترة المحددة. جرب توسيع نطاق
                  السعر أو تغيير الفئة.
                </div>
              )}

              {/* أزرار التنقل بين الصفحات (شغالة 100% وتتنقل فعلياً بين المنتجات) */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 rounded-2xl bg-[#060913] border border-white/5 flex items-center justify-center text-slate-300 transition-colors ${
                      currentPage === 1
                        ? "opacity-40 cursor-not-allowed"
                        : "hover:border-violet-500/50"
                    }`}
                  >
                    <ChevronRight size={16} />
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const pageNum = index + 1;
                    const isActive = pageNum === currentPage;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-10 h-10 rounded-2xl font-black text-xs flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30"
                            : "bg-[#060913] border border-white/5 text-slate-300 hover:border-white/20"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 rounded-2xl bg-[#060913] border border-white/5 flex items-center justify-center text-slate-300 transition-colors ${
                      currentPage === totalPages
                        ? "opacity-40 cursor-not-allowed"
                        : "hover:border-violet-500/50"
                    }`}
                  >
                    <ChevronLeft size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
