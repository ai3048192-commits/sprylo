import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  Compass,
} from "lucide-react";

const ProfessionalNavbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // بيانات الأقسام بتصميم بسيط وهادئ
  const categoryColumns = [
    {
      title: "الإلكترونيات والتقنية",
      tag: "أساسي",
      items: [
        { title: "الهواتف الذكية والأجهزة", desc: "أحدث الإصدارات الأصلية بضمان" },
        { title: "الساعات الذكية والألترا", desc: "تصميمات عملية لمتابعة لياقتك" },
        { title: "سماعات البلوتوث اللاسلكية", desc: "نقاء صوتي استثنائي وعزل" },
        { title: "أجهزة اللابتوب والعمل", desc: "سرعة وأداء يسهل مهامك اليومية" },
      ],
    },
    {
      title: "العطور والأناقة",
      tag: "راقي",
      items: [
        { title: "العطور الشرقية والفرنسية", desc: "ثبات عالي وروائح ساحرة تدوم" },
        { title: "الساعات الكلاسيكية والجلد", desc: "فخامة هادئة تناسب إطلالتك" },
        { title: "الملابس العصرية المختارة", desc: "أناقة مريحة لكل الأوقات" },
        { title: "النظارات والإكسسوارات", desc: "لمسات أخيرة تكمل أناقتك" },
      ],
    },
    {
      title: "المنزل والطفل",
      tag: "مريح",
      items: [
        { title: "أدوات المطبخ الذكية", desc: "تسهل تفاصيل حياتك المنزلية" },
        { title: "ديكورات وتصميمات هادئة", desc: "تضفي دفئاً وجمالاً لبيتك" },
        { title: "مستلزمات وعربات أطفال", desc: "أمان وراحة تامة لصغيرك" },
        { title: "ألعاب تعليمية وترفيهية", desc: "تنمية مهارات الأطفال بذكاء" },
      ],
    },
  ];

  const navLinks = [
    { label: "الرئيسية", path: "/" },
    { label: "المتجر العام", path: "/shop" },
    { label: "المنتجات المميزة", path: "/shopoffers", highlight: "جديد" },
    { label: "من نحن", path: "/about" },
    { label: "اتصل بنا", path: "/contactus" },
  ];

  return (
    <nav
      className="bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200/75 sticky top-0 z-50 transition-all duration-300 select-none shadow-xs text-stone-800"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        
        {/* الجانب الأيمن: زر الأقسام والروابط */}
        <div className="flex items-center gap-8">
          
          {/* زر الأقسام بتصميم بسيط وهادئ */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="hidden md:flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-stone-100 px-5 py-3 rounded-xl font-medium text-xs tracking-wide transition-all shadow-sm cursor-pointer"
            >
              <Menu size={16} className="text-stone-400" />
              <span>تصفح الأقسام</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 text-stone-400 ${isCategoriesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* الميجا ميني (Mega Menu) بتصميم دافئ وبسيط */}
            {isCategoriesOpen && (
              <div className="absolute top-full right-0 mt-3 w-[1000px] hidden md:grid grid-cols-3 gap-6 bg-white border border-stone-200 rounded-2xl shadow-xl p-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {categoryColumns.map((col, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                      <span className="text-xs font-bold text-stone-900">{col.title}</span>
                      <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded font-medium">
                        {col.tag}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {col.items.map((item, i) => (
                        <Link
                          key={i}
                          to="/shop"
                          onClick={() => setIsCategoriesOpen(false)}
                          className="block p-2.5 rounded-lg hover:bg-stone-50 transition-all group"
                        >
                          <div className="text-xs font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-stone-400 mt-0.5">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* روابط التنقل الرئيسية (ديسكتوب) */}
          <div className="hidden md:flex items-center gap-6 font-medium text-stone-600 text-xs">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="hover:text-stone-900 transition-colors py-2 relative flex items-center gap-1.5 group"
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="bg-amber-100 text-amber-800 text-[9px] px-1.5 py-0.5 rounded font-bold">
                    {link.highlight}
                  </span>
                )}
                <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* الجانب الأيسر: رسالة ترحيبية بسيطة */}
        <div className="hidden md:flex items-center gap-2 bg-stone-100/80 border border-stone-200/50 px-3.5 py-2 rounded-xl text-stone-600">
          <Sparkles size={14} className="text-amber-600" />
          <span className="text-[11px] font-medium">توصيل سريع وخدمة عملاء ممتازة</span>
        </div>

        {/* زر الموبايل */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 bg-stone-900 text-stone-100 px-4 py-2.5 rounded-xl font-medium text-xs transition-all active:scale-95 cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            <span>{isMobileMenuOpen ? "إغلاق" : "القائمة"}</span>
          </button>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة بتصميم دافئ وبسيط */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FAF9F6] border-b border-stone-200 px-4 py-6 space-y-6 shadow-xl max-h-[80vh] overflow-y-auto text-right z-50 animate-in slide-in-from-top duration-200">
          
          {/* الروابط السريعة */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-stone-400 px-1">التنقل السريع</span>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-white text-stone-800 font-medium text-xs border border-stone-200 flex items-center justify-between shadow-2xs"
                >
                  <ArrowRight size={12} className="text-stone-400 rotate-180" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* الأقسام للموبايل */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-stone-400 px-1">الأقسام والتصنيفات</span>
            <div className="space-y-2">
              {categoryColumns.map((col, idx) => (
                <Link
                  key={idx}
                  to="/shop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 shadow-2xs"
                >
                  <ArrowRight size={14} className="text-stone-400 rotate-180" />
                  <div className="text-right">
                    <div className="text-xs font-bold text-stone-900">{col.title}</div>
                    <div className="text-[10px] text-stone-400">{col.items[0]?.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* زر الإغلاق */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-stone-900 text-stone-100 py-3 rounded-xl font-medium text-xs active:scale-95 transition-all cursor-pointer"
          >
            <X size={16} />
            <span>إغلاق القائمة</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default ProfessionalNavbar;