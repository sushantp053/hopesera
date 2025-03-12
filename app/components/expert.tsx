'use client'

import {  SparklesIcon, PlusCircleIcon, StarIcon, AcademicCapIcon, BriefcaseIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

const expertise = [
  { name: 'Infertility', icon: SparklesIcon },
  { name: 'Rh Incompatibility', icon: StarIcon },
  { name: 'Endometriosis', icon: PlusCircleIcon },
  { name: 'Polycystic Ovary Syndrome (PCOS)', icon: AcademicCapIcon },
  { name: 'Postpartum Hemorrhage (PPH)', icon: BriefcaseIcon },
  { name: 'Luteal Phase Deficiency', icon: ClipboardDocumentCheckIcon },
]

export default function Expertise() {
  return (
    <div id="expertise" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-700 sm:text-4xl">Our Expertise</h2>
        <p className="mt-4 text-gray-600 text-lg">
          We specialize in providing innovative, effective treatments for a variety of medical conditions.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {expertise.map((item) => (
          <div key={item.name} className="flex flex-col items-center p-6 bg-indigo-50 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full mb-4">
              <item.icon className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
