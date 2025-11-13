import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="pt-0 pb-12 sm:pb-16 lg:py-20">
      {/* Mobile: Full width image */}
      <div className="block lg:hidden">
        <div className="relative">
          <Image
            src="/Trẻ hóa làn da.png"
            alt="Trẻ hóa làn da với công nghệ Meso"
            className="object-cover w-full h-auto"
            width={650}
            height={500}
            priority
          />
          {/* Floating elements */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-2 shadow-lg animate-pulse">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </div>
        
        {/* Mobile content below image */}
        <div className="px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trẻ hóa làn da với{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Công nghệ Meso
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Công nghệ Meso không xâm lấn, an toàn và hiệu quả. Làm mới làn da
              của bạn với phương pháp tiên tiến nhất.
            </p>

            <div className="flex flex-col gap-3 justify-center items-center mb-8">
              <a href="#booking" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 w-full">
                <span>Đặt lịch ngay</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://cuahang.facewashfox.com/" target="_blank" rel="noopener noreferrer" className="border border-pink-300 text-pink-700 px-6 py-3 rounded-lg hover:bg-pink-50 transition-colors flex items-center justify-center space-x-2 w-full">
                <MapPin className="w-5 h-5" />
                <span>Xem Chi Nhánh</span>
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
              <div className="text-center">
                <div className="text-xl font-bold text-pink-600 mb-1">100%</div>
                <div className="text-xs text-gray-600">An toàn</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-pink-600 mb-1">0</div>
                <div className="text-xs text-gray-600">Xâm lấn</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-pink-600 mb-1">24h</div>
                <div className="text-xs text-gray-600">Phục hồi</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Original layout */}
      <div className="hidden lg:block px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-left">
              <h1 className="text-6xl font-bold text-gray-900 mb-6">
                Trẻ hóa làn da với{" "}
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Công nghệ Meso
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Công nghệ Meso không xâm lấn, an toàn và hiệu quả. Làm mới làn da
                của bạn với phương pháp tiên tiến nhất.
              </p>

              <div className="flex gap-4 justify-start items-center mb-12">
                <a href="#booking" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all flex items-center space-x-2">
                  <span>Đặt lịch ngay</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="https://cuahang.facewashfox.com/" target="_blank" rel="noopener noreferrer" className="border border-pink-300 text-pink-700 px-8 py-3 rounded-lg hover:bg-pink-50 transition-colors flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Xem Chi Nhánh</span>
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">An toàn</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-1">0</div>
                  <div className="text-sm text-gray-600">Xâm lấn</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-1">24h</div>
                  <div className="text-sm text-gray-600">Phục hồi</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="relative h-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
                <Image
                  src="/Trẻ hóa làn da.png"
                  alt="Trẻ hóa làn da với công nghệ Meso"
                  className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  width={650}
                  height={500}
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-3 shadow-lg animate-pulse group-hover:animate-none group-hover:scale-110 transition-all duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
