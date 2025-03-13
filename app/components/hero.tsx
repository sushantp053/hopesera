'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [animateText, setAnimateText] = useState(false)

  useEffect(() => {
    setAnimateText(true)
  }, [])

  return (
    <div className="bg-gradient-to-br from-pink-50 via-rose-100 to-purple-50 relative min-h-screen overflow-hidden">
      {/* Background image container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/dalle.webp" // Change to direct public path reference
          alt="Health Background"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover opacity-30"
          style={{
            objectPosition: 'center'
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 px-6 pt-20 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance transition-all duration-1000 ease-out ${animateText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="text-gray-900">Welcome to </span>
              <span className="font-bold hover:scale-105 transition-transform duration-500 ease-in-out inline-block" style={{ color: '#2f4583' }}>Hope Sera</span>
            </h1>
            <p className="mt-6 md:mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 px-2">
              Innovating Women&apos;s Healthcare with Compassion, Expertise, and Cutting-Edge Solutions.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <a
                href="#features"
                className="w-full sm:w-auto rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform hover:scale-105"
                style={{ backgroundColor: '#05b6e8' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(5, 182, 232, 0.9)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#05b6e8'}
              >
                Get started
              </a>
              <a
                href="#product"
                className="w-full sm:w-auto text-sm/6 font-semibold rounded-md hover:bg-opacity-10 transition-all transform hover:scale-105"
                style={{ color: '#05b6e8', border: '1px solid #05b6e8', padding: '0.625rem 0.875rem' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(5, 182, 232, 0.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Move the keyframes animation to global stylesheet - using safer approach for next.js */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        :global(.bg-gradient-to-br) {
          background-size: 400% 400%;
          animation: gradient 10s ease infinite;
        }
      `}</style>
    </div>
  )
}
