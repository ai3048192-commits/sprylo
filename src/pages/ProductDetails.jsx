"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Heart,
  Star,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  RefreshCw,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Zap,
  Cpu,
  Volume2,
  Wifi,
  Bluetooth,
  Award,
  CheckCircle2,
  Package,
  Eye,
} from "lucide-react";

export default function ProductDetailPageUltimate() {
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState("أبيض فخم");
  const [selectedConfig, setSelectedConfig] = useState("Single");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [relatedWishlist, setRelatedWishlist] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState("specs");

  const configOptions = {
    Single: {
      name: "قطعة واحدة",
      basePrice: 4500,
      oldPrice: 5200,
      discount: "وفر 700 ج.م",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&q=90&auto=format&fit=crop",
    },
    "Stereo pair": {
      name: "زوج استريو · الأفضل للصوت المحيطي",
      basePrice: 8500,
      oldPrice: 10200,
      discount: "وفر 1,700 ج.م",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=90&auto=format&fit=crop",
    },
    "3-pack": {
      name: "باكج 3 قطع · نظام منزلي متكامل",
      basePrice: 12000,
      oldPrice: 15000,
      discount: "وفر 3,000 ج.م",
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=1200&q=90&auto=format&fit=crop",
    },
  };

  const currentConfigData = configOptions[selectedConfig];
  const totalPrice = currentConfigData.basePrice * quantity;
  const totalOldPrice = currentConfigData.oldPrice * quantity;

  const thumbs = [
    {
      id: 0,
      img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=90&auto=format&fit=crop",
      large:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&q=90&auto=format&fit=crop",
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&q=90&auto=format&fit=crop",
      large:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=90&auto=format&fit=crop",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&q=90&auto=format&fit=crop",
      large:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=1200&q=90&auto=format&fit=crop",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=90&auto=format&fit=crop",
      large:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const [activeImage, setActiveImage] = useState(currentConfigData.image);

  const handleQuantity = (type) => {
    if (type === "-" && quantity > 1) setQuantity(quantity - 1);
    else if (type === "+") setQuantity(quantity + 1);
  };

  const toggleRelatedWishlist = (id) => {
    if (relatedWishlist.includes(id)) {
      setRelatedWishlist(relatedWishlist.filter((item) => item !== id));
    } else {
      setRelatedWishlist([...relatedWishlist, id]);
    }
  };

  const faqs = [
    {
      q: "هل المنتج أصلي 100% ومن التوكيل مباشرة؟",
      a: "نعم، جميع أجهزتنا مستوردة رسمياً من متجر آبل العالمي ومعتمدة بضمان شامل لمدة سنة كاملة ضد عيوب الصناعة.",
    },
    {
      q: "كيف أربط السماعة بالهاتف أو بأجهزة المنزل الذكية؟",
      a: "بكل سهولة؛ قم فقط بتقريب جهاز الآيفون من السماعة وستظهر نافذة إعداد فورية تفاعلية، أو عبر تطبيق Home.",
    },
    {
      q: "ما هي ميزة نظام الاستريو المزدوج؟",
      a: "عند استخدام سماعتين معاً، يتم فصل القنوات الصوتية لتعطيك تجربة سينمائية حقيقية ومحيطية تملأ أرجاء المكان.",
    },
    {
      q: "ما هي مدة وسياية الشحن لمحافظات مصر؟",
      a: "الشحن سريع جداً ويستغرق من 2 إلى 3 أيام عمل كحد أقصى، مع إمكانية معاينة المنتج قبل الاستلام.",
    },
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "سماعة بيتس استوديو برو",
      price: "4,500 ج.م",
      stock: "67 قطعة",
      rating: 4,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&q=80&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "ساعة آبل الإصدار التاسع",
      price: "12,500 ج.م",
      stock: "41 قطعة",
      rating: 5,
      reviews: 245,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80&auto=format&fit=crop",
      badge: "جديد",
    },
    {
      id: 3,
      name: "سماعة أبل ايربودز برو",
      price: "9,800 ج.م",
      stock: "12 قطعة",
      rating: 5,
      reviews: 124,
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "سامسونج إس 21 ألترا",
      price: "38,000 ج.م",
      oldPrice: "42,000 ج.م",
      stock: "24 قطعة",
      rating: 5,
      reviews: 212,
      image:
        "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&q=80&auto=format&fit=crop",
      badge: "خصم خاص",
    },
    {
      id: 5,
      name: "كاميرا كانون الاحترافية",
      price: "29,000 ج.م",
      stock: "24 قطعة",
      rating: 4,
      reviews: 67,
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80&auto=format&fit=crop",
    },
  ];

  return (
    <div
      className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-indigo-600 selection:text-white"
      dir="rtl"
    >
      {/* إعلان علوي فخم */}
      <div className="bg-gradient-to-r from-violet-950 via-indigo-900 to-slate-950 py-3 px-4 text-center text-xs font-black text-indigo-200 border-b border-indigo-500/20 flex items-center justify-center gap-2 shadow-2xl">
        <Sparkles size={16} className="text-amber-400 animate-spin" />
        <span>
          عرض الحريف الأسطوري: شحن مجاني لكافة محافظات مصر + هدية حصرية مع كل
          طلب!
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* مسار التنقل */}
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-8 bg-slate-900/40 p-3.5 rounded-2xl border border-slate-800/80 w-fit backdrop-blur-md">
          <Link to="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span className="text-indigo-400">/</span>
          <Link to="/shop" className="hover:text-white transition-colors">
            الصوتيات الذكية
          </Link>
          <span className="text-indigo-400">/</span>
          <span className="text-white font-semibold">
            سماعة HomePod 2nd Generation
          </span>
        </div>

        {/* القسم الرئيسي الفاجر (معرض ممتلئ + بيانات تفصيلية عملاقة) */}
        <section className="my-12 sm:my-20 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* معرض الصور السينمائي (اليسار / 7 أعمدة) */}
    <div className="lg:col-span-7 bg-gradient-to-b from-slate-900/95 to-slate-950 border border-slate-800/80 p-5 sm:p-8 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl flex flex-col justify-between backdrop-blur-2xl relative overflow-hidden">
      
      {/* إضاءة خلفية جمالية هادئة */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* الشاشة الرئيسية للصورة */}
      <div className="relative w-full h-[380px] sm:h-[500px] lg:h-[540px] bg-slate-950/90 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-800/80 p-4 sm:p-6 flex items-center justify-center overflow-hidden shadow-inner group mb-6">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/15 via-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>

        <img
          src={activeImage}
          alt="HomePod 2 Ultimate View"
          className="w-full h-full object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.95)] transform group-hover:scale-105 transition-transform duration-700 relative z-10"
        />

        {/* وسام النخبة */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-indigo-600/40 border border-indigo-400/50 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-black text-indigo-200 shadow-xl flex items-center gap-1.5 z-20">
          <Award size={14} className="text-amber-400 shrink-0" />
          <span>إصدار النخبة الأصلي</span>
        </div>

        {/* مؤشر الصورة الحقيقية */}
        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-slate-300 flex items-center gap-1.5 z-20">
          <Eye size={13} className="text-indigo-400 shrink-0" />
          <span>صورة حقيقية للمنتج</span>
        </div>
      </div>

      {/* الصور المصغرة المرتبة بوضوح */}
      <div className="grid grid-cols-4 gap-3 sm:gap-3.5 relative z-10">
        {thumbs.map((thumb) => (
          <button
            key={thumb.id}
            onClick={() => setActiveImage(thumb.large)}
            className={`relative h-20 sm:h-24 lg:h-28 rounded-2xl overflow-hidden border-2 transition-all bg-slate-950 ${
              activeImage === thumb.large
                ? "border-indigo-500 scale-105 shadow-xl shadow-indigo-600/50 ring-4 ring-indigo-500/20 opacity-100"
                : "border-slate-800/80 opacity-50 hover:opacity-100 hover:border-slate-600"
            }`}
          >
            <img
              src={thumb.img}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>

    {/* تفاصيل وخيارات المنتج الواضحة والفخمة (اليمين / 5 أعمدة) */}
    <div className="lg:col-span-5 bg-gradient-to-b from-slate-900/95 to-slate-950 border border-slate-800/80 p-5 sm:p-8 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl backdrop-blur-2xl flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        
        {/* الشارات العلوية */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-[10px] sm:text-[11px] font-black text-indigo-400 tracking-wider uppercase bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/30 shadow-sm flex items-center gap-1">
            ⚡ تكنولوجيا Spatial Audio
          </span>
          <span className="text-emerald-400 font-mono text-[11px] sm:text-xs flex items-center gap-1.5 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            متوفر فوري بمصر
          </span>
        </div>

        {/* عنوان المنتج الواضح */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
          سماعة آبل هوم بود الجيل الثاني <span className="text-slate-400 font-medium text-sm sm:text-base block mt-1">(Apple HomePod 2)</span>
        </h1>

        {/* التقييمات */}
        <div className="flex items-center gap-2.5 text-xs text-slate-400">
          <div className="flex items-center text-amber-400 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400" />
            ))}
          </div>
          <span className="font-bold text-white text-sm">4.9</span>
          <span className="text-slate-400 font-mono text-xs">
            (312 تقييم موثق)
          </span>
        </div>

        {/* وصف المنتج */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-y border-slate-800/80 py-4">
          قوة صوتية مذهلة مع مكبر صوت عالي الانحراف، وخمسة مكبرات صوت وترددات منخفضة عميقة، ومعالج S7 فائق الذكاء لضبط الصوت تلقائياً حسب مكان الغرفة بدقة مذهلة.
        </p>
      </div>

      {/* عرض السعر بالجنيه المصري (واضح وبارز) */}
      <div className="flex items-center justify-between bg-slate-950 border border-slate-800 p-4 sm:p-5 rounded-3xl shadow-inner">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-4xl font-black text-white font-mono tracking-tight">
              {totalPrice.toLocaleString()}
            </span>
            <span className="text-xs sm:text-sm font-bold text-indigo-400">ج.م</span>
          </div>
          {totalOldPrice && (
            <span className="text-xs text-slate-500 line-through font-mono mt-0.5 block">
              {totalOldPrice.toLocaleString()} ج.م
            </span>
          )}
        </div>
        {currentConfigData?.discount && (
          <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-3.5 py-2 rounded-2xl border border-emerald-500/20">
            {currentConfigData.discount}
          </span>
        )}
      </div>

      {/* الألوان (منسقة بوضوح تامة على الهواتف والشاشات) */}
      <div className="space-y-3">
        <div className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center justify-between">
          <span>اختر لون السماعة:</span>
          <span className="text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full text-xs border border-indigo-500/20">
            {selectedColor}
          </span>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          {[
            { name: "أبيض فخم", bg: "#FFFFFF" },
            { name: "ميدنايت ليلي", bg: "#0F172A" },
            { name: "برتقالي طاقة", bg: "#F97316" },
            { name: "إنديجو ملكي", bg: "#4F46E5" },
          ].map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              style={{ backgroundColor: color.bg }}
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 transition-all ${
                selectedColor === color.name
                  ? "border-indigo-500 scale-110 shadow-xl shadow-indigo-500/50 ring-4 ring-indigo-500/20"
                  : "border-slate-700 hover:scale-105 opacity-80 hover:opacity-100"
              }`}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* نسخ العرض والباقات */}
      <div className="space-y-3">
        <div className="text-xs font-black text-slate-300 uppercase tracking-wider">
          نسخة العرض والباقات
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          {Object.keys(configOptions).map((key) => {
            const conf = configOptions[key];
            const isSelected = selectedConfig === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedConfig(key);
                  setActiveImage(conf.image);
                }}
                className={`text-[11px] sm:text-xs font-black py-3 px-2 rounded-2xl border transition-all text-center flex flex-col items-center justify-center gap-1 ${
                  isSelected
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 border-indigo-500 text-white shadow-xl shadow-indigo-600/40"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                <span>{conf.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* أزرار الشراء والأكشن (مهيأة تماماً للموبايل لعدم التداخل) */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* عداد الكمية */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden h-13 sm:h-14 shrink-0">
            <button
              onClick={() => handleQuantity("-")}
              className="px-3 sm:px-4 text-slate-400 hover:text-white text-base sm:text-lg font-bold transition-colors"
            >
              −
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-7 sm:w-8 text-center bg-transparent text-white text-xs sm:text-sm font-bold outline-none font-mono"
            />
            <button
              onClick={() => handleQuantity("+")}
              className="px-3 sm:px-4 text-slate-400 hover:text-white text-base sm:text-lg font-bold transition-colors"
            >
              +
            </button>
          </div>

          {/* زر السلة */}
          <Link
            to="/cart"
            className="flex-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:opacity-95 text-white text-xs sm:text-sm font-black py-3.5 sm:py-4 px-3 sm:px-6 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/40 text-center"
          >
            <ShoppingBag size={17} className="shrink-0" />
            <span className="truncate">أضف للسلة</span>
          </Link>

          {/* زر المفضلة */}
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-3.5 sm:p-4 rounded-2xl border transition-all shrink-0 ${
              isWishlisted
                ? "bg-rose-500 border-rose-500 text-white shadow-xl shadow-rose-500/40"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Heart
              size={19}
              className={isWishlisted ? "fill-white" : ""}
            />
          </button>
        </div>

        {/* زر الشراء السريع */}
        <Link
          to="/checkout"
          className="w-full bg-white hover:bg-slate-200 text-slate-950 text-xs sm:text-sm font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-2xl text-center"
        >
          <Zap size={16} className="text-amber-500 fill-amber-500 shrink-0" />
          <span>إتمام الطلب السريع (الدفع عند الاستلام أو الكارت)</span>
        </Link>
      </div>

      {/* مميزات المتجر */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-4 border-t border-slate-800 text-center text-[10px] sm:text-[11px] text-slate-400">
        <div className="flex flex-col items-center gap-1.5 bg-slate-950 p-3 sm:p-3.5 rounded-2xl border border-slate-800">
          <Truck size={17} className="text-indigo-400" />
          <span>شحن لكل المحافظات</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 bg-slate-950 p-3 sm:p-3.5 rounded-2xl border border-slate-800">
          <ShieldCheck size={17} className="text-indigo-400" />
          <span>ضمان توكيل أصلي</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 bg-slate-950 p-3 sm:p-3.5 rounded-2xl border border-slate-800">
          <RefreshCw size={17} className="text-indigo-400" />
          <span>استرجاع 30 يوم</span>
        </div>
      </div>
    </div>

  </div>
</section>

        {/* قسم محتوى وتفاصيل عملاقة (المواصفات التقنية والمميزات الأسطورية) */}
        <section className="my-12 sm:my-20 px-3 sm:px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950 border border-slate-800/90 rounded-[2.5rem] sm:rounded-[3.5rem] p-5 sm:p-10 lg:p-14 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* خلفية جمالية مضيئة */}
            <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            {/* رأس القسم */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 relative z-10">
              <span className="inline-flex items-center gap-1.5 text-indigo-400 text-[10px] sm:text-xs font-black uppercase tracking-widest bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/30 shadow-inner">
                <Sparkles size={13} className="text-amber-400" />
                استكشف الهندسة العميقة
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-3 sm:mt-4 tracking-tight">
                المواصفات التقنية والقدرات الخارقة
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                تعرف على تفاصيل الابتكار الهندسي والذكاء الاصطناعي المدمج داخل
                السماعة بدقة متناهية.
              </p>
            </div>

            {/* تبويبات التنقل العصرية */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 relative z-10 border-b border-slate-800/80 pb-6">
              {[
                { id: "specs", label: "المواصفات التقنية الكاملة", icon: Cpu },
                {
                  id: "features",
                  label: "المميزات والذكاء الاصطناعي",
                  icon: Zap,
                },
                { id: "box", label: "محتويات علبة الصندوق", icon: Package },
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-2xl text-[11px] sm:text-xs font-black transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white shadow-[0_0_25px_rgba(99,102,241,0.5)] border border-indigo-400/40 scale-105"
                        : "bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800/80"
                    }`}
                  >
                    <IconComponent
                      size={15}
                      className={
                        isActive ? "text-amber-400" : "text-indigo-400"
                      }
                    />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* محتوى التبويب الأول: المواصفات */}
            {activeTab === "specs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10 animate-fadeIn">
                {[
                  {
                    icon: Cpu,
                    title: "معالج S7 المطور",
                    desc: "نظام حوسبة متطور يحلل الصوت لحظياً ويضبط الترددات بأقصى سرعة ودقة.",
                  },
                  {
                    icon: Volume2,
                    title: "مكبر صوت عالي الانحراف",
                    desc: "يوفر جهير (Bass) عميق ونقي للغاية بدون أي تشويش حتى على أعلى درجات الصوت.",
                  },
                  {
                    icon: Wifi,
                    title: "اتصال واي فاي فائق السرعة",
                    desc: "دعم شبكات Wi-Fi المتقدمة لبث الموسيقى بدون تقطيع وبأعلى جودة لاسلكية ممكنة.",
                  },
                  {
                    icon: Bluetooth,
                    title: "شريحة النطاق فائقة العرض (UWB)",
                    desc: "لنقل الأغاني والبودكاست فوراً وبسلاسة بمجرد تقريب الآيفون من السماعة.",
                  },
                  {
                    icon: Sparkles,
                    title: "حساسات استشعار الغرفة",
                    desc: "تتعرف السماعة على الجدران والأثاث وتعكس الصوت ليعطيك أفضل صوت محيطي ممكن.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "الأمان والخصوصية المطلقة",
                    desc: "مصممة لحماية بياناتك الشخصية بالكامل ولا يتم تسجيل الأوامر الصوتية بدون إذنك.",
                  },
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group bg-slate-950/90 hover:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-800/90 hover:border-indigo-500/50 transition-all duration-300 flex items-start gap-4 shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                    >
                      <div className="p-3 bg-indigo-500/10 group-hover:bg-indigo-500/20 rounded-2xl text-indigo-400 border border-indigo-500/20 shrink-0 transition-colors">
                        <IconComponent size={22} />
                      </div>
                      <div>
                        <h3 className="text-white font-black text-xs sm:text-sm mb-1.5 group-hover:text-indigo-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* محتوى التبويب الثاني: المميزات */}
            {activeTab === "features" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10 animate-fadeIn">
                {[
                  {
                    title: "التحكم الصوتي عبر Siri",
                    desc: "اسأل سيري عن الطقس، شغل مقطوعتك المفضلة، أو تحكم بأجهزة منزلك الذكية بكل سهولة.",
                  },
                  {
                    title: "التعرف على الأصوات الخطرة",
                    desc: "تقوم السماعة بتنبيهك فورا في حال سماع أصوات إنذار الدخان أو أول أكسيد الكربون بمنزلك.",
                  },
                  {
                    title: "قياس درجة الحرارة والرطوبة",
                    desc: "حساسات مدمجة تقيس مناخ الغرفة بدقة وتتيح لك إعداد أتمتة ذكية لمكيف الهواء.",
                  },
                  {
                    title: "ربط منزلي متكامل (HomeKit)",
                    desc: "اجعل منزلك ذكياً بالكامل وتحكم بالإنارة والأبواب والأجهزة عبر أمر صوتي واحد.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-slate-950/90 hover:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-800/90 hover:border-emerald-500/50 transition-all duration-300 flex items-start gap-4 shadow-xl"
                  >
                    <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs sm:text-sm mb-1 group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* محتوى التبويب الثالث: الصندوق */}
            {activeTab === "box" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 relative z-10 animate-fadeIn">
                {[
                  {
                    title: "سماعة HomePod الجيل الثاني",
                    desc: "الوحدة الرئيسية بلونك المفضل مع نسيج فاخر",
                  },
                  {
                    title: "كابل الطاقة المتصل",
                    desc: "كابل قماشي متين مضفر متوافق تماماً مع لون السماعة",
                  },
                  {
                    title: "دليل التشغيل والضمان",
                    desc: "كتيب الإرشادات السريعة وبطاقة الضمان المعتمد",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-slate-950/90 hover:bg-slate-950 p-6 rounded-3xl border border-slate-800/90 hover:border-indigo-500/50 transition-all duration-300 flex flex-col items-center text-center shadow-xl"
                  >
                    <div className="p-4 bg-indigo-500/10 group-hover:scale-110 rounded-2xl text-indigo-400 border border-indigo-500/20 mb-4 transition-all duration-300">
                      <Package size={28} />
                    </div>
                    <h4 className="text-white font-black text-xs sm:text-sm mb-1.5 group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* الأسئلة الشائعة الأسطورية */}
        <section className="my-12 sm:my-20 px-3 sm:px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950 border border-slate-800/90 rounded-[2.5rem] sm:rounded-[3.5rem] p-5 sm:p-10 lg:p-14 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 relative z-10">
              <span className="inline-flex items-center gap-1.5 text-indigo-400 text-[10px] sm:text-xs font-black uppercase tracking-widest bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/30 shadow-inner">
                <Sparkles size={13} className="text-amber-400" />
                استفسارات العملاء
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white mt-3 sm:mt-4 tracking-tight">
                الأسئلة الشائعة والإجابات الشاملة
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                كل ما تحتاج معرفته قبل إتمام طلبك بكل اطمئنان وراحة بال.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 relative z-10 items-start">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden shadow-xl ${
                      isOpen
                        ? "bg-slate-950 border-indigo-500/50 shadow-[0_0_25px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/20"
                        : "bg-slate-950/80 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-right p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 font-bold text-xs sm:text-sm text-white hover:text-indigo-300 transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`p-2 rounded-xl transition-colors shrink-0 ${isOpen ? "bg-indigo-600 text-white shadow-md" : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"}`}
                        >
                          <HelpCircle size={17} />
                        </span>
                        <span className="leading-snug">{faq.q}</span>
                      </span>
                      <span
                        className={`p-1.5 rounded-full transition-all duration-300 shrink-0 ${isOpen ? "bg-indigo-500/20 text-indigo-400 rotate-180" : "text-slate-400 bg-slate-900"}`}
                      >
                        <ChevronDown size={16} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-[11px] sm:text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3.5 bg-slate-950/50 animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* إكسسوارات تليق مع سماعتك */}
        <section className="pt-8 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-white">
              إكسسوارات ومقترحات تليق مع سماعتك
            </h2>
            <Link
              to="/shop"
              className="text-xs font-bold text-indigo-400 hover:underline flex items-center gap-1.5"
            >
              <span>عرض الكل</span>
              <ArrowRight size={14} className="rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {relatedProducts.map((prod) => {
              const isWish = relatedWishlist.includes(prod.id);
              return (
                <article
                  key={prod.id}
                  className="group bg-slate-900/90 border border-slate-800/80 rounded-3xl p-4 flex flex-col justify-between hover:border-indigo-500/60 transition-all shadow-2xl"
                >
                  <div
                    onClick={() => navigate(`/product/${prod.id}`)}
                    className="relative bg-slate-950 rounded-2xl p-4 flex items-center justify-center h-48 mb-3.5 border border-slate-800 overflow-hidden cursor-pointer"
                  >
                    {prod.badge && (
                      <span className="absolute top-2.5 right-2.5 z-10 text-[9px] font-black px-2.5 py-1 rounded-full text-white bg-indigo-600 shadow-md">
                        {prod.badge}
                      </span>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleRelatedWishlist(prod.id);
                      }}
                      className={`absolute top-2.5 left-2.5 z-10 p-2 rounded-full backdrop-blur-md transition-colors ${
                        isWish
                          ? "bg-rose-500 text-white shadow-md"
                          : "bg-black/60 text-slate-400 hover:text-white"
                      }`}
                    >
                      <Heart size={14} className={isWish ? "fill-white" : ""} />
                    </button>

                    <img
                      src={prod.image}
                      alt=""
                      className="h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1.5 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                      متوفر · {prod.stock}
                    </div>

                    <Link
                      to={`/product/${prod.id}`}
                      className="font-bold text-slate-200 text-xs hover:text-indigo-300 transition-colors mb-2 line-clamp-1"
                    >
                      {prod.name}
                    </Link>

                    <div className="flex items-center gap-1 text-amber-400 text-[11px] mb-3">
                      <span>★</span>
                      <span className="text-white font-bold">
                        {prod.rating}
                      </span>
                      <span className="text-slate-500 text-[10px]">
                        ({prod.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3.5 border-t border-slate-800">
                    <div className="flex flex-col">
                      {prod.oldPrice && (
                        <span className="text-[10px] text-slate-500 line-through font-mono">
                          {prod.oldPrice}
                        </span>
                      )}
                      <span className="font-black text-white text-xs font-mono">
                        {prod.price}
                      </span>
                    </div>

                    <Link
                      to={`/product/${prod.id}`}
                      className="bg-white hover:bg-indigo-600 text-slate-950 hover:text-white text-[11px] font-black px-4 py-2 rounded-xl transition-all shadow-md"
                    >
                      تصفح
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
