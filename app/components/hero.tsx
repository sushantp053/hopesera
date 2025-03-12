'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import bgImage from '../../public/dalle.webp'

export default function Hero() {
  const [animateText, setAnimateText] = useState(false)

  useEffect(() => {
    setAnimateText(true)
  }, [])

  return (
    <div className="bg-gradient-to-br from-pink-50 via-rose-100 to-purple-50 animate-gradient bg-fixed min-h-screen">
      <div className="relative w-full h-screen">
        <Image
          src={bgImage}
          alt="Health Background"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-30"
        />
        <div className="relative isolate px-6 pt-20 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className={`text-5xl tracking-tight text-balance sm:text-7xl transition-transform duration-1000 ease-out ${animateText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <span className="text-gray-900">Welcome to </span>
                <span className="font-bold text-indigo-600 hover:text-rose-500 hover:scale-105 transition-transform duration-500 ease-in-out">Hope Sera</span>
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Innovating Women&apos;s Healthcare with Compassion, Expertise, and Cutting-Edge Solutions.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#features"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-transform transform hover:scale-105"
                >
                  Get started
                </a>
                <a
                  href="#product"
                  className="text-sm/6 font-semibold text-gray-900 border border-indigo-600 px-3 py-2 rounded-md hover:bg-indigo-50 transition-transform transform hover:scale-105 hover:border-indigo-800"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 10s ease infinite;
        }
      `}</style>
    </div>
  )
}
