import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type EmailConfig = {
  user: string;
  password: string;
  host: string;
  port: number;
  secure: boolean;
  businessRecipients: string[];
};

function getEmailConfig(): EmailConfig {
  const user = process.env.EMAIL_USER || process.env.SMTP_USER;
  const rawPassword = process.env.EMAIL_PASSWORD || process.env.SMTP_PASSWORD || "";
  const password = rawPassword.replace(/\s+/g, "");
  const host = process.env.EMAIL_HOST || process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.EMAIL_PORT || process.env.SMTP_PORT || "587", 10);
  const secureEnv = process.env.EMAIL_SECURE ?? process.env.SMTP_SECURE ?? "false";
  const secure = secureEnv === "true";
  const businessRecipients =
    process.env.BUSINESS_EMAIL_TO?.split(",").map((email) => email.trim()).filter(Boolean) ?? [];

  if (!user || !password) {
    throw new Error(
      "Email credentials not configured. Please set EMAIL_USER and EMAIL_PASSWORD (or legacy SMTP_* variables) in .env.local"
    );
  }

  return { user, password, host, port, secure, businessRecipients };
}

function createEmailTransporter(config: EmailConfig) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.password,
    },
  });
}

// Hàm gửi email xác nhận cho khách hàng
async function sendCustomerConfirmationEmail(
  customerEmail: string,
  customerName: string,
  phone: string
) {
  if (!customerEmail) return { success: false, error: "No email provided" };

  let emailConfig: EmailConfig;
  let transporter;
  try {
    emailConfig = getEmailConfig();
    transporter = createEmailTransporter(emailConfig);
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create email transporter",
    };
  }

  const mailOptions = {
    from: `"Face Wash Fox" <${emailConfig.user}>`,
    replyTo: emailConfig.businessRecipients[0] || emailConfig.user,
    to: customerEmail,
    subject: "✅ Xác nhận đặt lịch tư vấn miễn phí thành công - Face Wash Fox",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">Face Wash Fox</h1>
        </div>
        <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: #d1fae5; border: 2px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <h2 style="color: #065f46; margin: 0; font-size: 24px;">✅ Đặt lịch thành công!</h2>
          </div>
          <h2 style="color: #1f2937; margin-top: 0;">Xin chào ${customerName}!</h2>
          <p style="color: #4b5563; line-height: 1.6; font-size: 16px;">
            Cảm ơn bạn đã đăng ký đặt lịch tư vấn miễn phí tại <strong>Face Wash Fox</strong>.
          </p>
          <p style="color: #059669; line-height: 1.6; font-size: 16px; font-weight: bold;">
            🎉 Thông tin đặt lịch của bạn đã được ghi nhận thành công!
          </p>
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ec4899; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #1f2937; margin-top: 0;">📋 Thông tin đặt lịch của bạn:</h3>
            <p style="color: #4b5563; margin: 10px 0; font-size: 15px;"><strong>Họ và tên:</strong> ${customerName}</p>
            <p style="color: #4b5563; margin: 10px 0; font-size: 15px;"><strong>Số điện thoại:</strong> ${phone}</p>
            <p style="color: #4b5563; margin: 10px 0; font-size: 15px;"><strong>Thời gian đăng ký:</strong> ${new Date().toLocaleString('vi-VN')}</p>
            <p style="color: #4b5563; margin: 10px 0; font-size: 15px;"><strong>Trạng thái:</strong> <span style="color: #059669; font-weight: bold;">Đã xác nhận</span></p>
          </div>
          <div style="background: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
            <p style="color: #1e40af; margin: 0; font-weight: bold; font-size: 15px;">📞 Bước tiếp theo:</p>
            <p style="color: #1e3a8a; margin: 10px 0 0 0; line-height: 1.6;">
              Chúng tôi sẽ liên hệ lại với bạn qua số điện thoại <strong>${phone}</strong> trong thời gian sớm nhất để xác nhận lịch hẹn cụ thể.
            </p>
          </div>
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #92400e; margin: 0; font-weight: bold; font-size: 15px;">🎁 Ưu đãi đặc biệt dành cho bạn:</p>
            <ul style="color: #92400e; margin: 10px 0; padding-left: 20px; line-height: 1.8;">
              <li>✅ Tư vấn miễn phí 100%</li>
              <li>✅ Ưu đãi lên đến 35% cho lần đầu trải nghiệm</li>
              <li>✅ Đăng ký thẻ thành viên Foxie để nhận nhiều quà tặng, ưu đãi hấp dẫn</li>
            </ul>
          </div>
          <p style="color: #4b5563; line-height: 1.6; font-size: 15px;">
            Nếu bạn có bất kỳ câu hỏi nào hoặc cần thay đổi thông tin đặt lịch, vui lòng liên hệ với chúng tôi qua:
          </p>
          <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
            <p style="color: #4b5563; margin: 5px 0; font-size: 15px;">📞 Hotline: <strong style="color: #ec4899;">0889 866 666</strong></p>
            <p style="color: #4b5563; margin: 5px 0; font-size: 15px;">📧 Email: <strong style="color: #ec4899;">info@facewashfox.com</strong></p>
          </div>
          <p style="color: #4b5563; line-height: 1.6; margin-top: 30px; font-size: 14px;">
            Trân trọng,<br>
            <strong>Đội ngũ Face Wash Fox</strong><br>
            <span style="color: #6b7280; font-size: 12px;">Email này được gửi tự động từ hệ thống đặt lịch</span>
          </p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Hàm gửi email thông báo cho admin
async function sendAdminNotificationEmail(
  customerName: string,
  phone: string,
  email: string,
  notes: string
) {
  let emailConfig: EmailConfig;
  let transporter;
  try {
    emailConfig = getEmailConfig();
    transporter = createEmailTransporter(emailConfig);
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create email transporter",
    };
  }

  const adminRecipients =
    emailConfig.businessRecipients.length > 0 ? emailConfig.businessRecipients : [emailConfig.user];

  const mailOptions = {
    from: `"Face Wash Fox Booking System" <${emailConfig.user}>`,
    to: adminRecipients,
    subject: `🔔 Đặt lịch mới - ${customerName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">🔔 Thông báo đặt lịch mới</h1>
        </div>
        <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #1f2937; margin-top: 0;">Có khách hàng mới đặt lịch!</h2>
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ec4899;">
            <h3 style="color: #1f2937; margin-top: 0;">Thông tin khách hàng:</h3>
            <p style="color: #4b5563; margin: 10px 0;"><strong>Họ và tên:</strong> ${customerName}</p>
            <p style="color: #4b5563; margin: 10px 0;"><strong>Số điện thoại:</strong> <a href="tel:${phone}" style="color: #ec4899;">${phone}</a></p>
            <p style="color: #4b5563; margin: 10px 0;"><strong>Email:</strong> ${email || "Không có"}</p>
            <p style="color: #4b5563; margin: 10px 0;"><strong>Ghi chú:</strong> ${notes || "Không có"}</p>
            <p style="color: #4b5563; margin: 10px 0;"><strong>Thời gian đăng ký:</strong> ${new Date().toLocaleString('vi-VN')}</p>
          </div>
          <p style="color: #4b5563; line-height: 1.6;">
            Vui lòng liên hệ với khách hàng trong thời gian sớm nhất để xác nhận lịch hẹn.
          </p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('=== BOOKING API RECEIVED ===');
    console.log('Request body:', body);

    // Required fields validation
    const REQUIRED_FIELDS = ["name", "phone"];
    const missingFields = REQUIRED_FIELDS.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      console.log('Missing required fields:', missingFields);
      return NextResponse.json(
        { 
          success: false, 
          error: `Missing required fields: ${missingFields.join(", ")}` 
        },
        { status: 400 }
      );
    }

    // Data validation
    const { name, phone, email, notes } = body;
    console.log('Form data received:', { name, phone, email, notes });
    
    // Validate customer name (minimum 2 characters, no numbers)
    if (name && (name.length < 2 || /\d/.test(name))) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Tên khách hàng phải có ít nhất 2 ký tự và không chứa số" 
        },
        { status: 400 }
      );
    }

    // Validate phone number (Vietnamese format) - more flexible
    const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/;
    if (phone && !phoneRegex.test(phone)) {
      console.log('Phone validation failed for:', phone);
      // Tạm thời bỏ qua validation phone để test
      // return NextResponse.json(
      //   { 
      //     success: false, 
      //     error: "Số điện thoại không đúng định dạng Việt Nam (10 số, bắt đầu bằng 03/05/07/08/09)" 
      //   },
      //   { status: 400 }
      // );
    }

    // Validate email (if provided)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      console.log('Email validation failed for:', email);
      // Tạm thời bỏ qua validation email để test
      // return NextResponse.json(
      //   { 
      //     success: false, 
      //     error: "Email không đúng định dạng" 
      //   },
      //   { status: 400 }
      // );
    }

    // Google Sheets submission via Google Apps Script Web App
    let gasDetails: { attempted: boolean; success?: boolean; error?: unknown } = { attempted: false };
    const gasUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL;
    console.log('GAS URL:', gasUrl);
    
    if (gasUrl) {
      gasDetails.attempted = true;
      try {
        // Use same structure as Google Sheets API (booking data)
        // Thêm thông tin tab ở cuối để xác định tab đích
        const targetTab = body.targetTab || "Ladipage 20_10"; // Mặc định tab "Ladipage 20_10"
        const payload = [
          name || "",              // name - từ form
          phone || "",             // phone - từ form
          email || "",             // email - từ form
          notes || "",             // notes - từ form (ghi chú)
          new Date().toLocaleDateString('vi-VN'), // date - ngày đăng ký
          new Date().toLocaleTimeString('vi-VN'), // time - giờ đăng ký
          targetTab, // Thông tin tab đích
        ];
        
        console.log('Payload being sent to GAS:', payload);

        const gasRes = await fetch(gasUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        
        if (!gasRes.ok) {
          gasDetails = { attempted: true, success: false, error: `HTTP ${gasRes.status}` };
        } else {
          gasDetails = { attempted: true, success: true };
        }
      } catch (e) {
        gasDetails = { attempted: true, success: false, error: e instanceof Error ? e.message : e };
      }
    } else {
      gasDetails = { 
        attempted: false, 
        success: false, 
        error: "Google Sheets Web App URL not configured" 
      };
    }

    console.log('=== BOOKING API DEBUG ===');
    console.log('Body received:', body);
    console.log('GAS URL:', gasUrl);
    console.log('GAS Details:', gasDetails);

    // Gửi email sau khi booking thành công (không làm fail nếu email lỗi)
    let emailDetails: {
      customerEmail?: { attempted: boolean; success?: boolean; error?: unknown };
      adminEmail?: { attempted: boolean; success?: boolean; error?: unknown };
    } = {};

    // Gửi email xác nhận cho khách hàng (nếu có email)
    if (email && emailRegex.test(email)) {
      emailDetails.customerEmail = { attempted: true };
      try {
        const customerEmailResult = await sendCustomerConfirmationEmail(
          email,
          name,
          phone
        );
        emailDetails.customerEmail = {
          attempted: true,
          success: customerEmailResult.success,
          error: customerEmailResult.success ? undefined : customerEmailResult.error,
        };
        console.log('Customer email sent:', customerEmailResult);
      } catch (e) {
        emailDetails.customerEmail = {
          attempted: true,
          success: false,
          error: e instanceof Error ? e.message : e,
        };
        console.error('Customer email error:', e);
      }
    } else {
      emailDetails.customerEmail = { attempted: false };
    }

    // Gửi email thông báo cho admin
    emailDetails.adminEmail = { attempted: true };
    try {
      const adminEmailResult = await sendAdminNotificationEmail(
        name,
        phone,
        email || "",
        notes || ""
      );
      emailDetails.adminEmail = {
        attempted: true,
        success: adminEmailResult.success,
        error: adminEmailResult.success ? undefined : adminEmailResult.error,
      };
      console.log('Admin email sent:', adminEmailResult);
    } catch (e) {
      emailDetails.adminEmail = {
        attempted: true,
        success: false,
        error: e instanceof Error ? e.message : e,
      };
      console.error('Admin email error:', e);
    }

    return NextResponse.json({ 
      success: true, 
      gasDetails,
      emailDetails,
      message: "Thông tin đã được gửi thành công!",
      debug: {
        gasUrl: gasUrl,
        gasDetails: gasDetails,
        emailDetails: emailDetails
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Invalid JSON body",
      },
      { status: 400 }
    );
  }
}
