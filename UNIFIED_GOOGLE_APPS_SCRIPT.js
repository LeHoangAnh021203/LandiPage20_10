// Global config - Sử dụng cho tất cả các tab
var CONFIG = {
  SHEET_ID: '1Q-FlAnp591WKhE9qJoKH-yI92yl7gY1zQrg-YqRkwyM',
  DEFAULT_SHEET_NAME: 'List 20_10',     // Tab mặc định
  LADIPAGE_SHEET_NAME: 'Ladipage 20_10', // Tab Ladipage mới
  MAP_SHEET_NAME: 'map',                 // Tab map
  VALID_SHEETS: ['List 20_10', 'Ladipage 20_10', 'map'] // Danh sách tab hợp lệ
};

function doPost(e) {
  try {
    const raw = e && e.postData && e.postData.contents;
    if (!raw) return json({ success: false, error: 'Empty body' });

    let data = JSON.parse(raw);
    let targetSheet = CONFIG.DEFAULT_SHEET_NAME; // Mặc định

    // Xử lý dữ liệu đầu vào
    if (Array.isArray(data)) {
      // Nếu có 7 phần tử, phần tử thứ 7 là tên tab
      if (data.length === 7) {
        const requestedSheet = data[6];
        // Kiểm tra tab có hợp lệ không
        if (CONFIG.VALID_SHEETS.includes(requestedSheet)) {
          targetSheet = requestedSheet;
        } else {
          targetSheet = CONFIG.DEFAULT_SHEET_NAME;
        }
        data = data.slice(0, 6); // Chỉ lấy 6 phần tử đầu
      }
      
      if (data.length < 6) return json({ success: false, error: 'Array must have at least 6 items' });
      
      // Chuyển array thành object
      data = { 
        name: data[0], 
        phone: data[1], 
        email: data[2], 
        notes: data[3] || '', 
        date: data[4], 
        time: data[5]
      };
    }

    const { name, phone, email, notes, date, time } = data || {};
    
    // Validation
    if (!name || !phone) return json({ success: false, error: 'Missing required fields: name, phone' });

    // Mở sheet và chọn tab đích
    const ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    let sheet = ss.getSheetByName(targetSheet);
    
    // Nếu tab không tồn tại, tạo mới
    if (!sheet) {
      sheet = ss.insertSheet(targetSheet);
      // Thêm header row
      sheet.getRange(1, 1, 1, 6).setValues([[
        'Tên khách hàng', 'SĐT', 'Email', 'Ghi chú', 'Ngày', 'Giờ'
      ]]);
      // Format header row
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 6).setBackground('#E8F0FE');
    } else {
      // Kiểm tra xem tab có header chưa, nếu chưa thì thêm
      const lastRow = sheet.getLastRow();
      if (lastRow === 0) {
        sheet.getRange(1, 1, 1, 6).setValues([[
          'Tên khách hàng', 'SĐT', 'Email', 'Ghi chú', 'Ngày', 'Giờ'
        ]]);
        sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
        sheet.getRange(1, 1, 1, 6).setBackground('#E8F0FE');
      }
    }

    // Chuẩn bị dữ liệu để ghi
    const row = [
      name,
      "'" + String(phone),     // Giữ số 0 đầu
      email || '',
      notes || '',            // Ghi chú từ form
      date || '',
      time || ''
    ];

    // Ghi dữ liệu
    sheet.appendRow(row);

    return json({ 
      success: true, 
      message: `Data saved to tab: ${targetSheet}`,
      timestamp: new Date().toISOString()
    });
    
  } catch (err) {
    return json({ success: false, error: String(err) });
  }
}

// Helper function
function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Function để test với tab cụ thể
function testWithTab(tabName) {
  const testData = [
    "Chi nhánh Test",
    "Nguyễn Văn Test", 
    "0123456789",
    "test@email.com",
    "2024-01-15",
    "14:00",
    "2",
    tabName // Tab đích
  ];
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
  return result;
}

// Function test cho tab Ladipage 20_10
function testLadipageTab() {
  console.log('Testing Ladipage tab...');
  console.log('CONFIG:', CONFIG);
  console.log('LADIPAGE_SHEET_NAME:', CONFIG.LADIPAGE_SHEET_NAME);
  return testWithTab(CONFIG.LADIPAGE_SHEET_NAME);
}

// Function test đơn giản cho tab Ladipage
function simpleTestLadipage() {
  const testData = [
    "Chi nhánh Test",
    "Nguyễn Văn Test", 
    "0123456789",
    "test@email.com",
    "2024-01-15",
    "14:00",
    "2",
    "Ladipage 20_10" // Tab đích
  ];
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  console.log('Running simple test for Ladipage tab...');
  const result = doPost(mockEvent);
  console.log('Simple test result:', result.getContent());
  return result;
}

// Function test cho tab List 20_10
function testListTab() {
  return testWithTab(CONFIG.DEFAULT_SHEET_NAME);
}

// Function test cho tab map
function testMapTab() {
  return testWithTab(CONFIG.MAP_SHEET_NAME);
}

