import React, { useRef } from "react";
import Draggable from "react-draggable";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import kababLoghmeh from "../assets/Hero-Img/kabab-loghmeh.webp";
import coca from "../assets/Hero-Img/coca-cola-botle-red.webp";
import dizi from "../assets/Hero-Img/dizi.webp";
import tomato from "../assets/Hero-Img/tomato.webp";
import dogh from "../assets/Hero-Img/dogh.webp";

function Hero() {
  const images = [kababLoghmeh, coca, dizi, tomato, dogh];
  const nodeRefs = useRef(images.map(() => React.createRef()));

  // مختصات شروع دایره‌ای
  const radiusDesktop = 200;
  const radiusMobile = 120;
  const centerDesktop = { x: 250, y: 250 };
  const centerMobile = { x: 160, y: 160 };

  const startPositions = images.map((_, i) => {
    const angle = (2 * Math.PI * i) / images.length;
    // بر اساس عرض صفحه مقدار رو انتخاب کن
    const isMobile = window.innerWidth < 768;
    const r = isMobile ? radiusMobile : radiusDesktop;
    const c = isMobile ? centerMobile : centerDesktop;
    return {
      top: c.y + r * Math.sin(angle),
      left: c.x + r * Math.cos(angle),
    };
  });

  return (
    <section className="min-h-[600px] bg-gradient-to-br from-amber-400 to-amber-600 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 md:gap-8">
        {/* متن */}
        <motion.div
          className="flex flex-col justify-center items-start text-white"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            خوش آمدید به رستوران ما
          </h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            تجربه‌ای بی‌نظیر از طعم‌های لذیذ و محیطی گرم و صمیمی. منوی متنوع
            ما را کاوش کنید!
          </p>
          <motion.button
            className="bg-amber-700 text-white px-6 py-3 rounded-full transition duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            مشاهده منوی غذا
          </motion.button>
        </motion.div>

        {/* تصاویر دایره‌ای */}
        <div className="relative w-full h-[520px] md:h-[640px] overflow-hidden select-none">
          {images.map((src, index) => (
            <Draggable
              key={index}
              nodeRef={nodeRefs.current[index]}
              bounds="parent"
            >
              <div
                ref={nodeRefs.current[index]}
                style={{
                  position: "absolute",
                  top: startPositions[index].top,
                  left: startPositions[index].left,
                  touchAction: "none",
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <motion.img
                  src={src}
                  alt={`food-${index}`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 * index,
                    type: "spring",
                  }}
                  className="w-[90px] md:w-[200px] h-auto object-contain"
                  draggable={false}
                />
              </div>
            </Draggable>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

