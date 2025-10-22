import { Code, Zap, Shield, Smartphone, Globe, Heart } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'TypeScript Ready',
    description: 'Built with TypeScript for better development experience and type safety.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for performance with Next.js 14 and modern React features.',
  },
  {
    icon: Shield,
    title: 'Production Ready',
    description: 'Includes all the tools and configurations needed for production deployment.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Responsive design that works perfectly on all devices and screen sizes.',
  },
  {
    icon: Globe,
    title: 'SEO Optimized',
    description: 'Built-in SEO features with Next.js App Router and metadata API.',
  },
  {
    icon: Heart,
    title: 'Developer Friendly',
    description: 'Clean code structure, ESLint, and modern development tools included.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This complete Next.js project includes all the modern tools and features 
            you need to build amazing web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
