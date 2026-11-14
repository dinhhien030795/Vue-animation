# Kế hoạch hiện thực hoá

Bản tóm tắt nằm trên bảng trắng: https://claude.ai/artifact/CrKc3Uri93ZLiSo1g6rbX1
Bản đồ các kiếp: https://claude.ai/artifact/SoPqtLVisibn2nqG5ddA2a

Mọi mốc thời gian là ước lượng của Claude, tính theo khoảng 10 giờ mỗi tuần của bạn. Chưa có mốc nào được kiểm chứng.

## 1. Đích đến

Bản chơi thử gồm ba kiếp fantasy (1, 2, 31), chơi được trên Windows, đủ để 5–10 người thật chơi và trả lời một câu hỏi: suy luận mục đích ẩn qua bốn mùa có vui không.

Hai mốc quyết định:

| Mốc | Câu hỏi | Nếu câu trả lời là không |
|-----|---------|---------------------------|
| Tuần 6 | Kiếp 1 dạng hình khối chơi trọn bốn mùa. Việc suy luận có vui không? | Dừng lại sửa thiết kế. Chưa làm kiếp 2 và 31 |
| Tuần 12 | Đa số người chơi thử có muốn chơi kiếp thứ hai không? | Không làm tiếp bản đầy đủ theo thiết kế này |

## 2. Bốn giai đoạn

### Giai đoạn 1: Nền móng (tuần 1–2)

| Tuyến | Việc | Xong khi |
|-------|------|----------|
| Học | Cài Godot 4 và Blender. Làm hết bài hướng dẫn 3D đầu tiên trong tài liệu chính thức của Godot | Bạn tự mở được project, chạy game, đổi một thông số và thấy kết quả |
| Thiết kế | Đọc và duyệt kiếp 1, 2, 31 trên bản đồ các kiếp. Sửa giọng văn | Ba kiếp chuyển sang trạng thái "Đã duyệt" |
| Code | Dựng project Godot. Nhân vật có khuynh hướng, lòng tin, tâm trạng. Tay bài, Tín ngưỡng, một mùa Xuân | Chơi được 8 lượt của mùa Xuân bằng hình khối |
| Nội dung | Viết khoảng 100 câu suy nghĩ chung (24 ô, mỗi ô 4 câu) | Bạn đã đọc và sửa |
| Hình ảnh | Hình khối xám. Chưa cần đẹp | Phân biệt được nhân vật, địa điểm, lá bài |

Việc đầu tiên của Claude trong giai đoạn này: thử cài Godot trong môi trường cloud để biết có tự chạy test được không. Điều này chưa được kiểm chứng.

### Giai đoạn 2: Kiếp 1 dạng hình khối (tuần 3–6)

| Tuyến | Việc | Xong khi |
|-------|------|----------|
| Học | Blender: dựng hình low-poly, tô màu theo mặt, xuất `.glb`, nhập vào Godot | Bạn tự làm được một cái cây và một ngôi nhà, đưa vào game |
| Thiết kế | Chơi kiếp 1 mỗi tuần, ghi lại chỗ khó hiểu, chỉnh số | Bạn chơi trọn kiếp 1 mà không cần Claude giải thích |
| Code | Bốn mùa, bước ngoặt, thước đo mục đích, khế ước, ba kiểu chạm, chỗ thả bài, tuyên đoán, màn kết kiếp dạng chữ | Chơi được từ ngưỡng cửa tới màn kết kiếp |
| Nội dung | Trọn kiếp 1: câu suy nghĩ viết tay, 4 bước ngoặt, 3 khoảnh khắc then chốt, 4 câu "giá như", khúc quanh | Không còn chỗ nào hiện chữ tạm |
| Hình ảnh | Mô hình Tần, Nhạn, lò rèn | Ba mô hình thay được hình khối |

Cuối giai đoạn là mốc dừng tuần 6.

### Giai đoạn 3: Hình ảnh, kiếp 2 và 31 (tuần 7–10)

| Tuyến | Việc | Xong khi |
|-------|------|----------|
| Học | Godot: ráp cảnh, ánh sáng, camera, vật liệu | Bạn tự dựng được tiểu cảnh mùa Xuân của kiếp 1 |
| Thiết kế | Viết lại mùa Thu và mùa Đông của kiếp 1 và 2 theo khúc quanh. Khai báo điểm cho kiếp 31 | Ba kiếp có đủ khai báo như trong `cham-muc-dich.md` |
| Code | Khúc quanh, kỷ vật, buông kỷ vật thành lá bài, cửa tái sinh, chơi lại kiếp dang dở, Sổ các kiếp, thẻ cuộc đời, lưu game | Chơi được ba kiếp nối tiếp nhau |
| Nội dung | Kiếp 2 và 31. Bản tiếng Anh của cả ba kiếp | Đổi ngôn ngữ trong game không lộ chữ thiếu |
| Hình ảnh | Tiểu cảnh lớn dần qua bốn mùa, ánh sáng theo mùa, dáng điệu và biểu tượng cảm xúc | Nhìn dáng điệu là phân biệt được "lao tới" với "nhận vì nể" |

### Giai đoạn 4: Chơi thử (tuần 11–12)

