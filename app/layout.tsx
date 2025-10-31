import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Face Wash Fox - Meso',
  description: 'Công nghệ Meso không xâm lấn, an toàn và hiệu quả cho việc trẻ hóa làn da. Đặt lịch ngay để nhận ưu đãi đặc biệt!',
  icons: {
   
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '718349837450036');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            alt=""
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=718349837450036&ev=PageView&noscript=1"
          />
        </noscript>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
