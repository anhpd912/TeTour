# Register API - Summary of Changes

## ✅ Đã hoàn thành

### 1. Cập nhật Types (auth.types.ts)
Sửa đúng theo API Swagger:
```typescript
{
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  gender?: boolean;        // true = male, false = female
  address?: string;
  dateOfBirth?: string;    // Format: "YYYY-MM-DD"
  isActive?: boolean;
}
```

**Đã xóa:** `email`, `phoneNumber` (không có trong API)

### 2. Cập nhật Register Form
**Form fields mới:**
- Username * (required)
- First Name * (required)
- Last Name * (required)
- Address (optional)
- Date of Birth (optional) - date picker
- Gender (optional) - dropdown (Male/Female)
- Password * (required)
- Terms checkbox * (required)

**Đã xóa:** Email, Phone Number

### 3. Fixed CORS Issues
**axios.ts:**
- Không thêm Authorization header cho `/auth/login` và `/auth/register`
- Thêm `withCredentials: false`
- Check `typeof window !== 'undefined'` cho localStorage
- Better error handling cho CORS errors

**auth.service.ts:**
- Check window availability trước khi dùng localStorage
- Console logs để debug
- Better error messages

### 4. Improved Error Handling
**register/page.tsx:**
- Detect network/CORS errors
- Hiển thị error banner với icon
- Field-specific error messages
- General error message ở đầu form

### 5. Debug Tools
**ApiTestButton.tsx:**
- Test API connection button (chỉ hiện trong development)
- Hiển thị chi tiết lỗi
- Console logs đầy đủ

**docs/CORS-FIX.md:**
- Hướng dẫn fix CORS
- Giải thích nguyên nhân
- Solutions và workarounds

## 🎯 Cách sử dụng

### Test API Connection
1. Mở trang register trong development mode
2. Click nút "Test API Connection" ở góc dưới trái
3. Xem kết quả:
   - ✅ Success → API hoạt động
   - ❌ CORS Error → Backend cần config CORS
   - ❌ Network Error → Server down hoặc URL sai

### Register User
1. Điền form với các trường bắt buộc:
   - Username
   - First Name
   - Last Name
   - Password (min 8 chars)
   - Agree to terms

2. Optional fields:
   - Address
   - Date of Birth
   - Gender (default: Male)

3. Click "Create Account"

4. Nếu thành công → Redirect to login
5. Nếu lỗi → Hiển thị error message

## 🐛 Troubleshooting

### CORS Error (401 Unauthorized)
**Nguyên nhân:** Backend chưa config CORS cho localhost

**Giải pháp:**
1. Yêu cầu backend team config CORS
2. Hoặc dùng Next.js rewrites (xem CORS-FIX.md)
3. Hoặc deploy frontend lên cùng domain với backend

### Validation Errors
Check console logs để xem chi tiết:
```
Registration failed: ...
Error response: { errors: {...} }
```

### Network Errors
- Check API URL trong .env
- Check server có đang chạy không
- Check internet connection

## 📝 API Endpoint

```
POST https://tetour.onrender.com/api/auth/register

Headers:
  Content-Type: application/json

Body:
{
  "username": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "gender": true,
  "address": "string",
  "dateOfBirth": "2024-01-13",
  "isActive": true
}

Response (Success):
{
  "message": "Registration successful",
  "userId": "...",
  "username": "..."
}

Response (Error):
{
  "message": "Error message",
  "errors": {
    "username": ["Username already exists"],
    "password": ["Password too weak"]
  }
}
```

## 🔍 Debug Checklist

- [ ] Check .env có đúng API URL không
- [ ] Check console logs khi submit form
- [ ] Check Network tab trong DevTools
- [ ] Test với ApiTestButton
- [ ] Check backend có chạy không
- [ ] Check CORS config ở backend

## 📚 Related Files

- `src/shared/types/auth.types.ts` - Type definitions
- `src/shared/services/api/auth.service.ts` - Auth service
- `src/shared/services/api/axios.ts` - Axios config
- `src/app/[locale]/(auth)/register/page.tsx` - Register page
- `src/shared/components/ApiTestButton.tsx` - Debug tool
- `docs/CORS-FIX.md` - CORS troubleshooting
- `docs/API.md` - Full API documentation