| Tuyến | Việc | Xong khi |
|-------|------|----------|
| Học | Cách tổ chức chơi thử: không giải thích, chỉ quan sát, hỏi sau khi chơi | Có một tờ câu hỏi dùng chung cho mọi người chơi thử |
| Thiết kế | Tổng hợp phản ứng, quyết định làm tiếp hay dừng | Có câu trả lời cho mốc tuần 12 |
| Code | Sửa lỗi, đóng gói bản Windows | Người chơi thử tự cài và chạy được |
| Nội dung | Soát giọng văn lần cuối | |
| Hình ảnh | Ảnh chụp và một đoạn phim ngắn cho trang demo | |

## 3. Kế hoạch học

Bạn không cần học lập trình sâu. Mục tiêu là đủ để ráp cảnh, làm mô hình và tự chỉnh game.

### Godot

| Tuần | Học gì | Bài tập gắn với game |
|------|--------|----------------------|
| 1 | Giao diện editor, cảnh và nút, chạy game | Mở project của Claude, chạy, đổi màu một vật |
| 2 | Hết bài hướng dẫn 3D đầu tiên trong tài liệu chính thức | Tự thêm một địa điểm mới vào tiểu cảnh hình khối |
| 3–4 | Nhập mô hình `.glb`, vật liệu, đặt vật vào cảnh | Thay hình khối của lò rèn bằng mô hình bạn làm |
| 7–8 | Ánh sáng, môi trường, camera | Dựng ánh sáng cho bốn mùa |
| 9–10 | Đọc hiểu GDScript ở mức sửa số và sửa chữ | Tự chỉnh giá một lá bài, tự sửa một câu thoại |
| 11 | Xuất bản ra file chạy được | Tự đóng gói một bản Windows |

### Blender

| Tuần | Học gì | Bài tập gắn với game |
|------|--------|----------------------|
| 1–2 | Di chuyển, chọn, các phép dựng hình cơ bản | Một cái cây và một tảng đá |
| 3–4 | Tô màu theo từng mặt, xuất `.glb` | Một ngôi nhà, đưa vào Godot |
| 5–6 | Dựng nhân vật đơn giản không có xương | Tần và Nhạn dạng tí hon |
| 7–8 | Bộ mảnh ghép dùng chung, giữ số tam giác thấp | Lò rèn, cửa hầm ngục |
| 9–10 | Biến thể theo tuổi: trẻ con, người lớn, người già | Tần ở bốn mùa |

Nguồn học: tài liệu chính thức của Godot và của Blender đều miễn phí. Mình không đề xuất khoá học cụ thể nào vì chưa kiểm tra được khoá nào còn cập nhật. Khi bắt đầu, bạn nói mình tìm và so sánh.

Nguyên tắc: mỗi tuần học một thứ và dùng ngay thứ đó vào game. Không học trước những thứ chưa cần.

## 4. Kế hoạch thiết kế

| Việc | Ai làm | Khi nào |
|------|--------|---------|
| Duyệt kiếp 1, 2, 31 trên bản đồ các kiếp | Bạn | Tuần 1 |
| Viết lại mùa Thu, Đông của kiếp 1 và 2 theo khúc quanh đã duyệt | Claude viết, bạn sửa | Tuần 2 cho kiếp 1, tuần 7 cho kiếp 2 |
| Khai báo điểm của kiếp 31 | Claude | Tuần 7 |
| Chạy mô phỏng cho kiếp 2 và 31 | Claude | Tuần 7 |
| Chỉnh số theo lần chơi thật | Cả hai | Mỗi tuần từ tuần 3 |
| Viết đầy đủ kiếp 32–38 | Claude viết, bạn sửa | Sau mốc tuần 12 |
| Bộ bài của thế giới thường và phép thuật | Claude | Sau mốc tuần 12 |

## 5. Cách làm việc hằng tuần

1. Đầu tuần: Claude đưa bản mới, kèm danh sách thứ đã đổi và thứ chưa kiểm tra được.
2. Trong tuần: bạn chơi, làm bài tập học, ghi nhận xét ngắn.
3. Cuối tuần: bạn trả lời ba câu. Chỗ nào khó hiểu? Chỗ nào chán? Chỗ nào làm bạn muốn chơi tiếp?
4. Claude sửa theo đó trước khi thêm tính năng mới.

Claude chỉ kiểm tra hình ảnh qua ảnh chụp và không cảm được độ vui. Nhận xét của bạn sau mỗi lần chơi là dữ liệu duy nhất về hai thứ đó.

## 6. Rủi ro của kế hoạch

- **Chật.** Ước tính 10–12 tuần có từ trước khi thêm khúc quanh, chạm và chỗ thả bài. Nếu tới tuần 4 kiếp 1 chưa chơi được hai mùa, nên cắt kiếp 2 khỏi bản chơi thử, giữ kiếp 1 và 31.
- **Học song song với làm.** Nếu việc học Blender chậm, bản chơi thử vẫn chạy được bằng mô hình do skill `lowpoly-assets` sinh ra, chỉ kém đẹp.
- **Godot trong môi trường cloud chưa được thử.** Nếu Claude không tự chạy được game, bạn phải chạy và báo lỗi, vòng sửa sẽ chậm hơn.
- **Chơi thử cần người thật.** Bạn nên bắt đầu tìm 5–10 người từ tuần 8, không đợi tới tuần 11.

## 7. Sau mốc tuần 12

Nếu quyết định làm tiếp: viết đủ 38 kiếp, làm hai thế giới còn lại, ghép bài, trang Steam và demo. Ước tính cũ trong GDD là thêm 6–9 tháng. Con số đó cần tính lại sau bản chơi thử.
