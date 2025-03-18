'use client'

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/hero";
import Features from "./components/features";
import About from "./components/about";
import Product from "./components/products";
import Expertise from "./components/expert";
import Footer from "./components/footer";
import OurMission from "./components/mission";

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1800);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      Object.entries(sectionsRef.current).forEach(([key, section]) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  const addSectionRef = (key: string) => (el: HTMLDivElement | null) => {
    if (sectionsRef.current) {
      sectionsRef.current[key] = el;
    }
  };

  const Particles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-hopesera-light-blue to-hopesera-blue opacity-20"
            style={{
              width: Math.random() * 120 + 40,
              height: Math.random() * 120 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(40px)",
            }}
            animate={{
              x: [0, Math.random() * 30 - 15, 0],
              y: [0, Math.random() * 30 - 15, 0],
              scale: [1, Math.random() * 0.2 + 0.9, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50 to-indigo-50">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-hopesera-light-pink to-pink-100 opacity-20 blur-[80px] animate-pulse-slow"></div>
        <div className="absolute top-96 right-20 w-96 h-96 rounded-full bg-gradient-to-tr from-hopesera-light-blue to-blue-100 opacity-20 blur-[100px] animate-float-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-hopesera-gold to-amber-100 opacity-10 blur-[70px] animate-pulse-slow-alt"></div>
        
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full border border-pink-200 opacity-10 animate-spin-very-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full border border-blue-200 opacity-10 animate-spin-very-slow-reverse"></div>
      </div>
      
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none z-0"></div>
      
      <Particles />

      <div className="relative z-10">
        <AnimatePresence>
          {animationComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <div ref={addSectionRef("hero")} className={`section ${activeSection === "hero" ? "active" : ""}`}>
                <Hero />
              </div>
              
              <motion.div 
                ref={addSectionRef("features")} 
                className={`mt-8 relative section ${activeSection === "features" ? "active" : ""}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Features />
              </motion.div>

              <div ref={addSectionRef("mission")} className={`relative py-16 md:py-24 section ${activeSection === "mission" ? "active" : ""}`}>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-rose-50 to-indigo-50 opacity-40 -z-10"
                  initial={{ opacity: 0, skewY: 0 }}
                  whileInView={{ opacity: 0.4, skewY: 3 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <OurMission />
                </motion.div>
              </div>

              <div ref={addSectionRef("expertise")} className={`relative py-8 md:py-16 section ${activeSection === "expertise" ? "active" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Expertise />
                </motion.div>
              </div>

              <div ref={addSectionRef("products")} className={`relative py-16 md:py-24 section ${activeSection === "products" ? "active" : ""}`}>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-rose-50 opacity-30 -z-10"
                  initial={{ opacity: 0, skewY: 0 }}
                  whileInView={{ opacity: 0.3, skewY: -3 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Product />
                </motion.div>
              </div>

              <div ref={addSectionRef("about")} className={`relative py-8 md:py-16 section ${activeSection === "about" ? "active" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <About />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <Footer />
      
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        @keyframes pulse-slow-alt {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-very-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        .animate-pulse-slow-alt {
          animation: pulse-slow-alt 12s ease-in-out infinite;
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 60s linear infinite;
        }
        .animate-spin-very-slow-reverse {
          animation: spin-very-slow-reverse 45s linear infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .section.active {
          z-index: 1;
        }
      `}</style>
    </div>
  );
}
