# Next.js Complete Project

Một project Next.js hoàn chỉnh với UI hiện đại, TypeScript, và Tailwind CSS.

## 🚀 Tính năng

- ⚡ **Next.js 14** với App Router
- 🔷 **TypeScript** cho type safety
- 🎨 **Tailwind CSS** cho styling hiện đại
- 📱 **Responsive Design** cho mọi thiết bị
- 🔍 **SEO Optimized** với metadata API
- 🛠️ **ESLint** và development tools
- 🎯 **Modern UI Components** với Lucide icons

## 📦 Cài đặt

1. **Clone project:**
   ```bash
   git clone <repository-url>
   cd nextjs-complete-project
   ```

2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

3. **Chạy development server:**
   ```bash
   npm run dev
   ```

4. **Mở trình duyệt:**
   Truy cập [http://localhost:3000](http://localhost:3000)

## 🛠️ Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build project cho production
- `npm run start` - Chạy production server
- `npm run lint` - Chạy ESLint

## 📁 Cấu trúc Project

```
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features section
│   └── Footer.tsx         # Footer
├── public/                # Static assets
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🎨 UI Components

Project bao gồm các components hiện đại:

- **Header** - Navigation với mobile menu
- **Hero** - Landing section với CTA buttons
- **Features** - Grid layout cho features
- **Footer** - Footer với links và social media

## 🔧 Customization

### Thay đổi màu sắc
Chỉnh sửa `tailwind.config.js` để thay đổi color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Thêm components mới
Tạo file mới trong thư mục `components/` và import vào `app/page.tsx`.

## 📱 Responsive Design

Project được thiết kế mobile-first với breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code lên GitHub
2. Connect repository với Vercel
3. Deploy tự động

### Other Platforms
```bash
npm run build
npm run start
```

## 📚 Tài liệu tham khảo

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contributing

1. Fork project
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
