# Deutsch Lernen - Web Backend

Web Backend hoàn chỉnh cho app Flutter Deutsch Lernen, bao gồm hệ thống quản lý admin, authentication và API endpoints.

## 🚀 Tính năng chính

- **Authentication System**: Đăng ký, đăng nhập, đăng xuất
- **Password Reset**: Xử lý reset mật khẩu qua email
- **Email Verification**: Xác thực email khi đăng ký
- **User Management**: Quản lý profile, thay đổi thông tin
- **Admin Dashboard**: Quản lý users, lessons, content
- **API Endpoints**: RESTful API cho app Flutter
- **Responsive Design**: Tương thích mobile và desktop

## 🏗️ Kiến trúc hệ thống

### Frontend (Next.js 14)
- **Framework**: Next.js 14 với App Router
- **Styling**: Tailwind CSS + Heroicons
- **State Management**: React Hooks + Context
- **Authentication**: NextAuth.js + Supabase Auth
- **Responsive**: Mobile-first design

### Backend (API Routes)
- **API**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage
- **Real-time**: Supabase Realtime

### Infrastructure
- **Hosting**: Vercel (recommended) hoặc Netlify
- **Domain**: Custom domain với SSL
- **CDN**: Global edge network
- **Monitoring**: Vercel Analytics

## 📋 Yêu cầu hệ thống

- Node.js 18+ 
- npm hoặc yarn
- Supabase account

## 🛠️ Cài đặt

### 1. Clone repository
```bash
git clone <repository-url>
cd course_app_api
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Cấu hình môi trường
```bash
cp env.example .env.local
```

Chỉnh sửa file `.env.local` với thông tin Supabase của bạn:

```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# NextAuth Configuration
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

### 4. Khởi chạy development server
```bash
npm run dev
```

Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000)

## 🗄️ Cấu hình Database

### 1. Tạo Supabase Project
- Truy cập [supabase.com](https://supabase.com)
- Tạo project mới
- Lấy URL và API keys

### 2. Tạo bảng Users (tự động với Supabase Auth)
```sql
-- Bảng users được tạo tự động
-- Bạn có thể thêm các cột tùy chỉnh
ALTER TABLE auth.users ADD COLUMN IF NOT EXISTS full_name TEXT;
ALTER TABLE auth.users ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user';
```

### 3. Tạo bảng Lessons
```sql
CREATE TABLE lessons (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  level TEXT NOT NULL,
  category TEXT NOT NULL,
  content JSONB,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. Tạo bảng User Progress
```sql
CREATE TABLE user_progress (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  lesson_id INTEGER REFERENCES lessons(id),
  completed BOOLEAN DEFAULT FALSE,
  score INTEGER,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🔐 Authentication

### 1. Đăng ký User mới
```typescript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123',
  options: {
    data: {
      full_name: 'Nguyễn Văn A',
      role: 'user'
    }
  }
})
```

### 2. Đăng nhập
```typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
})
```

### 3. Reset Password
```typescript
const { error } = await supabase.auth.resetPasswordForEmail('user@example.com', {
  redirectTo: 'https://yourapp.com/reset-password'
})
```

## 📱 API Endpoints

### Authentication
- `POST /api/auth/[...nextauth]` - NextAuth endpoints
- `POST /api/auth/forgot-password` - Reset password

### Users (Admin only)
- `GET /api/users` - Lấy danh sách users
- `GET /api/users/[id]` - Lấy thông tin user
- `PUT /api/users/[id]` - Cập nhật user
- `DELETE /api/users/[id]` - Xóa user

### Lessons
- `GET /api/lessons` - Lấy danh sách lessons
- `GET /api/lessons/[id]` - Lấy thông tin lesson
- `POST /api/lessons` - Tạo lesson mới
- `PUT /api/lessons/[id]` - Cập nhật lesson
- `DELETE /api/lessons/[id]` - Xóa lesson

### Progress
- `GET /api/progress/[userId]` - Lấy tiến độ user
- `POST /api/progress` - Cập nhật tiến độ
- `GET /api/progress/stats` - Thống kê tiến độ

## 🎨 Components

### Dashboard Components
- `DashboardLayout` - Layout chính cho admin dashboard
- `DashboardStats` - Hiển thị thống kê tổng quan
- `RecentUsers` - Danh sách users gần đây
- `RecentLessons` - Danh sách lessons gần đây

### User Management
- `UsersTable` - Bảng quản lý users
- `UserForm` - Form thêm/sửa user

### Lesson Management
- `LessonsTable` - Bảng quản lý lessons
- `LessonForm` - Form thêm/sửa lesson

## 🚀 Deployment

### 1. Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### 2. Netlify
```bash
npm run build
# Upload thư mục .next
```

### 3. Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Development

### Scripts
```bash
npm run dev          # Development server
npm run build        # Build production
npm run start        # Start production server
npm run lint         # Lint code
```

### Code Structure
```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Admin dashboard
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── dashboard/         # Dashboard components
│   ├── users/             # User management
│   └── lessons/           # Lesson management
├── lib/                    # Utility libraries
│   ├── auth.ts            # NextAuth configuration
│   └── supabase.ts        # Supabase client
└── types/                  # TypeScript types
```

## 📊 Monitoring & Analytics

### Vercel Analytics
- Performance monitoring
- User behavior tracking
- Error tracking

### Supabase Dashboard
- Database performance
- API usage statistics
- Real-time logs

## 🔒 Security

### Best Practices
- Environment variables cho sensitive data
- Input validation và sanitization
- Rate limiting cho API endpoints
- CORS configuration
- HTTPS enforcement

### Authentication
- JWT tokens với expiration
- Refresh token rotation
- Role-based access control
- Session management

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📝 License

Dự án này được cấp phép theo MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 📞 Support

Nếu bạn gặp vấn đề hoặc có câu hỏi:

- Tạo issue trên GitHub
- Liên hệ: [your-email@example.com]
- Documentation: [link-to-docs]

## 🎯 Roadmap

### Phase 1 (Current)
- [x] Basic authentication
- [x] Admin dashboard
- [x] User management
- [x] Lesson management

### Phase 2
- [ ] Advanced analytics
- [ ] Content editor
- [ ] File upload system
- [ ] Real-time notifications

### Phase 3
- [ ] Mobile app integration
- [ ] Advanced reporting
- [ ] Multi-language support
- [ ] Performance optimization

---

**Deutsch Lernen Backend** - Hệ thống quản lý hoàn chỉnh cho app học tiếng Đức 🚀