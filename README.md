# 🏠 Roomily Landing Page

Trang landing page hiện đại cho dịch vụ tìm kiếm phòng trọ Roomily, được xây dựng bằng React + Vite + CSS thuần với hình ảnh thực tế từ Figma design.

## ✨ Tính năng

- 🎨 **Design hiện đại**: Giao diện đẹp mắt theo Figma design với hình ảnh thực tế
- 📱 **Responsive**: Hoàn toàn tương thích với mobile và desktop  
- 🚀 **Performance cao**: Sử dụng Vite để build nhanh
- 🎯 **CSS thuần**: Không phụ thuộc framework CSS, dễ customize
- 🌟 **Hover effects**: Animations mượt mà khi interact
- 📋 **Mobile menu**: Navigation menu cho thiết bị di động
- 🖼️ **Hình ảnh thực tế**: Sử dụng assets từ Figma design cho trải nghiệm chân thực

## 🛠️ Công nghệ sử dụng

- **React 19** - Library UI framework
- **Vite** - Build tool và dev server  
- **CSS thuần** - Vanilla CSS với responsive design
- **Assets thực tế** - Hình ảnh từ Figma design

## 🚀 Cài đặt và chạy

### 1. Clone repository
```bash
git clone [repository-url]
cd roomily-landing
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Chạy development server
```bash
npm run dev
```

Trang web sẽ chạy tại `http://localhost:5173`

### 4. Build cho production
```bash
npm run build
```

### 5. Preview build
```bash
npm run preview
```

## 📁 Cấu trúc project

```
roomily-landing/
├── src/
│   ├── assets/
│   │   └── images/           # Hình ảnh từ Figma design
│   │       ├── logo.png      # Logo Roomily
│   │       ├── home1.png     # Hero illustration
│   │       ├── transport.png # Icon vận chuyển
│   │       ├── findFriend.png# Icon tìm bạn
│   │       ├── convenient.png# Icon tiện ích
│   │       ├── image1-6.png  # Ảnh các căn phòng
│   │       └── image7-9.png  # Ảnh gallery
│   ├── App.jsx          # Component chính
│   ├── main.jsx         # Entry point
│   └── index.css        # Toàn bộ CSS styles
├── public/
├── vite.config.js
└── package.json
```

## 🎨 Các section trong trang

1. **Header**: Logo Roomily thực tế với navigation menu
2. **Hero Section**: "Smart Rentals, Made Simple" với illustration 3D từ Figma
3. **Services**: 3 dịch vụ với icons thực tế:
   - 🚚 **VẬN CHUYỂN** - Chuyển Trọ Giá Rẻ
   - 🤝 **TÌM BẠN** - Tìm Bạn Ở Chung  
   - 🏪 **TIỆN ÍCH** - Tiện Ích Xung Quanh
4. **Suggested Options**: 6 căn phòng thực tế tại Đà Nẵng:
   - Trọ Thanh Khê, Liên Chiểu, Sơn Trà
   - Trọ Hòa Vang, Giá Rẻ, Hòa Khánh
5. **Inspiration**: Gallery "50+ Beautiful rooms" với ảnh thực tế
6. **Footer**: Thông tin liên hệ đầy đủ

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Stack layout, smaller images
- **Tablet**: 768px - 1024px - 2 column grid
- **Desktop**: > 1024px - 3 column grid, full gallery

## 🎯 Scripts có sẵn

- `npm run dev` - Chạy development server
- `npm run build` - Build cho production
- `npm run preview` - Preview build version
- `npm run lint` - Chạy ESLint

## 🌈 Design System

### Màu sắc
- **Primary**: #4f46e5 (Indigo) - Logo, buttons
- **Secondary**: #06b6d4 (Cyan) - CTA button
- **Accent**: #ef4444 (Red) - Hero subtitle
- **Orange**: #f97316 - Gallery button, accents
- **Background**: #f9fafb (Light Gray), #1f2937 (Dark)

### Typography
- **Font**: Inter (300, 400, 500, 600, 700)
- **Hero Title**: 3rem desktop, 2rem mobile
- **Section Titles**: 2rem
- **Body Text**: 1rem với line-height 1.6

## 🖼️ Assets Features

- **High Quality Images**: Tất cả ảnh từ Figma design gốc
- **Optimized Loading**: Object-fit và responsive images
- **Hover Effects**: Scale và overlay transitions
- **Professional Photos**: Ảnh căn phòng thực tế tại Việt Nam

## 🎨 CSS Features

- **CSS Grid & Flexbox**: Modern layout techniques
- **Image Optimization**: object-fit, responsive sizing
- **Smooth Transitions**: Hover effects và animations
- **Mobile-first Design**: Responsive từ mobile lên desktop
- **No Dependencies**: Pure CSS, load nhanh

## 📄 License

© 2025 Roomily. All rights reserved.
