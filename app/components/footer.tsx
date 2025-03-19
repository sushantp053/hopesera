'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import wide from '../../public/hopsera1.png'

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80"></div>
        
        <motion.div 
          className="absolute top-20 -right-32 w-64 h-64 rounded-full bg-pink-500/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl"
          animate={{ 
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      {/* Contact form section */}
      <motion.div 
        ref={ref}
        id="contact" 
        className="max-w-5xl mx-auto px-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-10">
          <motion.h2 
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">Touch</span>
          </motion.h2>
          
          <motion.div
            className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto my-4"
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have questions or want to learn more about our services? Reach out to us.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div 
            className="md:col-span-2"
            variants={fadeInUp}
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 bg-gray-700/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 bg-gray-700/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white" 
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 bg-gray-700/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white" 
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 bg-gray-700/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white" 
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-medium rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ x: ["120%", "-120%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div 
            className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-300">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-sm">
                  OFFICE NO 2, GROUND FLOOR, GANESH VILLAS SAHAJIVAN SOCIETY, PAPADE VASTI PHURSUNGI, PUNE
                </span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@hopesera.com" className="text-indigo-300 hover:text-white transition-colors">
                  info@hopesera.com
                </a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919225515554" className="text-indigo-300 hover:text-white transition-colors">
                  +91 9225515554
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-white">Follow Us</h4>
              <div className="flex space-x-3">
                <motion.a 
                  href="https://www.facebook.com/share/p/1BknNJGpAd/" 
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-indigo-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://www.instagram.com/hope_sera_pvt_ltd" 
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-pink-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </motion.a>
                
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Footer content */}
      <div className="max-w-5xl mx-auto px-6 pt-12 border-t border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col items-start mb-4">
              <div className="w-full max-w-[150px] mb-4 relative">
                {/* Made background more transparent while maintaining visibility */}
                <motion.div 
                  className="p-3 rounded-lg bg-white/70 shadow-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    alt="Hope Sera Logo"
                    src={wide}
                    className="h-auto w-full object-contain"
                    width={170}
                    height={55}
                    priority
                  />
                </motion.div>
                
                {/* Enhanced colorful glow effect with increased opacity */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 rounded-lg blur-sm -z-10"></div>
                
                {/* Enhanced outer glow for better depth */}
                <div className="absolute -inset-3 bg-white/15 rounded-xl blur-md -z-20"></div>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Innovative healthcare solutions empowering women worldwide.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-indigo-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#home" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#features" className="text-gray-300 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/#product" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-indigo-300">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund" className="text-gray-300 hover:text-white transition-colors">Return Policy</Link></li>
              <li><Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping Info</Link></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-indigo-300">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Stay updated with the latest news and special offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-white"
              />
              <button 
                type="submit" 
                className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-r-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="text-center mt-12 pt-6 border-t border-gray-700 text-sm text-gray-400 max-w-5xl mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            &copy; {new Date().getFullYear()} Hope Sera Pvt.Ltd. All rights reserved.
          </div>
          <div className="mt-3 md:mt-0">
            Developed with ❤️ by <Link href="https://macmads.com/" className="text-indigo-400 hover:text-indigo-300 transition-colors">Macmads</Link>
          </div>
        </div>
      </motion.div>
      
      {/* Back to top button */}
      <motion.a 
        href="#top" 
        className="fixed bottom-6 right-6 w-10 h-10 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-indigo-700 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.a>
      
      {/* Add CSS for floating particles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
          }
          75% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
        }
      `}</style>
    </footer>
  );
}