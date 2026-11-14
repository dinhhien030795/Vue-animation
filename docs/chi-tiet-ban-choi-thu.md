# Thiết kế chi tiết bản chơi thử

Bản nháp chờ duyệt. Tài liệu này lấp các phần còn thiếu để có thể bắt đầu dựng bản hình khối. Các con số đã qua mô phỏng được ghi rõ; số còn lại là giá trị khởi điểm.

## 1. Phạm vi

- Ba kiếp fantasy: kiếp 1 (Thanh kiếm không mang tên mình), kiếp 2 (Con rồng cuối cùng), kiếp 9 (Bữa cơm với cha).
- Thứ tự làm: kiếp 1 hoàn chỉnh trước, rồi mới tới kiếp 2 và 9.
- Người chơi mới luôn bắt đầu ở kiếp 1. Từ kiếp thứ hai trở đi mới có cánh cửa tái sinh.
- Có: lá bài, chỗ thả bài, ba kiểu chạm, khế ước, tuyên đoán, kỷ vật, chơi lại kiếp dang dở, Sổ các kiếp, thẻ cuộc đời.
- Chưa có: ghép bài, thế giới khác, sắp xếp tiểu cảnh.

## 2. Công thức nhận sự kiện

Áp dụng cho Thử thách, Gặp gỡ, Cơ hội. Đây là công thức đã dùng trong mô phỏng.

```
ý muốn riêng = (khuynh hướng cao nhất của lá − 1)
             + tâm trạng × 0,5
             − max(0, nguy hiểm − sức lực)
             + 1,5 nếu lá trúng mục đích và thả đúng chỗ
             + ngẫu nhiên trong khoảng −0,75 đến +0,75

điểm nhận = ý muốn riêng + (lòng tin − 50) / 25
```

| Điều kiện | Phản ứng |
|-----------|----------|
| điểm nhận ≥ 1, và khuynh hướng bằng 3 hoặc lá trúng mục đích | Lao tới |
| điểm nhận ≥ 0, ý muốn riêng ≥ 0 | Nhận thường |
| điểm nhận ≥ 0, ý muốn riêng < 0 | Nhận vì nể |
| điểm nhận từ −0,5 đến dưới 0 | Lưỡng lự: 50% nhận, 50% từ chối. Một lần chạm hợp ý ngay trước đó nghiêng thành nhận |
| điểm nhận dưới −0,5 | Từ chối |

Sức lực nền theo mùa: Xuân 0, Hạ 1, Thu 2, Đông 1. Mỗi Thử thách thành công cộng 0,25. Mỗi thương tích trừ 1 cho tới khi được chữa hoặc hết mùa.

Xác suất thắng một Thử thách: 80%, cộng 10% nếu lao tới, trừ 25% cho mỗi bậc nguy hiểm vượt sức lực.

## 3. Nhịp thời gian

- Một mùa có 8 lượt. Mỗi lượt là một lá bài, hoặc một lần bỏ lá.
- Mỗi lượt gồm: bạn chọn và thả (không giới hạn thời gian, game đứng yên), nhân vật phản ứng (5–10 giây), sự kiện diễn ra (40–60 giây), nhân vật sống tự do (15–20 giây).
- Trong đoạn sống tự do, nhân vật tự đi lại và làm việc vặt theo khuynh hướng của nó. Đây là manh mối miễn phí, nhẹ hơn lá Buổi chiều rảnh.
- Chạm dùng được bất cứ lúc nào, không tính lượt.
- Tốc độ: bình thường, hoặc gấp đôi khi chơi lại một kiếp dang dở.
- Ước tính: 8 lượt × khoảng 90 giây = 12 phút mỗi mùa, cộng bước ngoặt. Con số này cần đo lại khi có bản hình khối.

## 4. Nhân vật phụ

Mỗi nhân vật phụ có:

| Thuộc tính | Giá trị |
|------------|---------|
| Vai | người quan trọng, hoặc dân làng |
| Chỗ ở theo mùa | một địa điểm, hoặc "vắng" |
| Quý mến nhân vật chính | 0–3 |
| Trạng thái | khoẻ, bị thương, ốm, vắng |

Nhân vật phụ không có ý chí phức tạp. Họ đứng ở chỗ của mình, phản ứng với sự kiện gần đó, và già đi theo mùa.

Sáu nhân vật phụ của kiếp 1:

