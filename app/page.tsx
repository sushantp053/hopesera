'use client'

import { useState, useEffect } from "react";
import Hero from "./components/hero";
import Features from "./components/features";
import About from "./components/about";
import Product from "./components/products";
import Expertise from "./components/expert";
import Footer from "./components/footer";
import OurMission from "./components/mission";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Set animation complete after initial load
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1800);

    const handleScroll = () => {
      // Show button when user scrolls down 300px from the top
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-hopesera-light-pink opacity-20 blur-3xl"></div>
        <div className="absolute top-96 right-20 w-80 h-80 rounded-full bg-hopesera-light-blue opacity-20 blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-72 h-72 rounded-full bg-hopesera-gold opacity-10 blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <div className={`transition-opacity duration-1000 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}>
          <Hero />
        </div>
        
        <div className="mt-8 relative">
          <Features />
        </div>

        <div className="relative py-12">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-indigo-50 opacity-40 skew-y-3 -z-10"></div>
          <OurMission />
        </div>

        <div className="relative">
          <Expertise />
        </div>

        <div className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-rose-50 opacity-30 -skew-y-3 -z-10"></div>
          <Product />
        </div>

        <div className="relative">
          <About />
        </div>
      </div>

      {/* Scroll to top button with enhanced animation */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-br from-hopesera-blue to-hopesera-light-blue text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 opacity-90 hover:opacity-100 z-40 animate-bounce-subtle"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
      
      <Footer />
    </div>
  );
}
