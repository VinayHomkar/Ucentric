import React, { useState, useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";

// ✅ Animated Accent Divider
const AccentDivider = ({ align = "center" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: isVisible ? "100px" : "0px",
        height: "4px",
        backgroundColor: "#38b6ff",
        margin: align === "center" ? "20px auto 30px auto" : "20px 0 30px 0",
        transition: "width 0.6s ease-out",
        borderRadius: "2px",
      }}
    ></div>
  );
};

const Services = () => {
  const servicesData = [
    {
      icon: "💻",
      title: "Website Design",
      description:
        "Top-quality web design with user-friendly interfaces and brand-focused aesthetics.",
      link: "/Websitedesign",
    },
    {
      icon: "🛒",
      title: "E-Commerce Development",
      description:
        "Data-driven strategies to handle diverse eCommerce challenges.",
      link: "/Ecommerce",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Engaging mobile apps using the latest technologies for seamless UX.",
      link: "/Mobileapp",
    },
    {
      icon: "📊",
      title: "Digital Marketing",
      description:
        "Effective digital strategies to boost your brand visibility and engagement.",
      link: "/Digitalmarketing",
    },
    {
      icon: "🔍",
      title: "Portfolio",
      description:
        "White-hat SEO techniques to rank higher and increase online visibility.",
      link: "/Portfolio",
    },
    {
      icon: "🎓",
      title: "College/Student Projects",
      description:
        "Guidance and support for students and colleges on practical technical projects.",
      link: "/StudentProjects",
    },
  ];

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="
        relative flex flex-col items-center gap-7 
        px-4 sm:px-12 lg:px-24 xl:px-40 
        pt-30 text-gray-700 dark:text-white
        overflow-hidden
      "
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <h2
        className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center
        bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient
      "
      >
        How can we help?
      </h2>

      <AccentDivider />

      <p className="text-center text-gray-400 max-w-xl mb-8">
        From strategy to execution, we craft digital solutions that move your
        business forward.
      </p>

      <div className="flex flex-col md:grid grid-cols-2 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </Motion.div>
  );
};

export default Services;
