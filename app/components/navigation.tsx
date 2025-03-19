'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Mission', href: '/#mission' },
  { name: 'Expertise', href: '/#expertise' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add scroll effect to nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to determine if a nav item is active
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.includes('#')) {
      return pathname === '/' && href.startsWith('/#');
    }
    if (href === '/products') return pathname === '/products' || pathname.startsWith('/products/');
    if (href === '/faq') return pathname === '/faq';
    return pathname.startsWith(href);
  };

  // Helper function to handle smooth scrolling for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links on homepage
    if (href.includes('#') && pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setMobileMenuOpen(false);
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-1' : 'bg-white/95 shadow-sm py-3'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-transform hover:scale-105 duration-300">
            <span className="sr-only">HopeSera</span>
            <img
              className="h-12 w-auto"
              src="/hopesarawide.jpeg"
              alt="HopeSera Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-hopesera-blue transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold py-2 px-3 ${
                isActive(item.href)
                  ? 'text-hopesera-blue'
                  : 'text-gray-900 hover:text-hopesera-pink'
              } transition-colors`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href="mailto:info@hopesera.com" 
            className="text-sm font-semibold leading-6 text-hopesera-blue hover:text-hopesera-pink transition-colors flex items-center gap-1 group"
          >
            info@hopesera.com 
            <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog 
        as="div" 
        className="lg:hidden" 
        open={mobileMenuOpen} 
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 slide-up-animation">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">HopeSera</span>
              <img
                className="h-8 w-auto"
                src="/hopesarawide.jpeg"
                alt="HopeSera"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-hopesera-pink transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      isActive(item.href)
                        ? 'text-hopesera-blue bg-hopesera-light-pink'
                        : 'text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="mailto:info@hopesera.com"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-hopesera-blue hover:bg-hopesera-cream"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}