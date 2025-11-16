// App.jsx

// 1. Import 'lazy' and 'Suspense'
import { useRef, useEffect, lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// 2. Import all pages using React.lazy
const Home = lazy(() => import("./Pages/Home"));
const Contact = lazy(() => import("./Pages/Contact"));
const About = lazy(() => import("./Pages/About"));
const Service = lazy(() => import("./Pages/Service"));
const Websitedesign = lazy(() => import("./Pages/Websitedesign"));
const Ecommerce = lazy(() => import("./Pages/Ecommerce"));
const Digitalmarketing = lazy(() => import("./Pages/Digitalmarketing"));
const PortfolioPage = lazy(() => import("./Pages/Portfolio"));
const Mobileapp = lazy(() => import("./Pages/Mobileapp"));
const StudentProjects = lazy(() => import("./Pages/StudentProjects"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));

// This component scrolls to the top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// A simple loading component to show while pages are downloaded
const PageLoader = () => (
  <div className="w-full h-screen flex justify-center items-center bg-black">
    <p className="text-white text-lg">Loading...</p>
  </div>
);

const App = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  // Custom cursor animation effect
  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.15;
      position.current.y += (mouse.current.y - position.current.y) * 0.15;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${
          mouse.current.x - 5
        }px, ${mouse.current.y - 5}px, 0)`;

        outlineRef.current.style.transform = `translate3d(${
          position.current.x - 15
        }px, ${position.current.y - 15}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="relative bg-black overflow-x-hidden"
      style={{ cursor: "none" }}
    >
      <Toaster />
      <Router>
        <ScrollToTop />

        {/* Lazy Loaded Routes */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Websitedesign" element={<Websitedesign />} />
            <Route path="/Ecommerce" element={<Ecommerce />} />
            <Route path="/Digitalmarketing" element={<Digitalmarketing />} />
            <Route path="/Portfolio" element={<PortfolioPage />} />
            <Route path="/Mobileapp" element={<Mobileapp />} />
            <Route path="/StudentProjects" element={<StudentProjects />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>

      {/* Custom Cursor */}
      <div
        ref={outlineRef}
        className="fixed inset-0 h-10 w-10 rounded-full bg-[#38b6ff] pointer-events-none z-[9999]"
        style={{ transition: "transform 0.1s ease-out" }}
      ></div>

      <div
        ref={dotRef}
        className="fixed inset-0 h-3 w-3 rounded-full bg-[#38b6ff] pointer-events-none z-[9999]"
      ></div>
    </div>
  );
};

export default App;
