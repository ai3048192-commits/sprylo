import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function CheckoutPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    altPhone: "",
    email: "",
    governorate: "القاهرة",
    city: "",
    district: "",
    street: "",
    building: "",
    floor: "",
    apartment: "",
    deliveryTime: "evening",
    notes: ""
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [cardData, setCardData] = useState({
    number: "",
    holder: "",
    expiry: "",
    cvv: ""
  });

  const [instaPayHandle, setInstaPayHandle] = useState("");
  const [vodafoneNumber, setVodafoneNumber] = useState("");
  
  const [receiptFile, setReceiptFile] = useState(null);
  const [receiptPreview, setReceiptPreview] = useState(null);

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReceiptChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReceiptFile(file);
      setReceiptPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const randomId = "EGY-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
    setIsSuccessModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-slate-100 via-indigo-50/50 to-violet-50/40 text-slate-900 pb-28 selection:bg-indigo-600 selection:text-white" dir="rtl">
      
      {/* رأس الصفحة العصري */}
      <section className="relative bg-gradient-to-b from-white/95 via-slate-50/70 to-transparent backdrop-blur-2xl border-b border-slate-200/60 py-10 sm:py-16 mb-10 overflow-hidden shadow-xs">
        <div className="absolute top-0 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-4 flex-wrap">
            <Link to="/" className="hover:text-indigo-600 transition-colors bg-white/90 px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">الرئيسية</Link> 
            <span className="text-indigo-500 font-black text-sm">‹</span> 
            <span className="text-slate-800 bg-indigo-50/90 text-indigo-700 px-3 py-1.5 rounded-xl border border-indigo-100 font-black shadow-2xs">إتمام الطلب والتحصين الأمني</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">إتمام الطلب والدفع الآمن ⚡</h1>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-xl mt-2">
                قم بمراجعة بياناتك بدقة لتجربة توصيل سلسة وخالية من أي أخطاء. نحن نضمن حماية بياناتك بالكامل.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-200/80 shadow-sm">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-slate-700">بوابة الدفع مشفرة 256-bit SSL</span>
            </div>
          </div>
        </div>
      </section>

      {/* الحاوية الرئيسية */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-6">
            
            {/* عنوان الشحن والتوصيل (ديزاين فاجر ومفصل) */}
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/5 p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-violet-600" />
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-base shadow-inner">📍</div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 tracking-tight">تفاصيل عنوان الشحن والاستلام</h3>
                    <p className="text-[11px] text-slate-400 font-semibold">أين تريد أن نصل إليك؟</p>
                  </div>
                </div>
                <span className="text-[10px] bg-slate-100 text-slate-600 font-extrabold px-3 py-1 rounded-xl">الخطوة 1 من 2</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* الاسم الثلاثي */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <span>الاسم الثلاثي</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="مثال: أحمد محمد علي" className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" />
                </div>
                
                {/* رقم الهاتف الأساسي */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <span>رقم الهاتف المحمول الأساسي</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="010XXXXXXXX" className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" />
                </div>

                {/* رقم هاتف إضافي */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">رقم هاتف إضافي (اختياري للطوارئ)</label>
                  <input type="tel" name="altPhone" value={formData.altPhone} onChange={handleChange} placeholder="011XXXXXXXX" className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" />
                </div>

                {/* البريد الإلكتروني */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <span>البريد الإلكتروني للفاتورة</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="name@example.com" className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" />
                </div>

                {/* المحافظة */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <span>المحافظة</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <select name="governorate" value={formData.governorate} onChange={handleChange} className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner cursor-pointer">
                    <option value="القاهرة">القاهرة</option>
                    <option value="الجيزة">الجيزة</option>
                    <option value="الإسكندرية">الإسكندرية</option>
                    <option value="الدقهلية">الدقهلية</option>
                    <option value="الشرقية">الشرقية</option>
                    <option value="الغربية">الغربية</option>
                    <option value="باقي المحافظات">باقي المحافظات</option>
                  </select>
                </div>

                {/* المدينة / المركز */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <span>المدينة / المركز / الحي</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <input type="text" name="city" required value={formData.city} onChange={handleChange} placeholder="مثال: مدينة نصر" className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" />
                </div>

                {/* اسم المنطقة / الحي الفرعي */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700">المنطقة أو المربع السكني</label>
                  <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="مثال: الحي السابع، بجوار الموقف القديم" className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" />
                </div>

                {/* اسم الشارع */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <span>اسم الشارع الرئيسي</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <input type="text" name="street" required value={formData.street} onChange={handleChange} placeholder="مثال: شارع مصطفى النحاس" className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" />
                </div>

                {/* بيانات تفصيلية (عمارة، دور، شقة) */}
                <div className="grid grid-cols-3 gap-2 sm:col-span-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">رقم العمارة</label>
                    <input type="text" name="building" required value={formData.building} onChange={handleChange} placeholder="14" className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-center shadow-inner" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">الدور</label>
                    <input type="text" name="floor" value={formData.floor} onChange={handleChange} placeholder="الثاني" className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-center shadow-inner" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">رقم الشقة</label>
                    <input type="text" name="apartment" required value={formData.apartment} onChange={handleChange} placeholder="5" className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-center shadow-inner" />
                  </div>
                </div>

                {/* وقت التوصيل المفضل */}
                <div className="space-y-1.5 sm:col-span-2 pt-2">
                  <label className="text-xs font-bold text-slate-700 block mb-2">وقت التوصيل المفضل لديك 🕒</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label className={`cursor-pointer border-2 rounded-2xl p-3 flex items-center justify-between transition-all ${formData.deliveryTime === 'morning' ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-200 bg-white'}`}>
                      <span className="text-xs font-bold text-slate-800">صباحاً (10ص - 2ظ)</span>
                      <input type="radio" name="deliveryTime" checked={formData.deliveryTime === 'morning'} onChange={() => setFormData({...formData, deliveryTime: 'morning'})} className="accent-indigo-600 w-4 h-4" />
                    </label>
                    <label className={`cursor-pointer border-2 rounded-2xl p-3 flex items-center justify-between transition-all ${formData.deliveryTime === 'evening' ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-200 bg-white'}`}>
                      <span className="text-xs font-bold text-slate-800">مساءً (2ظ - 7م)</span>
                      <input type="radio" name="deliveryTime" checked={formData.deliveryTime === 'evening'} onChange={() => setFormData({...formData, deliveryTime: 'evening'})} className="accent-indigo-600 w-4 h-4" />
                    </label>
                    <label className={`cursor-pointer border-2 rounded-2xl p-3 flex items-center justify-between transition-all ${formData.deliveryTime === 'night' ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-200 bg-white'}`}>
                      <span className="text-xs font-bold text-slate-800">ليلاً (7م - 11م)</span>
                      <input type="radio" name="deliveryTime" checked={formData.deliveryTime === 'night'} onChange={() => setFormData({...formData, deliveryTime: 'night'})} className="accent-indigo-600 w-4 h-4" />
                    </label>
                  </div>
                </div>

                {/* ملاحظات التوصيل */}
                <div className="space-y-1.5 sm:col-span-2 pt-2">
                  <label className="text-xs font-bold text-slate-700">ملاحظات إضافية لمندوب التوصيل (اختياري)</label>
                  <textarea name="notes" rows="2" value={formData.notes} onChange={handleChange} placeholder="مثال: يرجى الاتصال قبل الوصول بـ 15 دقيقة، أو ترك الطلب لدى حارس العقار." className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner resize-none"></textarea>
                </div>

              </div>
            </div>

            {/* قسم طرق الدفع (ديزاين فاجر جداً ومخصص) */}
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/5 p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-violet-600 to-indigo-600" />

              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-base shadow-inner">💳</div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 tracking-tight">طريقة الدفع الآمنة</h3>
                    <p className="text-[11px] text-slate-400 font-semibold">اختر وسيلة الدفع المناسبة لك</p>
                  </div>
                </div>
                <span className="text-[10px] bg-slate-100 text-slate-600 font-extrabold px-3 py-1 rounded-xl">الخطوة 2 من 2</span>
              </div>

              {/* كروت الاختيار بتصميم فخم جداً */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                
                {/* الدفع عند الاستلام */}
                <label className={`group relative cursor-pointer border-2 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 overflow-hidden ${paymentMethod === 'cod' ? 'border-indigo-600 bg-indigo-50/50 shadow-lg shadow-indigo-500/15 scale-[1.02]' : 'border-slate-200/80 hover:border-slate-300 bg-white/80'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg shadow-xs group-hover:scale-110 transition-transform">💵</div>
                    <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => { setPaymentMethod('cod'); setReceiptFile(null); setReceiptPreview(null); }} className="accent-indigo-600 w-4 h-4 cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-xs sm:text-sm">عند الاستلام</h4>
                    <p className="text-[10px] text-slate-500 font-medium mt-1">كاش للمندوب عند استلام طلبك.</p>
                  </div>
                </label>

                {/* بطاقة ائتمان / ميزة */}
                <label className={`group relative cursor-pointer border-2 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 overflow-hidden ${paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50/50 shadow-lg shadow-indigo-500/15 scale-[1.02]' : 'border-slate-200/80 hover:border-slate-300 bg-white/80'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg shadow-xs group-hover:scale-110 transition-transform">💳</div>
                    <input type="radio" name="payment" checked={paymentMethod === 'card'} onChange={() => { setPaymentMethod('card'); setReceiptFile(null); setReceiptPreview(null); }} className="accent-indigo-600 w-4 h-4 cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-xs sm:text-sm">فيزا / ميزة</h4>
                    <p className="text-[10px] text-slate-500 font-medium mt-1">دفع إلكتروني آمن ومشفر بالكامل.</p>
                  </div>
                </label>

                {/* إنستا باي */}
                <label className={`group relative cursor-pointer border-2 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 overflow-hidden ${paymentMethod === 'instapay' ? 'border-indigo-600 bg-indigo-50/50 shadow-lg shadow-indigo-500/15 scale-[1.02]' : 'border-slate-200/80 hover:border-slate-300 bg-white/80'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center text-lg shadow-xs group-hover:scale-110 transition-transform">⚡</div>
                    <input type="radio" name="payment" checked={paymentMethod === 'instapay'} onChange={() => { setPaymentMethod('instapay'); setReceiptFile(null); setReceiptPreview(null); }} className="accent-indigo-600 w-4 h-4 cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-xs sm:text-sm">إنستا باي</h4>
                    <p className="text-[10px] text-slate-500 font-medium mt-1">تحويل لحظي وإرفاق إيصال.</p>
                  </div>
                </label>

                {/* فودافون كاش */}
                <label className={`group relative cursor-pointer border-2 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 overflow-hidden ${paymentMethod === 'vodafone' ? 'border-indigo-600 bg-indigo-50/50 shadow-lg shadow-indigo-500/15 scale-[1.02]' : 'border-slate-200/80 hover:border-slate-300 bg-white/80'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg shadow-xs group-hover:scale-110 transition-transform">📱</div>
                    <input type="radio" name="payment" checked={paymentMethod === 'vodafone'} onChange={() => { setPaymentMethod('vodafone'); setReceiptFile(null); setReceiptPreview(null); }} className="accent-indigo-600 w-4 h-4 cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-xs sm:text-sm">فودافون كاش</h4>
                    <p className="text-[10px] text-slate-500 font-medium mt-1">تحويل للمحفظة وإرفاق إيصال.</p>
                  </div>
                </label>

              </div>

              {/* حقول الدفع حسب الاختيار */}
              {paymentMethod === 'card' && (
                <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-indigo-100 p-5 sm:p-6 rounded-2xl space-y-4 animate-fadeIn shadow-inner">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🔒</span>
                    <h4 className="text-xs font-black text-slate-900">أدخل بيانات البطاقة الائتمانية أو بطاقة ميزة</h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">رقم البطاقة (16 رقماً)</label>
                      <input type="text" maxLength="19" required value={cardData.number} onChange={(e) => setCardData({...cardData, number: e.target.value})} placeholder="0000 0000 0000 0000" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 shadow-xs" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="sm:col-span-2">
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">اسم حامل البطاقة (بالإنجليزية)</label>
                        <input type="text" required value={cardData.holder} onChange={(e) => setCardData({...cardData, holder: e.target.value})} placeholder="AHMED MOHAMED" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 shadow-xs" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[11px] font-bold text-slate-700 block mb-1">الانتهاء</label>
                          <input type="text" placeholder="MM/YY" required value={cardData.expiry} onChange={(e) => setCardData({...cardData, expiry: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 text-center shadow-xs" />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-slate-700 block mb-1">CVV</label>
                          <input type="password" maxLength="4" placeholder="123" required value={cardData.cvv || ""} onChange={(e) => setCardData({...cardData, cvv: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 text-center shadow-xs" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'instapay' && (
                <div className="bg-gradient-to-br from-indigo-50/80 to-violet-50/50 border border-indigo-200/80 p-5 sm:p-6 rounded-2xl text-xs text-indigo-950 font-bold space-y-4 animate-fadeIn shadow-inner">
                  <div className="flex items-center gap-2 text-indigo-700">
                    <span className="text-base">⚡</span>
                    <span>تعليمات التحويل عبر تطبيق إنستا باي (InstaPay):</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium">قم بالتحويل اللحظي للمبلغ الإجمالي المطلوب على المعرف المعتمد للمتجر:</p>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-indigo-200 flex items-center justify-between shadow-xs">
                    <span className="font-black text-indigo-600 text-sm tracking-wide">storename@instapay</span>
                    <span className="text-[10px] bg-indigo-50 text-indigo-700 font-bold px-2.5 py-1 rounded-lg">معرف رسمي موثق</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">عنوان الحساب المحول منه (IPN Address)</label>
                      <input type="text" required value={instaPayHandle} onChange={(e) => setInstaPayHandle(e.target.value)} placeholder="yourname@instapay" className="w-full bg-white border border-indigo-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 shadow-xs" />
                    </div>
                    
                    {/* رفع الإيصال مع المعاينة الحية */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">صورة إيصال التحويل (سكرين شوت)</label>
                      {!receiptPreview ? (
                        <div className="relative border-2 border-dashed border-indigo-300 hover:border-indigo-500 bg-white rounded-xl p-3 text-center cursor-pointer transition-all flex items-center justify-center gap-2 shadow-xs">
                          <span className="text-indigo-500 text-sm">📎</span>
                          <span className="text-[11px] text-slate-500 font-semibold truncate">اختر صورة الإيصال...</span>
                          <input type="file" accept="image/*" required onChange={handleReceiptChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-between bg-white border border-indigo-200 rounded-xl p-2 shadow-xs">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <img src={receiptPreview} alt="Receipt preview" className="w-10 h-10 object-cover rounded-lg border border-slate-200 shrink-0" />
                            <span className="text-[10px] font-bold text-indigo-700 truncate">{receiptFile?.name}</span>
                          </div>
                          <button type="button" onClick={() => { setReceiptFile(null); setReceiptPreview(null); }} className="text-rose-500 hover:text-rose-700 text-xs px-2 py-1 font-black cursor-pointer">✕</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'vodafone' && (
                <div className="bg-gradient-to-br from-amber-50/90 to-orange-50/40 border border-amber-200/80 p-5 sm:p-6 rounded-2xl text-xs text-amber-950 font-bold space-y-4 animate-fadeIn shadow-inner">
                  <div className="flex items-center gap-2 text-amber-700">
                    <span className="text-base">📱</span>
                    <span>تعليمات الدفع عبر محفظة فودافون كاش:</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium">قم بتحويل المبلغ الإجمالي المطلوب على رقم المحفظة التجاري التالي:</p>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-amber-200 flex items-center justify-between shadow-xs">
                    <span className="font-black text-amber-700 text-sm tracking-wider">01012345678</span>
                    <span className="text-[10px] bg-amber-50 text-amber-700 font-bold px-2.5 py-1 rounded-lg">رقم معتمد</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">رقم هاتفك المحمول المحول منه</label>
                      <input type="tel" required value={vodafoneNumber} onChange={(e) => setVodafoneNumber(e.target.value)} placeholder="010XXXXXXXX" className="w-full bg-white border border-amber-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 shadow-xs" />
                    </div>

                    {/* رفع الإيصال مع المعاينة الحية */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">صورة إيصال التحويل (سكرين شوت)</label>
                      {!receiptPreview ? (
                        <div className="relative border-2 border-dashed border-amber-300 hover:border-amber-500 bg-white rounded-xl p-3 text-center cursor-pointer transition-all flex items-center justify-center gap-2 shadow-xs">
                          <span className="text-amber-500 text-sm">📎</span>
                          <span className="text-[11px] text-slate-500 font-semibold truncate">اختر صورة الإيصال...</span>
                          <input type="file" accept="image/*" required onChange={handleReceiptChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-between bg-white border border-amber-200 rounded-xl p-2 shadow-xs">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <img src={receiptPreview} alt="Receipt preview" className="w-10 h-10 object-cover rounded-lg border border-slate-200 shrink-0" />
                            <span className="text-[10px] font-bold text-amber-800 truncate">{receiptFile?.name}</span>
                          </div>
                          <button type="button" onClick={() => { setReceiptFile(null); setReceiptPreview(null); }} className="text-rose-500 hover:text-rose-700 text-xs px-2 py-1 font-black cursor-pointer">✕</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* ملخص الفاتورة وزر التأكيد النهائي (بتصميم مذهل ولزق ذكي) */}
          <aside className="lg:col-span-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200/80 shadow-2xl shadow-indigo-950/10 p-5 sm:p-7 lg:p-8 space-y-6 lg:sticky lg:top-8 w-full transition-all duration-300">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">ملخص الفاتورة النهائية</h3>
              <span className="text-xs bg-indigo-50 text-indigo-700 font-black px-3 py-1 rounded-xl shadow-inner">3 منتجات</span>
            </div>

            {/* تفاصيل الأسعار */}
            <div className="space-y-3 text-xs font-semibold text-slate-500 border-b border-slate-100 pb-5">
              <div className="flex justify-between items-center">
                <span>إجمالي المنتجات</span>
                <span className="font-extrabold text-slate-900 text-sm">54,000 ج.م</span>
              </div>
              <div className="flex justify-between items-center">
                <span>تكلفة الشحن السريع</span>
                <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md uppercase text-[10px]">مجاني 🚀</span>
              </div>
              <div className="flex justify-between items-center">
                <span>ضريبة القيمة المضافة (14%)</span>
                <span className="font-extrabold text-slate-900">7,560 ج.م</span>
              </div>
              <div className="flex justify-between items-center text-rose-600 bg-rose-50/50 p-2 rounded-xl border border-rose-100/50">
                <span>خصم البرومو كود (WELCOME20)</span>
                <span className="font-extrabold">−2,500 ج.م</span>
              </div>
            </div>

            {/* الإجمالي النهائي */}
            <div className="flex items-center justify-between bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-xl shadow-slate-900/10 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">المبلغ الواجب سداده</span>
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">59,060 <span className="text-sm font-bold text-indigo-400">ج.م</span></span>
              </div>
            </div>

            {/* زر التأكيد الفاجر */}
            <button 
              type="submit"
              className="group flex items-center justify-center gap-3 w-full bg-gradient-to-l from-emerald-600 via-emerald-700 to-teal-800 hover:from-emerald-500 hover:to-teal-700 text-white py-4 px-6 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 active:scale-95 text-center cursor-pointer"
            >
              <span>تأكيد وإرسال الطلب الآن</span>
              <span className="group-hover:-translate-x-1.5 transition-transform text-base">✓</span>
            </button>

            <p className="text-[10px] text-slate-400 text-center font-medium leading-relaxed pt-2 border-t border-slate-100">
              🔒 بالنقر على تأكيد الطلب، فإنك توافق على شروط الخدمة وسياسة الاسترجاع الخاصة بالمتجر.
            </p>

          </aside>

        </form>
      </div>

    </main>
  );
}