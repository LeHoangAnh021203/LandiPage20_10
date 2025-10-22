import { CheckCircle, Clock, Users, Award, Heart } from 'lucide-react'
import Image from 'next/image'

const benefits = [
  {
    icon: CheckCircle,
    title: 'Da căng mịn',
    description: 'Cải thiện độ đàn hồi và độ căng mịn của da',
  },
  {
    icon: Clock,
    title: 'Giảm nếp nhăn',
    description: 'Làm mờ các nếp nhăn và đường nhăn trên mặt',
  },
  {
    icon: Users,
    title: 'Sáng da',
    description: 'Làm sáng da, giảm thâm nám và tàn nhang',
  },
  {
    icon: Award,
    title: 'Trẻ hóa',
    description: 'Kích thích tái tạo tế bào, làm trẻ hóa làn da',
  },
]

const process = [
  {
    step: '01',
    title: 'Tư vấn miễn phí',
    description: 'Bác sĩ chuyên khoa tư vấn và đánh giá tình trạng da',
  },
  {
    step: '02',
    title: 'Làm sạch da',
    description: 'Làm sạch và chuẩn bị da trước khi điều trị',
  },
  {
    step: '03',
    title: 'Điều trị Meso',
    description: 'Thực hiện điều trị với công nghệ Meso tiên tiến',
  },
  {
    step: '04',
    title: 'Chăm sóc sau điều trị',
    description: 'Hướng dẫn chăm sóc da và theo dõi kết quả',
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Benefits */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lợi ích của công nghệ Meso
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Công nghệ Meso mang lại nhiều lợi ích tuyệt vời cho làn da của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Quy trình điều trị
            </h3>
            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">
                      {item.description}
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
                src="/Meso ko xâm lấn.png"
                alt="Công nghệ Meso không xâm lấn"
                width={700}
                height={500}
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating benefits icon */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full p-2 shadow-lg animate-bounce group-hover:animate-none group-hover:scale-110 transition-all duration-300">
              <Heart className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
