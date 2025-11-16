import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; // 💡 Added for navigation
// import Footer from './Footer'; // Keep or remove depending on your project

// --- Color Palette ---
const ACCENT_BLUE = '#38b6ff';
const DEEP_BLUE = '#000433';
const BACKGROUND_BLACK = '#000000';
const TEXT_WHITE = '#FFFFFF';
const LIGHT_GREY = '#bbbbbb';
const ICON_SIZE = '3.5rem';

/* ------------------------------------------------------------------------
 CONTENT DATA (From original Websitedesign.js)
------------------------------------------------------------------------ */
const content = {
    hero: {
      headline: (
        // Note: The animate-gradient class is added globally via a <style> tag below
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-12 font-semibold text-center bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
          Beyond a Site: Your Digital Success Starts Here.
        </span>
      ),
      text: "Tired of invisible branding? In today's market, your website isn't just an address — it's your most powerful sales tool. We design, build, and optimize stunning, high-performance websites that don’t just look good — they drive results.",
      button: "Start Your Project",
      img: "https://cdn.prod.website-files.com/631492df65cd5321245d33e8/6646d5cc1748b90e393c02c5_pexels-photo-374074.webp",
    },
    whatIsAWebsite: {
      title: (
        <span className="text-4xl font-semibold bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
          What is a Website?
        </span>
      ),
      text: "A website is your digital identity. It's where customers meet you, learn about your services, and decide to engage with your brand. Whether for marketing, information, or sales, your website is your digital home.",
      purpose: [
        "**First Impression:** It provides immediate credibility and professionalism.",
        "**Information Hub:** It's the central source for your services, products, and contact information.",
        "**24/7 Communication:** It engages potential customers long after your office closes.",
      ],
    },
    whyNeed: {
      title: (
        <span className="text-4xl font-semibold bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
          Why Your Business Needs One
        </span>
      ),
      text: "In the digital-first era, businesses without websites lose credibility and customers. A website ensures your business stays open 24/7, connects with a global audience, and turns visitors into loyal customers.",
      advantages: [
        "**Instant Credibility & Trust:** A modern, functional site signals reliability and professionalism.",
        "**24/7 Global Marketing:** Your business is open around the clock, reaching audiences across the globe.",
        "**Cost-Effective Lead Generation:** Delivers a significantly higher ROI compared to traditional advertising.",
        "**Showcase Your Expertise:** Effectively present your portfolio, case studies, and unique value proposition.",
        "**Increased Sales & Revenue:** Seamless integration with e-commerce and booking systems translates to higher conversion rates.",
      ],
      img: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=1400&q=80&auto-format&fit=crop"
    },
    designProcess: {
      title: (
        <span className="text-4xl font-semibold bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
          How We Design Your Website: Our Unique Approach
        </span>
      ),
    steps: [
        "**Discovery & Strategy:** Deeply understanding your brand, audience, and goals.",
        "**Modern, Striking Design:** Visually stunning layouts using latest trends to capture attention.",
        "**Built with React.js for Speed:** Leveraging React.js for powerful, fast applications with a seamless UX.",
        "**Fully Responsive & Mobile-First:** Engineered to perform flawlessly on **all devices**.",
        "**SEO-Friendly Foundation:** Integrating SEO best practices from day one for higher rankings.",
        "**Seamless Post-Launch Support:** Includes launch, optimization, and ongoing technical support.",
    ],
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80&auto-format&fit=crop"
    },
    industries: {
      title: (
        <span className="text-4xl font-semibold bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
          Industries We Design Websites For
        </span>
      ),
      description: "As a creative web design agency, we craft custom website designs that help businesses across diverse sectors stand out and succeed online. Here's a look at the industries we serve best:",
      list: [
        { name: "eCommerce", features: "Mobile-responsive online stores optimized for sales, customer engagement, and a smooth checkout process.", icon: "🛍️" },
        { name: "Healthcare", features: "Secure, accessible, and HIPAA-compliant platforms for clinics, hospitals, and healthcare startups.", icon: "🩺" },
        { name: "Education & eLearning", features: "Intuitive learning portals with easy navigation, integrated LMS systems, and mobile compatibility.", icon: "🎓" },
        { name: "Technology & SaaS", features: "Strong digital presence with modern, scalable websites that highlight product features and build investor credibility.", icon: "💻" },
        { name: "Real Estate", features: "Showcase properties through image galleries, virtual tours, and advanced search filters for buyers and sellers.", icon: "🏠" },
        { name: "Finance & Legal", features: "Secure, professional websites that reinforce credibility, simplify service discovery, and encourage trust with compliant content structures.", icon: "💼" },
      ],
    },
    technologies: {
      title: (
        <span className="text-4xl font-semibold bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
          Technologies We Use
        </span>
      ),
      techList: [
        {
          category: "Front-End Development",
          tools: "HTML5, CSS3, JavaScript, **ReactJS**, NextJS ",
          benefit: "**Blazing fast performance** and modern, interactive user interfaces (UIs).",
          icon: "⚛️"
        },
        {
          category: "Back-End / CMS",
          tools: "**WordPress**, PHP, MySQL, Node.js",
          benefit: "Scalable, reliable, and easy-to-manage content systems.",
          icon: "🌐"
        },
        {
          category: "Design & Prototyping",
          tools: "**Figma**, Adobe XD, Sketch",
          benefit: "Precise, user-tested designs before any code is written.",
          icon: "🎨"
        },
        {
          category: "Performance & Hosting",
          tools: "Cloudflare CDN, Premium Managed Hosting Solutions",
          benefit: "Maximum security and reliability with global speed optimization.",
          icon: "🚀"
        },
      ]
    },
    websiteTypes: {
      title: (
        <span className="text-4xl font-semibold bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
          Types of Websites We Design
        </span>
      ),
      types: [
        { title: "Custom Web Design", desc: "Unique, brand-reflecting designs with optimization for user experience and conversions.", icon: "✨" },
        { title: "WordPress Design", desc: "SEO-friendly and visually stunning websites with custom themes and plugins.", icon: "🌐" },
        { title: "Web UI/UX", desc: "Intuitive and engaging designs focused on beautiful, functional websites and effective calls-to-action.", icon: "🖌️" },
        { title: "E-commerce Website Design", desc: "Expertly crafted e-commerce stores to maximize your online sales potential and boost conversions.", icon: "🛒" },
        { title: "Landing Page Design", desc: "High-converting single-page sites optimized for specific marketing campaigns.", icon: "🎯" },
        { title: "Web App Design / AMP", desc: "Creative web application designs and Accelerated Mobile Pages (AMP) for a seamless, fast mobile experience.", icon: "📱" }
      ],
      img: "https://cdn.prod.website-files.com/631492df65cd5321245d33e8/6646d5cc1748b90e393c02c5_pexels-photo-374074.webp"
    },
    competitiveEdge: {
      title: (
        <span className="text-4xl font-semibold bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
          Ucentric vs. Other Agencies
        </span>
      ),
      subtitle: "We don't just build websites; we build powerful digital assets. See how our commitment to quality sets us apart:",
      features: [
        { name: "Custom Web Design", our: "Custom-crafted, brand-focused designs", other: "Often rely on pre-made templates" },
        { name: "UI/UX Strategy", our: "UI/UX strategy integrated from the start", other: "Basic layout focus only" },
        { name: "SEO-Friendly Foundation", our: "Built with SEO best practices", other: "Limited or no on-page SEO" },
        { name: "Mobile Responsiveness", our: "Fully responsive on all devices", other: "Not consistently optimized" },
        { name: "Core Web Vitals", our: "Fast loading, meets Google standards", other: "Often overlooked" },
      ],
      img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1400&q=80&auto-format&fit=crop"
    },
    // 💡 Client Testimonials object removed
    cta: {
      headline: (
      <span className="text-4xl font-semibold bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
          Let's create a site that converts
        </span>
      ),
      text: "Your dream website starts with a single click. Ready to elevate your brand? Contact us for a free consultation.",
      button: "Let’s Talk",
    },
};

