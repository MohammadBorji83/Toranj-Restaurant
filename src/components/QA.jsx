import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "علی رضایی",
    text: "غذاها فوق‌العاده بودن، مخصوصاً کباب! حس یه رستوران سنتی واقعی رو داشت.",
  },
  {
    id: 2,
    name: "مریم احمدی",
    text: "دیزی ترنج بهترین دیزی‌ای بود که خوردم. محیط عالی و پرسنل بسیار خوش‌برخورد.",
  },
  {
    id: 3,
    name: "حسین محمدی",
    text: "هم سفارش آنلاین راحت بود هم غذا سریع رسید. پیشنهاد می‌کنم امتحان کنید!",
  },
];

function QaA() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 bg-amber-50">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-900">
          نظرات مشتریان
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          ببینید مشتریان ما درباره رستوران ترنج چه می‌گویند
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 border border-amber-100 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <p className="text-gray-700 text-base leading-relaxed">
              “{item.text}”
            </p>
            <div className="mt-4 text-amber-800 font-semibold text-lg">
              {item.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default QaA;
