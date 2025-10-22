# Cấu hình Environment Variables

## Tạo file .env.local

Tạo file `.env.local` trong thư mục gốc của project với nội dung:

```bash
# Google Apps Script Web App URL
GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Cách lấy URL Google Apps Script:

1. Mở Google Apps Script Editor
2. Deploy script với quyền "Anyone" 
3. Copy URL được tạo ra
4. Thay thế `YOUR_SCRIPT_ID` trong file `.env.local`

## Cấu trúc dữ liệu gửi vào Google Sheet:

Khi user submit form booking, dữ liệu sẽ được gửi vào tab "Ladipage 20_10" với cấu trúc:

```
[
  "Landing Page Ladipage",  // Chi nhánh
  "Tên khách hàng",         // Tên
  "0123456789",            // SĐT  
  "email@example.com",     // Email
  "15/01/2024",           // Ngày đăng ký
  "14:30:25",             // Giờ đăng ký
  "1",                    // Số khách (mặc định 1)
  "Ladipage 20_10"        // Tab đích
]
```

## Test:

1. Chạy `npm run dev`
2. Điền form booking
3. Submit form
4. Kiểm tra tab "Ladipage 20_10" trong Google Sheet