// 💡 New FAQ data for this page
const faqs = [
    { q: "How long does it take to design and develop a custom website?", a: "The timeline varies based on complexity. A standard informational website typically takes 4-8 weeks, while a more complex web application or e-commerce site can take 12 weeks or more. We provide a detailed project plan after the initial discovery phase." },
    { q: "What is React.js and why do you use it?", a: "React.js is a modern JavaScript library for building fast, interactive user interfaces. We use it to create 'Single Page Applications' (SPAs) that load incredibly quickly and provide a smooth, app-like experience for your users, which is great for engagement and SEO." },
    { q: "Will my website be mobile-friendly?", a: "Absolutely. We follow a 'mobile-first' design approach. This means every website we build is fully responsive and optimized to look and function perfectly on all devices, including desktops, tablets, and smartphones." },
    { q: "Do you provide support after the website is launched?", a: "Yes, our service includes seamless launch and initial optimization. We also offer ongoing post-launch support and maintenance packages to handle security updates, performance monitoring, bug fixes, and technical support." }
];

/* ------------------------------------------------------------------------
   Global Styles (for animate-gradient)
------------------------------------------------------------------------ */
// Inject global styles for animations
if (typeof document !== "undefined") {
    if (!document.getElementById("ucentric-global-styles")) {
        const style = document.createElement("style");
        style.id = "ucentric-global-styles";
        style.innerHTML = `
        @keyframes gradientShift { 
            0% { background-position: 0% 50%; } 
            50% { background-position: 100% 50%; } 
            100% { background-position: 0% 50%; } 
        }
        .animate-gradient {
            background-size: 200% 200%;
            animation: gradientShift 4s ease infinite;
        }
        .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
        }
        .hide-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `;
        document.head.appendChild(style);
    }
}

