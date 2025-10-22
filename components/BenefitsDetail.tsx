import Image from 'next/image'
import { Star } from 'lucide-react'

const benefits = [
  {
    title: 'TĂNG SINH COLLAGEN',
    subtitle: 'NGĂN NGỪA LÃO HOÁ',
    description: 'Kích thích sản sinh collagen tự nhiên, giúp da căng mịn và ngăn ngừa lão hóa hiệu quả.',
  },
  {
    title: 'LỖ CHÂN LÔNG THU NHỎ',
    subtitle: 'DA MỊN MÀNG HƠN',
    description: 'Thu nhỏ lỗ chân lông, giúp da mịn màng và mềm mại hơn đáng kể.',
  },
  {
    title: 'NẾP NHĂN MỜ RÕ RỆT',
    subtitle: 'TRẺ HÓA TỰ NHIÊN',
    description: 'Làm mờ các nếp nhăn và đường nhăn, mang lại vẻ trẻ trung tự nhiên.',
  },
  {
    title: 'PHỤC HỒI DA CĂNG MỊN',
    subtitle: 'ĐỘ ĐÀN HỒI CAO',
    description: 'Phục hồi độ đàn hồi và độ căng mịn của da, giúp da khỏe mạnh hơn.',
  },
]

export function BenefitsDetail() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lợi ích vượt trội của công nghệ Meso
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Công nghệ Meso mang lại 4 lợi ích chính giúp làn da của bạn trở nên hoàn hảo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative h-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
              <Image
                src="/4 hình.png"
                alt="4 lợi ích chính của công nghệ Meso"
                width={650}
                height={500}
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating detail icon */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-2 shadow-lg animate-bounce group-hover:animate-none group-hover:scale-110 transition-all duration-300">
              <Star className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-pink-600 font-semibold mb-2">
                    {benefit.subtitle}
                  </p>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Bạn muốn trải nghiệm tất cả lợi ích này?
              </h4>
              <p className="text-gray-600 mb-4">
                Đặt lịch tư vấn miễn phí ngay hôm nay để được chuyên gia đánh giá 
                và tư vấn phương pháp điều trị phù hợp nhất.
              </p>
              <a href="#booking" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all font-semibold text-center block">
                Đặt lịch tư vấn miễn phí
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
