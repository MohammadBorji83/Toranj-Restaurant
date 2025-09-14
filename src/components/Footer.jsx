import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* لوگو و کپی‌رایت */}
          <div className="text-center md:text-left">
            <motion.h3
              className="text-2xl font-bold mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              رستوران ترنج
            </motion.h3>
            <p className="text-sm">
              © {new Date().getFullYear()} رستوران ترنج | تمام حقوق محفوظ است
            </p>
          </div>

          {/* لینک شبکه‌های اجتماعی */}
          <motion.div
            className="flex gap-6 text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTelegram />
            </motion.a>
            <motion.a
              href="https://wa.me/989123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* لینک‌های اضافی */}
        <motion.div
          className="mt-8 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex justify-center gap-4">
            <a href="/about" className="hover:text-amber-300 transition">
              درباره ما
            </a>
            <a href="/contact" className="hover:text-amber-300 transition">
              تماس با ما
            </a>
            <a href="/privacy" className="hover:text-amber-300 transition">
              حریم خصوصی
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;