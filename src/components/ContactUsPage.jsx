import React, { useState, useRef, useEffect } from "react";
import ContactDetails from "./ContactDetails";
import EnquiryForm from "./EnquiryForm";
import { motion as Motion } from "framer-motion";

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
        margin: align === "center" ? "20px auto 40px auto" : "20px 0 40px 0",
        transition: "width 0.6s ease-out",
        borderRadius: "2px",
      }}
    ></div>
  );
};

const ContactUsPage = () => {
  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      // ★★★ FIX 1: Adjusted padding for better responsiveness ★★★
      className="relative pt-20 pb-0 px-6 sm:px-10 lg:px-16 bg-black mb-10"
    >
      {/* --- Background Element for Glass Effect --- */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      {/* --- Content Overlay --- */}
      <div className="relative z-10">
        <Motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          // ★★★ FIX 2: Reduced the aggressive font sizing ★★★
          className="text-4xl sm:text-5xl lg:text-6xl mb-12 font-semibold text-center bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient"
        >
          Let’s get in touch
        </Motion.h1>

        {/* ✅ ADDED: Accent Divider */}
        <AccentDivider />

        {/* Main Two-Column Layout (This layout is already good!) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side: Contact Details */}
          {/* (This component must also be responsive) */}
          <ContactDetails />

          {/* Right Side: Enquiry Form */}
          {/* (This component must also be responsive) */}
          <EnquiryForm />
        </div>
      </div>
    </Motion.div>
  );
};

export default ContactUsPage;
