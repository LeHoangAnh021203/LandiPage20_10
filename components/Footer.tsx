import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="relative text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/8. Background.png"
          alt="Background"
          width={2000}
          height={500}
          className="object-contain"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-auto h-auto bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Image src="/logo.png" alt="logo" width={54} height={54}/>
              </div> 
              <span className="text-xl font-bold">Công Nghệ Meso</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Công nghệ Meso không xâm lấn, an toàn và hiệu quả cho việc trẻ hóa làn da. 
              Đội ngũ chuyên gia giàu kinh nghiệm với trang thiết bị hiện đại.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#technology" className="text-gray-400 hover:text-white transition-colors">
                  Công nghệ
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                  Lợi ích
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-white transition-colors">
                  Đặt lịch
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Tư vấn miễn phí
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Điều trị Meso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Chăm sóc da
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Hỗ trợ khách hàng
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2025 Face Wash Fox. All rights reserved. Công nghệ trẻ hóa da Meso ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
