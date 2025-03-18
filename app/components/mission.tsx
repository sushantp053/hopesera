'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HeartIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

export default function OurMission() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // For the heartbeat animation
  const [heartbeat, setHeartbeat] = useState(false);
  
  // Trigger heartbeat animation periodically
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setHeartbeat(true);
        setTimeout(() => setHeartbeat(false), 600);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [inView]);
  
  return (
    <div id="mission" className="py-24 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-100/50 blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-indigo-100/40 blur-3xl"
          animate={{ 
            scale: [1, 0.95, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* DNA strand decoration */}
        <div className="absolute right-10 top-1/4 h-64 w-8 opacity-30 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={`dna-${i}`}
              className="absolute w-8 h-[3px]"
              style={{ top: `${i * 24}px`, backgroundColor: i % 2 === 0 ? '#8B5CF6' : '#EC4899' }}
              animate={{ 
                rotateY: [0, 180, 360],
                opacity: [0.4, 0.7, 0.4]
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
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-indigo-200/30"
            style={{ 
              width: 4 + Math.random() * 8, 
              height: 4 + Math.random() * 8,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -20 - Math.random() * 30, 0],
              x: [0, 10 - Math.random() * 20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Main content with ref for intersection observer */}
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <motion.div 
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-pink-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pink-50/30 pointer-events-none" />
          
          {/* Top decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          
          <div className="relative text-center">
            {/* Animated icon */}
            <motion.div 
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1, rotate: [0, 5, 0, -5, 0] } : { scale: 0 }}
              transition={{ 
                scale: { duration: 0.5, type: "spring", stiffness: 200, damping: 10 },
                rotate: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            >
              <div className="relative inline-flex items-center justify-center">
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: heartbeat 
                      ? [
                          "0 0 0 0 rgba(236, 72, 153, 0)",
                          "0 0 0 15px rgba(236, 72, 153, 0.3)",
                          "0 0 0 0 rgba(236, 72, 153, 0)"
                        ]
                      : "0 0 0 0 rgba(236, 72, 153, 0)"
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <HeartIconSolid 
                    className="h-12 w-12 text-pink-500" 
                    aria-hidden="true"
                  />
                </motion.div>
                <HeartIcon 
                  className={`h-12 w-12 ${heartbeat ? 'text-pink-600' : 'text-pink-500'}`}
                  aria-hidden="true"
                />
              </div>
            </motion.div>
            
            {/* Title with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                <motion.span
                  className="inline-block"
                  animate={{ 
                    color: inView ? ["#4F46E5", "#7C3AED", "#4F46E5"] : "#4F46E5"
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  Our Mission
                </motion.span>
              </h2>
              
              {/* Animated underline */}
              <motion.div 
                className="h-1 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-3"
                initial={{ width: 0 }}
                animate={inView ? { width: 96 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>
            
            {/* Mission statement with staggered animation */}
            <div className="mt-6 relative">
              <motion.div 
                className="absolute -left-2 top-0 h-full w-1 bg-pink-100 rounded-full" 
                initial={{ height: 0 }}
                animate={inView ? { height: '100%' } : { height: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              
              <motion.p 
                className="text-gray-700 text-lg sm:text-xl leading-relaxed text-left pl-4"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span className="font-medium">At <span className="text-pink-600">Hope Sera Pvt.Ltd</span>,</span> our mission is to 
                <motion.span
                  className="inline-block mx-1 font-medium text-indigo-600"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  empower women
                </motion.span> 
                by providing innovative healthcare solutions that support their well-being and quality of life.
              </motion.p>
              
              <motion.p 
                className="mt-4 text-gray-700 text-lg sm:text-xl leading-relaxed text-left pl-4"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                We are committed to advancing medical research, offering 
                <motion.span
                  className="inline-block mx-1 font-medium text-pink-600"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  compassionate care
                </motion.span>, 
                and promoting health education to inspire healthier communities.
              </motion.p>
            </div>
            
            {/* Animated sparkles elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute pointer-events-none"
                style={{ 
                  top: `${20 + i * 30}%`, 
                  left: i % 2 === 0 ? '5%' : '95%', 
                  transform: i % 2 === 0 ? 'translateX(-50%)' : 'translateX(-50%)'
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { 
                  scale: [0, 1, 0],
                  opacity: [0, 0.7, 0],
                  y: [0, -20, 0],
                  x: i % 2 === 0 ? [0, 10, 0] : [0, -10, 0]
                } : { scale: 0, opacity: 0 }}
                transition={{ 
                  duration: 4,
                  delay: i * 2 + 1,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              >
                <SparklesIcon className="h-6 w-6 text-indigo-300" aria-hidden="true" />
              </motion.div>
            ))}
            
            {/* Call to action button */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}