import { Shield, Zap, Heart, Star } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: Shield,
    title: 'Không xâm lấn',
    description: 'Công nghệ Meso hoàn toàn không xâm lấn, an toàn tuyệt đối cho da.',
  },
  {
    icon: Zap,
    title: 'Hiệu quả nhanh',
    description: 'Kết quả rõ rệt ngay sau lần đầu điều trị, da căng mịn hơn.',
  },
  {
    icon: Heart,
    title: 'Tự nhiên',
    description: 'Sử dụng các thành phần tự nhiên, không gây kích ứng da.',
  },
  {
    icon: Star,
    title: 'Chuyên nghiệp',
    description: 'Đội ngũ bác sĩ giàu kinh nghiệm, trang thiết bị hiện đại.',
  },
]

export function Technology() {
  return (
    <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Công nghệ Meso tiên tiến
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Công nghệ Meso sử dụng các vi kim siêu nhỏ để đưa dưỡng chất 
              trực tiếp vào tầng trung bì của da, giúp tái tạo và trẻ hóa 
              làn da một cách tự nhiên và hiệu quả.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="relative h-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
              <Image
                src="/Công nghệ Meso.png"
                alt="Công nghệ Meso không xâm lấn"
                width={500}
                height={500}
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating tech icon */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2 shadow-lg animate-bounce group-hover:animate-none group-hover:scale-110 transition-all duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
