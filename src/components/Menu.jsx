import React, { useState } from "react";
import { FiMenu, FiX, FiHome, FiCoffee, FiInfo, FiMapPin, FiShoppingCart } from "react-icons/fi"; 
import { useNavigate } from "react-router-dom"; // برای لینک‌دهی
import logo from "../assets/Logo.png"; 

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // برای ناوبری به صفحات دیگر

  // تابع برای رفتن به صفحه آدرس
  const handleAddressClick = () => {
    navigate("/CTA"); // مسیر به صفحه آدرس
    setOpen(false); // بستن منو موبایل
  };

  return (
    <>
      {/* Navbar اصلی - ثابت در بالا */}
      <nav className="bg-amber-900/50 border-b-4 border-amber-300 sticky top-0 z-50 shadow-lg backdrop-blur-md">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          
          {/* لوگو - سمت چپ */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-auto rounded-full shadow-md" /> {/* کمی استایل برای خوشگلی لوگو */}
          </div>

          {/* منوی دسکتاپ - گزینه‌های منو در وسط */}
          <div className="hidden md:flex items-center justify-center flex-grow gap-8 font-bold text-lg text-amber-100">
            <a href="/" className="flex items-center gap-2 hover:text-amber-400 transition duration-300">
              <FiHome size={20} />
              خانه
            </a>
            <a href="/Foods" className="flex items-center gap-2 hover:text-amber-400 transition duration-300">
              <FiCoffee size={20} />
              منوی غذا
            </a>
            <a href="/QaA" className="flex items-center gap-2 hover:text-amber-400 transition duration-300">
              <FiInfo size={20} />
              درباره ما
            </a>
            <button onClick={handleAddressClick} className="flex items-center gap-2 hover:text-amber-400 transition duration-300 cursor-pointer">
              <FiMapPin size={20} />
              آدرس
            </button>
          </div>

          {/* دکمه سبد خرید - سمت راست */}
          <div className="hidden md:flex items-center">
            <button onClick={() => navigate("/cart")} className="flex items-center gap-2 bg-amber-600 text-white px-5 py-2.5 rounded-full hover:bg-amber-700 transition duration-300 shadow-md">
              <FiShoppingCart size={20} />
              سبد خرید
            </button>
          </div>

          {/* دکمه موبایل - سمت راست */}
          <div className="md:hidden">
            <button onClick={() => setOpen(true)} className="text-amber-100">
              <FiMenu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* منوی موبایل (Sidebar تمام صفحه) - از سمت راست باز می‌شود و تمام عرض و طول صفحه را می‌گیرد */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-amber-900/95 text-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex justify-between items-center p-6 border-b border-amber-700">
          <h2 className="text-2xl font-bold text-amber-300">منو</h2>
          <button onClick={() => setOpen(false)} className="text-amber-300">
            <FiX size={32} />
          </button>
        </div>
        <div className="flex flex-col gap-8 p-8 text-xl font-bold items-start">
          <button onClick={() => { navigate("/cart"); setOpen(false); }} className="flex items-center gap-3 bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition duration-300 w-full justify-start shadow-md">
            <FiShoppingCart size={24} />
            سبد خرید
          </button>
          <a href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-amber-400 transition duration-300 w-full justify-start">
            <FiHome size={24} />
            خانه
          </a>
          <a href="/Foods" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-amber-400 transition duration-300 w-full justify-start">
            <FiCoffee size={24} />
            منوی غذا
          </a>
          <a href="/QaA" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-amber-400 transition duration-300 w-full justify-start">
            <FiInfo size={24} />
            درباره ما
          </a>
          <button onClick={handleAddressClick} className="flex items-center gap-3 hover:text-amber-400 transition duration-300 w-full justify-start">
            <FiMapPin size={24} />
            آدرس
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;