| Nhân vật | Xuân | Hạ | Thu | Đông |
|----------|------|-----|-----|------|
| Nhạn | Sân nhà | Sân làng, cửa hầm ngục | Vắng, về qua lá Người bạn cũ | Vắng, về ở bước ngoặt |
| Bố | Lò rèn | Lò rèn | Nhà (yếu) | Đã mất |
| Bà Mận | Sân nhà | Sân làng | Sân làng | Sân làng |
| Trưởng làng | Xuất hiện ở bước ngoặt | Sân làng | Sân làng | Đã mất |
| Đội trưởng thám hiểm | Chưa có | Cửa hầm ngục | Cửa hầm ngục | Vắng |
| Đứa trẻ trong làng | Chưa có | Chưa có | Sân làng | Lò rèn |

### Ghi đè theo kiếp

Mỗi kiếp được phép đổi mùa xuất hiện và chỗ thả của một số lá, và thêm địa điểm riêng. Cần thiết vì hai lỗ hổng tìm thấy khi rà lại:

| Kiếp | Ghi đè | Lý do |
|------|--------|-------|
| 2 | Có thêm địa điểm "Sườn núi" mở từ mùa Xuân | Mây gặp con rồng từ mùa Xuân. Theo bảng địa điểm chung, núi tới mùa Hạ mới mở |
| 9 | Lá Người bạn cũ ghé thăm (cha về) rút được từ mùa Xuân | Thiếu nó thì mùa Xuân không có sự kiện nào trúng mục đích |

## 5. Bảng câu suy nghĩ chung

Dùng khi lá bài không có câu viết tay của kiếp đó. Mỗi ô cần thêm 3–4 câu thay thế để không lặp.

| Khuynh hướng | Lao tới | Nhận thường | Nhận vì nể | Từ chối |
|--------------|---------|-------------|------------|---------|
| Chinh phục | "Để xem mình tới đâu." | "Được. Thử một lần." | "Người muốn mình làm thế. Thì làm." | "Thắng cái này để làm gì." |
| Tạo tác | "Tay mình ngứa rồi đây." | "Làm xong chắc sẽ đẹp." | "Mình không khéo việc này. Nhưng được dặn rồi." | "Thứ này không phải để mình làm." |
| Gắn bó | "Đợi mình với!" | "Lâu rồi chưa ngồi cùng nhau." | "Ừ thì tới. Cho phải phép." | "Hôm nay mình muốn một mình." |
| Chăm sóc | "Nó đau kìa. Tránh ra nào." | "Để mình xem có giúp được không." | "Mình không biết dỗ ai cả. Thôi cứ đứng đây." | "Không phải việc của mình." |
| Khám phá | "Bên kia đồi có gì nhỉ?" | "Đi một lát rồi về." | "Xa quá. Nhưng điềm đã chỉ." | "Ở đây đủ rồi. Đi đâu cho mệt." |
| Bình yên | "Hôm nay cứ như hôm qua. Tốt." | "Ngồi một lúc cũng được." | "Ngồi yên mãi cũng sốt ruột. Nhưng thôi." | "Không ngồi được. Chân cứ muốn đi." |

Câu theo kết quả:

| Kết quả | Câu |
|---------|-----|
| Thành công, đã lao tới | "Đúng là thứ mình muốn." |
| Thành công, nhận vì nể | "Xong rồi. Sao chẳng thấy gì." |
| Thất bại, đã lao tới | "Đau. Nhưng mai làm lại." |
| Thất bại, nhận vì nể | "Mình đã bảo là mình không muốn mà." |
| Lưỡng lự | "..." kèm việc nhân vật nhìn lên trời |

Hai câu ở dòng "nhận vì nể" là cách chính để người chơi nhận ra nó. Dáng điệu đi kèm: đi chậm, ngoái lại, vai xệ.

## 6. Hướng dẫn trong kiếp đầu tiên

Không có màn hướng dẫn riêng. Mùa Xuân của kiếp 1 dạy từng thứ một. Mỗi bước chỉ có một dòng "lời thì thầm" ở mép màn hình.

| Bước | Điều xảy ra | Người chơi học được |
|------|-------------|---------------------|
| 1 | Ngưỡng cửa chỉ đưa hai khế ước: Dũng Khí (chấp nhận) và Đôi Tay (đón nhận) | Linh hồn có phản ứng riêng, và phản ứng đó có nghĩa |
| 2 | Tay bài chỉ có Buổi chiều rảnh. Tần tự ra lò rèn ngồi xem bố | Việc của thần là quan sát |
| 3 | Rút được Trò đánh trận giả. Tần thắng Nhạn rồi là người dừng tay trước | Cách đọc dòng suy nghĩ |
| 4 | Rút được Lữ khách bí ẩn. Tần từ chối, Tín ngưỡng được hoàn một nửa | Từ chối không phải thất bại |
| 5 | Mở chạm Nắng. Lời thì thầm gợi ý rọi vào một chỗ bất kỳ | Thần có thể hỏi bằng điềm |
| 6 | Các lượt còn lại chơi tự do với tay bài 4 lá | |
| 7 | Bước ngoặt mùa Xuân: Tần tự quyết về thanh kiếm gỗ | Thần không chọn thay được |

