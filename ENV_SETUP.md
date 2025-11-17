# Cấu hình Environment Variables

## Tạo file .env.local

Tạo file `.env.local` trong thư mục gốc của project với nội dung:

```bash
# Google Apps Script Web App URL
GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# Email Configuration (SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
BUSINESS_EMAIL_TO=admin@facewashfox.com   # Có thể là nhiều email, phân tách bằng dấu phẩy
```

## Cấu hình Email (SMTP)

### Sử dụng Admin Email để gửi (Khuyến nghị):

**Cấu hình trong .env.local:**
```bash
EMAIL_USER=admin@facewashfox.com
EMAIL_PASSWORD=app-password-cua-admin-email
BUSINESS_EMAIL_TO=admin@facewashfox.com
```

### Sử dụng Gmail (nếu admin email là Gmail):

1. **Bật 2-Step Verification** cho tài khoản admin Gmail
2. **Tạo App Password**:
   - Vào [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App passwords
   - Tạo app password mới cho "Mail"
   - Copy password (16 ký tự, có thể có khoảng trắng - code sẽ tự động xử lý)
3. **Cấu hình trong .env.local**:
   - `EMAIL_USER`: Admin email Gmail (ví dụ: `admin@facewashfox.com`)
   - `EMAIL_PASSWORD`: App password vừa tạo (có thể có khoảng trắng)
   - `BUSINESS_EMAIL_TO`: Danh sách email cần nhận thông báo (1 hoặc nhiều email, phân tách bởi dấu phẩy)

### Sử dụng SMTP khác:

Nếu sử dụng SMTP server khác (Outlook, SendGrid, etc.), cập nhật các biến:
- `EMAIL_HOST`: Địa chỉ SMTP server
- `EMAIL_PORT`: Port (thường là 587 cho TLS, 465 cho SSL)
- `EMAIL_SECURE`: `true` cho SSL (port 465), `false` cho TLS (port 587)
- `EMAIL_USER`: Username/email đăng nhập
- `EMAIL_PASSWORD`: Password hoặc API key

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

## Chức năng Email:

Khi có khách hàng đặt lịch thành công, hệ thống sẽ tự động gửi:

1. **Email xác nhận cho khách hàng** (nếu khách hàng có cung cấp email):
   - **Gửi từ**: Admin email (`EMAIL_USER`)
   - **Gửi đến**: Email của khách hàng
   - **Nội dung**: 
     - Xác nhận đặt lịch thành công
     - Hiển thị thông tin đặt lịch (tên, số điện thoại, thời gian đăng ký)
     - Trạng thái "Đã xác nhận"
     - Thông tin liên hệ và ưu đãi đặc biệt
   - **Reply-To**: Email admin đầu tiên trong `BUSINESS_EMAIL_TO` (nếu có) hoặc `EMAIL_USER`

2. **Email thông báo cho admin**:
   - **Gửi từ**: Admin email (`EMAIL_USER`)
   - **Gửi đến**: Các email được cấu hình trong `BUSINESS_EMAIL_TO` (có thể là nhiều email)
   - **Nội dung**: 
     - Thông báo có đặt lịch mới
     - Hiển thị đầy đủ thông tin khách hàng (tên, số điện thoại, email, ghi chú)
     - Thời gian đăng ký

**Lưu ý**: 
- Email được gửi từ tài khoản admin (`EMAIL_USER`) đến khách hàng
- Nếu email gửi thất bại, booking vẫn được lưu thành công vào Google Sheets. Lỗi email sẽ được log nhưng không làm gián đoạn quá trình đặt lịch.

## Test:

1. Chạy `npm run dev`
2. Điền form booking (nhớ điền email để nhận email xác nhận)
3. Submit form
4. Kiểm tra:
   - Tab "Ladipage 20_10" trong Google Sheet
   - Hộp thư email của khách hàng (nếu có cung cấp email)
   - Hộp thư email admin (email trong ADMIN_EMAIL)
