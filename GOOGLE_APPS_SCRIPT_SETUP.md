# Hướng dẫn Setup Google Apps Script

## 🔧 Bước 1: Deploy Google Apps Script

1. **Mở Google Apps Script Editor:**
   - Truy cập: https://script.google.com
   - Tạo project mới hoặc mở project hiện có

2. **Copy code từ file `UNIFIED_GOOGLE_APPS_SCRIPT.js`**
   - Xóa code cũ trong editor
   - Paste toàn bộ code từ file `UNIFIED_GOOGLE_APPS_SCRIPT.js`

3. **Deploy script:**
   - Click "Deploy" → "New deployment"
   - Type: "Web app"
   - Execute as: "Me"
   - Who has access: "Anyone"
   - Click "Deploy"

4. **Copy URL được tạo ra:**
   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

## 🔧 Bước 2: Cấu hình Environment Variable

1. **Tạo file `.env.local` trong thư mục gốc:**
   ```bash
   GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

2. **Thay thế `YOUR_SCRIPT_ID` bằng ID thực tế từ bước 1**

## 🔧 Bước 3: Test Google Apps Script

1. **Chạy function test trong Google Apps Script Editor:**
   ```javascript
   // Test setup tab
   setupLadipageTab()
   
   // Test lưu dữ liệu
   testSaveToLadipage()
   
   // Test với doPost
   simpleTestLadipage()
   ```

2. **Kiểm tra Google Sheet:**
   - Mở Google Sheet với ID: `1Q-FlAnp591WKhE9qJoKH-yI92yl7gY1zQrg-YqRkwyM`
   - Kiểm tra tab "Ladipage 20_10" có dữ liệu không

## 🔧 Bước 4: Test từ Next.js

1. **Restart dev server:**
   ```bash
   npm run dev
   ```

2. **Test form booking:**
   - Mở http://localhost:3000 (hoặc port khác)
   - Điền form booking
   - Submit form
   - Kiểm tra console để xem debug info

## 🐛 Debug Issues

### Nếu không thấy dữ liệu trong sheet:

1. **Kiểm tra permissions:**
   - Google Apps Script cần quyền truy cập Google Sheets
   - Chấp nhận permissions khi được yêu cầu

2. **Kiểm tra URL:**
   - Đảm bảo URL trong `.env.local` đúng
   - URL phải kết thúc bằng `/exec`

3. **Kiểm tra console logs:**
   - Mở Developer Tools trong browser
   - Xem Network tab khi submit form
   - Xem Console tab để xem debug info

4. **Test trực tiếp Google Apps Script:**
   - Chạy `testSaveToLadipage()` trong Google Apps Script Editor
   - Kiểm tra xem có lỗi gì không

## 📝 Cấu trúc dữ liệu gửi vào sheet:

```
Chi nhánh: "Landing Page Ladipage"
Tên khách hàng: [Từ form]
SĐT: [Từ form]
Email: [Từ form]
Ngày: [Tự động - ngày hiện tại]
Giờ: [Tự động - giờ hiện tại]
Số khách: "1" (mặc định)
Thời gian: [Timestamp tự động]
```

## ✅ Checklist hoàn thành:

- [ ] Google Apps Script đã được deploy
- [ ] URL đã được copy vào `.env.local`
- [ ] Dev server đã restart
- [ ] Form booking hoạt động
- [ ] Dữ liệu xuất hiện trong Google Sheet
