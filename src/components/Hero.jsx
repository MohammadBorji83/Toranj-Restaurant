import React, { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import kababLoghmeh from "../assets/Hero-Img/kabab-loghmeh.webp";
import coca from "../assets/Hero-Img/coca-cola-botle-red.webp";
import dizi from "../assets/Hero-Img/dizi.webp";
import tomato from "../assets/Hero-Img/tomato.webp";
import dogh from "../assets/Hero-Img/dogh.webp";
import salad from "../assets/Hero-Img/salad.webp";


function Hero() {
  const images = [kababLoghmeh, coca, dizi, tomato, dogh,salad];
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // گرفتن ابعاد کانتینر برای چیدمان دایره‌ای پویا
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // مختصات شروع دایره‌ای
  const radiusDesktop = 180;
  const radiusMobile = 100;
  const isMobile = window.innerWidth < 768;
  const radius = isMobile ? radiusMobile : radiusDesktop;
  const center = {
    x: containerSize.width / 2,
    y: containerSize.height / 2,
  };

  const startPositions = images.map((_, i) => {
    const angle = (2 * Math.PI * i) / images.length;
    return {
      top: center.y + radius * Math.sin(angle) - 40,
      left: center.x + radius * Math.cos(angle) - 40,
    };
  });

  return (
    <section className="min-h-[600px] bg-gradient-to-br from-amber-400 to-amber-600 py-8 md:py-12">
      <div className="w-full mx-2 md:container md:mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 md:gap-8">
        {/* متن */}
        <motion.div
          className="flex flex-col justify-center items-start text-white"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            رستوران ترنج
          </h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            تجربه‌ای بی‌نظیر از طعم‌های لذیذ و محیطی گرم و صمیمی. منوی متنوع مناسب با فرهنگ ایرانی!
          </p>
          <motion.button
            className="bg-amber-700 text-white px-6 py-3 rounded-full transition duration-200"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            مشاهده منوی غذا
          </motion.button>
        </motion.div>

        {/* تصاویر دایره‌ای ثابت */}
        <div
          ref={containerRef}
          className="relative w-full min-h-[400px] md:min-h-[500px] select-none"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                top: startPositions[index].top,
                left: startPositions[index].left,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img
                src={src}
                alt={`food-${index}`}
                initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 * index,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="w-[60px] md:w-[120px] h-auto object-contain rounded-lg shadow-md"
                onError={() => console.error(`Failed to load image: ${src}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;