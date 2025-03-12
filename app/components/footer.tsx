'use client'

import Link from 'next/link'
import Image from 'next/image'
import wide from '../../public/hopesarawide.jpeg'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div id='contact' className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <Image
            alt="Hope Sera Logo"
            src={wide}
            className='h-12 w-auto'
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Get in Touch:</h3>
          <p>Address: Phursungi, Maharashtra, India - 412308</p>
          <p>Email: support@hopesera.com</p>
          <p>Phone: +91 956 7890</p>
          <hr></hr>
          <ul>
            <li><Link href="/privacy" className="hover:text-indigo-400">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul>
            <li><Link href="https://facebook.com" className="hover:text-indigo-400">Facebook</Link></li>
            <li><Link href="https://twitter.com" className="hover:text-indigo-400">Twitter</Link></li>
            <li><Link href="https://instagram.com" className="hover:text-indigo-400">Instagram</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Hope Sera. All rights reserved.
        Developed by Macmads
      </div>
    </footer>
  )
}
