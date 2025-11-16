import React from 'react';
import { motion as Motion, useInView } from 'framer-motion'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import Teams from '../components/Teams';

// Animated Stat Component
const AnimatedStat = ({ value, label, color, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = React.useState(0);
    const numericValue = parseInt(value.replace(/\D/g, ''), 10);

    React.useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 1500;
            const stepTime = 20;
            const increment = numericValue / (duration / stepTime);
            const timer = setInterval(() => {
                start += increment;
                if (start >= numericValue) {
                    start = numericValue;
                    clearInterval(timer);
                }
                setCount(Math.floor(start));
            }, stepTime);
        }
    }, [isInView, numericValue]);

    return (
        <Motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
        >
            <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2" style={{ color }}>
                {count}+
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-white text-center">{label}</h3>
        </Motion.div>
    );
};

// Accent Divider Component
const AccentDivider = ({ align = 'center' }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            style={{
                width: isVisible ? '100px' : '0px',
                height: '4px',
                backgroundColor: '#38b6ff',
                margin: align === 'center' ? '0 auto 50px auto' : '0 0 50px 0',
                transition: 'width 0.6s ease-out',
                borderRadius: '2px'
            }}
        ></div>
    );
};

const About = () => {
    const deepBlue = '#000433';
    const brightBlue = '#38b6ff';

    const values = [
        { number: '01', title: 'Quality', description: 'Where quality meets innovation in every digital solution.' },
        { number: '02', title: 'Commitment', description: 'At Ucentric, we are committed to turning your vision into results with dedication and precision.' },
        { number: '03', title: 'Devotion', description: 'Your satisfaction is our priority, and we are dedicated to delivering the very best in every project.' },
        { number: '04', title: 'Integrity', description: 'Our processes are fully transparent, and you can trust us to deliver work of the highest quality.' },
    ];

    const stats = [
        { value: '2+', label: 'Years of Expertise' },
        { value: '56+', label: 'Clients Globally' },
        { value: '150+', label: 'Dedicated Customers' },
        { value: '70+', label: 'Completed Projects' },
    ];

    // ✅ Declare defaultVariants BEFORE usage
    const defaultVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-black text-white min-h-screen"> 
            <Navbar />

            <main>
                {/* HERO SECTION */}
                <section className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-black px-4">
                    <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
                        style={{ backgroundImage: `url('/path/to/hero-background.jpg')` }}></div>

                    <div className="absolute inset-0 z-10" 
                        style={{ background: `linear-gradient(to bottom, ${deepBlue} 0%, rgba(0,0,0,0) 50%, ${deepBlue} 100%)` }}>
                    </div>

                    <Motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-20 text-center max-w-4xl px-2 sm:px-4"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient">
                            We craft experiences that Connect, Inspire, and Engage.
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                           At Ucentric, we bridge creativity and technology to help businesses thrive online. Our bespoke digital solutions transform ideas into impactful digital realities.
                        </p>
                    </Motion.div>
                </section>

                {/* ABOUT INTRO */}
                <section className="bg-black text-white py-16 sm:py-20 px-4 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <Motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                               Beyond Websites — Crafting Complete Digital Journeys in Bangalore
                            </h2>
                            <AccentDivider align="left" />
                        </Motion.div>

                        <Motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } } }}
                            className="text-sm sm:text-md md:text-lg text-white space-y-4"
                        >
                            <p>Founded in 2024 in Bangalore, Ucentric Web Solutions is a modern digital agency dedicated to empowering businesses with end-to-end digital solutions. We go beyond traditional web design and development, offering services that span web and app development, branding, digital marketing, and technology consulting.</p>
                            <p>At Ucentric, we believe in crafting meaningful digital experiences that help brands connect, grow, and lead in an ever-evolving digital landscape. Our approach combines creativity, technology, and strategy, ensuring every project we deliver is tailored, impactful, and future-ready.</p>
                            <p>From startups to established enterprises, we are committed to being Bangalore’s trusted partner for complete digital transformation.</p>
                        </Motion.div>
                    </div>
                </section>

                {/* VALUES SECTION */}
                <section className="bg-black text-white py-16 sm:py-20 px-4 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <Motion.h2
                            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }} viewport={{ once: true }}
                            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-12 font-semibold text-center bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient'
                        >
                            Values That Shape Ucentric
                        </Motion.h2>

                        <AccentDivider />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
                        {values.map((value, index) => (
                            <Motion.div
                                key={index}
                                variants={defaultVariants}
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="flex flex-col items-center"
                            >
                                <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold opacity-40 text-white mb-4">
                                    {value.number}
                                </p>
                                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#38b6ff]">{value.title}</h3>
                                <p className="text-sm sm:text-md md:text-base text-white leading-relaxed">{value.description}</p>
                            </Motion.div>
                        ))}
                        </div>
                    </div>
                </section>

                {/* STATS SECTION */}
                <section className="bg-black py-16 sm:py-20 px-4 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center border-t border-gray-700 pt-10">
                            {stats.map((stat, index) => (
                                <AnimatedStat
                                    key={index}
                                    value={stat.value}
                                    label={stat.label}
                                    color={brightBlue}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            {/* <Footer /> You can add this back if needed */}
        </div>
    );
};

export default About;
