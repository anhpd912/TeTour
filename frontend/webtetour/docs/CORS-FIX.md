# CORS Issue Fix Guide

## Vấn đề

Khi test API từ localhost (http://localhost:3000), bạn gặp lỗi CORS:
```
401 Unauthorized
Request Method: OPTIONS
Access to fetch at 'https://tetour.onrender.com/api/auth/login' from origin 'http://localhost:3000' 
has been blocked by CORS policy
```

Nhưng khi test trên Swagger UI (https://tetour.onrender.com) thì hoạt động bình thường.

## Nguyên nhân

1. **Same-Origin vs Cross-Origin:**
   - Swagger UI chạy trên cùng domain với API (`tetour.onrender.com`) → Same-Origin → Không có CORS
   - Localhost (`localhost:3000`) khác domain với API → Cross-Origin → Cần CORS config

2. **Preflight Request:**
   - Browser tự động gửi OPTIONS request trước POST/PUT/DELETE
   - Server phải trả về đúng CORS headers cho OPTIONS request
   - Server hiện tại trả về 401 cho OPTIONS request → Lỗi CORS

## Giải pháp đã áp dụng: Next.js Proxy

Đã config Next.js làm proxy để bypass CORS trong development:

### 1. File `next.config.mjs`
```javascript
async rewrites() {
  return [
    {
      source: '/api/:path*',
      destination: 'https://tetour.onrender.com/api/:path*',
    },
  ];
}
```

### 2. File `.env`
```env
# Dùng localhost để request đi qua Next.js proxy
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Cách hoạt động:
1. Frontend gọi: `http://localhost:3000/api/auth/login`
2. Next.js proxy forward đến: `https://tetour.onrender.com/api/auth/login`
3. Response trả về qua Next.js → Frontend
4. Không có CORS vì request từ browser chỉ đến localhost (same-origin)

## Cách test

1. **Restart dev server:**
```bash
pnpm dev
```

2. **Test register:**
   - Mở http://localhost:3000/register
   - Điền form và submit
   - Check Network tab → Request URL phải là `http://localhost:3000/api/auth/register`
   - Không còn OPTIONS request với 401

3. **Test login:**
   - Mở http://localhost:3000/login
   - Điền username/password
   - Submit và check response

## Giải pháp lâu dài: Backend fix CORS

Yêu cầu backend team thêm CORS config:

```javascript
// Express.js example
const cors = require('cors');

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://your-production-domain.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
```

Khi backend đã fix CORS, có thể:
1. Xóa `rewrites()` trong `next.config.mjs`
2. Đổi `.env` về `NEXT_PUBLIC_API_URL=https://tetour.onrender.com`
3. Restart dev server

## Test API

Để test xem API có hoạt động không:

```typescript
// Trong browser console
fetch('https://tetour.onrender.com/api/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'testuser',
    password: 'password123',
    firstName: 'Test',
    lastName: 'User',
    gender: true,
    isActive: true
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
```

## Các trường đăng ký đúng

Theo Swagger API:
```json
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
```

**Lưu ý:**
- `gender`: boolean (true = male, false = female)
- `dateOfBirth`: format "YYYY-MM-DD"
- `isActive`: boolean (true = active user)
- Không có field `email` và `phoneNumber` trong API register

## Debug Steps

1. Mở DevTools (F12) → Network tab
2. Thử register
3. Xem request:
   - Nếu thấy OPTIONS request với 401 → CORS issue từ server
   - Nếu thấy POST request với 400/422 → Validation error
   - Nếu thấy POST request với 200 → Success!

4. Check Console logs:
   - `Registration failed:` - Chi tiết lỗi
   - `Error response:` - Response từ server

## Contact Backend Team

Yêu cầu backend team thêm CORS config cho:
- Origin: `http://localhost:3000`, `http://localhost:3001`
- Methods: `GET, POST, PUT, DELETE, OPTIONS`
- Headers: `Content-Type, Authorization`

Hoặc deploy frontend lên cùng domain với backend để tránh CORS.
