'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import products from '../data/products';

export default function ProductsPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-indigo-50/30 to-white min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
            Our Products
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-2 rounded-full"
          />
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Explore our range of high-quality fertility products designed to support your journey.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100"
              variants={productVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Link href={product.href} className="block flex-grow">
                <div className="aspect-square w-full overflow-hidden rounded-t-xl bg-gray-100 relative group">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    whileHover={{ opacity: 1 }}
                  />
                  <motion.div
                    className="h-full w-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                      width={300}
                      height={300}
                    />
                  </motion.div>
                  
                  {/* Category tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-white/80 backdrop-blur-sm text-gray-800">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="mt-3 text-sm text-gray-600 line-clamp-3">{product.description}</p>
                  
                  <div className="mt-5 flex justify-between items-center">
                    <motion.span 
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        product.available 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-red-100 text-red-800 border border-red-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {product.available ? 'In Stock' : 'Out of Stock'}
                    </motion.span>
                    
                    <motion.div 
                      className="text-indigo-600"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}