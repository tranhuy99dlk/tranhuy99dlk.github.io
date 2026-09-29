# CV Website — Trần Đình Huy

## Cấu trúc

| File | Vai trò | Khi nào sửa |
|---|---|---|
| `cv-data.js` | **Dữ liệu**: toàn bộ nội dung CV, song ngữ VI/EN | Mỗi lần cập nhật thông tin |
| `index.html` | Khung trang + SEO (thẻ mà Google/LinkedIn/Zalo đọc) | Khi đổi chức danh chính hoặc địa chỉ web |
| `style.css` | Giao diện: màu, font, bố cục, bản in PDF | Khi muốn đổi màu/kiểu |
| `app.js` | Bộ dựng trang từ dữ liệu | Hầu như không bao giờ |

## Cập nhật nhanh nhất (không cần cài gì)

1. Mở repo trên github.com → bấm vào `cv-data.js` → bấm biểu tượng bút chì ✏️
2. Sửa nội dung → **Commit changes**
3. Đợi 1–2 phút. Nếu vẫn thấy bản cũ, nhấn `Cmd + Shift + R` (GitHub lưu cache tới 10 phút)

## Cập nhật trên máy

```bash
cd "đường-dẫn-tới/cv-website"
# sửa cv-data.js bằng VS Code, rồi xem thử:
python3 -m http.server 8000      # mở http://localhost:8000
git add . && git commit -m "Cập nhật CV" && git push
```

Xem thử bằng `python3 -m http.server` thay vì nhấp đúp `index.html`: nếu gõ sai, khung đỏ báo lỗi sẽ chỉ ra **số dòng** (nhấp đúp vẫn chạy nhưng không báo số dòng).

## Các thao tác thường gặp trong `cv-data.js`

- **Thêm công việc mới**: copy khối mẫu ở đầu mục `experience`, đặt lên đầu mảng.
- **Ẩn số điện thoại**: `showPhone: false`
- **Thêm LinkedIn**: `linkedin: "https://linkedin.com/in/..."`
- **Ẩn cả một mục**: để mảng rỗng, ví dụ `certifications: []`
- **In đậm**: `"**Chữ đậm:** chữ thường"`
- **Chữ giống nhau 2 ngôn ngữ**: viết `"JIRA"` thay vì `{ vi: "JIRA", en: "JIRA" }`

Nhớ sửa `updated: "..."` mỗi lần cập nhật.
