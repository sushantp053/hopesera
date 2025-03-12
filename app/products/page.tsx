import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import products from '../data/products';

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Products</h1>
          <p className="mt-4 max-w-xl mx-auto text-base text-gray-500">
            Explore our range of high-quality fertility products designed to support your journey.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <Link href={product.href} className="block flex-grow">
                <div className="aspect-square w-full overflow-hidden rounded-t-lg bg-gray-200">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  <div className="mt-4 flex justify-end items-center">
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${product.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {product.available ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}