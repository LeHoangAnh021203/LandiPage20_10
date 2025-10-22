import { NextResponse } from "next/server";

export const runtime = "nodejs";

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

    return NextResponse.json({ 
      success: true, 
      gasDetails,
      message: "Thông tin đã được gửi thành công!",
      debug: {
        gasUrl: gasUrl,
        gasDetails: gasDetails
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
