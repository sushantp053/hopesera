import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import products from '../../data/products';

// Add additional product details that aren't in the main list
const productDetails = {
  'letrozole': {
    longDescription: 'Letrozole is an oral medication that stimulates the ovaries to release eggs. It works by temporarily lowering estrogen levels, which triggers the pituitary gland to release more FSH, stimulating the growth of ovarian follicles containing eggs.',
    dosage: '2.5mg tablets',
    usage: 'Take one tablet daily for 5 days, starting on the 3rd day of your cycle',
    sideEffects: 'May include hot flashes, headaches, and fatigue',
  },
  'estradial': {
    longDescription: 'Estradiol is a form of estrogen, a female hormone that regulates many processes in the body. It supports the development of the uterine lining during fertility treatments, particularly in IVF cycles.',
    dosage: '1mg tablets',
    usage: 'As directed by your fertility specialist',
    sideEffects: 'May include breast tenderness, nausea, and headaches',
  },
  'fertserum': {
    longDescription: 'Fertserum is an advanced supplement designed to improve egg quality and enhance overall reproductive health. It contains a proprietary blend of antioxidants, vitamins, and minerals specifically formulated to support fertility.',
    dosage: '5ml daily',
    usage: 'Take one teaspoon daily with food',
    sideEffects: 'Generally well-tolerated with minimal side effects',
  },
  'vitroarg': {
    longDescription: 'Vitroarg is specifically designed to support in vitro fertilization procedures. It contains L-arginine and other nutrients that help improve blood flow to the reproductive organs, potentially increasing the chances of successful implantation.',
    dosage: '500mg capsules',
    usage: 'Take two capsules twice daily throughout your IVF cycle',
    sideEffects: 'May include digestive discomfort in some individuals',
  },
  'fertiboost': {
    longDescription: 'FertiBoost is a premium fertility supplement formulated with a unique blend of vitamins, minerals, and herbal extracts to enhance reproductive health naturally. It works by addressing multiple factors involved in fertility, including hormone balance and reproductive cell health.',
    dosage: '2 capsules daily',
    usage: 'Take with a meal, preferably in the morning',
    sideEffects: 'Rare and mild digestive effects may occur',
  },
  'ovasupport': {
    longDescription: 'OvaSupport is an advanced formulation designed specifically to support ovarian function and egg quality. It contains a proprietary blend of antioxidants and nutrients that help protect egg cells from oxidative stress and support optimal development.',
    dosage: '1 tablet twice daily',
    usage: 'Take consistently for at least 3 months for optimal results',
    sideEffects: 'May cause mild nausea if taken on empty stomach',
  },
  'testoblend': {
    longDescription: 'TestoBlend is a carefully balanced formula containing zinc, selenium, and herbal extracts to support healthy testosterone levels for male fertility. This supplement helps maintain proper sperm production and quality.',
    dosage: '1 tablet daily',
    usage: 'Take with breakfast for optimal absorption',
    sideEffects: 'Generally well-tolerated with rare reports of digestive discomfort',
  },
  'embryovital': {
    longDescription: 'EmbryoVital is a specialized nutritional supplement formulated to provide optimal support for embryo development during IVF treatment. It contains specific nutrients that research suggests may improve implantation rates and early embryonic development.',
    dosage: '2 capsules daily',
    usage: 'Start taking at least 2 weeks before embryo transfer and continue through first trimester',
    sideEffects: 'No significant side effects reported',
  },
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);
  
  // Get additional details for this product
  const details = productDetails[slug as keyof typeof productDetails] || {
    longDescription: product?.description || '',
    dosage: 'As directed',
    usage: 'Follow instructions provided',
    sideEffects: 'Consult healthcare provider for details',
  };

  if (!product) {
    return notFound();
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <nav className="mb-4">
          <Link href="/products" className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </Link>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 items-start">
          {/* Product Image - positioned at the top */}
          <div className="lg:sticky lg:top-20">
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-auto object-contain"
                width={600}
                height={600}
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-6 lg:mt-0">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

              <div className="mt-2 flex gap-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  product.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {product.available ? 'In Stock' : 'Out of Stock'}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {product.category}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <div className="mt-2 prose prose-sm text-gray-500">
                <p>{details.longDescription}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900">Details</h3>
              <dl className="mt-2 divide-y divide-gray-200">
                <div className="py-3 flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Dosage</dt>
                  <dd className="text-sm text-gray-900">{details.dosage}</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Recommended Usage</dt>
                  <dd className="text-sm text-gray-900">{details.usage}</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Possible Side Effects</dt>
                  <dd className="text-sm text-gray-900">{details.sideEffects}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-md p-4">
              <h3 className="text-sm font-medium text-blue-800">Contact Information</h3>
              <p className="mt-1 text-sm text-blue-700">
                For more information or to inquire about this product, please contact our customer service team.
              </p>
              <p className="mt-2 text-sm font-medium text-blue-800">
                Email: support@hopesera.com | Phone: (+91) 9225515554
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}