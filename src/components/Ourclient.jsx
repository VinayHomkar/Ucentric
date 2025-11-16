import React, { useState, useEffect } from "react";
import { company_logos } from '../assets/assets';
// ★★★ FIX: Corrected import from 'motion/react' to 'framer-motion' ★★★
import { motion, useAnimation } from 'framer-motion';

const Ourclient = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  React.useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ['0%', '-50%'],
        transition: { repeat: Infinity, duration: 20, ease: 'linear' },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      // ★★★ FIX: Smoother responsive padding ★★★
      className="flex flex-col items-center px-6 sm:px-10 lg:px-16 gap-10 text-gray-700 dark:text-white/80"
    >
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        // ★★★ FIX: Changed mt-15 to mt-16 and made text responsive ★★★
        className="font-semibold text-[#000433] dark:text-white text-center text-lg sm:text-xl mt-16"
      >
        Trusted by Leading Companies
      </motion.h3>

      {/* Ribbon container */}
      <div className="overflow-hidden w-full flex justify-center">
        <motion.div
          // ★★★ FIX: Responsive gap for logos ★★★
          className="inline-flex gap-8 sm:gap-12 lg:gap-16 py-2"
          animate={controls}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...company_logos, ...company_logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt=""
              // ★★★ FIX: Increased logo size significantly ★★★
              className="max-h-8 sm:max-h-12 dark:drop-shadow-xl"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Ourclient;