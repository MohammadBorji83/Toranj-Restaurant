import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="bg-amber-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* اطلاعات تماس */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>📞</span> تماس با ما
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            خوشحال می‌شویم با ما در ارتباط باشید. از طریق شماره تلفن، ایمیل یا شبکه‌های اجتماعی با ما تماس بگیرید.
          </p>
          <ul className="space-y-3 text-gray-700">
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="font-semibold text-amber-800">آدرس:</span> تهران، خیابان نمونه، پلاک ۱۲۳
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="font-semibold text-amber-800">تلفن:</span>{" "}
              <a href="tel:02112345678" className="hover:text-amber-600 transition">021-12345678</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="font-semibold text-amber-800">ایمیل:</span>{" "}
              <a href="mailto:info@restaurant.com" className="hover:text-amber-600 transition">info@restaurant.com</a>
            </motion.li>
          </ul>
        </motion.div>

        {/* نقشه گوگل */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.556864255088!2d51.389!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzIxLjEiTiA1McKwMjMnMjAuNCJF!5e0!3m2!1sen!2s!4v1610000000000!5m2!1sen!2s"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
