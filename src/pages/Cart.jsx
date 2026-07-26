import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // استيراد أدوات التوجيه

// مكون عنصر المنتج المتطور
const CartItem = ({ item, onUpdateQty, onRemove }) => (
  <article className="group relative bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
    <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="relative w-24 h-24 rounded-2xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200/80 shadow-inner">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <span className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-md text-white text-[9px] font-black px-2 py-0.5 rounded-full">
            {item.badge}
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600">
              {item.stockStatus}
            </span>
          </div>
          <h3 className="font-black text-slate-900 text-sm sm:text-base tracking-tight group-hover:text-indigo-600 transition-colors">
            {item.name}
          </h3>
          <p className="text-xs text-slate-400 font-semibold">{item.variant}</p>
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            <span className="text-[10px] bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded-md">
              كود المنتج: {item.sku}
            </span>
            <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded-md">
              الضمان: {item.warranty}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-start gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-100">
        <div className="flex items-center bg-slate-100/80 border border-slate-200/80 rounded-2xl p-1 shadow-inner">
          <button
            onClick={() => onUpdateQty(item.id, -1)}
            className="w-8 h-8 rounded-xl bg-white hover:bg-indigo-600 hover:text-white text-slate-700 flex items-center justify-center font-black transition-all shadow-xs active:scale-90"
          >
            −
          </button>
          <span className="w-10 text-center text-xs font-black text-slate-900">
            {item.qty}
          </span>
          <button
            onClick={() => onUpdateQty(item.id, 1)}
            className="w-8 h-8 rounded-xl bg-white hover:bg-indigo-600 hover:text-white text-slate-700 flex items-center justify-center font-black transition-all shadow-xs active:scale-90"
          >
            +
          </button>
        </div>

        <div className="text-left min-w-[90px]">
          <span className="font-black text-slate-900 text-base sm:text-lg block tracking-tight">
            {(item.price * item.qty).toLocaleString()} ج.م
          </span>
          <span className="text-[10px] text-slate-400 font-bold">
            {item.price.toLocaleString()} ج.م للقطعة
          </span>
        </div>

        <button
          onClick={() => onRemove(item.id)}
          className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-rose-50 text-slate-400 hover:text-rose-600 flex items-center justify-center transition-all duration-300 active:scale-90 font-black shadow-2xs"
        >
          ✕
        </button>
      </div>
    </div>
  </article>
);

