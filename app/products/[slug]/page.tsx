'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import products from '../../data/products';

// Add additional product details that aren't in the main list
const productDetails = {
  'letrozole': {
    longDescription: 'Letrozole is an oral medication that stimulates the ovaries to release eggs. It works by temporarily lowering estrogen levels, which triggers the pituitary gland to release more FSH, stimulating the growth of ovarian follicles containing eggs.',
    dosage: '2.5mg tablets',
    usage: 'Take one tablet daily for 5 days, starting on the 3rd day of your cycle',
    sideEffects: 'May include hot flashes, headaches, and fatigue',
  },
  'estradial': {
    longDescription: 'Estradiol is a form of estrogen, a female hormone that regulates many processes in the body. It supports the development of the uterine lining during fertility treatments, particularly in IVF cycles.',
    dosage: '1mg tablets',
    usage: 'As directed by your fertility specialist',
    sideEffects: 'May include breast tenderness, nausea, and headaches',
  },
  'fertserum': {
    longDescription: 'Fertserum is an advanced supplement designed to improve egg quality and enhance overall reproductive health. It contains a proprietary blend of antioxidants, vitamins, and minerals specifically formulated to support fertility.',
    dosage: '5ml daily',
    usage: 'Take one teaspoon daily with food',
    sideEffects: 'Generally well-tolerated with minimal side effects',
  },
  'vitroarg': {
    longDescription: 'Vitroarg is specifically designed to support in vitro fertilization procedures. It contains L-arginine and other nutrients that help improve blood flow to the reproductive organs, potentially increasing the chances of successful implantation.',
    dosage: '500mg capsules',
    usage: 'Take two capsules twice daily throughout your IVF cycle',
    sideEffects: 'May include digestive discomfort in some individuals',
  },
  'fertsermm': {
    longDescription: 'FertSerum-m is a premium fertility supplement formulated with a unique blend of vitamins, minerals, and herbal extracts to enhance reproductive health naturally. It works by addressing multiple factors involved in fertility, including hormone balance and reproductive cell health.',
    dosage: '2 capsules daily',
    usage: 'Take with a meal, preferably in the morning',
    sideEffects: 'Rare and mild digestive effects may occur',
  },
  'irosera': {
    longDescription: 'Irosera-XT is an advanced formulation designed specifically to support ovarian function and egg quality. It contains a proprietary blend of antioxidants and nutrients that help protect egg cells from oxidative stress and support optimal development.',
    dosage: '1 tablet twice daily',
    usage: 'Take consistently for at least 3 months for optimal results',
    sideEffects: 'May cause mild nausea if taken on empty stomach',
  },
  'pro-powder': {
    longDescription: 'TestoBlend is a carefully balanced formula containing zinc, selenium, and herbal extracts to support healthy testosterone levels for male fertility. This supplement helps maintain proper sperm production and quality.',
    dosage: '1 tablet daily',
    usage: 'Take with breakfast for optimal absorption',
    sideEffects: 'Generally well-tolerated with rare reports of digestive discomfort',
  },
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState('description');
  
  // Get additional details for this product
  const details = productDetails[slug as keyof typeof productDetails] || {
    longDescription: product?.description || '',
    dosage: 'As directed',
    usage: 'Follow instructions provided',
    sideEffects: 'Consult healthcare provider for details',
  };

  if (!product) {
    return notFound();
  }
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-blue-50/20 to-white min-h-screen py-8">
      <motion.div 
        className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Enhanced back button */}
        <motion.nav 
          className="mb-8" 
          variants={fadeIn}
        >
          <Link href="/products" className="group flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            <motion.span 
              className="mr-2 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm group-hover:shadow group-hover:bg-blue-50 transition-all"
              whileHover={{ x: -3, transition: { duration: 0.2 } }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </motion.span>
            <span>Back to Products</span>
          </Link>
        </motion.nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-start">
          {/* Product Image with animations */}
          <motion.div 
            className="lg:sticky lg:top-20"
            variants={fadeIn}
          >
            <motion.div 
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-white p-4"
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-xl"
              >
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-auto object-contain"
                  width={600}
                  height={600}
                  priority
                />
              </motion.div>
              
              {/* Image gallery indicator dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}
                    whileHover={{ scale: 1.5 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Product Details */}
          <motion.div 
            className="mt-8 lg:mt-0"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <motion.div 
                className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3"
                whileHover={{ scale: 1.05 }}
              >
                {product.category}
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
                {product.name}
              </h1>

              <div className="mt-3 flex items-center gap-4">
                <motion.span 
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    product.available 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {product.available ? 'In Stock' : 'Out of Stock'}
                </motion.span>
                
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <motion.svg
                        key={rating}
                        className={`h-5 w-5 ${rating < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + rating * 0.1 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-gray-500">Based on 42 reviews</p>
                </div>
              </div>
            </motion.div>

            {/* Product description */}
            <motion.div 
              className="mt-8"
              variants={fadeIn}
            >
              {/* Tab navigation */}
              <div className="border-b border-gray-200">
                <div className="flex space-x-8">
                  {['description', 'details', 'contact'].map((tab) => (
                    <motion.button
                      key={tab}
                      className={`pb-4 px-1 text-sm font-medium ${
                        activeTab === tab 
                          ? 'text-blue-600 border-b-2 border-blue-500' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveTab(tab)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              {/* Tab content */}
              <div className="py-6">
                {activeTab === 'description' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="prose prose-blue max-w-none"
                  >
                    <p className="text-gray-700 leading-relaxed">{details.longDescription}</p>
                    
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                        <div className="flex-shrink-0 p-3 rounded-full bg-blue-100">
                          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-blue-800">Clinically Tested</h3>
                          <p className="mt-1 text-sm text-blue-600">Formulated by fertility experts</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-green-50 rounded-xl">
                        <div className="flex-shrink-0 p-3 rounded-full bg-green-100">
                          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-green-800">Natural Ingredients</h3>
                          <p className="mt-1 text-sm text-green-600">Pure quality supplements</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'details' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <dl className="divide-y divide-gray-200">
                      <motion.div 
                        className="py-4 flex justify-between"
                        whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.3)" }}
                      >
                        <dt className="text-sm font-medium text-gray-500">Dosage</dt>
                        <dd className="text-sm font-semibold text-gray-900">{details.dosage}</dd>
                      </motion.div>
                      <motion.div 
                        className="py-4 flex justify-between"
                        whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.3)" }}
                      >
                        <dt className="text-sm font-medium text-gray-500">Recommended Usage</dt>
                        <dd className="text-sm font-semibold text-gray-900">{details.usage}</dd>
                      </motion.div>
                      <motion.div 
                        className="py-4 flex justify-between"
                        whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.3)" }}
                      >
                        <dt className="text-sm font-medium text-gray-500">Possible Side Effects</dt>
                        <dd className="text-sm font-semibold text-gray-900">{details.sideEffects}</dd>
                      </motion.div>
                      <motion.div 
                        className="py-4 flex justify-between"
                        whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.3)" }}
                      >
                        <dt className="text-sm font-medium text-gray-500">Product ID</dt>
                        <dd className="text-sm font-semibold text-gray-900">HS-{product.id}-{slug}</dd>
                      </motion.div>
                      <motion.div 
                        className="py-4 flex justify-between"
                        whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.3)" }}
                      >
                        <dt className="text-sm font-medium text-gray-500">Storage</dt>
                        <dd className="text-sm font-semibold text-gray-900">Store in a cool, dry place away from direct sunlight</dd>
                      </motion.div>
                    </dl>
                  </motion.div>
                )}
                
                {activeTab === 'contact' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 p-2 rounded-full bg-blue-100">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-blue-800">Contact Information</h3>
                        <p className="mt-1 text-gray-600">We're here to help with any questions about {product.name}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-3">
                      <p className="flex items-center text-sm text-gray-700">
                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email: <span className="ml-2 font-medium">info@hopesera.com</span>
                      </p>
                      <p className="flex items-center text-sm text-gray-700">
                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Phone: <span className="ml-2 font-medium">(+91) 9225515554</span>
                      </p>
                      <p className="flex items-center text-sm text-gray-700">
                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Hours: <span className="ml-2 font-medium">Monday-Friday, 9AM-6PM IST</span>
                      </p>
                    </div>
                    
                    <motion.button 
                      className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium flex justify-center items-center"
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      Submit an Inquiry
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>
            
            {/* Action buttons */}
            {product.available && (
              <motion.div 
                className="mt-6"
                variants={fadeIn}
              >
                <motion.button 
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 px-8 rounded-lg font-medium shadow-lg flex justify-center items-center"
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Request Product Sample
                </motion.button>
                
                <div className="mt-4 flex space-x-3">
                  <motion.button 
                    className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex justify-center items-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Ask a Question
                  </motion.button>
                  <motion.button 
                    className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex justify-center items-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Save for Later
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}