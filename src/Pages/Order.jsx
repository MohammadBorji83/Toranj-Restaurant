import React from "react";
import { useCart } from "../context/CartContext";

function Order() {
  const { cart } = useCart();

  // جمع کل
  const total = cart
    .reduce((acc, item) => acc + item.hazine * item.quantity, 0)
    .toLocaleString("fa-IR");

  return (
    <section className="min-h-screen bg-amber-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-amber-900 mb-8 text-center">
          فاکتور سفارش
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            هیچ سفارشی ثبت نشده است.
          </p>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b text-amber-900">
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
                    <td className="p-3">
                      {item.hazine.toLocaleString("fa-IR")} تومان
                    </td>
                    <td className="p-3">
                      {(item.hazine * item.quantity).toLocaleString("fa-IR")}{" "}
                      تومان
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 text-xl font-bold text-amber-900 text-center">
              جمع کل: {total} تومان
            </div>

            <div className="mt-6 text-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300 shadow-md">
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

