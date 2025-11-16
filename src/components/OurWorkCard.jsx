import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const OurWorkCard = ({ work, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      ref={divRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-2xl border border-[#38b6ff40]
      shadow-[0_0_20px_#00043320] hover:shadow-[0_0_35px_#38b6ff80]
      transition-all duration-500 group bg-white/5 dark:bg-[#000433]/80 backdrop-blur-md cursor-pointer"
    >
      {/* 🔵 Hover Glow */}
      <div
        className={`pointer-events-none blur-3xl rounded-full 
        bg-gradient-to-r from-[#38b6ff] via-[#1a4aff] to-[#000433] 
        w-[250px] h-[250px] absolute z-0 transition-opacity duration-500 mix-blend-screen 
        ${visible ? "opacity-60" : "opacity-0"}`}
        style={{ top: position.y - 125, left: position.x - 125 }}
      />

      {/* 🌟 Content */}
      <div className="relative z-10 flex flex-col gap-4 p-4 sm:p-6">
        <img
          src={work.image}
          alt={work.title}
          className="w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <h3 className="mt-3 text-lg font-bold text-[#38b6ff]">{work.title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {work.description}
        </p>
      </div>
    </motion.div>
  );
};

export default OurWorkCard;
