'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import logo from '../../public/hopsera1.png'
import { DNAHelix } from './anime/dnahelix'
import { FloatingCells } from './anime/floatingcell'
import { Bubbles } from './anime/bubble'
import { WavingBackground } from './anime/waving'
import { PulsarEffect } from './anime/pulser'

// Fix: Add proper type annotation for isVisible prop
interface LoadingSpinnerProps {
  isVisible: boolean;
}

// Move LoadingSpinner outside of the Hero component
const LoadingSpinner = ({ isVisible }: LoadingSpinnerProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 to-indigo-50 z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-20 h-20"
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Loading spinner elements */}
            <motion.div 
              className="absolute w-full h-full rounded-full border-t-2 border-indigo-500"
              animate={{ 
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Rest of the loading spinner code */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Hero() {
  // State and refs remain unchanged
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hoverGlow, setHoverGlow] = useState(false)
  const controls = useAnimation()
  
  // Fix: Add proper type annotation to useRef
  const particlesRef = useRef<HTMLDivElement>(null)
  
  // All existing useEffects and functions remain the same
  
  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsLoading(false)
      
      await controls.start("hidden")
      await new Promise(resolve => setTimeout(resolve, 300))
      setIsLoaded(true)
      await controls.start("visible")
    }
    
    sequence()
    
    if (particlesRef.current) {
      for (let i = 0; i < 24; i++) {
        createParticle(particlesRef.current)
      }
    }
    
    return () => {
      if (particlesRef.current) {
        while (particlesRef.current.firstChild) {
          particlesRef.current.removeChild(particlesRef.current.firstChild);
        }
      }
    }
  }, [controls])

  const createParticle = (container: HTMLDivElement) => {
    // Existing particle creation code
    // ...
    const particle = document.createElement('div')
    particle.classList.add('particle')
    
    const size = Math.random() * 8 + 2
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`
    
    particle.style.opacity = `${Math.random() * 0.6 + 0.2}`
    
    const colors = [
      '#05b6e8', '#2f4583', '#e2a8ca', '#9fcbeb', '#d6e8fa', 
      '#FFB5A7', '#FCD5CE', '#F8EDEB', '#F9DCC4', '#8ECAE6',
      '#BDE0FE', '#A2D2FF', '#CDB4DB', '#FEC89A', '#D8E2DC'
    ]
    const color = colors[Math.floor(Math.random() * colors.length)]
    particle.style.backgroundColor = color
    
    container.appendChild(particle)
    
    const angle = Math.random() * Math.PI * 2
    const distance = Math.random() * 120 + 80
    const endX = Math.cos(angle) * distance
    const endY = Math.sin(angle) * distance
    
    particle.animate(
      [
        { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: particle.style.opacity },
        { transform: `translate(${endX / 3}px, ${endY / 3}px) rotate(${Math.random() * 180}deg) scale(${Math.random() * 0.5 + 0.8})`, opacity: particle.style.opacity },
        { transform: `translate(${endX * 2/3}px, ${endY * 2/3}px) rotate(${Math.random() * 270}deg) scale(${Math.random() * 0.4 + 0.6})`, opacity: `${Math.random() * 0.3 + 0.2}` },
        { transform: `translate(${endX}px, ${endY}px) rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.3 + 0.5})`, opacity: '0' }
      ],
      {
        duration: Math.random() * 15000 + 12000,
        iterations: 1,
        easing: 'cubic-bezier(0.42, 0, 0.58, 1)'
      }
    ).onfinish = () => {
      if (particle && container && container.contains(particle)) {
        container.removeChild(particle);
        createParticle(container);
      }
    }
  }

  // Keep existing animation variants but add type to parameter
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  }
  
  const itemVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -40 : 40,
      y: 20,
      scale: 0.9,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-pink-50 via-rose-100 to-purple-50">
      {/* Loading spinner */}
      <LoadingSpinner isVisible={isLoading} />
      
      {/* Enhanced subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('/texture.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>
      
      {/* Background image with improved overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/dalle.webp" 
          alt="Health Background"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover opacity-25"
          style={{
            objectPosition: 'center'
          }}
        />
        
        {/* Enhanced gradient overlay with more sophisticated animation */}
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(circle at 30% 30%, transparent 0%, rgba(252, 231, 243, 0.5) 70%, rgba(244, 211, 255, 0.6) 100%)",
              "radial-gradient(circle at 70% 60%, transparent 0%, rgba(242, 231, 253, 0.5) 70%, rgba(239, 246, 255, 0.6) 100%)",
              "radial-gradient(circle at 30% 70%, transparent 0%, rgba(252, 231, 243, 0.5) 70%, rgba(244, 211, 255, 0.6) 100%)",
              "radial-gradient(circle at 70% 30%, transparent 0%, rgba(242, 231, 253, 0.5) 70%, rgba(239, 246, 255, 0.6) 100%)",
              "radial-gradient(circle at 30% 30%, transparent 0%, rgba(252, 231, 243, 0.5) 70%, rgba(244, 211, 255, 0.6) 100%)",
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Particle container */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0"></div>
      
      {/* Animation components */}
      <DNAHelix />
      <FloatingCells />
      <Bubbles />
      <WavingBackground />
      <PulsarEffect />
      
      {/* Improved animated decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute top-10 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 opacity-20"
          animate={{
            x: [0, 30, -20, 0],
            scale: [1, 1.1, 0.9, 1],
            filter: ['blur(40px)', 'blur(50px)', 'blur(40px)'],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 -right-40 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-pink-100 to-rose-200 opacity-20"
          animate={{
            x: [0, -30, 20, 0],
            scale: [1, 0.9, 1.1, 1],
            filter: ['blur(45px)', 'blur(55px)', 'blur(45px)'],
            rotate: [0, -15, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* New decorative element - floating ring */}
        <motion.div
          className="absolute bottom-20 left-[15%] w-48 h-48 border-4 border-indigo-200/20 rounded-full opacity-30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 0.95, 1],
            y: [0, -10, 10, 0]
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="absolute top-0 left-[calc(50%-8px)] w-4 h-4 rounded-full bg-indigo-300/50"></div>
          <div className="absolute bottom-0 left-[calc(50%-6px)] w-3 h-3 rounded-full bg-pink-300/50"></div>
        </motion.div>

        {/* Medical SVG decorative element */}
        <motion.div
          className="absolute bottom-24 right-[10%] w-32 h-32 opacity-20 pointer-events-none"
          animate={{
            y: [0, -10, 0],
            rotate: [-5, 5, -5],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/medical.svg"
            alt="Medical Symbol"
            width={128}
            height={128}
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Content container with backdrop blur */}
      <div className="relative z-10 px-4 min-h-[100svh] flex flex-col justify-center items-center">
        <motion.div 
          className="w-full max-w-3xl py-16 sm:py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <AnimatePresence>
              {isLoaded && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="relative flex flex-col items-center"
                >
                  {/* Enhanced content container with glass effect */}
                  <motion.div 
                    className="relative w-full max-w-2xl mx-auto p-4 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/30 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {/* Subtle accent line at top */}
                    <div className="absolute top-0 left-[10%] right-[10%] h-1 bg-gradient-to-r from-indigo-300/60 via-pink-300/60 to-indigo-300/60 rounded-full"></div>
                    
                    <div className="flex flex-col items-center">
                      {/* Add "Welcome to" text above the logo */}
                      <motion.h2
                        custom={0}
                        variants={itemVariants}
                        className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 mb-2"
                        animate={{
                          textShadow: [
                            "0 0 0px rgba(47, 69, 131, 0)",
                            "0 0 4px rgba(5, 182, 232, 0.3)",
                            "0 0 0px rgba(47, 69, 131, 0)"
                          ]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      >
                        Welcome to
                      </motion.h2>
                      
                      <motion.h1 
                        custom={1}
                        variants={itemVariants}
                        animate={{ 
                          filter: hoverGlow 
                            ? "drop-shadow(0 0 15px rgba(5, 182, 232, 0.7))" 
                            : "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
                        }}
                        transition={{
                          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                          filter: { duration: 0.4 }
                        }}
                        whileHover={{ 
                          scale: 1.03,
                          transition: { duration: 0.3 }
                        }}
                        onHoverStart={() => setHoverGlow(true)} 
                        onHoverEnd={() => setHoverGlow(false)}
                      >
                        <Image
                          src={logo}
                          alt="HopeSera Logo"
                          className="object-contain w-full h-full"
                          width={500}
                          height={500}
                          priority
                        />
                        
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0"
                          animate={{ 
                            opacity: [0, 0.5, 0],
                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                          }}
                          transition={{ duration: 5, repeat: Infinity, repeatDelay: 3 }}
                        />
                        
                        <motion.div 
                          className="absolute inset-0 rounded-full opacity-0"
                          animate={{ 
                            boxShadow: [
                              "0 0 0 0 rgba(5, 182, 232, 0)",
                              "0 0 0 20px rgba(5, 182, 232, 0.1)",
                              "0 0 0 0 rgba(5, 182, 232, 0)"
                            ],
                            opacity: [0, 0.8, 0]
                          }}
                          transition={{ duration: 6, repeat: Infinity, repeatDelay: 2 }}
                        />
                      </motion.h1>
                    </div>
                    
                    <motion.p 
                      custom={2}
                      variants={itemVariants}
                      className="-mt-8 text-base md:text-lg font-medium text-gray-600 max-w-lg mx-auto"
                    >
                      <motion.span
                        animate={{
                          textShadow: [
                            "0 0 0px rgba(5, 182, 232, 0)",
                            "0 0 2px rgba(5, 182, 232, 0.3)",
                            "0 0 0px rgba(5, 182, 232, 0)"
                          ]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        Innovating Women&apos;s Healthcare with Compassion, Expertise, and Cutting-Edge Solutions.
                      </motion.span>
                    </motion.p>
                  </motion.div>
                  
                  {/* Buttons with enhanced animations */}
                  <motion.div 
                    custom={3}
                    variants={itemVariants}
                    className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-4"
                  >
                    <motion.a
                      href="#features"
                      className="w-full sm:w-auto rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm relative overflow-hidden group"
                      style={{ backgroundColor: '#05b6e8' }}
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 4px 12px rgba(5, 182, 232, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.span 
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                        animate={{ x: ["120%", "-120%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2.5 }}
                      />
                      
                      <span className="relative z-10 flex items-center justify-center">
                        <motion.svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 mr-1.5" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                          animate={{ rotate: [0, 10, 0, -10, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                        </motion.svg>
                        Explore Our Services
                      </span>
                    </motion.a>
                    
                    <motion.a
                      href="#product"
                      className="w-full sm:w-auto text-sm font-semibold rounded-md relative overflow-hidden"
                      style={{ color: '#05b6e8', border: '1px solid #05b6e8', padding: '0.625rem 1.25rem' }}
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 2px 8px rgba(5, 182, 232, 0.15)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.span 
                        className="absolute inset-0 opacity-0 rounded-md"
                        whileHover={{ 
                          opacity: 1,
                          boxShadow: ["0 0 0 1px rgba(5, 182, 232, 0.3)", "0 0 0 2px rgba(5, 182, 232, 0.6)", "0 0 0 1px rgba(5, 182, 232, 0.3)"]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      <span className="relative z-10 flex items-center justify-center">
                        Browse Products
                        <motion.svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 ml-1.5" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                          animate={{ 
                            x: [0, 3, 0],
                            opacity: [1, 0.7, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </motion.svg>
                      </span>
                    </motion.a>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}