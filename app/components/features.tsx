'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HeartIcon, ShieldCheckIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useInView } from 'react-intersection-observer'

const features = [
    {
      name: 'Comprehensive Care',
      description: 'Tailored healthcare services focusing on women\'s unique needs with holistic support.',
      icon: HeartIcon,
      color: 'from-pink-500 to-rose-400',
      delay: 0,
    },
    {
      name: 'Secure Health Data',
      description: 'Advanced security measures to ensure privacy and confidentiality of your health records.',
      icon: ShieldCheckIcon,
      color: 'from-indigo-500 to-blue-400',
      delay: 0.1,
    },
    {
      name: 'Community Support',
      description: 'Join a supportive community of women, sharing experiences and growing together.',
      icon: UserGroupIcon,
      color: 'from-purple-500 to-violet-400',
      delay: 0.2,
    },
    {
      name: 'Global Access',
      description: 'Accessible healthcare solutions for women around the world, anytime, anywhere.',
      icon: GlobeAltIcon,
      color: 'from-cyan-500 to-teal-400',
      delay: 0.3,
    },
]

// DNA double helix animation component
const DNAAnimation = () => {
  return (
    <div className="absolute right-0 top-10 h-64 w-24 opacity-10 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute h-full w-[2px] bg-rose-300 left-4"
        animate={{ 
          scaleY: [0.7, 1, 0.7],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute h-full w-[2px] bg-rose-300 right-4" 
        animate={{ 
          scaleY: [1, 0.7, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {[...Array(12)].map((_, i) => (
        <motion.div 
          key={`dna-strand-${i}`}
          className="absolute w-full h-[2px] bg-pink-300"
          style={{ top: `${i * 20 + 10}px` }}
          animate={{ 
            rotateY: [0, 180, 360],
            backgroundColor: ['rgb(249 168 212)', 'rgb(216 180 254)', 'rgb(249 168 212)'],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.2 % 1
          }}
        />
      ))}
    </div>
  );
};

// Bubbles animation component
const BubblesAnimation = () => {
  return (
    <div className="absolute left-0 bottom-0 h-64 w-full opacity-10 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 30 + 10; 
        const left = Math.random() * 100;
        const animDuration = Math.random() * 10 + 15;
        const delay = Math.random() * 10;
        
        return (
          <motion.div 
            key={`bubble-${i}`}
            className="absolute rounded-full border border-indigo-300"
            style={{ 
              width: size,
              height: size,
              left: `${left}%`,
              bottom: `-${size}px`,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: -300 - size,
              opacity: [0, 0.6, 0],
              scale: [1, 1.2, 0.8],
            }}
            transition={{ 
              duration: animDuration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  return (
    <div id='features' className="bg-white py-24 sm:py-32 overflow-hidden relative">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-pink-100/40 to-rose-100/40 blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-100/40 to-blue-100/40 blur-3xl"
          animate={{ 
            x: [0, -10, 0],
            y: [0, 30, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute -bottom-32 left-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-purple-100/30 to-violet-100/30 blur-3xl"
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      {/* DNA animation */}
      <DNAAnimation />
      
      {/* Bubbles animation */}
      <BubblesAnimation />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div ref={ref}>
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-base font-semibold"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ 
                background: 'linear-gradient(90deg, #8B5CF6, #EC4899)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}
            >
              Our Features
            </motion.h2>
            <motion.p 
              className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Empowering Women's Health
            </motion.p>
            <motion.p 
              className="mt-6 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Discover the core features designed to provide personalized, secure, and comprehensive healthcare services for women everywhere.
            </motion.p>
          </motion.div>
          <motion.div 
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <motion.div 
                  key={feature.name} 
                  className="relative p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.7, delay: 0.4 + feature.delay }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className={`absolute -top-5 left-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} shadow-md`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.1 + feature.delay } }}
                    >
                      <feature.icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </motion.div>
                  </motion.div>
                  <div className="ml-20">
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 mb-3"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + feature.delay }}
                    >
                      {feature.name}
                    </motion.h3>
                    <motion.div
                      className={`w-16 h-1 rounded-full mb-3 bg-gradient-to-r ${feature.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: '4rem' } : { width: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + feature.delay }}
                    />
                    <motion.p 
                      className="text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + feature.delay }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
        
        {/* Decorative cell elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => {
            const size = Math.random() * 8 + 4;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * 5;
            
            return (
              <motion.div
                key={`cell-${i}`}
                className="absolute rounded-full bg-pink-200/30"
                style={{ 
                  width: size, 
                  height: size, 
                  top: `${top}%`, 
                  left: `${left}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}