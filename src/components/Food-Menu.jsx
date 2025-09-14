import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
import { useCart } from "../context/CartContext";

// غذاها
import kabab from "../assets/Menu/Kabab-Soltani.jpg";
import joje from "../assets/Menu/joje.jpg";
import dizi from "../assets/Menu/dizi.jpg";
import barg from "../assets/Menu/barg.jpg";
import baghal from "../assets/Menu/baghal-mahiche.jpg";
import fesenjon from "../assets/Menu/fesenjon.jpg";
import ghorme from "../assets/Menu/Ghorme.jpg";
import kababKob from "../assets/Menu/Kabab-Kob.jpg";
import zer from "../assets/Menu/zer-morgh.jpg";
import jojeS from "../assets/Menu/joje-sto.jpg";
import mahi from "../assets/Menu/mahi.jpg";

// نوشیدنی‌ها
import coca from "../assets/Menu/coca.jpg";
import cocache from "../assets/Menu/cocache.jpg";
import cocaghot from "../assets/Menu/cocaghot.jpg";
import cocazero from "../assets/Menu/cocazero.jpg";
import doghab from "../assets/Menu/doghab.jpg";
import sprit from "../assets/Menu/sprit.jpg";
import fantakh from "../assets/Menu/fantakh.jpg";
import fanta from "../assets/Menu/fanta.jpg";

// پیش‌غذا
import saladp from "../assets/Menu/salad.jpg";
import soup from "../assets/Menu/soup.jpg";

