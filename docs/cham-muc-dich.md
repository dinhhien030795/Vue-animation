# Thiết kế công thức chấm mục đích

Bản nháp chờ duyệt. Mọi con số là giá trị khởi điểm để chỉnh khi chơi thử. Người chơi không bao giờ thấy bất kỳ con số nào trong tài liệu này.

## 1. Mỗi kiếp khai báo gì

| Mục | Ý nghĩa | Ví dụ kiếp 1 |
|-----|---------|--------------|
| Khuynh hướng mục đích | Loại việc dẫn tới mục đích | Tạo tác |
| Đối tượng | Việc đó phải hướng vào ai, cái gì | Nhạn, lò rèn |
| Khuynh hướng lạc lối | Loại việc của mục đích giả | Chinh phục |
| Bốn bước ngoặt | Mỗi bước có một hướng đúng | Xem mục 5 |
| Khoảnh khắc then chốt | 3 cảnh viết tay, hiếm và đáng nhớ | Xem mục 5 |
| Bốn câu "giá như" | Mỗi mùa một câu | Xem mục 5 |

## 2. Điểm đến từ đâu

Thước đo chạy từ 0 đến 100, bắt đầu ở 0.

### 2.1. Sự kiện

| Sự kiện | Lao tới | Nhận thường | Nhận vì nể | Từ chối |
|---------|---------|-------------|------------|---------|
| Trúng cả khuynh hướng lẫn đối tượng | +4 | +2 | 0 | 0 |
| Chỉ trúng một trong hai | +1 | 0 | 0 | 0 |
| Không trúng | 0 | 0 | 0 | 0 |

- Cặp bài ghép trúng cả hai thì nhân 1,5.
- **Trần mỗi mùa: 12 điểm từ sự kiện.** Mục đích phải được vun đắp qua nhiều mùa, không dồn được vào một mùa.
- Kiểu chạm (mưa, nắng, gió) không cho điểm.

### 2.2. Bước ngoặt

| Kết quả | Điểm |
|---------|------|
| Nhân vật chọn hướng đúng | +12 |
| Nhân vật chọn hướng khác | −6 |

### 2.3. Khoảnh khắc then chốt

Mỗi khoảnh khắc +8, mỗi kiếp có 3. Lá Định mệnh được nhân vật nhận cũng tính là một khoảnh khắc then chốt.

### 2.4. Tổng tối đa

| Nguồn | Tối đa |
|-------|--------|
| Sự kiện, 4 mùa × 12 | 48 |
| Bước ngoặt, 4 × 12 | 48 |
| Khoảnh khắc then chốt, 3 × 8 | 24 |
| Tổng | 120, cắt về 100 |

Dư 20 điểm nghĩa là người chơi có thể lỡ một bước ngoặt, hoặc bỏ sót vài sự kiện, mà vẫn trọn vẹn.

## 3. Nhân vật quyết định bước ngoặt thế nào

Bạn không chọn thay nhân vật. Nó chọn dựa trên những gì đã xảy ra trong mùa.

Mỗi mùa có hai con số đếm lại từ đầu:

- **Đà mục đích**: cộng 1 mỗi lần nhân vật lao tới hoặc nhận thường một sự kiện trúng khuynh hướng mục đích.
- **Đà lạc lối**: cộng 1 mỗi lần nhân vật thành công ở một sự kiện thuộc khuynh hướng lạc lối, kể cả khi nhận vì nể.

Cuối mùa:

| Điều kiện | Nhân vật chọn |
|-----------|---------------|
| Đà mục đích lớn hơn đà lạc lối | Hướng đúng |
| Đà lạc lối lớn hơn | Hướng của mục đích giả |
| Bằng nhau | Lưỡng lự. Lá bài cuối cùng của mùa quyết định |

Hai thứ làm lệch cán cân:

- **Khế ước**: khế ước cùng khuynh hướng với mục đích cộng 1 vào đà mục đích. Khế ước cùng khuynh hướng lạc lối cộng 1 vào đà lạc lối. Nếu nhân vật xin giải khế ước và được giải, phần cộng này mất đi.
- **Mùa Xuân**: đà mục đích được cộng sẵn 1, vì đứa trẻ còn làm theo lòng mình.

Điểm đáng chú ý: thắng nhiều ở mục đích giả không trừ điểm trực tiếp. Nó đẩy nhân vật chọn sai ở bước ngoặt, và chính bước ngoặt mới trừ điểm. Người chơi vì thế thấy hậu quả bằng một cảnh, không phải bằng một con số.

