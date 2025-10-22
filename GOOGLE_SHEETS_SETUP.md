# Cấu hình Google Sheets Integration

## Bước 1: Tạo Google Apps Script Web App

1. Truy cập [Google Apps Script](https://script.google.com/)
2. Tạo project mới
3. Copy nội dung từ file `UNIFIED_GOOGLE_APPS_SCRIPT.js` trong thư mục `map-standalone`
4. Paste vào editor và lưu
5. Deploy as Web App với quyền "Anyone" có thể truy cập
6. Copy URL của Web App

## Bước 2: Cấu hình Environment Variables

Tạo file `.env.local` trong thư mục gốc với nội dung:

```env
# Google Sheets Web App URL
GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# Email configuration (optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
BUSINESS_EMAIL_TO=business@facewashfox.com
```

## Bước 3: Cấu hình Google Sheets

1. Tạo Google Sheets mới
2. Copy Sheet ID từ URL
3. Cập nhật `SHEET_ID` trong Google Apps Script
4. Tạo tab "List 20_10" để lưu dữ liệu booking

## Cách hoạt động

- Khi khách hàng submit form booking, dữ liệu sẽ được gửi đến API `/api/booking`
- API sẽ validate dữ liệu và gửi đến Google Sheets qua Google Apps Script Web App
- Dữ liệu được lưu vào tab "List 20_10" với format:
  - Chi nhánh: "Landing Page"
  - Tên khách hàng
  - Số điện thoại
  - Email
  - Ngày: Ngày hiện tại
  - Giờ: Giờ hiện tại
  - Số khách: 1 (mặc định)
  - Thời gian: Timestamp