function Foods() {
const categories = [
  { name: "غذا", id: "main" },
  { name: "پیش‌غذا", id: "appetizer" },
  { name: "نوشیدنی", id: "drink" },
];

const dishes = {
  main: [
    {
      id: 1,
      name: "کباب سلطانی",
      description: "کباب سلطانی با گوشت تازه و برنج ایرانی.",
      price: "۳۵۰,۰۰۰ تومان",
      hazine: 350000,
      image: kabab,
    },
    {
      id: 2,
      name: "جوجه کباب",
      description: "جوجه زعفرانی با طعم بی‌نظیر.",
      price: "۲۸۰,۰۰۰ تومان",
      hazine: 280000,
      image: joje,
    },
    {
      id: 3,
      name: "دیزی سنگی",
      description: "دیزی سنتی با نخود و گوشت تازه.",
      price: "۲۰۰,۰۰۰ تومان",
      hazine: 200000,
      image: dizi,
    },
    {
      id: 4,
      name: "کباب برگ",
      description: "کباب برگ مخصوص با گوشت تازه گوساله.",
      price: "۳۲۰,۰۰۰ تومان",
      hazine: 320000,
      image: barg,
    },
    {
      id: 5,
      name: "باقلا پلو با ماهیچه",
      description: "باقلا پلو معطر با ماهیچه نرم و خوشمزه.",
      price: "۴۵۰,۰۰۰ تومان",
      hazine: 450000,
      image: baghal,
    },
    {
      id: 6,
      name: "فسنجان",
      description: "خورش فسنجان با گردوی تازه و رب انار.",
      price: "۳۰۰,۰۰۰ تومان",
      hazine: 300000,
      image: fesenjon,
    },
    {
      id: 7,
      name: "قرمه سبزی",
      description: "خورش قرمه سبزی با لوبیا قرمز و گوشت گوسفندی.",
      price: "۲۷۰,۰۰۰ تومان",
      hazine: 270000,
      image: ghorme,
    },
    {
      id: 8,
      name: "کباب کوبیده",
      description: "دو سیخ کوبیده با برنج زعفرانی.",
      price: "۲۵۰,۰۰۰ تومان",
      hazine: 250000,
      image: kababKob,
    },
    {
      id: 9,
      name: "زرشک پلو با مرغ",
      description: "مرغ سرخ‌شده با زرشک پلو معطر.",
      price: "۲۲۰,۰۰۰ تومان",
      hazine: 220000,
      image: zer,
    },
    {
      id: 10,
      name: "جوجه استانبولی",
      description: "جوجه سرخ‌شده به سبک استانبولی.",
      price: "۳۰۰,۰۰۰ تومان",
      hazine: 300000,
      image: jojeS,
    },
    {
      id: 11,
      name: "ماهی سرخ‌شده",
      description: "ماهی تازه جنوب با ادویه مخصوص.",
      price: "۳۸۰,۰۰۰ تومان",
      hazine: 380000,
      image: mahi,
    },
  ],
  appetizer: [
    {
      id: 12,
      name: "سالاد فصل",
      description: "سالاد تازه با سبزیجات ارگانیک.",
      price: "۸۰,۰۰۰ تومان",
      hazine: 80000,
      image: saladp,
    },
    {
      id: 13,
      name: "سوپ روز",
      description: "سوپ روزانه با مواد طبیعی و تازه.",
      price: "۶۰,۰۰۰ تومان",
      hazine: 60000,
      image: soup,
    },
  ],
  drink: [
    {
      id: 14,
      name: "کوکا کولا",
      description: "نوشابه کلاسیک خنک.",
      price: "۲۰,۰۰۰ تومان",
      hazine: 20000,
      image: coca,
    },
    {
      id: 15,
      name: "دوغ محلی",
      description: "دوغ طبیعی با نعناع تازه.",
      price: "۱۵,۰۰۰ تومان",
      hazine: 15000,
      image: doghab,
    },
    {
      id: 16,
      name: "اسپرایت",
      description: "نوشابه لیمویی گازدار.",
      price: "۲۰,۰۰۰ تومان",
      hazine: 20000,
      image: sprit,
    },
    {
      id: 17,
      name: "فانتا پرتقالی",
      description: "نوشابه پرتقالی شیرین و خنک.",
      price: "۲۰,۰۰۰ تومان",
      hazine: 20000,
      image: fanta,
    },
    {
      id: 18,
      name: "کوکاکولا کوچک",
      description: "نوشابه کوکا شیرین و خنک.",
      price: "۲۰,۰۰۰ تومان",
      hazine: 20000,
      image: cocache,
    },
    {
      id: 19,
      name: "کوکاکولا قوطی",
      description: "نوشابه کوکا شیرین و خنک.",
      price: "۲۰,۰۰۰ تومان",
      hazine: 20000,
      image: cocaghot,
    },
    {
      id: 20,
      name: "کوکاکولا خانواده زیرو",
      description: "نوشابه کوکا شیرین و خنک.",
      price: "۲۰,۰۰۰ تومان",
      hazine: 20000,
      image: cocazero,
    },
    {
      id: 21,
      name: "فانتا خانواده",
      description: "نوشابه فانتا شیرین و خنک.",
      price: "۲۰,۰۰۰ تومان",
      hazine: 20000,
      image: fantakh,
    },
  ],
};


  const [selectedCategory, setSelectedCategory] = useState("main");
  const [quantities, setQuantities] = useState(
    Object.values(dishes).flat().map(() => 1)
  );

  const handleQuantityChange = (dishId, delta) => {
    const dishIndex = Object.values(dishes)
      .flat()
      .findIndex((d) => d.id === dishId);
    setQuantities((prev) =>
      prev.map((qty, i) =>
        i === dishIndex ? Math.max(1, Math.min(10, qty + delta)) : qty
      )
    );
  };

  const { addToCart } = useCart();

  return (
    <section id="Foods" className="py-14 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* هدر */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900">
            منوی غذا
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            از بین غذاها، پیش‌غذاها و نوشیدنی‌های ما انتخاب کنید 🍴
          </p>
        </motion.div>

        {/* دسته‌بندی */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-semibold transition duration-300 shadow-sm ${
                selectedCategory === cat.id
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-amber-200 text-amber-900 hover:bg-amber-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {dishes[selectedCategory].map((dish, catIndex) => {
            const globalIndex = Object.values(dishes)
              .flat()
              .findIndex((d) => d.id === dish.id);
            return (
              <motion.div
                key={dish.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 sm:h-52 md:h-60 object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow">
                    {dish.price}
                  </div>
                </div>
                <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">
                      {dish.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1 md:gap-2">
                      <button
                        onClick={() => handleQuantityChange(dish.id, -1)}
                        className="bg-amber-200 text-amber-900 p-1.5 md:p-2 rounded-full hover:bg-amber-300 transition disabled:opacity-50"
                        disabled={quantities[globalIndex] <= 1}
                      >
                        <FiMinus size={14} />
                      </button>
                      <span className="text-base md:text-lg font-semibold px-2">
                        {quantities[globalIndex]}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(dish.id, 1)}
                        className="bg-amber-200 text-amber-900 p-1.5 md:p-2 rounded-full hover:bg-amber-300 transition disabled:opacity-50"
                        disabled={quantities[globalIndex] >= 10}
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>
                    <motion.button
                      onClick={() => addToCart(dish, quantities[globalIndex])}
                      className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white bg-gradient-to-r from-amber-600 to-amber-700 shadow-md hover:from-amber-700 hover:to-amber-800"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiShoppingCart size={16} />
                      <span className="text-sm md:text-base">افزودن</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Foods;