## 4. Chấm cuối kiếp

| Mức | Điều kiện |
|-----|-----------|
| Trọn vẹn | Thước đo từ 70 trở lên **và** bước ngoặt mùa Đông đi đúng hướng |
| Dang dở | Thước đo 35–69, hoặc từ 70 trở lên nhưng lỡ bước ngoặt mùa Đông |
| Lạc lối | Thước đo dưới 35 |

Bước ngoặt mùa Đông là hành động khép lại mục đích. Không có nó thì dù vun đắp cả đời cũng chỉ là dang dở.

**Chọn câu "giá như"**: game tìm mùa hụt điểm nhiều nhất so với mức tối đa của mùa đó (12 điểm sự kiện + 12 điểm bước ngoặt) và hiện câu của mùa ấy. Nếu hai mùa hụt bằng nhau thì lấy mùa sớm hơn. Câu "giá như" vì thế chỉ đúng vào chỗ cần sửa nhất khi chơi lại.

## 5. Khai báo của ba kiếp

### Kiếp 1: Thanh kiếm không mang tên mình

- Khuynh hướng mục đích: Tạo tác. Đối tượng: Nhạn, lò rèn. Lạc lối: Chinh phục.

| Trúng cả hai | Chỉ trúng một |
|--------------|---------------|
| Người thợ già (thả ở lò rèn) · Việc nặng nhọc (thả ở lò rèn) · Món quà của thần (cây búa, được dùng) · Người bạn cũ ghé thăm khi Tần sửa đồ cho Nhạn · Cơn bão (thả ở lò rèn, Tần giữ lò) | Việc tạo tác không dành cho Nhạn · Ở bên Nhạn mà không làm gì cho cô |

| Mùa | Hướng đúng ở bước ngoặt | Câu "giá như" |
|-----|--------------------------|----------------|
| Xuân | Đưa thanh kiếm gỗ cho Nhạn | "Giá như kiếp này, thanh kiếm gỗ ấy được trao cho đứa trẻ thật sự muốn nó." |
| Hạ | Ở lại học nghề bố | "Giá như kiếp này, đôi tay ấy được làm thứ nó muốn làm." |
| Thu | Rèn khối thép sao băng cho Nhạn | "Giá như kiếp này, khối thép ấy thành thứ dành cho người khác." |
| Đông | Mài lại thanh kiếm lần cuối | "Giá như kiếp này, lò lửa còn đỏ vào ngày cô ấy trở về." |

Khoảnh khắc then chốt: bỏ dở hầm ngục để đưa Nhạn bị thương về · tự tay sửa món đồ đầu tiên cho Nhạn · giữ được lửa lò qua một cơn bão.

### Kiếp 2: Con rồng cuối cùng không nên chết một mình

- Khuynh hướng mục đích: Chăm sóc. Đối tượng: rồng Tro, đỉnh núi. Lạc lối: Chinh phục.

| Trúng cả hai | Chỉ trúng một |
|--------------|---------------|
| Con thú bị thương (thả ở núi) · Buổi chiều rảnh khi Mây tự leo núi · Việc nặng nhọc (thả ở núi: mang sữa dê lên) · Cơn bão (thả ở núi, Mây leo lên) | Chăm con vật khác · Lên núi để do thám |

| Mùa | Hướng đúng ở bước ngoặt | Câu "giá như" |
|-----|--------------------------|----------------|
| Xuân | Giữ bí mật về con rồng | "Giá như kiếp này, có một bí mật được giữ cho kẻ không tự giữ được." |
| Hạ | Dẫn đoàn thợ săn đi lối vòng | "Giá như kiếp này, đôi chân ấy đi chậm lại trên con đường lên đỉnh." |
| Thu | Đứng chắn trước con rồng và tìm cách giúp cả Vệ | "Giá như kiếp này, có ai đứng giữa lưỡi giáo và một thứ đang chờ chết." |
| Đông | Leo lên trong đêm bão | "Giá như kiếp này, có ai đó ở bên khi ngọn lửa cuối cùng tắt." |

Khoảnh khắc then chốt: nghe ông ngoại nói thật về vụ cháy · tha cho con thú trong một chuyến săn · mang sữa dê lên núi lần đầu.

### Kiếp 9: Bữa cơm với cha

