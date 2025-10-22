import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ladioage - Công nghệ trẻ hóa da Meso',
  description: 'Công nghệ Meso không xâm lấn, an toàn và hiệu quả cho việc trẻ hóa làn da. Đặt lịch ngay để nhận ưu đãi đặc biệt!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
          {children}
        </div>
      </body>
    </html>
  )
}