// =========================================================================
// ⭐️ HOOK: For responsive inline styles
// =========================================================================
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false); // Default to false SSR

    useEffect(() => {
        // Set initial state after mount
        const mediaQueryList = window.matchMedia(query);
        setMatches(mediaQueryList.matches);

        const listener = (event) => setMatches(event.matches);
        mediaQueryList.addEventListener('change', listener);
        return () => mediaQueryList.removeEventListener('change', listener);
    }, [query]);

    return matches;
};

// =========================================================================
// ⭐️ HOOK: For Hover Glow Effect (Inline Styles)
// =========================================================================
const useHoverGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const glowProps = {
        ref,
        onMouseEnter: () => setVisible(true),
        onMouseLeave: () => setVisible(false),
        onMouseMove: handleMouseMove,
    };

    const GlowComponent = () => (
        <div
            style={{
                position: 'absolute',
                width: '250px',
                height: '250px',
                top: position.y - 125,
                left: position.x - 125,
                background: 'linear-gradient(to right, #38b6ff, #1a4aff, #000433)',
                borderRadius: '9999px',
                filter: 'blur(48px)',
                mixBlendMode: 'screen',
                pointerEvents: 'none',
                zIndex: 5,
                transition: 'opacity 500ms',
                opacity: visible ? 0.6 : 0,
            }}
        />
    );

    return { glowProps, GlowComponent, visible };
};

// =========================================================================
// ⭐️ COMPONENT: RichText (from original file, adapted)
// =========================================================================
const RichText = ({ text = "", className = "", style = {} }) => {
    // This component is necessary to render the **bold** text from the content object
    if (!text) return null;
    return (
        <p
            className={className}
            style={style}
            dangerouslySetInnerHTML={{
                __html: text.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong style="color: #c8e9ff; font-weight: 700;">$1</strong>'
                ),
            }}
        />
    );
};


// =========================================================================
// CORE PAGE COMPONENTS (From EcommercePage.js)
// =========================================================================

// ⭐️ COMPONENT: Section Title
const SectionTitle = ({ children, align = 'center', style = {}, isMobile }) => {
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
            { threshold: 0.3 }
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
        <h2
            ref={ref}
            style={{
                fontSize: isMobile ? '2.2rem' : '3rem',
                fontWeight: '800',
                color: TEXT_WHITE,
                paddingTop: isMobile ? '40px' : '60px',
                paddingBottom: '20px',
                textAlign: align,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                letterSpacing: '-0.5px',
                ...style
            }}
        >
            {children}
        </h2>
    );
};

// ⭐️ COMPONENT: Accent Divider
const AccentDivider = ({ align = 'center' }) => {
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
                width: isVisible ? '100px' : '0px',
                height: '4px',
                backgroundColor: ACCENT_BLUE,
                margin: align === 'center' ? '0 auto 50px auto' : '0 0 50px 0',
                transition: 'width 0.6s ease-out',
                borderRadius: '2px'
            }}
        ></div>
    );
};

// ⭐️ COMPONENT: Animated Card (for horizontal sections)
const AnimatedCard = ({ children, delay = 0, animationClass = '', icon = '', title = '', style = {} }) => {
    const { glowProps, GlowComponent, visible: isHovered } = useHoverGlow();

    return (
        <div
            {...glowProps}
            style={{
                backgroundColor: DEEP_BLUE,
                padding: '30px',
                borderRadius: '15px',
                boxShadow: isHovered
                    ? `0 8px 30px rgba(0, 0, 0, 0.7), 0 0 20px ${ACCENT_BLUE}80`
                    : `0 4px 15px rgba(0, 0, 0, 0.4)`,
                border: isHovered ? `1px solid ${ACCENT_BLUE}` : `1px solid ${ACCENT_BLUE}20`,
                transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                opacity: 1,
                filter: 'none',
                transition: `transform 0.6s ease-out ${delay}ms, box-shadow 0.4s ease-out, border 0.4s ease-out`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                ...style
            }}
            className={animationClass}
        >
            <GlowComponent />
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                {icon && <div style={{ fontSize: ICON_SIZE, color: ACCENT_BLUE, marginBottom: '20px' }}>{icon}</div>}
                {title && <h3 style={{ color: ACCENT_BLUE, marginBottom: '15px', fontSize: '1.5rem', fontWeight: '700' }}>{title}</h3>}
                {children}
            </div>
        </div>
    );
};

