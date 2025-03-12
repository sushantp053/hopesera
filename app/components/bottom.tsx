'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HomeIcon, ShoppingBagIcon, UserIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-50">
      <div className="flex justify-between items-center px-6 py-3 max-w-4xl mx-auto">
        <Link href="/">
          <div className="flex items-center text-gray-700 hover:text-indigo-600 transition-transform hover:scale-110">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="mr-3" />
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center text-gray-700 hover:text-indigo-600 transition-transform hover:scale-110">
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs">Home</span>
          </div>
        </Link>
        <Link href="/products">
          <div className="flex flex-col items-center text-gray-700 hover:text-indigo-600 transition-transform hover:scale-110">
            <ShoppingBagIcon className="h-6 w-6" />
            <span className="text-xs">Products</span>
          </div>
        </Link>
        <Link href="/about">
          <div className="flex flex-col items-center text-gray-700 hover:text-indigo-600 transition-transform hover:scale-110">
            <InformationCircleIcon className="h-6 w-6" />
            <span className="text-xs">About Us</span>
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex flex-col items-center text-gray-700 hover:text-indigo-600 transition-transform hover:scale-110">
            <UserIcon className="h-6 w-6" />
            <span className="text-xs">Profile</span>
          </div>
        </Link>
      </div>
    </div>
  )
} 
