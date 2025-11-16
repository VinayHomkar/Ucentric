import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import OurWorkCard from "./OurWorkCard";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile app marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      description: "We help you execute your plan and deliver results.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      description:
        "We help you create a marketing strategy that drives results.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title={
          <span
            className="
     text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-12 font-semibold text-center bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient
    "
          >
            Our latest work
          </span>
        }
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <OurWorkCard key={index} work={work} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