// ⭐️ COMPONENT: Process Step Card (Amoeba)
const ProcessStepCard = ({ step, index, isMobile }) => {
    const { glowProps, GlowComponent, visible } = useHoverGlow();
    
    // Helper to parse the step text
    const getStepParts = (stepText) => {
        const match = stepText.match(/\*\*(.*?)\*\*/);
        if (match) {
            return {
                title: match[1],
                desc: stepText.replace(match[0], '').trim()
            };
        }
        return { title: stepText, desc: "" }; // Fallback
    };
    
    const { title, desc } = getStepParts(step);
    const icons = ["💡", "🎨", "💻", "📱", "🔍", "🚀"]; // Cycle through icons

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                flex: '1 1 260px',
                maxWidth: '280px',
                position: 'relative',
            }}
        >
            {/* Amoeba-shaped Card */}
            <div
                {...glowProps}
                style={{
                    background: `radial-gradient(circle at 30% 30%, ${ACCENT_BLUE}25, ${DEEP_BLUE})`,
                    borderRadius: '50% 40% 60% 50% / 50% 60% 40% 50%',
                    padding: '40px 25px',
                    height: '230px',
                    width: '230px',
                    color: TEXT_WHITE,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: visible ? '0 0 30px rgba(56,182,255,0.4)' : '0 0 20px rgba(56,182,255,0.25)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    transform: visible ? 'scale(1.05)' : 'scale(1)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <GlowComponent />
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{icons[index % icons.length]}</div>
                    <h3 style={{ fontSize: '1.1rem', color: ACCENT_BLUE, marginBottom: '8px' }}>{`${index + 1}. ${title}`}</h3>
                    <p style={{ color: LIGHT_GREY, fontSize: '0.9rem', margin: 0 }}>{desc}</p>
                </div>
            </div>

            {/* Downward / right arrow */}
            {index !== content.designProcess.steps.length - 1 && (
                <div
                    style={{
                        fontSize: '2rem',
                        color: ACCENT_BLUE,
                        marginTop: '10px',
                        animation: 'floatArrow 2s infinite ease-in-out',
                        display: isMobile ? 'none' : 'block'
                    }}
                >
                    ➜
                </div>
            )}
        </div>
    );
};

// ⭐️ COMPONENT: Service Leaf Card
const ServiceLeafCard = ({ service, index }) => {
    const { glowProps, GlowComponent, visible } = useHoverGlow();

    return (
        <div
            {...glowProps}
            key={index}
            style={{
                background: `linear-gradient(145deg, #000000, #000433)`,
                border: `1px solid ${ACCENT_BLUE}40`,
                borderRadius: '70% 30% 60% 40% / 40% 60% 30% 70%',
                padding: '50px 30px',
                color: TEXT_WHITE,
                boxShadow: visible ? '0 0 30px #000433' : '0 0 30px rgba(56,182,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                transform: visible ? 'translateY(-10px) rotate(-2deg)' : 'translateY(0) rotate(0deg)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <GlowComponent />
            {/* floating glowing blob behind */}
            <div
                style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    background: `${ACCENT_BLUE}20`,
                    borderRadius: '50%',
                    top: '-40px',
                    right: '-40px',
                    filter: 'blur(30px)',
                    zIndex: 6,
                }}
            ></div>

            <div style={{ position: 'relative', zIndex: 10 }}>
                <div
                    style={{
                        fontSize: '2rem',
                        marginBottom: '15px',
                        zIndex: 1,
                        animation: 'floatIcon 3s ease-in-out infinite',
                    }}
                >
                    {service.icon}
                </div>
                <h3
                    style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        marginBottom: '10px',
                        color: ACCENT_BLUE,
                        zIndex: 1,
                    }}
                >
                    {service.title}
                </h3>
                <p
                    style={{
                        fontSize: '1rem',
                        color: LIGHT_GREY,
                        opacity: 0.85,
                        lineHeight: '1.6',
                        zIndex: 1,
                    }}
                >
                    {service.desc}
                </p>
            </div>
        </div>
    );
};

// ⭐️ MODIFIED: Renamed from TechStackCard to TechnologyCard
// This card is specific to the Technologies list (category, tools, benefit)
const TechnologyCard = ({ tech, index }) => {
    const { glowProps, GlowComponent, visible } = useHoverGlow();

    return (
        <div
            {...glowProps}
            key={index}
            style={{
                flex: '1 1 250px',
                maxWidth: '260px',
                textAlign: 'center',
                background: `linear-gradient(160deg, #000000 40%, #000433)`,
                border: `1px solid ${ACCENT_BLUE}40`,
                borderRadius: '25px',
                padding: '40px 25px',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                boxShadow: visible ? '0 0 40px rgba(56,182,255,0.35)' : '0 0 15px rgba(56,182,255,0.15)',
                transform: visible ? 'scale(1.07)' : 'scale(1)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <GlowComponent />
            <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px', color: ACCENT_BLUE }}>
                    {tech.icon}
                </div>
                <h3
                    style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        color: TEXT_WHITE,
                        marginBottom: '10px',
                    }}
                >
                    {tech.category}
                </h3>
                {/* Use RichText to parse **bold** tags */}
                <RichText 
                    text={tech.tools} 
                    style={{
                        color: LIGHT_GREY,
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        marginBottom: '10px'
                    }} 
                />
                 <RichText 
                    text={tech.benefit} 
                    style={{
                        color: LIGHT_GREY,
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        opacity: 0.8
                    }} 
                />
            </div>
        </div>
    );
};