- Mưa và Gió mở ở đầu mùa Hạ.
- Tuyên đoán được giới thiệu ở cuối mùa Hạ bằng một dòng: "Ngươi đã nhìn nó hai mùa. Ngươi nghĩ nó sinh ra để làm gì?"
- Khi chơi lại kiếp 1, các bước ép buộc 2–5 bị bỏ.

## 7. Tuyên đoán

Sáu câu ứng viên, xáo trộn mỗi lần:

| Loại | Số câu | Kết quả khi chọn |
|------|--------|------------------|
| Đúng | 1 | Mở hai lá Định mệnh |
| Gần đúng: đúng khuynh hướng, sai đối tượng | 1 | Không mở gì, không bị phạt. Game báo "gần rồi" |
| Gần đúng: đúng đối tượng, sai khuynh hướng | 1 | Như trên |
| Mục đích giả | 1 | Mất 3 Tín ngưỡng, lòng tin −5 |
| Nhiễu, lấy từ mục đích của kiếp khác | 2 | Như trên |

Dù kết quả thế nào, mỗi kiếp chỉ được đoán một lần.

| | Kiếp 1 | Kiếp 2 | Kiếp 9 |
|---|--------|--------|--------|
| Đúng | Rèn thanh kiếm tốt nhất đời mình cho người khác cầm | Ở bên một sinh vật trong đêm cuối của nó | Ăn với cha một bữa cơm không ai phải đứng dậy |
| Đúng khuynh hướng, sai đối tượng | Trở thành thợ rèn giỏi nhất vùng | Chữa lành cho mọi con vật trên cao nguyên | Giữ cho cả nhà luôn sum họp |
| Đúng đối tượng, sai khuynh hướng | Sánh vai cùng Nhạn trong hầm ngục | Thuần phục con rồng | Được cha công nhận là người kế nghiệp |
| Mục đích giả | Diệt chúa hầm ngục | Mang đầu con rồng về | Trở thành anh hùng lớn hơn cha |
| Nhiễu | Trồng lại cánh rừng đã cháy | Viết nốt một bài hát còn dở | Được ai đó gọi bằng tên |
| Nhiễu | Trao một lá thư tới tay người nhận | Ghi lại tên của những người vô danh | Nói lời cảm ơn bằng đúng thứ tiếng của người cần nghe |

## 8. Cánh cửa tái sinh

Mỗi cửa hiện một gợi ý, rút ngẫu nhiên từ ba kiểu:

| Kiếp | Âm thanh | Mùi | Cái bóng |
|------|----------|-----|----------|
| 1 | Tiếng búa đều đều ở rất xa | Mùi than nóng | Hai đứa trẻ cầm que đuổi nhau |
| 2 | Tiếng chuông dê trong gió | Mùi khói cũ | Một cái bóng rất lớn trên vách đá |
| 9 | Tiếng tù và, rồi tiếng cửa đóng | Mùi canh để nguội | Một cái ghế trống đầu bàn |

- Cửa dẫn về kiếp dang dở có màu khác và hiện mờ câu "giá như" của kiếp đó.
- Sau khi cả ba kiếp đã trọn vẹn, bản chơi thử kết thúc bằng một màn chữ.

## 9. Màn kết kiếp

1. Đêm xuống trên tiểu cảnh mùa Đông. Nhân vật ngồi xuống.
2. Chiếu lại bốn khoảnh khắc, mỗi mùa một cái. Ưu tiên khoảnh khắc then chốt của mùa đó. Nếu không có thì chiếu quyết định ở bước ngoặt.
3. Linh hồn rời tiểu cảnh và hiện mức: Lạc lối, Dang dở, hoặc Trọn vẹn.
4. Trọn vẹn: hiện mục đích thật và hình ảnh kết của kịch bản. Chưa trọn vẹn: hiện câu "giá như" của mùa hụt nhiều nhất.
5. Thẻ cuộc đời.
6. Chọn 1 trong 3 kỷ vật. Nếu đã đủ 3 ô thì chọn cái để buông, và xem nó hoá thành lá bài.
7. Phần thưởng mở khoá.
8. Cánh cửa tái sinh.