export default function ShoppingCart() {
  const navigate = useNavigate(); // خطاف التنقل

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "سماعة آبل هوم بود الجيل الثاني",
      variant: "أبيض · صوت محيطي ستيريو · إصدار منتصف الليل",
      price: 13500,
      qty: 1,
      sku: "APL-HP2-WHT",
      warranty: "سنتين ضمان آبل كير",
      stockStatus: "متوفر - جاهز للشحن",
      badge: "الأكثر مبيعاً",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&q=80&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "ساعة آبل سيريس 9 - نظام تحديد الموقع",
      variant: "41مم · ألومنيوم لون منتصف الليل · اسوارة رياضية",
      price: 32000,
      qty: 1,
      sku: "APL-W9-41M",
      warranty: "سنة ضمان رسمى",
      stockStatus: "متبقي 3 قطع فقط",
      badge: "عرض مميز",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "سماعات بيتس ستوديو بودز بلس اللاسلكية",
      variant: "شفاف · خاصية إلغاء الضوضاء النشط",
      price: 8500,
      qty: 2,
      sku: "BTS-SBUDS-TRN",
      warranty: "سنة ضمان",
      stockStatus: "متوفر بالمخزن",
      badge: "جديد",
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&q=80&auto=format&fit=crop",
    },
  ]);

  const [inputCode, setInputCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [discountName, setDiscountName] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const updateQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleApplyPromo = () => {
    const code = inputCode.trim().toUpperCase();
    if (code === "WELCOME20" || code === "EGYPT2026") {
      setAppliedDiscount(2500);
      setDiscountName(code);
      setPromoMessage(`تم تطبيق كود الخصم (${code}) بنجاح! خصم 2,500 ج.م`);
      setIsError(false);
    } else if (code === "SAVE500") {
      setAppliedDiscount(500);
      setDiscountName(code);
      setPromoMessage(`تم تطبيق كود الخصم (${code}) بنجاح! خصم 500 ج.م`);
      setIsError(false);
    } else {
      setPromoMessage("كود الخصم غير صحيح أو منتهي الصلاحية.");
      setIsError(true);
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal > 0 ? subtotal * 0.14 : 0;
  const total = Math.max(0, subtotal + tax - appliedDiscount);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <main className="min-h-screen bg-gradient-to-tr from-slate-100 via-indigo-50/30 to-violet-50/20 text-slate-900 pb-24 selection:bg-indigo-600 selection:text-white" dir="rtl">
      <section className="relative bg-gradient-to-b from-white/90 via-slate-50/50 to-transparent backdrop-blur-2xl border-b border-slate-200/60 py-8 sm:py-14 mb-10 overflow-hidden">
        <div className="absolute top-0 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* مسار التنقل (Breadcrumbs) مربوط بالمسارات الحقيقية */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-4 flex-wrap">
            <Link to="/" className="hover:text-indigo-600 transition-colors bg-white/85 px-2.5 py-1 rounded-xl border border-slate-200/60 shadow-2xs">
              الرئيسية
            </Link>
            <span className="text-indigo-500 font-black">‹</span>
            <Link to="/store" className="hover:text-indigo-600 transition-colors bg-white/85 px-2.5 py-1 rounded-xl border border-slate-200/60 shadow-2xs">
              المتجر
            </Link>
            <span className="text-indigo-500 font-black">‹</span>
            <span className="text-slate-800 bg-indigo-50/80 text-indigo-700 px-2.5 py-1 rounded-xl border border-indigo-100 shadow-2xs">
              سلة التسوق الآمنة
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100/80 text-indigo-700 px-3 py-1 rounded-full text-[11px] font-black shadow-2xs">
                <span>✨</span>
                <span>تجربة تسوق ذكية وآمنة</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span>حقيبة المشتريات</span>
                <span className="text-xs sm:text-sm bg-slate-900 text-white px-3 py-1 rounded-2xl shadow-md font-extrabold">
                  {totalItemsCount}
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-xl">
                أنت على بعد خطوات قليلة من استلاستلام طلبك.{" "}
                <span className="text-emerald-600 font-bold">الشحن السريع المجاني</span> مفعل حالياً لجميع المحافظات! 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQty={updateQuantity}
                    onRemove={removeItem}
                  />
                ))
              ) : (
                <div className="text-center py-20 bg-white/80 rounded-3xl border border-slate-200/60 shadow-xl">
                  <div className="text-5xl mb-4">🛒</div>
                  <h3 className="text-lg font-black text-slate-800">
                    سلة التسوق فارغة حالياً
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 mb-6">
                    أضف بعض المنتجات الرائعة لتبدأ الطلب!
                  </p>
                  <button
                    onClick={() => navigate("/store")}
                    className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs"
                  >
                    تصفح المنتجات
                  </button>
                </div>
              )}
            </div>

            {/* زر متابعة التسوق لينقلك لصفحة المتجر */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
              <button
                onClick={() => navigate("/store")}
                className="px-6 py-4 rounded-2xl border border-slate-200/80 bg-white text-slate-700 font-black text-xs shadow-sm cursor-pointer hover:bg-slate-50 transition-all"
              >
                ← متابعة التسوق
              </button>
            </div>
          </div>

          {/* ملخص الطلب وزر إتمام الطلب لينقلك لصفحة الدفع */}
          <aside className="lg:col-span-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200/80 shadow-2xl shadow-indigo-950/10 p-6 sm:p-8 space-y-6 lg:sticky lg:top-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900">ملخص الطلب</h3>
              <span className="text-xs bg-indigo-50 text-indigo-700 font-black px-2.5 py-1 rounded-xl">
                {totalItemsCount} منتج
              </span>
            </div>

            {/* كود الخصم */}
            <div className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  placeholder="جرب كود: WELCOME20"
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-indigo-600 transition-colors uppercase placeholder:normal-case"
                />
                <button
                  onClick={handleApplyPromo}
                  className="bg-slate-900 hover:bg-indigo-600 text-white px-5 py-3 rounded-2xl text-xs font-black transition-all duration-300 shadow-md active:scale-95 shrink-0"
                >
                  تطبيق
                </button>
              </div>
              {promoMessage && (
                <p className={`text-[11px] font-bold px-1 ${isError ? "text-rose-600" : "text-emerald-600"}`}>
                  {promoMessage}
                </p>
              )}
            </div>

            {/* الحسابات */}
            <div className="space-y-3.5 text-xs font-semibold text-slate-500 border-b border-slate-100 pb-6">
              <div className="flex justify-between items-center">
                <span>إجمالي المنتجات</span>
                <span className="font-extrabold text-slate-900">{subtotal.toLocaleString()} ج.م</span>
              </div>
              <div className="flex justify-between items-center">
                <span>تكلفة الشحن</span>
                <span className="font-extrabold text-emerald-600 uppercase tracking-wider">شحن مجاني</span>
              </div>
              <div className="flex justify-between items-center">
                <span>ضريبة القيمة المضافة (14%)</span>
                <span className="font-extrabold text-slate-900">{tax.toLocaleString(undefined, { maximumFractionDigits: 0 })} ج.م</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between items-center text-rose-600">
                  <span>الخصم ({discountName})</span>
                  <span className="font-extrabold">−{appliedDiscount.toLocaleString()} ج.م</span>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 block tracking-wider">المبلغ الإجمالي النهائي</span>
                <span className="text-xl sm:text-2xl font-black text-slate-900">
                  {total.toLocaleString(undefined, { maximumFractionDigits: 0 })} ج.م
                </span>
              </div>
            </div>

            {/* زر الانتقال لصفحة إتمام الدفع (Checkout) */}
            <button
              onClick={() => navigate("/checkout")}
              className="group flex items-center justify-center gap-3 w-full bg-gradient-to-l from-indigo-600 via-indigo-700 to-violet-800 hover:from-indigo-500 hover:to-violet-700 text-white py-4 px-6 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 active:scale-95 text-center cursor-pointer"
            >
              <span>الانتقال لإتمام الطلب الآمن</span>
              <span className="group-hover:-translate-x-1.5 transition-transform text-base">←</span>
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}