// ⭐️ NEW: Added the generic TechStackCard from Mobileapp.js
// This card is for the Industries list (icon, name, desc)
const TechStackCard = ({ tech }) => {
    const { glowProps, GlowComponent, visible } = useHoverGlow();

    return (
        <div
            {...glowProps}
            style={{
                width: '100%', 
                maxWidth: '260px', // Max width from mobile app
                height: '100%', 
                minHeight: '280px', // Min height from mobile app
                textAlign: 'center',
                background: `linear-gradient(160deg, #000000 40%, #000433)`, 
                border: `1px solid ${ACCENT_BLUE}40`,
                borderRadius: '25px',
                padding: '40px 25px',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                boxShadow: visible ? '0 0 40px rgba(56,182,255,0.35)' : '0 0 15px rgba(56,182,255,0.15)',
                transform: visible ? 'scale(1.07)' : 'scale(1)',
                position: 'relative', 
                overflow: 'hidden', 	
                display: 'flex', 
                flexDirection: 'column', 
            }}
        >
            <GlowComponent />
            <div style={{ 
                position: 'relative', 
                zIndex: 10, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                flexGrow: 1 
            }}> 
                <div style={{ fontSize: '3rem', marginBottom: '20px', color: ACCENT_BLUE }}>
                    {tech.icon}
                </div>
                <h3
                    style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        color: TEXT_WHITE,
                        marginBottom: '10px',
                    }}
                >
                    {tech.name}
                </h3>
                {/* This card supports an optional 'desc' prop */}
                {tech.desc && <p
                    style={{
                        color: LIGHT_GREY,
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                    }}
                >
                    {tech.desc}
                </p>}
            </div>
        </div>
    );
};


// =========================================================================
// ⭐️⭐️⭐️ MODIFIED COMPONENT: AnimatedButton ⭐️⭐️⭐️
// Replaced with the exact code from EcommercePage.js
// =========================================================================
// Simple animated button with gradient hover animation (Tailwind style)
const AnimatedButton = ({ children, onClick }) => {
    // 💡 NOTE: The 'max-sm:hidden' class is in your EcommercePage code.
    // If you want the button to be visible on mobile, remove 'max-sm:hidden'
    return (
        <button
            onClick={onClick}
            className="text-sm max-sm:hidden inline-flex items-center gap-2
            bg-gradient-to-r from-[#38b6ff] to-[#000433] animate-gradient
            text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all justify-center mt-6"
            style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: '0 0 20px rgba(56,182,255,0.4)',
            }}
        >
            {children}
        </button>
    );
};
// =========================================================================
// ⭐️⭐️⭐️ END OF MODIFICATION ⭐️⭐️⭐️
// =========================================================================


// =========================================================================
// ⭐️ NEW FAQ COMPONENTS (From EcommercePage.js)
// =========================================================================
const NewFAQItem = ({ faq, index, openIndex, setOpenIndex, isMobile }) => {
    const contentRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const isOpen = openIndex === index;

    return (
        <div style={{
            border: '1px solid rgba(26, 74, 255, 0.2)',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '16px'
        }}>
            <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    padding: '16px 24px',
                    fontSize: isMobile ? '1rem' : '1.125rem',
                    fontWeight: 500,
                    background: isHovered ? 'rgba(0, 8, 20, 0.8)' : 'rgba(0, 8, 20, 0.6)',
                    color: isOpen ? ACCENT_BLUE : TEXT_WHITE,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease, color 0.3s ease'
                }}
            >
                <span style={{ flex: 1, paddingRight: '16px' }}>{faq.q}</span>
                <span style={{
                    color: '#9CA3AF',
                    transition: 'transform 0.3s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>▼</span>
            </button>
            <div
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out',
                    background: 'rgba(0, 8, 20, 0.5)',
                    textAlign: 'left',
                    color: '#D1D5DB',
                    fontSize: '0.95rem'
                }}
            >
                <div style={{ padding: '16px 24px' }}>
                    {faq.a}
                </div>
            </div>
        </div>
    );
};

