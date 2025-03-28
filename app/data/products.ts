// This file stores all product data centrally

const products = [
  {
    id: 1,
    name: 'Letrozole',
    href: '/products/letrozole',
    slug: 'letrozole',
    imageSrc: '/letroserum-2.5-1.png', 
    imageAlt: 'Letrozole product image.',
    price: '$35',
    category: 'Fertility Drugs',
    description: 'An effective treatment for fertility enhancement.',
    available: true,
  },
  {
    id: 2,
    name: 'Estradial',
    href: '/products/estradial',
    slug: 'estradial',
    imageSrc: '/estradial1.png', 
    imageAlt: 'Estradial product image.',
    price: '$40',
    category: 'Hormones',
    description: 'Hormone supplement to support reproductive health.',
    available: true,
  },
  {
    id: 3,
    name: 'Fertserum',
    href: '/products/fertserum',
    slug: 'fertserum',
    imageSrc: '/fertserum-f.png',
    imageAlt: 'Fertserum product image.',
    price: '$45',
    category: 'Supplements',
    description: 'Advanced serum formulated to optimize fertility outcomes.',
    available: true,
  },
  {
    id: 4,
    name: 'Vitroarg',
    href: '/products/vitroarg',
    slug: 'vitroarg',
    imageSrc: '/Vitroarg1.png',
    imageAlt: 'Vitroarg product image.',
    price: '$45',
    category: 'IVF Support',
    description: 'Specialized formula supporting IVF procedures.',
    available: true,
  },
  {
    id: 5,
    name: 'FertSerum-M',
    href: '/products/fertsermm',
    slug: 'fertsermm',
    imageSrc: '/fertserum-m.png',
    imageAlt: 'FertSerum fertility supplement.',
    price: '$55',
    category: 'Supplements',
    description: 'Premium fertility supplement to enhance reproductive health.',
    available: true,
  },
  {
    id: 6,
    name: 'IroSera-XT',
    href: '/products/irosera',
    slug: 'irosera',
    imageSrc: '/irosera-xt.png',
    imageAlt: 'OvaSupport product image.',
    price: '$48',
    category: 'Fertility Drugs',
    description: 'Advanced formula to support ovarian function and egg quality.',
    available: true,
  },
  {
    id: 7,
    name: '9-Pro Powder',
    href: '/products/pro-powder',
    slug: 'pro-powder',
    // Update the image path to match actual filename in public folder
    imageSrc: '/powder.png',
    imageAlt: 'TestoBlend product image.',
    price: '$42',
    category: 'Protein Powder',
    description: 'Balanced formula to support healthy testosterone levels for male fertility.',
    available: true,
  },
];

export default products;