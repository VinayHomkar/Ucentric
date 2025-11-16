import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import ContactUsPage from '../components/ContactUsPage';
import { motion as Motion} from "motion/react";

// --- Color Palette ---
const ACCENT_BLUE = '#38b6ff';
const DEEP_BLUE = '#000433';
const BACKGROUND_BLACK = '#000000';
const TEXT_WHITE = '#FFFFFF';
const LIGHT_GREY = '#bbbbbb';
const ICON_SIZE = '3.5rem';

/* ------------------------------------------------------------------------
   Global Styles (for animate-gradient)
------------------------------------------------------------------------ */
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
      `;
        document.head.appendChild(style);
    }
}

// =========================================================================
// ⭐️ HOOK: For responsive inline styles
// =========================================================================
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false); 

    useEffect(() => {
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
// ⭐️ COMPONENT: Section Title (Copied from other pages)
// =========================================================================
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

// =========================================================================
// ⭐️ COMPONENT: Accent Divider (Copied from other pages)
// =========================================================================
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

// =========================================================================
// ⭐️ COMPONENT: Animated Card (This is already responsive)
// =========================================================================
const AnimatedCard = ({ children, delay = 0, animationClass = '', icon = '', title = '', style = {}, isMobile }) => {
    const { glowProps, GlowComponent, visible: isHovered } = useHoverGlow();

    return (
        <div
            {...glowProps}
            style={{
                backgroundColor: DEEP_BLUE,
                padding: isMobile ? '24px' : '30px', 
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
                {title && (
                    <h3 style={{ 
                        color: ACCENT_BLUE, 
                        marginBottom: '15px', 
                        fontSize: isMobile ? '1.3rem' : '1.5rem', 
                        fontWeight: '700' 
                    }}>
                        {title}
                    </h3>
                )}
                {children}
            </div>
        </div>
    );
};


// =========================================================================
// ⭐️ MAIN CONTACT COMPONENT (MODIFIED) ⭐️
// =========================================================================
const Contact = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />

            {/* Hero Section */}
            {/* ★★★ Using consistent responsive padding ★★★ */}
            <section className="py-16 px-6 sm:px-10 lg:px-16 text-center bg-gradient-to-b from-[#000433]/60 to-black mt-20">
                <SectionTitle isMobile={isMobile} style={{ paddingTop: '20px' }}>
                     <span className="bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
                        Get in Touch
                     </span>
                </SectionTitle>
                <AccentDivider />
                
                <Motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-3xl text-lg text-gray-300 leading-relaxed mx-auto mt-8"
                    style={{ paddingBottom: '40px' }} 
                >
                    Whether you’re looking to collaborate, need product support, or just want to say hello — 
                    we’re here to help. Reach out to us and we’ll get back within 24 hours.  
                    We believe in building long-lasting partnerships based on trust and transparency.
                </Motion.p>
            </section>

            {/* Why Contact Us Section */}
            {/* ★★★ This section gets the padding ★★★ */}
            <section 
                className="relative px-6 sm:px-10 lg:px-16 bg-black text-center lg:text-left" 
            >
                {/* Gradient Heading */}
                {/* ★★★ FIX: Removed padding (px-6 lg:px-20) from this inner section ★★★ */}
                <section className="relative py-20 flex flex-col justify-center items-center bg-black">
                    <SectionTitle isMobile={isMobile} style={{ paddingTop: 0 }}>
                        <span className="bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
                            Why Reach Out to Us?
                        </span>
                    </SectionTitle>
                    <AccentDivider />
                </section>

                {/* Info Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto text-gray-300 relative z-10"
                     style={{ marginTop: '-40px' }}
                >
                    <AnimatedCard
                        icon="💬"
                        title="Expert Guidance"
                        style={{ textAlign: 'left' }}
                        isMobile={isMobile}
                    >
                        <p className="text-gray-400">
                            Our specialists provide personalized assistance, solving technical challenges 
                            and guiding you toward the right solutions for your goals.
                        </p>
                    </AnimatedCard>

                    <AnimatedCard
                        icon="⚡"
                        title="Fast Response"
                        style={{ textAlign: 'left' }}
                        isMobile={isMobile}
                    >
                        <p className="text-gray-400">
                            We value your time — get timely updates, quick resolutions, 
                            and transparent communication every step of the way.
                        </p>
                    </AnimatedCard>

                    <AnimatedCard
                        icon="🌐"
                        title="Flexible Communication"
                        style={{ textAlign: 'left' }}
                        isMobile={isMobile}
                    >
                        <p className="text-gray-400">
                            Contact us however you prefer — phone, email, or enquiry form. 
                            We make staying connected easy and convenient.
                        </p>
                    </AnimatedCard>

                    <AnimatedCard
                        icon="🤝"
                        title="Collaborative Spirit"
                        style={{ textAlign: 'left' }}
                        isMobile={isMobile}
                    >
                        <p className="text-gray-400">
                            We believe in partnerships, not transactions. Together, we’ll 
                            craft meaningful experiences and lasting results.
                        </p>
                    </AnimatedCard>
                </div>
            </section>

            {/* Quick Info Section */}
            {/* ★★★ Using consistent responsive padding ★★★ */}
            <section className="py-16 px-6 sm:px-10 lg:px-16 bg-black/30 text-center">
                <SectionTitle isMobile={isMobile} align='center'>
                    <span className="bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
                        Contact Information
                    </span>
                </SectionTitle>
                <AccentDivider align='center' />

                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-300 text-lg">
                    <div>
                        <h3 className="text-[#38b6ff] font-semibold mb-2">📍 Address</h3>
                        <p>#20133, SDA, Balegere - Panathur Main Road, Varthuru, Bengaluru, Karnataka - 560087</p>
                    </div>
                    <div>
                        <h3 className="text-[#38b6ff] font-semibold mb-2">📞 Phone</h3>
                        <p>+91 74061 67017</p>
                      
                    </div>
                    <div>
                        <h3 className="text-[#38b6ff] font-semibold mb-2">⏰ Working Hours</h3>
                        <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <main>
                <ContactUsPage />
            </main>
        </div>
    );
};

export default Contact;