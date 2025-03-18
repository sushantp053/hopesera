'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  // Fix: Add proper type to useRef for DOM element
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add floating particles when component mounts
    if (particlesRef.current) {
      for (let i = 0; i < 20; i++) {
        createParticle(particlesRef.current);
      }
    }
    
    // Cleanup function to remove particles
    return () => {
      if (particlesRef.current) {
        while (particlesRef.current.firstChild) {
          particlesRef.current.removeChild(particlesRef.current.firstChild);
        }
      }
    };
  }, []);
  
  // Fix: Add proper type for container parameter
  const createParticle = (container: HTMLDivElement) => {
    const particle = document.createElement('div');
    
    // Random size between 3-8px
    const size = 3 + Math.random() * 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Make it round
    particle.style.borderRadius = '50%';
    
    // Random position
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    particle.style.left = `${xPos}%`;
    particle.style.top = `${yPos}%`;
    particle.style.position = 'absolute';
    
    // Random opacity
    particle.style.opacity = (0.2 + Math.random() * 0.4).toString();
    
    // Random color - soft pastels for medical theme
    const colors = ['#F9A8D4', '#C4B5FD', '#A5B4FC', '#BAE6FD', '#FEE2E2'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = color;
    
    // Add animation
    const duration = 10 + Math.random() * 20;
    const xMove = -20 + Math.random() * 40;
    const yMove = -20 + Math.random() * 40;
    
    particle.animate([
      { transform: 'translate(0, 0)' },
      { transform: `translate(${xMove}px, ${yMove}px)` },
      { transform: 'translate(0, 0)' }
    ], {
      duration: duration * 1000,
      iterations: Infinity,
      easing: 'ease-in-out'
    });
    
    container.appendChild(particle);
  };

  return (
    <div id='about' className="relative bg-gradient-to-b from-white to-blue-50 py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div ref={particlesRef} className="absolute inset-0">
          {/* Particles will be added here with JS */}
        </div>
        
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-100/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-indigo-100/30 blur-3xl"></div>
        
        {/* DNA strand decorative element */}
        <div className="absolute left-10 top-1/4 h-64 w-4 opacity-10 hidden lg:block">
          {[...Array(8)].map((_, i) => (
            <div 
              key={`dna-${i}`}
              className="absolute w-16 h-[2px]"
              style={{ 
                top: `${i * 24}px`, 
                left: '-20px',
                backgroundColor: i % 2 === 0 ? '#8B5CF6' : '#EC4899',
                transform: `rotateY(${i * 45}deg)`,
                opacity: 0.4 + (i % 2) * 0.2
              }}
            ></div>
          ))}
        </div>
      </div>

      <div ref={ref} className="relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="lg:grid lg:grid-cols-2">
              <div className="relative p-10 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Our Story</span>
                  </div>
                  
                  <motion.h2 
                    className="text-3xl font-bold text-gray-900 sm:text-4xl"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">HopeSera</span>
                  </motion.h2>
                  
                  <motion.div
                    className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full my-4"
                    initial={{ width: 0 }}
                    animate={inView ? { width: 80 } : { width: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />
                  
                  <div className="space-y-4">
                    <motion.p 
                      className="text-gray-600 text-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      At <span className="font-medium text-indigo-700">HopeSera</span>, we are dedicated to revolutionizing women&apos;s healthcare with
                      innovative solutions and compassionate care. Our mission is to empower
                      women through accessible, effective treatments, and holistic support.
                    </motion.p>
                    
                    <motion.p 
                      className="text-gray-600 text-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      With a team of healthcare professionals, researchers, and innovators,
                      we strive to make a difference in the lives of women globally. We
                      believe in a future where every woman receives the healthcare she
                      deserves.
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="mt-8 flex gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="flex flex-col items-center p-4 bg-gradient-to-br from-white to-indigo-50 rounded-lg border border-indigo-100 shadow-sm">
                      <div className="text-3xl font-bold text-indigo-700">10+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gradient-to-br from-white to-pink-50 rounded-lg border border-pink-100 shadow-sm">
                      <div className="text-3xl font-bold text-pink-700">20k+</div>
                      <div className="text-sm text-gray-600">Women Helped</div>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gradient-to-br from-white to-purple-50 rounded-lg border border-purple-100 shadow-sm">
                      <div className="text-3xl font-bold text-purple-700">95%</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              
              <div className="relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-pink-600 transform -skew-x-6"
                  initial={{ opacity: 0, x: 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                
                <motion.div
                  className="relative h-full p-8 flex flex-col justify-center"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <blockquote className="text-white">
                    <svg className="absolute top-8 left-8 transform -translate-x-3 -translate-y-2 h-12 w-12 text-white/30" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    
                    <p className="relative text-xl font-medium text-white">
                      Our vision is to create a world where women have equal access to healthcare innovations and where their unique health needs are prioritized and addressed with the utmost care and respect.
                    </p>
                    
                    <div className="relative mt-8 flex items-center">
                      <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-white font-medium">Dr. Sarah Chen</p>
                        <p className="text-indigo-200 text-sm">Founder & Chief Medical Officer</p>
                      </div>
                    </div>
                  </blockquote>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="p-5 bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex flex-wrap justify-between items-center text-center gap-4">
                <div className="w-full md:w-auto">
                  <span className="font-semibold">Join our journey to transform women&apos;s healthcare</span>
                </div>
                <div className="w-full md:w-auto">
                  <a 
                    href="#contact" 
                    className="inline-block px-5 py-2 bg-white text-indigo-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}