'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import products from '../data/products';

export default function Product() {
  // Add proper type annotation to the state
  const [hoveredProductId, setHoveredProductId] = useState<string | number | null>(null);
  
  // Show only the first 4 products on the home page
  const featuredProducts = products.slice(0, 4);

  return (
    <div id='product' className="bg-gradient-to-b from-white to-pink-50/30 relative py-16 sm:py-24">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-100/30 blur-3xl -z-10 opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-pink-100/20 blur-3xl -z-10 opacity-50"></div>
      
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
        <div className="mb-10">
          <div className="inline-flex items-center rounded-full bg-pink-100/80 px-3 py-1 text-sm text-pink-700 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>Featured Products</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">Products</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-2"></div>
              <p className="mt-3 text-gray-600 max-w-lg">
                High-quality healthcare products designed specifically for women's health and well-being.
              </p>
            </div>
            
            <div className="hidden md:block">
              <Link 
                href="/products" 
                className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center"
              >
                View all products
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              {/* Colored top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-pink-500"></div>
              
              <Link href={product.href} className="block p-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                  <div 
                    className={`w-full h-full transition-all duration-300 ${hoveredProductId === product.id ? 'scale-105' : 'scale-100'}`}
                  >
                    <Image
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-90"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                  
                  {/* Quick view overlay */}
                  <div 
                    className={`absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity duration-300 ${hoveredProductId === product.id ? 'opacity-70' : 'opacity-0'}`}
                  >
                    <span className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium shadow-md">
                      Quick view
                    </span>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/80 backdrop-blur-sm text-xs px-2 py-1 rounded-full font-medium text-gray-700 shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-base text-gray-900 font-medium">
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      product.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.available ? 'In Stock' : 'Out of Stock'}
                    </span>
                    
                    <div className="text-indigo-600 text-xs font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      View details
                      <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Mobile-only view all link */}
        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/products" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Browse our complete catalog
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
