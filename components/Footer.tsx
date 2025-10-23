import { Github, Phone, Linkedin, Mail, Facebook } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="relative text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Background.png"
          alt="Background"
          width={2000}
          height={500}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-auto sm:h-auto ">
                <Image src="/logo.png" alt="logo" width={54} height={54}/>
              </div> 
              <span className="text-lg sm:text-xl font-bold">Công Nghệ Meso</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 max-w-md">
              Công nghệ Meso không xâm lấn, an toàn và hiệu quả cho việc trẻ hóa làn da. 
              Đội ngũ chuyên gia giàu kinh nghiệm với trang thiết bị hiện đại.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="tel:0889866666" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.facebook.com/facewashfox" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.linkedin.com/company/facewashfox/posts/?feedView=all" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:info@facewashfox.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#technology" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Công nghệ
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Lợi ích
                </a>
              </li>
              <li>
                <a href="#booking" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Đặt lịch
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Tư vấn miễn phí
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Điều trị Meso
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Chăm sóc da
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Hỗ trợ khách hàng
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-white/80">
            © 2025 Face Wash Fox. All rights reserved. Công nghệ trẻ hóa da Meso ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
