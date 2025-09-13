import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiShoppingCart, FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // محاسبه جمع کل قیمت
  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.hazine * item.quantity, 0)
      .toLocaleString("fa-IR");
  };

  return (
    <section className="min-h-screen bg-amber-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 flex items-center justify-center gap-2">
            <FiShoppingCart size={28} />
            سبد خرید شما
          </h1>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div
            className="text-center bg-white p-8 rounded-xl shadow-md max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-600 mb-4">سبد خرید شما خالی است!</p>
            <Link to="/">
              <button className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition duration-300 shadow-md">
                بازگشت به منوی غذا
              </button>
            </Link>
          </motion.div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* تصویر */}
                  <div className="overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* جزئیات */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <p className="text-lg font-semibold text-amber-700 mb-4">
                      {item.hazine.toLocaleString("fa-IR")} × {item.quantity} ={" "}
                      {(item.hazine * item.quantity).toLocaleString("fa-IR")}{" "}
                      تومان
                    </p>

                    {/* کنترل‌ها */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="bg-amber-200 text-amber-900 p-2 rounded-full hover:bg-amber-300 transition"
                          disabled={item.quantity <= 1}
                        >
                          <FiMinus size={16} />
                        </button>
                        <span className="text-lg font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="bg-amber-200 text-amber-900 p-2 rounded-full hover:bg-amber-300 transition"
                          disabled={item.quantity >= 10}
                        >
                          <FiPlus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-1 text-red-600 hover:text-red-700 transition"
                      >
                        <FiTrash2 size={18} />
                        حذف
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* جمع کل و دکمه نهایی */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-amber-900 mb-4">
                جمع کل: {calculateTotal()} تومان
              </h3>
              <Link to="/order">
                <button className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition duration-300 shadow-md w-full">
                  نهایی کردن سفارش
                </button>
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