Bước 1–4 không bấm bỏ qua được ở lần đầu của mỗi kiếp.

## 10. Thẻ cuộc đời

| Vùng | Nội dung |
|------|----------|
| Ảnh | Tiểu cảnh ở mùa Đông, chụp từ góc camera của game |
| Tiêu đề | Tên nhân vật, thân phận, "kiếp thứ N của linh hồn" |
| Bốn dòng | Mỗi mùa một câu, sinh từ quyết định ở bước ngoặt. Ví dụ: "Mùa Hạ, cậu ở lại bên lò rèn." |
| Khế ước | Tên khế ước, và "đã giải" nếu có |
| Dòng cuối | Trọn vẹn: tên kiếp. Chưa trọn vẹn: câu "giá như" |

Khi lưu ảnh để chia sẻ, mục đích thật mặc định bị che. Người chơi phải tự bật mới hiện. Việc này giữ cho ảnh chia sẻ không làm lộ đáp án với người chưa chơi.

## 11. Sổ các kiếp

| Trang | Nội dung |
|-------|----------|
| Các kiếp | Mỗi kiếp đã sống: thẻ cuộc đời, mức, khế ước, câu "giá như" nếu chưa trọn |
| Kỷ vật | Ba ô đang mang, các kỷ vật đã buông (kèm lá bài sinh ra), các kỷ vật đã thấy mà không chọn |
| Quyền năng | Lá bài, khế ước, kiểu chạm. Mỗi thứ ghi rõ đến từ kiếp nào |
| Người đã gặp | Nhân vật phụ của từng kiếp, kèm một dòng về họ |

Sổ không bao giờ hiện con số của thước đo mục đích hay điểm khuynh hướng.

## 12. Giao diện màn chơi

Màn hình ngang.

| Vị trí | Thành phần |
|--------|------------|
| Giữa | Tiểu cảnh |
| Dưới giữa | Tay bài 4 lá. Giữ chuột để đọc lá, kéo lên tiểu cảnh để thả |
| Dưới trái | Tín ngưỡng: 10 hạt sáng |
| Dưới phải | Ba nút chạm: Mưa, Nắng, Gió |
| Trên trái | Tên mùa và 8 chấm lượt |
| Trên phải | Sổ các kiếp, tốc độ, tạm dừng |
| Quanh nhân vật | Vầng sáng lòng tin: càng tin càng rộng và ấm |
| Trên đầu nhân vật | Biểu tượng cảm xúc và dòng suy nghĩ |

- Khi kéo một lá, các địa điểm thả được sẽ sáng lên, và nhân vật phụ trong tầm ảnh hưởng được viền sáng.
- Gió: bấm vào một điểm rồi vuốt để chọn hướng.
- Không có thanh, số hay biểu tượng nào cho mục đích.

## 13. Lưu game

- Tự lưu sau mỗi lượt. Thoát giữa chừng thì vào lại đúng lượt đó.
- Một linh hồn cho mỗi ô lưu. Bản chơi thử có một ô.
- Dữ liệu qua các kiếp: kỷ vật, quyền năng đã mở, Sổ các kiếp.

## 14. Khối lượng nội dung phải viết

Ước lượng của Claude cho ba kiếp, tính bằng số câu hoặc đoạn ngắn:

| Hạng mục | Mỗi kiếp | Ba kiếp |
|----------|----------|---------|
| Câu suy nghĩ viết tay cho lá trúng mục đích và mục đích giả | khoảng 30 | 90 |
| Cảnh bước ngoặt, hai hướng mỗi cảnh | 8 | 24 |
| Khoảnh khắc then chốt | 3 | 9 |
| Lá Định mệnh | 2 | 6 |
| Câu "giá như" | 4 | 12 |
| Câu ứng viên tuyên đoán | 6 | 18, đã viết |
| Dòng thẻ cuộc đời | 8 | 24 |
| Kỷ vật và lá bài sinh ra | 3 + 3 | 18, đã viết |
| Câu suy nghĩ chung, 24 ô × 4 câu | | khoảng 100 |
| Mô tả 15 lá khởi đầu và các lá mở được | | khoảng 30 |
| Lời thì thầm hướng dẫn | | khoảng 12 |

Tổng khoảng 340 câu và đoạn ngắn, cần có cả tiếng Việt và tiếng Anh.