- Khuynh hướng mục đích: Gắn bó. Đối tượng: cha, căn bếp. Lạc lối: Chinh phục.

| Trúng cả hai | Chỉ trúng một |
|--------------|---------------|
| Bữa cơm nhà khi cha có mặt · Người bạn cũ ghé thăm (cha về) · Trận ốm khi cha con chăm nhau · Buổi chiều rảnh khi Con tự vào bếp | Vào hầm ngục cùng cha · Bữa cơm nhà khi cha vắng |

| Mùa | Hướng đúng ở bước ngoặt | Câu "giá như" |
|-----|--------------------------|----------------|
| Xuân | Nói ra rằng mình muốn cha ở lại | "Giá như kiếp này, đứa trẻ ấy dám nói điều nó muốn." |
| Hạ | Xin cha ở nhà thêm một ngày thay vì cùng vào hầm ngục | "Giá như kiếp này, hai người ngồi xuống cạnh nhau thay vì đứng cạnh nhau." |
| Thu | Ở lại ăn hết bát canh mặn khi tù và gọi | "Giá như kiếp này, có một bữa cơm mà không ai phải đứng dậy." |
| Đông | Học nấu món canh ấy | "Giá như kiếp này, vị canh ấy còn được nấu thêm một lần." |

Khoảnh khắc then chốt: Con nấu cho cha lần đầu · cha kể một chuyện không phải chiến tích · hai cha con ăn hết một bữa trong lúc ngoài trời có bão.

## 6. Ví dụ tính một mùa

Kiếp 1, mùa Hạ, khế ước Đôi Tay (cùng khuynh hướng mục đích, đà mục đích +1).

| Lá | Chỗ thả | Phản ứng | Điểm | Đà mục đích | Đà lạc lối |
|----|---------|----------|------|-------------|------------|
| (khế ước) | | | | 1 | 0 |
| Hầm ngục nông | Núi | Nhận vì nể, thắng | 0 | 1 | 1 |
| Người thợ già | Lò rèn | Lao tới | +4 | 2 | 1 |
| Buổi chiều rảnh | | Tự ra lò rèn | +1 | 2 | 1 |
| Quái vật quấy làng | Sân làng | Nhận thường, thắng | 0 | 2 | 2 |
| Việc nặng nhọc | Lò rèn | Lao tới | +4 | 3 | 2 |
| Người bạn cũ ghé thăm | Lò rèn | Lao tới, sửa dao cho Nhạn (then chốt) | +4, +8 | 4 | 2 |

- Điểm sự kiện: 13, cắt về trần 12. Khoảnh khắc then chốt: +8.
- Bước ngoặt: đà mục đích 4 lớn hơn đà lạc lối 2, nên Tần ở lại học nghề. +12.
- Mùa Hạ đem về 32 điểm.

Nếu người chơi tin vào mục đích giả và thả thêm hai lá hầm ngục thay cho hai lá ở lò rèn: đà lạc lối là 4, đà mục đích là 2, Tần đi theo đội thám hiểm. Mùa đó chỉ còn 5 điểm sự kiện, vẫn giữ 8 điểm then chốt, và bị trừ 6 ở bước ngoặt: tổng 7 điểm thay vì 32.

## 7. Những điểm do Claude tự quyết, cần bạn duyệt

- Toàn bộ thang điểm: +4, +2, +1, trần 12 mỗi mùa, ±12 và −6 ở bước ngoặt, +8 cho khoảnh khắc then chốt.
- Ngưỡng 70 và 35, và điều kiện bắt buộc về bước ngoặt mùa Đông.
- Cách nhân vật quyết định bước ngoặt bằng hai con số đà.
- Mục đích giả không trừ điểm trực tiếp mà đẩy nhân vật chọn sai ở bước ngoặt.
- Mỗi kiếp cần bốn câu "giá như" thay vì một. Mình đã viết cho ba kiếp ví dụ. 27 kiếp còn lại trong `scenarios/` mới có một câu.
- Hướng đúng ở từng bước ngoặt của ba kiếp. Vài chỗ mình phải diễn giải lại kịch bản gốc, nhất là mùa Xuân và mùa Hạ của kiếp 9.

## 8. Chưa thiết kế

- Khai báo của 27 kiếp còn lại.
- Màn hình dành cho người làm game để xem thước đo khi chơi thử.
- Cách chọn những khoảnh khắc được chiếu lại ở màn kết kiếp.
