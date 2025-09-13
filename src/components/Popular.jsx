import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
import kabab from "../assets/Menu/Kabab-Soltani.jpg";
import joje from "../assets/Menu/joje.jpg";
import dizi from "../assets/Menu/dizi.jpg";

function Popular() {
  const dishes = [
    {
      id: 1,
      name: "کباب کوبیده",
      description: "طعم اصیل ایرانی با بهترین گوشت تازه.",
      price: "۲۵۰,۰۰۰ تومان",
      image: kabab,
    },
    {
      id: 2,
      name: "جوجه کباب",
      description: "مرغ تازه زعفرانی با طعمی به‌یادماندنی.",
      price: "۳۲۰,۰۰۰ تومان",
      image: joje,
    },
    {
      id: 3,
      name: "دیزی سنگی",
      description: "غذای سنتی با گوشت تازه و نخود عالی.",
      price: "۱۵۰,۰۰۰ تومان",
      image: dizi,
    },
  ];

  const [quantities, setQuantities] = useState(dishes.map(() => 1));

  const handleQuantityChange = (index, delta) => {
    setQuantities((prev) =>
      prev.map((qty, i) =>
        i === index ? Math.max(1, Math.min(10, qty + delta)) : qty
      )
    );
  };

  const addToCart = (dish, quantity) => {
    console.log(`اضافه شد به سبد خرید: ${dish.name}، تعداد: ${quantity}`);
  };

  return (
    <section className="py-14 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* هدر */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900">
            محبوب‌ترین غذاها
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            بهترین انتخاب‌های مشتریان ما را امتحان کنید!
          </p>
        </motion.div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* تصویر */}
              <div className="overflow-hidden">
                <motion.img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* جزئیات */}
              <div className="p-6 flex flex-col justify-between h-[280px]">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <p className="text-lg font-semibold text-amber-700">
                    {dish.price}
                  </p>
                </div>

                {/* کنترل‌ها */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      className="bg-amber-200 text-amber-900 p-2 rounded-full hover:bg-amber-300 transition"
                      disabled={quantities[index] <= 1}
                    >
                      <FiMinus size={16} />
                    </button>
                    <span className="text-lg font-semibold">
                      {quantities[index]}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="bg-amber-200 text-amber-900 p-2 rounded-full hover:bg-amber-300 transition"
                      disabled={quantities[index] >= 10}
                    >
                      <FiPlus size={16} />
                    </button>
                  </div>

                  <motion.button
                    onClick={() => addToCart(dish, quantities[index])}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-amber-600 to-amber-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiShoppingCart size={18} />
                    افزودن
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular;
