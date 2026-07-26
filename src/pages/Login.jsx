import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  User, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  KeyRound
} from "lucide-react";

export default function AuthPage() {
  const navigate = useNavigate();
  
  // حالات التنقل بين الشاشات: 'login', 'register', 'forgot'
  const [authMode, setAuthMode] = useState("login");

  // حالة إظهار/إخفاء كلمات المرور
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    forgotEmail: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === "login") {
      alert("تم تسجيل الدخول بنجاح! 🚀");
      navigate("/");
    } else if (authMode === "register") {
      alert("تم إنشاء الحساب بنجاح! 🎉");
      navigate("/");
    } else if (authMode === "forgot") {
      alert("تم إرسال تعليمات استعادة كلمة المرور إلى بريدك الإلكتروني! 📧");
      setAuthMode("login");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-slate-100 via-indigo-50/50 to-violet-50/40 text-slate-900 flex items-center justify-center p-4 sm:p-6 selection:bg-indigo-600 selection:text-white" dir="rtl">
      
      {/* خلفية جمالية متحركة */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-900/10 p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-violet-600" />

        {/* زر العودة للرئيسية */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
            <ArrowRight className="w-3.5 h-3.5" /> العودة للرئيسية
          </Link>
        </div>

        {/* رأس الصفحة الديناميكي */}
        <div className="text-center space-y-2 mb-8">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl mx-auto flex items-center justify-center shadow-inner mb-3">
            {authMode === "login" && <User className="w-6 h-6" />}
            {authMode === "register" && <Sparkles className="w-6 h-6" />}
            {authMode === "forgot" && <KeyRound className="w-6 h-6" />}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {authMode === "login" && "أهلاً بك مجدداً! "}
            {authMode === "register" && "انضم إلينا الآن "}
            {authMode === "forgot" && "استعادة كلمة المرور "}
          </h1>
          <p className="text-xs text-slate-500 font-semibold">
            {authMode === "login" && "قم بتسجيل الدخول لمتابعة طلباتك وتجربتك المميزة."}
            {authMode === "register" && "أنشئ حساباً جديداً واكتشف أحدث العروض والمنتجات."}
            {authMode === "forgot" && "أدخل بريدك الإلكتروني المسجل لنرسل لك رابط إعادة التعيين."}
          </p>
        </div>

        {/* أزرار التبديل بين تسجيل الدخول وإنشاء حساب */}
        {authMode !== "forgot" && (
          <div className="grid grid-cols-2 gap-2 bg-slate-100/80 p-1.5 rounded-2xl mb-6">
            <button
              type="button"
              onClick={() => setAuthMode("login")}
              className={`py-2.5 text-xs font-black rounded-xl transition-all cursor-pointer ${
                authMode === "login" 
                  ? "bg-white text-indigo-600 shadow-md shadow-slate-900/5" 
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              تسجيل الدخول
            </button>
            <button
              type="button"
              onClick={() => setAuthMode("register")}
              className={`py-2.5 text-xs font-black rounded-xl transition-all cursor-pointer ${
                authMode === "register" 
                  ? "bg-white text-indigo-600 shadow-md shadow-slate-900/5" 
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              إنشاء حساب
            </button>
          </div>
        )}

        {/* نموذج الإدخال (Form) */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* حقول نموذج إنشاء حساب */}
          {authMode === "register" && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span>الاسم الكامل</span>
                <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <User className="w-4 h-4" />
                </span>
                <input 
                  type="text" 
                  name="fullName" 
                  required 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  placeholder="أحمد محمد" 
                  className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl pr-10 pl-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" 
                />
              </div>
            </div>
          )}

          {/* حقل البريد الإلكتروني */}
          {authMode !== "forgot" && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span>البريد الإلكتروني</span>
                <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Mail className="w-4 h-4" />
                </span>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="name@example.com" 
                  className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl pr-10 pl-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" 
                />
              </div>
            </div>
          )}

          {/* حقل رقم الهاتف */}
          {authMode === "register" && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span>رقم الهاتف المحمول</span>
                <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Phone className="w-4 h-4" />
                </span>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="010XXXXXXXX" 
                  className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl pr-10 pl-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" 
                />
              </div>
            </div>
          )}

          {/* حقل كلمة المرور مع أيقونات القفل والعين */}
          {authMode !== "forgot" && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span>كلمة المرور</span>
                <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Lock className="w-4 h-4" />
                </span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  required 
                  value={formData.password} 
                  onChange={handleChange} 
                  placeholder="••••••••" 
                  className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl pr-10 pl-12 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  title={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {/* نموذج "نسيت كلمة المرور" */}
          {authMode === "forgot" && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span>البريد الإلكتروني المسجل</span>
                <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Mail className="w-4 h-4" />
                </span>
                <input 
                  type="email" 
                  name="forgotEmail" 
                  required 
                  value={formData.forgotEmail} 
                  onChange={handleChange} 
                  placeholder="name@example.com" 
                  className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl pr-10 pl-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" 
                />
              </div>
            </div>
          )}

          {/* خيارات تسجيل الدخول */}
          {authMode === "login" && (
            <div className="flex items-center justify-between text-[11px] pt-1">
              <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-600">
                <input type="checkbox" className="accent-indigo-600 w-3.5 h-3.5 rounded" />
                <span>تذكرني</span>
              </label>
              <button 
                type="button" 
                onClick={() => setAuthMode("forgot")} 
                className="text-indigo-600 font-bold hover:underline cursor-pointer bg-transparent border-none p-0 text-[11px]"
              >
                نسيت كلمة المرور؟
              </button>
            </div>
          )}

          {/* زر التأكيد الأساسي */}
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white font-black py-4 px-6 rounded-2xl shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm cursor-pointer mt-2 flex items-center justify-center gap-2"
          >
            <span>
              {authMode === "login" && "تسجيل الدخول"}
              {authMode === "register" && "إنشاء الحساب الآن"}
              {authMode === "forgot" && "إرسال رابط الاستعادة"}
            </span>
          </button>

          {/* زر العودة */}
          {authMode === "forgot" && (
            <button 
              type="button" 
              onClick={() => setAuthMode("login")} 
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-2xl transition-colors text-xs cursor-pointer mt-2"
            >
              العودة لتسجيل الدخول
            </button>
          )}
        </form>

        {/* الشروط والأحكام */}
        <div className="text-center pt-6 mt-6 border-t border-slate-100">
          <p className="text-[10px] text-slate-400 font-medium flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            بالاستمرار، فإنك توافق على <Link to="/terms" className="text-indigo-600 underline">شروط الاستخدام</Link> و<Link to="/privacy" className="text-indigo-600 underline">سياسة الخصوصية</Link>.
          </p>
        </div>

      </div>
    </main>
  );
}