// Function để test tất cả các tab
function testAllTabs() {
  const results = {};
  
  CONFIG.VALID_SHEETS.forEach(sheetName => {
    console.log(`Testing tab: ${sheetName}`);
    results[sheetName] = testWithTab(sheetName);
  });
  
  return results;
}

// Function để debug CONFIG
function debugConfig() {
  console.log('CONFIG object:', CONFIG);
  console.log('CONFIG.VALID_SHEETS:', CONFIG.VALID_SHEETS);
  console.log('Type of VALID_SHEETS:', typeof CONFIG.VALID_SHEETS);
  console.log('Is array?', Array.isArray(CONFIG.VALID_SHEETS));
  return CONFIG;
}

// Function để setup header cho tab Ladipage 20_10
function setupLadipageTab() {
  try {
    const ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    let sheet = ss.getSheetByName(CONFIG.LADIPAGE_SHEET_NAME);
    
    if (!sheet) {
      console.log(`Tab ${CONFIG.LADIPAGE_SHEET_NAME} không tồn tại`);
      return { success: false, message: `Tab ${CONFIG.LADIPAGE_SHEET_NAME} không tồn tại` };
    }
    
    const lastRow = sheet.getLastRow();
    if (lastRow === 0) {
      // Thêm header row
      sheet.getRange(1, 1, 1, 8).setValues([[
        'Chi nhánh', 'Tên khách hàng', 'SĐT', 'Email', 'Ngày', 'Giờ', 'Số khách', 'Thời gian'
      ]]);
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 8).setBackground('#E8F0FE');
      
      console.log(`Đã thêm header cho tab ${CONFIG.LADIPAGE_SHEET_NAME}`);
      return { success: true, message: `Đã thêm header cho tab ${CONFIG.LADIPAGE_SHEET_NAME}` };
    } else {
      console.log(`Tab ${CONFIG.LADIPAGE_SHEET_NAME} đã có dữ liệu`);
      return { success: true, message: `Tab ${CONFIG.LADIPAGE_SHEET_NAME} đã có dữ liệu` };
    }
  } catch (err) {
    console.error('Lỗi khi setup tab:', err);
    return { success: false, error: String(err) };
  }
}

// Function để lưu dữ liệu trực tiếp vào tab Ladipage 20_10
function saveToLadipageTab(branch, name, phone, email, date, time, guests) {
  try {
    console.log('Bắt đầu lưu dữ liệu vào tab Ladipage 20_10...');
    
    // Mở sheet
    const ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    let sheet = ss.getSheetByName(CONFIG.LADIPAGE_SHEET_NAME);
    
    // Nếu tab không tồn tại, tạo mới
    if (!sheet) {
      console.log('Tạo tab mới:', CONFIG.LADIPAGE_SHEET_NAME);
      sheet = ss.insertSheet(CONFIG.LADIPAGE_SHEET_NAME);
    }
    
    // Kiểm tra và thêm header nếu cần
    const lastRow = sheet.getLastRow();
    if (lastRow === 0) {
      console.log('Thêm header cho tab mới...');
      sheet.getRange(1, 1, 1, 8).setValues([[
        'Chi nhánh', 'Tên khách hàng', 'SĐT', 'Email', 'Ngày', 'Giờ', 'Số khách', 'Thời gian'
      ]]);
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 8).setBackground('#E8F0FE');
    }
    
    // Chuẩn bị dữ liệu để ghi
    const row = [
      branch || '',
      name || '',
      "'" + String(phone || ''),     // Giữ số 0 đầu
      email || '',
      date || '',
      time || '',
      guests ? Number(guests) : '',
      new Date(),              // Timestamp
    ];
    
    console.log('Dữ liệu sẽ được ghi:', row);
    
    // Ghi dữ liệu
    sheet.appendRow(row);
    
    // Format timestamp
    const newLastRow = sheet.getLastRow();
    sheet.getRange(newLastRow, 8).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    
    console.log(`Đã lưu dữ liệu vào dòng ${newLastRow} của tab ${CONFIG.LADIPAGE_SHEET_NAME}`);
    
    return { 
      success: true, 
      message: `Đã lưu dữ liệu vào tab ${CONFIG.LADIPAGE_SHEET_NAME}`,
      row: newLastRow,
      timestamp: new Date().toISOString()
    };
    
  } catch (err) {
    console.error('Lỗi khi lưu dữ liệu:', err);
    return { success: false, error: String(err) };
  }
}

// Function test để lưu dữ liệu mẫu vào tab Ladipage
function testSaveToLadipage() {
  console.log('=== TEST LƯU DỮ LIỆU VÀO TAB LADIPAGE 20_10 ===');
  
  const testData = {
    branch: "Chi nhánh HN Centre",
    name: "Nguyễn Văn Test",
    phone: "0123456789",
    email: "test@email.com",
    date: "2024-01-15",
    time: "14:00",
    guests: "2"
  };
  
  console.log('Dữ liệu test:', testData);
  
  const result = saveToLadipageTab(
    testData.branch,
    testData.name,
    testData.phone,
    testData.email,
    testData.date,
    testData.time,
    testData.guests
  );
  
  console.log('Kết quả:', result);
  return result;
}
