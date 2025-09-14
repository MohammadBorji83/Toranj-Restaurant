import React from "react";
import { useCart } from "../context/CartContext";

function Order() {
  const { cart, clearCart } = useCart();

  // جمع کل
  const total = cart
    .reduce((acc, item) => acc + item.hazine * item.quantity, 0)
    .toLocaleString("fa-IR");

  const handleConfirm = () => {
    // خالی کردن سبد خرید
    clearCart("پاک شد");
  };

  return (
    <section className="min-h-screen bg-amber-50 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-8 text-center">
          فاکتور سفارش
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            هیچ سفارشی ثبت نشده است.
          </p>
        ) : (
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg overflow-x-auto">
            {/* جدول برای دسکتاپ */}
            <table className="hidden sm:table w-full text-right border-collapse">
              <thead>
                <tr className="border-b text-amber-900 bg-amber-50">
                  <th className="p-3">غذا</th>
                  <th className="p-3">تعداد</th>
                  <th className="p-3">قیمت واحد</th>
                  <th className="p-3">قیمت کل</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.quantity}</td>
                    <td className="p-3">{item.hazine.toLocaleString("fa-IR")} تومان</td>
                    <td className="p-3">
                      {(item.hazine * item.quantity).toLocaleString("fa-IR")} تومان
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* کارت‌ها برای موبایل */}
            <div className="sm:hidden space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4 shadow-sm bg-amber-50"
                >
                  <p className="font-bold text-amber-900">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    تعداد: <span className="font-semibold">{item.quantity}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    قیمت واحد:{" "}
                    <span className="font-semibold">
                      {item.hazine.toLocaleString("fa-IR")} تومان
                    </span>
                  </p>
                  <p className="text-sm text-amber-700 font-bold">
                    قیمت کل: {(item.hazine * item.quantity).toLocaleString("fa-IR")} تومان
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-lg sm:text-xl font-bold text-amber-900 text-center">
              جمع کل: {total} تومان
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={handleConfirm}
                className="bg-green-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-green-700 transition duration-300 shadow-md"
              >
                تایید و پرداخت
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Order;