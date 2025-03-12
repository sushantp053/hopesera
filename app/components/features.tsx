import { HeartIcon, ShieldCheckIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline'


const features = [
    {
      name: 'Comprehensive Care',
      description: 'Tailored healthcare services focusing on women’s unique needs with holistic support.',
      icon: HeartIcon,
    },
    {
      name: 'Secure Health Data',
      description: 'Advanced security measures to ensure privacy and confidentiality of your health records.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Community Support',
      description: 'Join a supportive community of women, sharing experiences and growing together.',
      icon: UserGroupIcon,
    },
    {
      name: 'Global Access',
      description: 'Accessible healthcare solutions for women around the world, anytime, anywhere.',
      icon: GlobeAltIcon,
    },
  ]

export default function Features() {
  return (
    <div id='features' className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-indigo-600">Our Features</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Empowering Women’s Health
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Discover the core features designed to provide personalized, secure, and comprehensive healthcare services for women everywhere.
            </p>
          </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute top-4 left-4 flex items-center justify-center rounded-full bg-indigo-600 p-3">
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="ml-16 text-xl font-semibold text-gray-900">{feature.name}</h3>
              <p className="ml-16 mt-2 text-gray-600">{feature.description}</p>
            </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
