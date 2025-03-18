'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SparklesIcon, PlusCircleIcon, StarIcon, AcademicCapIcon, BriefcaseIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

// Enhanced expertise data with descriptions
const expertise = [
  { 
    name: 'Infertility', 
    icon: SparklesIcon,
    description: 'Innovative treatments and personalized care plans to help overcome fertility challenges.',
    gradient: 'from-pink-500 to-rose-400',
    delay: 0
  },
  { 
    name: 'Rh Incompatibility', 
    icon: StarIcon,
    description: 'Advanced solutions for managing pregnancy complications related to blood type incompatibility.',
    gradient: 'from-purple-500 to-indigo-400',
    delay: 0.1
  },
  { 
    name: 'Endometriosis', 
    icon: PlusCircleIcon,
    description: 'Comprehensive care for managing pain and symptoms associated with endometrial tissue growth.',
    gradient: 'from-cyan-500 to-blue-400',
    delay: 0.2
  },
  { 
    name: 'Polycystic Ovary Syndrome', 
    icon: AcademicCapIcon,
    description: 'Holistic approaches to hormone management, fertility, and long-term PCOS health concerns.',
    gradient: 'from-emerald-500 to-teal-400',
    delay: 0.3
  },
  { 
    name: 'Postpartum Hemorrhage', 
    icon: BriefcaseIcon,
    description: 'Rapid intervention and prevention protocols to ensure safe childbirth experiences.',
    gradient: 'from-amber-500 to-orange-400',
    delay: 0.4
  },
  { 
    name: 'Luteal Phase Deficiency', 
    icon: ClipboardDocumentCheckIcon,
    description: 'Specialized treatment for hormonal imbalances affecting menstrual cycles and fertility.',
    gradient: 'from-blue-500 to-indigo-400',
    delay: 0.5
  },
]

// Cell decoration component
interface FloatingCellProps {
  size: number;
  position: { [key: string]: string | number };
  delay: number;
}

const FloatingCell = ({ size, position, delay }: FloatingCellProps) => {
  return (
    <motion.div 
      className="absolute rounded-full bg-indigo-100/40"
      style={{ 
        width: size, 
        height: size, 
        ...position,
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.2, 0.4, 0.2],
        y: [0, -15, 0],
        x: [0, 5, 0],
        scale: [1, 1.05, 0.95, 1]
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut" 
      }}
    />
  );
};

export default function Expertise() {
  // Fix: Add proper type annotation to allow both null and number values
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  // Use intersection observer to trigger animations when scrolled into view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div id="expertise" className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-100/40 blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-pink-100/30 blur-3xl"
          animate={{ 
            scale: [1, 0.95, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* DNA-like vertical helix */}
        <div className="absolute right-10 bottom-10 h-64 w-8 opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div 
              key={`dna-${i}`}
              className="absolute w-8 h-[3px]"
              style={{ bottom: `${i * 24}px`, backgroundColor: i % 2 === 0 ? '#8B5CF6' : '#EC4899' }}
              animate={{ 
                rotateY: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.3 % 1
              }}
            />
          ))}
        </div>
        
        {/* Floating cells */}
        <FloatingCell size={10} position={{ top: '15%', left: '8%' }} delay={0} />
        <FloatingCell size={6} position={{ top: '45%', left: '15%' }} delay={1.5} />
        <FloatingCell size={8} position={{ top: '75%', left: '12%' }} delay={3} />
        <FloatingCell size={12} position={{ top: '20%', right: '12%' }} delay={2} />
        <FloatingCell size={7} position={{ top: '60%', right: '8%' }} delay={0.5} />
      </div>
      
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Heading section with animations */}
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="inline-block"
              animate={inView ? { 
                rotate: [0, 5, 0, -5, 0] 
              } : {}}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <SparklesIcon className="h-10 w-10 text-indigo-500 mx-auto mb-2" aria-hidden="true" />
            </motion.div>
            
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our 
              <motion.span
                className="relative inline-block ml-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600"
                animate={inView ? {
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                } : {}}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Expertise
              </motion.span>
            </h2>
          </motion.div>
          
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto mt-4"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p 
            className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            We specialize in providing innovative, evidence-based treatments for conditions 
            affecting women's reproductive health with compassion and personalized care.
          </motion.p>
        </motion.div>
        
        {/* Expertise grid with animated cards */}
        <motion.div 
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {expertise.map((item, index) => (
            <motion.div 
              key={item.name}
              className="relative bg-white rounded-xl shadow-md overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.3 + item.delay }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onMouseEnter={() => setActiveCard(index)} 
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${item.gradient}`} />
              
              <div className="p-6">
                <div className="flex items-start">
                  {/* Icon with animation */}
                  <motion.div 
                    className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md mr-4`}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 5,
                    }}
                    animate={activeCard === index ? { 
                      scale: [1, 1.05, 1],
                    } : {}}
                    transition={{ 
                      duration: 0.7,
                      repeat: activeCard === index ? 1 : 0,
                      ease: "easeInOut" 
                    }}
                  >
                    <item.icon className="h-8 w-8" aria-hidden="true" />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    
                    {/* Animated underline on hover */}
                    <motion.div 
                      className={`h-0.5 bg-gradient-to-r ${item.gradient} rounded-full mt-1`}
                      initial={{ width: 0 }}
                      animate={activeCard === index ? { width: '100%' } : { width: '30%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
                
                <motion.p 
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0.8 }}
                  animate={activeCard === index ? { opacity: 1 } : { opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.description}
                </motion.p>
                
              </div>
              
              {/* Background pattern */}
              <motion.div 
                className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-indigo-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={activeCard === index ? { scale: [0.8, 1], opacity: [0, 0.5] } : {}}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-medium rounded-full shadow-md overflow-hidden relative group"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span 
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={{ x: ["120%", "-120%"] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            
            <span className="relative z-10">Schedule a Consultation</span>
            
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2 relative z-10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