const FAQsSection = ({ isMobile }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div style={{ padding: isMobile ? '60px 5%' : '80px 5%', backgroundColor: BACKGROUND_BLACK, color: TEXT_WHITE, textAlign: 'center' }}>
            <SectionTitle isMobile={isMobile}>
                <span className="bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
                    FAQs
                </span>
            </SectionTitle>
            <AccentDivider />
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {faqs.map((faq, index) => (
                    <NewFAQItem
                        key={index}
                        faq={faq}
                        index={index}
                        openIndex={openIndex}
                        setOpenIndex={setOpenIndex}
                        isMobile={isMobile}
                    />
                ))}
            </div>
        </div>
    );
};


// =========================================================================
// ⭐️ MAIN WEBSITEDESIGN PAGE COMPONENT (Refactored)
// =========================================================================
const Websitedesign = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    
    const navigate = useNavigate();
    const handleConnectClick = () => {
        navigate('/Contact'); // Navigate to the Contact route
    };


    return (
        <div style={{ backgroundColor: BACKGROUND_BLACK, color: TEXT_WHITE, minHeight: '100vh', fontFamily: 'Inter, Arial, sans-serif', overflowX: 'hidden' }}>

            <Navbar />

            {/* ========================================================================= */}
            {/* 1. HERO BANNER (Using Websitedesign content) */}
            {/* ========================================================================= */}
            <div
                style={{
                    width: '100%',
                    height: isMobile ? '80vh' : '90vh',
                    minHeight: isMobile ? '450px' : '600px',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${content.hero.img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: TEXT_WHITE,
                    textAlign: 'center',
                    paddingTop: '60px', // Space for Navbar
                }}
            >
                <div style={{ maxWidth: '1100px', padding: isMobile ? '0 15px' : '0 20px' }}>
                    <h1
                        style={{
                            fontSize: isMobile ? '2.5rem' : '4.5rem',
                            fontWeight: '800',
                            lineHeight: 1.2,
                        }}
                    >
                        {content.hero.headline}
                    </h1>

                    <p style={{ color: LIGHT_GREY, marginTop: '20px', fontSize: isMobile ? '1rem' : '1.15rem', maxWidth: '800px', margin: '20px auto 0 auto' }}>
                        {content.hero.text}
                    </p>

                    {/* 💡 This div's parent already has text-align: center */}
                    <div>
                        <AnimatedButton onClick={handleConnectClick}>
                            {content.hero.button} →
                        </AnimatedButton>
                    </div>
                </div>
            </div>

            {/* ========================================================================= */}
            {/* 2. WHAT IS A WEBSITE (Using Horizontal AnimatedCard) */}
            {/* ========================================================================= */}
            <div style={{ padding: '40px 5%' }}>
                <SectionTitle isMobile={isMobile} style={{ paddingTop: 0 }}>
                    {content.whatIsAWebsite.title}
                </SectionTitle>
                <AccentDivider />
                <p style={{ color: LIGHT_GREY, marginTop: '12px', fontSize: isMobile ? '0.95rem' : '1.05rem', textAlign: 'center', maxWidth: '800px', margin: '-30px auto 40px auto' }}>
                    {content.whatIsAWebsite.text}
                </p>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        gap: '20px',
                        overflowX: 'auto',
                        flexWrap: isMobile ? 'wrap' : 'nowrap', // Wrap on mobile
                        padding: '20px 0',
                    }}
                    className="hide-scrollbar"
                >
                    {content.whatIsAWebsite.purpose.map((item, index) => (
                        <AnimatedCard
                            key={index}
                            delay={index * 100}
                            icon={"✔️"}
                            style={{
                                flex: isMobile ? '1 1 100%' : '0 0 300px', // Full width on mobile
                                minWidth: isMobile ? 'unset' : '300px',
                                maxWidth: isMobile ? '400px' : '300px',
                                margin: isMobile ? '0 auto' : 0,
                            }}
                        >
                            <RichText text={item} style={{ color: LIGHT_GREY, margin: 0, fontSize: '1rem' }} />
                        </AnimatedCard>
                    ))}
                </div>
            </div>

            {/* ========================================================================= */}
            {/* 3. WHY YOUR BUSINESS NEEDS ONE (Using Text/Image split) */}
            {/* ========================================================================= */}
            <div
                style={{
                    padding: isMobile ? '60px 5%' : '80px 5%',
                    display: 'flex',
                    flexWrap: 'wrap-reverse', // Image on right, stack on mobile
                    alignItems: 'center',
                    gap: isMobile ? '40px' : '80px',
                    maxWidth: '1400px',
                    margin: '0 auto',
                }}
            >
                {/* LEFT CONTENT */}
                <div style={{ flex: '1 1 500px' }}>
                    <SectionTitle
                        align="left"
                        isMobile={isMobile}
                        style={{ textAlign: 'left', marginTop: '0', fontWeight: 800 }}
                    >
                        {content.whyNeed.title}
                    </SectionTitle>

                    <AccentDivider align="left" />
                    <p style={{ fontSize: isMobile ? '1rem' : '1.15rem', lineHeight: '1.8', opacity: 0.9, color: LIGHT_GREY, marginBottom: '30px' }}>
                        {content.whyNeed.text}
                    </p>
                    
                    {/* Advantages List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {content.whyNeed.advantages.map((item, index) => (
                             <RichText 
                                key={index}
                                text={item} 
                                style={{
                                    color: LIGHT_GREY,
                                    fontSize: isMobile ? '0.95rem' : '1.05rem', 
                                    lineHeight: 1.6
                                }} 
                            />
                        ))}
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div
                    style={{
                        flex: '1 1 400px',
                        position: 'relative',
                        minHeight: '450px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={content.whyNeed.img}
                        alt="Why a business needs a website"
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            borderRadius: '20px',
                            boxShadow: '0 0 40px rgba(56,182,255,0.3)',
                            transition: 'transform 0.6s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                </div>
            </div>


            {/* ========================================================================= */}
            {/* 4. DESIGN PROCESS (Using Amoeba Flow) */}
            {/* ========================================================================= */}
            <div style={{ padding: '100px 5%', backgroundColor: BACKGROUND_BLACK }}>
                <SectionTitle isMobile={isMobile} style={{ textAlign: 'center' }}>
                    {content.designProcess.title}
                </SectionTitle>
                <AccentDivider />
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '50px 60px',
                        marginTop: '60px',
                    }}
                >
                    {content.designProcess.steps.map((step, index) => (
                        <ProcessStepCard key={index} step={step} index={index} isMobile={isMobile} />
                    ))}
                </div>
            </div>
            <style>
                {`
                @keyframes floatArrow {
                  0%, 100% { transform: translateX(0); }
                  50% { transform: translateX(5px); }
                }
                @media (max-width: 900px) {
                  .process-flow { flex-direction: column !important; }
                }
                `}
            </style>


            {/* ========================================================================= */}
            {/* 5. ⭐️ INDUSTRIES (Using TechStackCard, layout from Mobileapp.js) ⭐️ */}
            {/* ========================================================================= */}
            <div style={{ padding: '100px 5%', backgroundColor: BACKGROUND_BLACK }}>
                <SectionTitle isMobile={isMobile}>
                    {content.industries.title}
                </SectionTitle>
                <AccentDivider />
                 <p style={{ color: LIGHT_GREY, marginTop: '12px', fontSize: isMobile ? '0.95rem' : '1.05rem', textAlign: 'center', maxWidth: '800px', margin: '-30px auto 40px auto' }}>
                    {content.industries.description}
                </p>

                {/* Grid layout from Mobileapp.js */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', // 3-col grid
                  gap: 16, // smaller gap
                  marginTop: 24,
                  maxWidth: 1400, 
                  marginLeft: 'auto', 
                  marginRight: 'auto',
                  justifyItems: 'center', 
                  alignItems: 'stretch' 
                }}>
                    {/* New map using TechStackCard */}
                    {content.industries.list.map((industry, index) => (
                        <TechStackCard 
                            key={index} 
                            tech={{ 
                                icon: industry.icon, 
                                name: industry.name, 
                                desc: industry.features // Pass 'features' as 'desc'
                            }} 
                        />
                    ))}
                </div>
            </div>
            <style>
                {`
                @keyframes floatIcon {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-6px); }
                }
                `}
            </style>

            {/* ========================================================================= */}
            {/* 6. ⭐️ TECH STACK (Using *TechnologyCard*) ⭐️ */}
            {/* ========================================================================= */}
            <div style={{ padding: '100px 5%', backgroundColor: '#000000' }}>
                <SectionTitle isMobile={isMobile}>
                    {content.technologies.title}
                </SectionTitle>
                <AccentDivider />
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        gap: '40px',
                        marginTop: '50px',
                        backgroundColor: '#000000',
                        padding: '20px',
                        borderRadius: '20px',
                    }}
                >
                    {/* ⭐️ MODIFIED: Using TechnologyCard component */}
                    {content.technologies.techList.map((tech, index) => (
                        <TechnologyCard key={index} tech={tech} index={index} />
                    ))}
                </div>
            </div>


            {/* ========================================================================= */}
            {/* 7. WEBSITE TYPES (Re-using Leaf Cards) */}
            {/* ========================================================================= */}
            <div style={{ padding: '100px 5%', backgroundColor: BACKGROUND_BLACK }}>
                <SectionTitle isMobile={isMobile}>
                    {content.websiteTypes.title}
                </SectionTitle>
                <AccentDivider />
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '50px',
                        marginTop: '60px',
                        maxWidth: '1400px',
                        margin: '0 auto',
                    }}
                >
                    {content.websiteTypes.types.map((type, index) => {
                        // Parse the **bold** title from original file's logic
                         const match = type.desc.match(/\*\*(.*?)\*\*/);
                         const title = match ? match[1] : type.title;
                         const desc = match ? type.desc.replace(match[0], '').trim() : type.desc;
                        return (
                            <ServiceLeafCard 
                                key={index} 
                                index={index}
                                service={{
                                    title: title,
                                    desc: desc,
                                    icon: type.icon
                                }} 
                            />
                        )
                    })}
                </div>
            </div>

            {/* ========================================================================= */}
            {/* 8. COMPETITIVE EDGE (Ported Table, styled inline) */}
            {/* ========================================================================= */}
            <div style={{ padding: '100px 5%', backgroundColor: BACKGROUND_BLACK, textAlign: 'center' }}>
                <SectionTitle isMobile={isMobile}>
                    {content.competitiveEdge.title}
                </SectionTitle>
                <AccentDivider />
                <p style={{ color: LIGHT_GREY, marginTop: '12px', fontSize: isMobile ? '0.95rem' : '1.05rem', textAlign: 'center', maxWidth: '800px', margin: '-30px auto 40px auto' }}>
                    {content.competitiveEdge.subtitle}
                </p>

                <div style={{ 
                    overflowX: 'auto', 
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)', 
                    borderRadius: '12px', 
                    border: `1px solid ${ACCENT_BLUE}20`,
                    background: DEEP_BLUE,
                }}>
                    <table style={{ minWidth: '100%', borderCollapse: 'collapse', divideY: `1px solid ${ACCENT_BLUE}20` }}>
                        <thead>
                            <tr style={{ background: '#0a0a0a', borderBottom: `2px solid ${ACCENT_BLUE}40` }}>
                                <th style={{ padding: '16px 24px', fontSize: '1.1rem', fontWeight: '700', color: '#c8e9ff', textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Feature</th>
                                <th style={{ padding: '16px 24px', fontSize: '1.1rem', fontWeight: '700', color: ACCENT_BLUE, textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Ucentric</th>
                                <th style={{ padding: '16px 24px', fontSize: '1.1rem', fontWeight: '700', color: LIGHT_GREY, textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Other Agencies</th>
                            </tr>
                        </thead>
                        <tbody style={{ background: BACKGROUND_BLACK, divideY: `1px solid ${ACCENT_BLUE}10` }}>
                            {content.competitiveEdge.features.map((feature, index) => (
                                <tr key={index} style={{ borderBottom: `1px solid ${ACCENT_BLUE}10` }}>
                                    <td style={{ padding: '20px 24px', whiteSpace: 'nowrap', fontSize: '1.05rem', fontWeight: '500', color: '#c8e9ff' }}>{feature.name}</td>
                                    <td style={{ padding: '20px 24px', whiteSpace: 'nowrap' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', color: '#4ade80', fontWeight: '600' }}>
                                            <span style={{ marginRight: '12px', fontSize: '1.2rem' }}>✔️</span>
                                            {feature.our}
                                        </div>
                                    </td>
                                    <td style={{ padding: '20px 24px', whiteSpace: 'nowrap' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', color: '#f87171' }}>
                                            <span style={{ marginRight: '12px', fontSize: '1.2rem' }}>❌</span>
                                            {feature.other}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ========================================================================= */}
            {/* 9. TESTIMONIALS (REMOVED) */}
            {/* ========================================================================= */}
            
            {/* 💡 Section 9 removed */}

            {/* ========================================================================= */}
            {/* 10. FAQ SECTION */}
            {/* ========================================================================= */}
            <FAQsSection isMobile={isMobile} />

            {/* ========================================================================= */}
            {/* 11. ⭐️ CTA (MODIFIED) ⭐️ */}
            {/* ========================================================================= */}
            <div style={{ 
                padding: isMobile ? '60px 5%' : '100px 5%', 
                textAlign: 'center', 
                background: BACKGROUND_BLACK, // 💡 Changed to black
                marginTop: '60px',
                borderTop: `2px solid ${ACCENT_BLUE}30`,
                // 💡 Removed shadow
            }}>
                <SectionTitle isMobile={isMobile} style={{ paddingTop: 0, paddingBottom: '30px', lineHeight: 1.3 }}>
                    {content.cta.headline}
                </SectionTitle>

                <p style={{ color: LIGHT_GREY, fontSize: isMobile ? '1.1rem' : '1.25rem', maxWidth: '800px', margin: '0 auto 40px auto', lineHeight: 1.7 }}>
                    {content.cta.text}
                </p>

                {/* 💡 This div's parent already has text-align: center */}
                <div>
                    <AnimatedButton 
                        onClick={handleConnectClick}
                        // 💡 Custom styles for the larger CTA button
                        style={{
                            padding: '16px 40px',
                            fontSize: '1.2rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        {content.cta.button}
                    </AnimatedButton>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    );
};

export default Websitedesign;