import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Truck,
  Headphones,
  Award,
  ArrowLeft,
  Star,
  Users,
  ShoppingBag,
  Compass,
  Zap,
  Flame,
  MessageCircleCode,
  Send,
  CheckCircle2,
  Lock,
  Globe,
  ChevronDown,
  Leaf,
  HelpCircle,
  RefreshCw,
} from "lucide-react";

export default function UniqueAboutUs() {
  const [feedback, setFeedback] = useState({
    name: "",
    type: "اقتراح",
    text: "",
  });
  const [sent, setSent] = useState(false);

  // قائمة التعليقات الحية (تم جعلها قابلة للتحديث عند إرسال تعليق جديد)
  const [comments, setComments] = useState([
    {
      name: "سلطان العتيبي",
      type: "ثناء",
      text: "متجر احترافي جداً، وتجربة الشراء كانت سلسة وبدون أي تعقيد. شكراً لكم!",
      time: "منذ ساعة",
    },
    {
      name: "دلال الحربي",
      type: "اقتراح",
      text: "أتمنى إضافة المزيد من خيارات الدفع السريع في المستقبل القريب. بالتوفيق!",
      time: "منذ 3 ساعات",
    },
    {
      name: "ماجد المصري",
      type: "ثناء",
      text: "وصل الطلب في نفس الموعد تماماً وبنفس المواصفات المذكورة. أنصح بالتعامل معه وبقوة.",
      time: "منذ أمس",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (feedback.name && feedback.text) {
      // إضافة التعليق الجديد فوراً إلى قائمة الآراء الحية
      const newComment = {
        name: feedback.name,
        type: feedback.type,
        text: feedback.text,
        time: "الآن",
      };
      setComments([newComment, ...comments]);
      setSent(true);
    }
  };

  // حالة التحكم في الأسئلة الشائعة (فتح وغلق السؤال)
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "هل الشحن يشمل جميع المدن والمناطق؟",
      a: "نعم، نوفر خدمة الشحن والتوصيل السريع لجميع المدن والمحافظات، مع ضمان وصول الطلب بأعلى معايير الحماية والسلامة.",
      icon: <Truck size={18} className="text-indigo-400" />,
    },
    {
      q: "هل المنتجات أصلية وعليها ضمان حقيقي؟",
      a: "بالتأكيد! جميع منتجاتنا أصلية 100% ومخولة من كبرى الشركات العالمية، وتأتي مع ضمان ذهبي شامل للاستبدال أو الاسترجاع.",
      icon: <ShieldCheck size={18} className="text-emerald-400" />,
    },
    {
      q: "كيف يمكنني تتبع حالة طلبي بعد إتمامه؟",
      a: "بمجرد تأكيد طلبك، سنرسل لك رقم تتبع مباشر عبر الرسائل النصية أو البريد الإلكتروني لتتمكن من متابعة رحلة شحنتك لحظة بلحظة.",
      icon: <RefreshCw size={18} className="text-rose-400" />,
    },
  ];

  return (
    <div
      className="bg-[#030712] text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 selection:bg-rose-600 selection:text-white"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* ================= الترويسة الفنية غير التقليدية ================= */}
        <div className="relative border border-slate-800/80 bg-gradient-to-tr from-slate-900 via-[#0a0f1d] to-slate-900 rounded-[2.5rem] p-8 sm:p-14 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-gradient-to-br from-rose-600/20 to-indigo-600/0 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-black px-4 py-1.5 rounded-full">
                <Flame size={14} className="animate-bounce" />
                <span>نسخة تجريبية متطورة 2026</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
                نحن لا نبيع منتجات .. <br />
                <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                  نحن نصنع أسلوب حياة مختلفاً.
                </span>
              </h1>

              <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed">
                مفهوم جديد تماماً للتجارة الإلكترونية يدمج بين السرعة المطلقة،
                الأمان العالي، والتصميم الذي يخاطب حواسك. تعرف على الكواليس ومن
                نحن حقاً.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-2xl shadow-lg shadow-rose-600/20 transition-all"
                >
                  <span>دخول المتجر</span>
                  <ArrowLeft size={16} />
                </Link>
                <a
                  href="#feedback-box"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-bold text-xs sm:text-sm px-7 py-3.5 rounded-2xl transition-all"
                >
                  <span>أضف تقييمك</span>
                </a>
              </div>
            </div>

            {/* بطاقة عائمة تفاعلية داخل الترويسة */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950/80 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6 shadow-inner relative">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <span className="text-xs font-bold text-slate-400">
                    مؤشرات الأداء الحية
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-300">
                      معدل رضاء الزوار
                    </span>
                    <span className="text-xs font-black text-rose-400">
                      99.4%
                    </span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-rose-500 to-indigo-500 h-full w-[99.4%]"></div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-slate-300">
                      سرعة معالجة الطلبات
                    </span>
                    <span className="text-xs font-black text-indigo-400">
                      فورية (أقل من 24 ساعة)
                    </span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[95%]"></div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 text-center">
                  * يتم تحديث هذه البيانات تلقائياً من خوادم النظام الرئيسية.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= شبكة البنتو الغير تقليدية (Bento Grid) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-4 bg-slate-900 border border-indigo-500/30 p-8 rounded-[2.5rem] flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-indigo-500/80 transition-all shadow-2xl">
            <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="space-y-4 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Compass size={30} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-950 px-3.5 py-1.5 rounded-full inline-block">
                الفلسفة البصرية
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                جمال البساطة .. وعمق التفاصيل
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                نؤمن أن واجهة المستخدم يجب أن تكون لوحة فنية هادئة ومريحة، تمنحك
                شعوراً بالاستقرار والثقة منذ اللحظة الأولى لدخولك المتجر.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-indigo-400 font-bold">
              <span>تصفح مريح وخالٍ من التعقيد</span>
              <span>✦</span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-rose-500/30 p-8 rounded-[2.5rem] flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-rose-500/80 transition-all shadow-2xl">
              <div className="absolute top-0 left-0 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-rose-600/20 border border-rose-500/40 text-rose-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Zap size={26} />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  السرعة الخارقة والأداء الفوري
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  تم تصميم النظام بأحدث تقنيات البرمجة لضمان استجابة الصفحات
                  والتنقل بين المنتجات بدون أي تأخير يُذكر.
                </p>
              </div>
              <div className="bg-slate-950/80 border border-slate-800 px-4 py-2.5 rounded-2xl flex items-center justify-between text-xs text-slate-300 font-semibold">
                <span>سرعة الاستجابة</span>
                <span className="text-rose-400 font-black">
                  أقل من 0.2 ثانية ⚡
                </span>
              </div>
            </div>

            <div className="bg-slate-900 border border-emerald-500/30 p-8 rounded-[2.5rem] flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-emerald-500/80 transition-all shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Lock size={26} />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  الأمان والتشفير العالي
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  جميع بياناتك الشخصية ومعاملات الدفع خاضعة لأنظمة حماية مشددة
                  بالكامل تضمن سريتها التامة بنسبة 100%.
                </p>
              </div>
              <div className="bg-slate-950/80 border border-slate-800 px-4 py-2.5 rounded-2xl flex items-center justify-between text-xs text-slate-300 font-semibold">
                <span>مستوى الحماية</span>
                <span className="text-emerald-400 font-black">
                  مشفر بالكامل
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= قسم نموذج التعليقات وجدار الآراء الحية التفاعلي ================= */}

        <div className="bg-gradient-to-b from-slate-900 via-[#0a0f1d] to-slate-900 border border-slate-800 p-8 sm:p-14 rounded-[2.5rem] shadow-2xl space-y-10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* رأس القسم */}
          <div className="text-center space-y-3 max-w-xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[11px] font-black px-4 py-1.5 rounded-full">
              <HelpCircle size={14} />
              <span>مركز الاستفسارات السريعة</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              أسئلة جوهرية قد تهمك
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              إجابات سريعة وواضحة عن أبرز استفسارات عملائنا الدائمة بكل شفافية.
            </p>
          </div>

          {/* قائمة الأسئلة الفاخرة */}
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`border rounded-3xl overflow-hidden transition-all duration-300 shadow-xl ${
                    isOpen
                      ? "bg-slate-950 border-indigo-500/50 shadow-indigo-500/5"
                      : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-right font-bold text-xs sm:text-sm text-white transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-indigo-600/20 border border-indigo-500/40 text-indigo-400 scale-105"
                            : "bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-indigo-400"
                        }`}
                      >
                        {faq.icon}
                      </div>
                      <span
                        className={`transition-colors duration-200 ${isOpen ? "text-indigo-300" : "group-hover:text-white"}`}
                      >
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-indigo-500/10 text-indigo-400 rotate-180"
                          : "bg-slate-900 text-slate-400"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-7 pb-7 pt-2 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-900/80 mt-1 animate-in fade-in duration-300">
                      <div className="pt-2">{faq.a}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= قسم رؤيتنا نحو البيئة والمجتمع (Eco-Friendly & Social) ================= */}
        <div className="relative overflow-hidden bg-gradient-to-tr from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30 p-8 sm:p-14 rounded-[2.5rem] shadow-2xl space-y-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* رأس القسم */}
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[11px] font-black px-4 py-1.5 rounded-full">
              <Leaf size={14} />
              <span>مبادرة الاستدامة والمسؤولية المجتمعية</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              نلتزم بحماية بيئتنا .. <br />
              <span className="text-emerald-400">
                ونبني مجتمعاً أكثر استدامة
              </span>
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              في متجرنا، نؤمن أن التجارة الناجحة يجب ألا تكون على حساب كوكبنا.
              لذلك نتبنى معايير بيئية صارمة في كل خطوة نقدمها.
            </p>
          </div>

          {/* الشبكة الثلاثية (3 بطاقات متجاورة وفاخرة) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* البطاقة الأولى */}
            <div className="bg-slate-950/80 border border-emerald-500/20 hover:border-emerald-500/50 p-6 sm:p-7 rounded-3xl space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Leaf size={22} />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-black text-white">
                  تغليف 100% مستدام
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  نعتمد كلياً على مواد تعبئة وتغليف قابلة لإعادة التدوير لحماية
                  منتجاتك وصون الطبيعة.
                </p>
              </div>
            </div>

            {/* البطاقة الثانية */}
            <div className="bg-slate-950/80 border border-emerald-500/20 hover:border-emerald-500/50 p-6 sm:p-7 rounded-3xl space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap size={22} />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-black text-white">
                  سلاسل توريد خضراء
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  نتعاون حصرياً مع شركاء شحن يطبقون معايير خفض الانبعاثات
                  الكربونية في النقل.
                </p>
              </div>
            </div>

            {/* البطاقة الثالثة */}
            <div className="bg-slate-950/80 border border-emerald-500/20 hover:border-emerald-500/50 p-6 sm:p-7 rounded-3xl space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users size={22} />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-black text-white">
                  دعم المبادرات المجتمعية
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  نخصص نسبة ثابتة من أرباح السنوية لدعم البرامج التنموية
                  والخيرية المختلفة.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          {/* نموذج إرسال المشاركة */}
          <div
            id="feedback-box"
            className="lg:col-span-7 bg-slate-900 border border-slate-800 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl space-y-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-48 h-48 bg-rose-600/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
                <MessageCircleCode size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                صندوق رؤى العملاء (مباشر)
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                هذا النموذج مخصص لكتابة ملاحظاتك، أو حتى انتقادك البناء لتطوير
                المتجر.
              </p>
            </div>

            {sent ? (
              <div className="bg-emerald-950/50 border border-emerald-500/40 p-8 rounded-3xl text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-lg font-bold text-white">
                  وصلتنا رسالتك بكل وضوح!
                </h4>
                <p className="text-slate-300 text-xs">
                  شكراً لاهتمامك ومشاركتنا رأيك، وتم إضافتها لجدار الآراء الحية
                  أدناه.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  إرسال تعليق آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-300">
                      اسمك الكريم
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: محمد الأحمد..."
                      value={feedback.name}
                      onChange={(e) =>
                        setFeedback({ ...feedback, name: e.target.value })
                      }
                      className="w-full bg-[#030712] border border-slate-800 focus:border-rose-500 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-slate-600 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-300">
                      نوع المشاركة
                    </label>
                    <select
                      value={feedback.type}
                      onChange={(e) =>
                        setFeedback({ ...feedback, type: e.target.value })
                      }
                      className="w-full bg-[#030712] border border-slate-800 focus:border-rose-500 rounded-2xl px-4 py-3.5 text-xs text-white outline-none transition-all cursor-pointer"
                    >
                      <option value="اقتراح">مقترح لتطوير المتجر</option>
                      <option value="شكوى">ملحوظة أو شكوى</option>
                      <option value="ثناء">ثناء وتقييم عام</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300">
                    نص التعليق أو المقترح
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="اكتب تفاصيل رأيك هنا بكل حرية..."
                    value={feedback.text}
                    onChange={(e) =>
                      setFeedback({ ...feedback, text: e.target.value })
                    }
                    className="w-full bg-[#030712] border border-slate-800 focus:border-rose-500 rounded-2xl p-4 text-xs text-white placeholder-slate-600 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white font-bold text-sm py-4 rounded-2xl shadow-lg shadow-rose-600/20 transition-all cursor-pointer"
                >
                  <Send size={16} />
                  <span>إرسال المشاركة إلى الإدارة</span>
                </button>
              </form>
            )}
          </div>

          {/* جدار التعليقات الحية التفاعلي (يعرض التعليقات وتحديثاتها فورياً) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-2">
              <h4 className="text-white font-black text-base flex items-center gap-2">
                <span>💬 آراء العملاء الحية</span>
              </h4>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full animate-pulse">
                تحديث مباشر
              </span>
            </div>

            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {comments.map((comment, i) => (
                <div
                  key={i}
                  className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2 hover:border-slate-700 transition-all shadow-lg animate-in fade-in duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white">
                      {comment.name}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {comment.time}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    "{comment.text}"
                  </p>
                  <div className="pt-1">
                    <span className="text-[9px] font-bold text-rose-400 bg-rose-950/60 border border-rose-500/20 px-2.5 py-0.5 rounded-full">
                      {comment.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
