import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Headphones,
  ShieldAlert,
  Briefcase,
  Sparkles,
  Building2,
  ExternalLink,
} from "lucide-react";

export default function UltimateContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "الدعم الفني والتقني",
    priority: "عادية",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  // إحداثيات وفروع مصر مع روابط خرائط جوجل الحقيقية
  const branches = [
    {
      name: "فرع مصر الجديدة",
      tag: "الفرع الرئيسي",
      tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      address: "شارع العروبة، تقاطع الأهرام، الدور الثالث",
      city: "القاهرة، مصر",
      // رابط خرائط جوجل المباشر للعنوان
      mapUrl: "https://maps.google.com/?q=Heliopolis,+Cairo,+Egypt",
    },
    {
      name: "فرع مدينة نصر",
      tag: "مركز العمليات",
      tagColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      address: "شارع مكرم عبيد، بجوار سيتي سنتر",
      city: "القاهرة، مصر",
      mapUrl: "https://maps.google.com/?q=Nasr+City,+Cairo,+Egypt",
    },
    {
      name: "فرع النزهة الجديدة",
      tag: "مراكز التوزيع",
      tagColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      address: "شارع طه حسين، مساكن شيراتون",
      city: "القاهرة، مصر",
      mapUrl: "https://maps.google.com/?q=Sheraton+Heliopolis,+Cairo,+Egypt",
    },
  ];

  return (
    <div
      className="bg-[#020617] text-slate-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 selection:bg-rose-600 selection:text-white"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* ================= الترويسة الفنية الفاخرة ================= */}
        <div
          className="relative border border-indigo-500/30 bg-gradient-to-tr 
        from-slate-950 via-[#0a0f1d] to-slate-950 rounded-[3rem] 
        p-8 sm:p-16 overflow-hidden shadow-2xl text-center max-w-7xl mx-auto space-y-6"
        >
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-gradient-to-br from-indigo-600/20 via-rose-600/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-black px-4 py-2 rounded-full mx-auto shadow-inner">
              <Sparkles size={14} className="animate-spin" />
              <span>مركز خدمة العملاء والعمليات المركزية 24/7</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
              قنوات اتصال متعددة .. <br />
              <span className="bg-gradient-to-r from-indigo-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                نحن بجانبك في كل لحظة.
              </span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              نوفر لك شبكة دعم متكاملة ومقسمة حسب تخصصك لضمان سرعة الاستجابة
              القصوى ومعالجة كافة طلباتك باحترافية مطلقة.
            </p>
          </div>

          {/* شريط حالة الخوادم والدعم الحي */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-2xl">
              <div className="text-[10px] text-slate-400 font-semibold">
                حالة الدعم الفني
              </div>
              <div className="text-xs font-black text-emerald-400 mt-1 flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>يعمل بكفاءة 100%</span>
              </div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-2xl">
              <div className="text-[10px] text-slate-400 font-semibold">
                متوسط وقت الرد
              </div>
              <div className="text-xs font-black text-indigo-400 mt-1">
                أقل من 3 دقائق
              </div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-2xl">
              <div className="text-[10px] text-slate-400 font-semibold">
                مكاتب العمليات
              </div>
              <div className="text-xs font-black text-rose-400 mt-1">
                3 فروع بالقاهرة
              </div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-2xl">
              <div className="text-[10px] text-slate-400 font-semibold">
                الرضا العام
              </div>
              <div className="text-xs font-black text-amber-400 mt-1">
                99.8% تقييم العملاء
              </div>
            </div>
          </div>
        </div>

        {/* ================= شبكة بيانات التواصل الضخمة والمنظمة ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* 1. الدعم الفني والتقني */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 p-8 rounded-[2.5rem] space-y-5 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Headphones size={26} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-white">
                  الدعم الفني والتقني
                </h3>
                <p className="text-slate-400 text-xs">
                  لحل مشاكل الحسابات وتتبع الطلبات والتقنيات.
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">الخط الساخن:</span>
                  <span className="font-bold text-indigo-400" dir="ltr">
                    +20 2 2000 0000
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">البريد المباشر:</span>
                  <span className="font-bold text-indigo-400">
                    tech@yourstore.com
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">ساعات العمل:</span>
                  <span className="font-bold text-white">24 ساعة / 7 أيام</span>
                </div>
              </div>
            </div>
            <a
              href="tel:+20220000000"
              className="w-full py-3 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 font-bold text-xs rounded-2xl text-center transition-all block"
            >
              اتصال سريع بالدعم
            </a>
          </div>

          {/* 2. قسم المبيعات والشراكات */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-rose-500/50 p-8 rounded-[2.5rem] space-y-5 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-600/20 border border-rose-500/30 text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase size={26} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-white">
                  المبيعات وتوريد الشركات
                </h3>
                <p className="text-slate-400 text-xs">
                  لطلبات الجملة، الشراكات التجارية، وعقود التوريد.
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">هاتف المبيعات:</span>
                  <span className="font-bold text-rose-400" dir="ltr">
                    +20 10 9999 8888
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">بريد الشركات:</span>
                  <span className="font-bold text-rose-400">
                    b2b@yourstore.com
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">ساعات العمل:</span>
                  <span className="font-bold text-white">
                    الأحد - الخميس (8 ص - 6 م)
                  </span>
                </div>
              </div>
            </div>
            <a
              href="mailto:b2b@yourstore.com"
              className="w-full py-3 bg-rose-600/10 hover:bg-rose-600/20 border border-rose-500/30 text-rose-400 font-bold text-xs rounded-2xl text-center transition-all block"
            >
              إرسال عرض شراكة
            </a>
          </div>

          {/* 3. الإدارة القانونية وحل النزاعات */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 p-8 rounded-[2.5rem] space-y-5 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldAlert size={26} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-white">
                  الشؤون القانونية والامتثال
                </h3>
                <p className="text-slate-400 text-xs">
                  للشكاوى الرسمية، حماية البيانات، والشئون القانونية.
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">هاتف القسم:</span>
                  <span className="font-bold text-emerald-400" dir="ltr">
                    +20 2 2400 1122
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">البريد الرسمي:</span>
                  <span className="font-bold text-emerald-400">
                    legal@yourstore.com
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-500">زمن الاستجابة:</span>
                  <span className="font-bold text-white">خلال 24 ساعة عمل</span>
                </div>
              </div>
            </div>
            <a
              href="mailto:legal@yourstore.com"
              className="w-full py-3 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-bold text-xs rounded-2xl text-center transition-all block"
            >
              تواصل قانوني رسمي
            </a>
          </div>
        </div>

        {/* ================= مقار العمليات والفروع (تفاعلية مع خرائط جوجل والعنوان) ================= */}
        <div className="max-w-7xl mx-auto bg-gradient-to-b from-slate-950 via-[#0a0f1d] to-slate-950 border border-amber-500/30 p-8 sm:p-14 rounded-[2.5rem] space-y-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center space-y-3 max-w-xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-black px-4 py-1.5 rounded-full">
              <Building2 size={14} />
              <span>شبكة الفروع ومراكز التوزيع بمصر</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              مقار العمليات الإقليمية
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              اضغط على أي فرع أدناه لعرض موقعه الجغرافي والتوجه إليه عبر خرائط
              جوجل مباشرة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {branches.map((branch, index) => (
              <a
                key={index}
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 p-7 rounded-3xl space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-xl group cursor-pointer block"
                title="اضغط لفتح الموقع على الخريطة"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-black border px-3 py-1 rounded-full ${branch.tagColor}`}
                  >
                    {branch.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <ExternalLink size={14} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                    {branch.name}
                  </h4>
                  {/* عرض العنوان كاملاً بوضوح */}
                  <p className="text-sm font-bold text-slate-200 leading-relaxed">
                    {branch.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                    <MapPin size={14} className="text-amber-400 shrink-0" />
                    <span>{branch.city}</span>
                  </span>
                  <span className="text-amber-400 font-bold group-hover:underline">
                    عرض على الخريطة ←
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ================= نموذج المراسلة المتقدم والمتكامل ================= */}
        <div className="max-w-5xl mx-auto bg-gradient-to-tr from-slate-900 via-[#0a0f1d] to-slate-900 border border-slate-800 p-8 sm:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

          {submitted ? (
            <div className="bg-emerald-950/50 border border-emerald-500/40 p-12 rounded-3xl text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                تم استلام تذكرتك بنجاح!
              </h3>
              <p className="text-slate-300 text-sm max-w-lg mx-auto">
                تم توليد رقم تذكرة رقمية لطلبك، وقام النظام بتوجيهها مباشرة إلى
                قسم (
                <span className="text-emerald-400 font-bold">
                  {formData.department}
                </span>
                ). سيصلك رد رسمي عبر بريدك الإلكتروني قريباً جداً.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-2xl transition-all cursor-pointer"
              >
                إرسال استفسار جديد
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2 text-center sm:text-right">
                <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold">
                  <MessageSquare size={16} />
                  <span>نظام التذاكر والاستفسارات المباشر</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  فتح تذكرة دعم جديدة
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  اختر القسم المختص واملأ التفاصيل لنقوم بخدمتك بالسرعة القصوى.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300">
                    اسمك الكريم
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="اسمك الكامل..."
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#020617] border border-slate-800 focus:border-indigo-500 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-slate-600 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#020617] border border-slate-800 focus:border-indigo-500 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-slate-600 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300">
                    رقم الهاتف (اختياري)
                  </label>
                  <input
                    type="tel"
                    placeholder="+20 10..."
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#020617] border border-slate-800 focus:border-indigo-500 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-slate-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300">
                    القسم المختص
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    className="w-full bg-[#020617] border border-slate-800 focus:border-indigo-500 rounded-2xl px-4 py-3.5 text-xs text-white outline-none transition-all cursor-pointer"
                  >
                    <option value="الدعم الفني والتقني">
                      الدعم الفني والتقني
                    </option>
                    <option value="قسم المبيعات والتوريد">
                      قسم المبيعات والتوريد
                    </option>
                    <option value="الشؤون القانونية">
                      الشؤون القانونية والامتثال
                    </option>
                    <option value="الشكاوى والمقترحات">
                      الشكاوى والمقترحات العامة
                    </option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300">
                    درجة الأهمية
                  </label>
                  <select
                    value={formData.priority}
                    onChange={(e) =>
                      setFormData({ ...formData, priority: e.target.value })
                    }
                    className="w-full bg-[#020617] border border-slate-800 focus:border-indigo-500 rounded-2xl px-4 py-3.5 text-xs text-white outline-none transition-all cursor-pointer"
                  >
                    <option value="عادية">عادية (خلال 24 ساعة)</option>
                    <option value="متوسطة">متوسطة (خلال 12 ساعة)</option>
                    <option value="عاجلة">عاجلة جداً (خلال ساعتين)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300">
                  عنوان الموضوع
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: استفسار بخصوص موعد شحن الطلب رقم #4582..."
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-[#020617] border border-slate-800 focus:border-indigo-500 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-slate-600 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300">
                  تفاصيل الرسالة أو الطلب
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="اكتب تفاصيل مشكلتك أو استفسارك هنا بكل وضوح..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#020617] border border-slate-800 focus:border-indigo-500 rounded-2xl p-4 text-xs text-white placeholder-slate-600 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 hover:from-indigo-500 hover:to-rose-500 text-white font-bold text-sm py-4 rounded-2xl shadow-xl shadow-indigo-600/20 transition-all cursor-pointer"
              >
                <Send size={16} />
                <span>إرسال التذكرة إلى النظام المركزي</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
