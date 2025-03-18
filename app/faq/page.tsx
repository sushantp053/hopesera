'use client'

import { useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const faqs = [
  {
    question: "What types of women's health products does HopeSera offer?",
    answer: "HopeSera offers a comprehensive range of women's health products including menstrual care solutions, fertility tracking devices, pregnancy care items, menopause management products, and specialized nutritional supplements designed specifically for women's health needs."
  },
  {
    question: "Are HopeSera products clinically tested?",
    answer: "Yes, all HopeSera products undergo rigorous clinical testing and quality assurance processes. Our products are developed in collaboration with healthcare professionals and are manufactured following strict quality standards to ensure safety and efficacy."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is placed, you'll receive a confirmation email with a tracking number. You can use this number on our website's 'Order Tracking' section to monitor your shipment status in real-time."
  },
  {
    question: "What is HopeSera's return policy?",
    answer: "We offer a 30-day satisfaction guarantee on most products. If you're not completely satisfied, you can return unused items in their original packaging for a full refund or exchange. Please note that certain intimate health products cannot be returned once opened due to hygiene reasons."
  },
  {
    question: "Does HopeSera offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can view specific shipping information for your country during the checkout process."
  },
  {
    question: "How does HopeSera ensure product safety?",
    answer: "Product safety is our top priority. We use medical-grade materials where applicable, conduct extensive testing, and ensure all products meet or exceed regulatory requirements. Our quality control team inspects products at multiple stages of production."
  },
  {
    question: "Are HopeSera products environmentally friendly?",
    answer: "We are committed to sustainability and continuously work to reduce our environmental impact. Many of our products use eco-friendly materials, minimal packaging, and we're transitioning to fully recyclable or biodegradable packaging across our entire product line."
  },
  {
    question: "Can I speak with a healthcare professional about HopeSera products?",
    answer: "Yes, we have a team of healthcare professionals available for consultation. You can schedule a free consultation through our website or contact our customer service team who can connect you with an appropriate specialist."
  },
  {
    question: "Does HopeSera offer subscription services?",
    answer: "Yes, we offer convenient subscription options for regularly used products. Subscribers enjoy benefits including discounted pricing, free shipping, and the convenience of automatic delivery at your preferred frequency."
  },
  {
    question: "How can I become a HopeSera distributor or partner?",
    answer: "We welcome partnership inquiries. Please visit our 'Partnership' page or contact our business development team at partners@hopesera.com for information about distribution opportunities, healthcare provider partnerships, or other collaboration possibilities."
  }
]

export default function FAQPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7" style={{ color: '#05b6e8' }}>FAQ</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to common questions about our products, services, and women's healthcare solutions.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <div className="mx-auto w-full max-w-2xl">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Disclosure as="div" key={index} className="border-b border-gray-200 pb-4">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between text-left">
                          <span className="text-base font-semibold leading-7 text-gray-900">
                            {faq.question}
                          </span>
                          <ChevronDownIcon
                            className={`h-5 w-5 flex-none ${open ? 'rotate-180 transform' : ''} text-gray-500`}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Transition
                          show={open}
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="mt-2 text-sm leading-6 text-gray-600">
                            {faq.answer}
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-base text-gray-600">
            Didn't find what you're looking for? Contact our support team.
          </p>
          <div className="mt-6">
            <Link 
              href="/contact" 
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform hover:scale-105"
              style={{ backgroundColor: '#05b6e8' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 