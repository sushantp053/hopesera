import Image from 'next/image';
import Link from 'next/link';
import products from '../data/products';

export default function Product() {
  // Show only the first 4 products on the home page
  const featuredProducts = products.slice(0, 4);

  return (
    <div id='product' className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h2>
          <Link 
            href="/products" 
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            View all products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative border rounded-lg p-4 shadow hover:shadow-md transition">
              <Link href={product.href} className="block">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200">
                  <Image
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="w-full h-full object-cover object-center group-hover:opacity-75 lg:h-80"
                    width={300}
                    height={300}
                    priority
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm text-gray-700 font-semibold">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  <div className="mt-2 flex justify-between items-center">
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
