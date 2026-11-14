# Thiết kế sự kiện và vật phẩm

Bản nháp chờ duyệt, bổ sung cho `GDD.md`. Mọi con số là giá trị khởi điểm để chỉnh khi chơi thử.

Phạm vi: hệ thống dùng chung cho mọi thế giới, bộ bài 30 lá của thế giới fantasy, và kỷ vật của ba kiếp ví dụ (1, 2, 9 trong `scenarios/`).

## 1. Nhân vật đọc một sự kiện như thế nào

### 1.1. Sáu khuynh hướng

Mỗi lá bài và mỗi vật phẩm mang một hoặc hai khuynh hướng. Mỗi thân phận có điểm 0–3 cho từng khuynh hướng.

| Khuynh hướng | Nhân vật bị kéo về phía | Ví dụ lá bài |
|--------------|-------------------------|--------------|
| Chinh phục | thắng, mạnh lên, được công nhận | Hầm ngục, Lời thách đấu |
| Tạo tác | tự tay làm ra thứ gì đó | Người thợ già, Mảnh đất trống |
| Gắn bó | một người cụ thể | Bữa cơm nhà, Người bạn cũ |
| Chăm sóc | kẻ yếu, kẻ bị bỏ lại | Con thú bị thương, Kẻ lạc đường |
| Khám phá | nơi xa, điều chưa biết | Lữ khách bí ẩn, Kho báu |
| Bình yên | ở lại, lặp lại, giữ gìn | Buổi chiều rảnh, Việc nặng nhọc |

Mục đích ẩn không trùng với một khuynh hướng. Nó là một khuynh hướng **hướng vào một đối tượng cụ thể**. Ví dụ kiếp 1: Tạo tác, hướng vào Nhạn. Vì vậy người chơi phải suy ra hai thứ: nhân vật thích loại việc gì, và vì ai.

### 1.2. Bốn chỉ số

| Chỉ số | Thang | Người chơi có thấy không |
|--------|-------|--------------------------|
| Lòng tin vào thần | 0–100 | Có, dạng vầng sáng quanh nhân vật |
| Tâm trạng | −2 đến +2 | Có, qua dáng điệu |
| Sức lực | 0–3 | Có, qua băng bó, bước đi |
| Thước đo mục đích | 0–100 | Không bao giờ |

### 1.3. Nhận hay từ chối

Điểm nhận = lòng tin + khuynh hướng phù hợp + tâm trạng − độ nguy hiểm so với sức lực, cộng một chút ngẫu nhiên.

Nhân vật có bốn kiểu phản ứng, mỗi kiểu có dáng điệu riêng:

| Phản ứng | Khi nào | Dáng điệu |
|----------|---------|-----------|
| Lao tới | khuynh hướng cao, hoặc chạm vào mục đích | chạy, không cần nài |
| Nhận vì nể | khuynh hướng thấp nhưng lòng tin cao | đi chậm, ngoái lại |
| Lưỡng lự | điểm sát ngưỡng | đứng im, đi tới đi lui. Lá bài kế tiếp sẽ nghiêng cán cân |
| Từ chối | điểm thấp | quay lưng, ngồi xuống |

"Nhận vì nể" là manh mối quan trọng nhất: nhân vật làm vì tin bạn, không phải vì muốn. Kết quả có thể tốt nhưng thước đo mục đích không tăng.

### 1.4. Dòng suy nghĩ

Mỗi phản ứng kèm một dòng suy nghĩ, lấy theo thứ tự ưu tiên:

1. Câu viết tay của kiếp đó, nếu lá bài chạm vào mục đích ẩn.
2. Câu vọng từ một kỷ vật đang thức (mục 4.3).
3. Câu chung theo khuynh hướng và kết quả.

## 2. Tín ngưỡng và nhịp chơi

- Tín ngưỡng tối đa 10. Bắt đầu mỗi mùa với 6.
- Tay bài 4 lá. Dùng một lá thì rút một lá.
- Mỗi lá diễn ra khoảng 60–90 giây. Một mùa chơi được khoảng 8 lá.
- Mỗi mùa chỉ rút được các lá hợp tuổi nhân vật.

| Kết quả | Tín ngưỡng | Lòng tin |
|---------|------------|----------|
| Nhận và thành công | +2 | +5 |
| Nhận và thất bại nhẹ | +1 | 0 |
| Nhận vì nể rồi thất bại nặng | 0 | −15 |
| Từ chối | hoàn lại một nửa giá | 0 |
| Lao tới, bất kể kết quả | +1 thêm | +5 thêm |

Từ chối không bị phạt nặng, vì từ chối là thông tin. Thứ bị phạt là ép nhân vật làm điều nó không muốn rồi để nó thất bại.

## 3. Sáu loại lá bài

| Loại | Vai trò | Nhân vật từ chối được không |
|------|---------|------------------------------|
| Thử thách | Giúp nhân vật lớn lên. Có rủi ro | Có |
| Gặp gỡ | Đưa một người hoặc con vật vào đời nhân vật | Có |
| Cơ hội | Kéo nhân vật về một ngả đường. Thường là mục đích giả | Có |
| Biến cố | Thế giới xảy ra chuyện | Không. Nhân vật chỉ chọn cách ứng xử |
| Khoảng lặng | Không có gì xảy ra. Nhân vật tự chọn việc để làm | Không áp dụng |
| Định mệnh | Lá mạnh, viết riêng cho từng kiếp. Chỉ mở khi tuyên đoán đúng | Có |

**Khoảng lặng** là công cụ thăm dò rẻ nhất: giá 0–1, không cho phần thưởng, nhưng việc nhân vật tự làm khi rảnh nói lên nhiều nhất. Đổi lại, nó không đẩy thước đo mục đích lên bao nhiêu. Người chơi phải cân giữa quan sát và hành động.

## 4. Vật phẩm

Có hai loại, khác hẳn nhau.

### 4.1. Vật ban: thứ thần thả xuống trong một kiếp

Lá "Món quà của thần" cho bạn chọn 1 trong 3 vật ngẫu nhiên để thả xuống tiểu cảnh. Nhân vật có bốn cách xử lý, và cả bốn đều là manh mối:

| Cách xử lý | Ý nghĩa |
|------------|---------|
| Dùng | khuynh hướng của vật hợp với nó |
| Cất đi | chưa phải lúc, hoặc nể thần |
| Đem cho người khác | **cho ai** là manh mối về đối tượng của mục đích |
| Bỏ lại | không hợp |

Vật ban của thế giới fantasy:

| Vật | Khuynh hướng | Khi được dùng |
|-----|--------------|---------------|
| Thanh kiếm | Chinh phục | Thử thách dễ thắng hơn |
| Cây búa | Tạo tác | Mở việc rèn, dựng, sửa |
| Cây đàn | Gắn bó | Tâm trạng người xung quanh tăng |
| Túi hạt giống | Bình yên, Chăm sóc | Tiểu cảnh mọc thêm cây theo mùa |
| Hộp thuốc | Chăm sóc | Chữa được thương tích cho mình hoặc người khác |
| Tấm bản đồ | Khám phá | Mở thêm một vùng của tiểu cảnh sớm hơn |
| Cuốn sổ trắng | Tạo tác, Gắn bó | Nhân vật ghi chép. Cuối mùa đọc được một trang |
| Ngọn đèn | Bình yên, Gắn bó | Nhân vật đặt nó ở đâu đó. Vị trí là manh mối |

Vật ban không mang sang kiếp sau, trừ khi nó xuất hiện trong ba kỷ vật cuối kiếp.

### 4.2. Kỷ vật: thứ linh hồn mang qua các kiếp

Theo GDD: tối đa 3 ô, cuối kiếp chọn 1 trong 3, tác dụng không biết trước.

Mỗi kỷ vật thuộc một trong ba dạng. Mỗi kiếp luôn đưa ra đủ ba dạng để chọn:

| Dạng | Là gì | Xu hướng tác dụng |
|------|-------|-------------------|
| Vật | một món đồ | thường thêm một lá bài riêng |
| Nếp | một kỹ năng, thói quen | thường đổi điểm khuynh hướng |
| Vết | một nỗi sợ, nỗi giận, điều dang dở | thường là gánh nặng, đôi khi là chìa khoá |

### 4.3. Kỷ vật tác động thế nào

Đầu mỗi kiếp, game gieo ngẫu nhiên cho từng kỷ vật một trong các biểu hiện của nó. Người chơi không được báo. Họ chỉ nhận ra khi nó lộ ra lần đầu.

| Biểu hiện | Tác dụng | Lợi hay hại |
|-----------|----------|-------------|
| Thiên hướng | +1 điểm một khuynh hướng suốt kiếp | Tuỳ kiếp |
| Tiếng vọng | Thêm dòng suy nghĩ kiểu "sao thấy quen thế" khi gặp lá bài liên quan | Xem bên dưới |
| Lá bài riêng | Thêm một lá đặc biệt vào bộ bài kiếp đó | Thường lợi |
| Gánh nặng | Giảm tâm trạng hoặc tự động từ chối một loại sự kiện | Hại |
| Ngủ yên | Không có gì. Chỉ hiện một dòng trong Sổ các kiếp | Không |

**Tiếng vọng là nhiễu.** Nó làm nhân vật phản ứng mạnh với thứ thuộc về kiếp trước, không phải mục đích kiếp này. Ví dụ mang "Tiếng búa của bố" sang một kiếp có mục đích khác: nhân vật vẫn chạy tới lò rèn, và người chơi có thể suy luận sai. Mang càng nhiều kỷ vật, linh hồn càng giàu ký ức và càng khó đọc. Đây là lý do để cân nhắc việc bỏ bớt.

Ngoại lệ: nếu kỷ vật trùng khuynh hướng và đối tượng với mục đích kiếp mới, tiếng vọng trở thành manh mối thật. Người chơi không biết trường hợp nào đang xảy ra.

### 4.4. Kỷ vật của ba kiếp ví dụ

**Kiếp 1: Thanh kiếm không mang tên mình**

| Kỷ vật | Dạng | Các biểu hiện có thể gieo |
|--------|------|---------------------------|
| Thanh kiếm gỗ sứt mẻ | Vật | Lá bài riêng "Trò đánh trận giả" xuất hiện ở mọi mùa · Tiếng vọng khi cầm vũ khí · Ngủ yên |
| Vết chai ở lòng bàn tay | Nếp | Thiên hướng Tạo tác +1 · Việc tay chân luôn thành công ở mùa Xuân · Ngủ yên |
| Tiếng búa của bố | Vết | Tiếng vọng với mọi lá có lửa, kim loại · Gánh nặng: buồn khi ở nơi quá yên tĩnh · Thiên hướng Gắn bó +1 |

**Kiếp 2: Con rồng cuối cùng**

| Kỷ vật | Dạng | Các biểu hiện có thể gieo |
|--------|------|---------------------------|
| Chiếc vảy rồng đã nguội | Vật | Lá bài riêng "Hơi ấm lạ": một sinh vật lớn không tấn công nhân vật · Sức lực +1 khi trời lạnh · Ngủ yên |
| Bài hát ru dê | Nếp | Thiên hướng Chăm sóc +1 · Con vật trong tiểu cảnh tự lại gần · Tiếng vọng khi có ai hấp hối |
| Nỗi sợ lửa | Vết | Gánh nặng: tự từ chối lá có lửa · Tiếng vọng: đứng nhìn lửa rất lâu · Ngủ yên |

**Kiếp 9: Bữa cơm với cha**

| Kỷ vật | Dạng | Các biểu hiện có thể gieo |
|--------|------|---------------------------|
| Đôi đũa của cha | Vật | Lá bài riêng "Bữa cơm nhà" giá 0 · Tiếng vọng: luôn dọn thừa một cái bát · Ngủ yên |
| Vị canh mặn | Nếp | Thiên hướng Gắn bó +1 · Nấu ăn cho ai thì lòng tin của người đó tăng · Tiếng vọng với món ăn dở |
| Tiếng tù và | Vết | Gánh nặng: mọi Biến cố làm tâm trạng −1 thêm · Thiên hướng Chinh phục +1, vì nghe gọi là đi · Ngủ yên |

## 5. Bộ bài fantasy: 30 lá

Giá tính bằng Tín ngưỡng. Mùa: X, H, T, Đ.

### Thử thách (8)

| # | Lá bài | Mùa | Giá | Khuynh hướng | Diễn biến |
|---|--------|-----|-----|--------------|-----------|
| 1 | Trò đánh trận giả | X | 1 | Chinh phục, Gắn bó | Chơi với bạn. Thắng, thua hay nhường đều là manh mối |
| 2 | Hội thi mùa gặt | X H T | 1 | Chinh phục, Gắn bó | Nhân vật tự chọn môn thi |
| 3 | Việc nặng nhọc | mọi mùa | 1 | Tạo tác, Bình yên | Sửa cầu, gặt lúa. An toàn, lớn chậm |
| 4 | Hầm ngục nông | H T | 2 | Chinh phục, Khám phá | Tự vào đánh quái. Nguy hiểm vừa |
| 5 | Chuyến săn | H T | 2 | Chinh phục, Khám phá | Đuổi theo một con thú. Có thể tha cho nó |
| 6 | Lời thách đấu | H T | 2 | Chinh phục | Một đối thủ tới tìm |
| 7 | Quái vật quấy làng | H T Đ | 2 | Chinh phục, Chăm sóc | Đánh để thắng hay để che cho ai đó? Xem nhân vật đứng chắn trước ai |
| 8 | Hầm ngục sâu | T | 4 | Chinh phục | Nguy hiểm cao, phần thưởng lớn. Mục đích giả mạnh nhất |

### Gặp gỡ (7)

| # | Lá bài | Mùa | Giá | Khuynh hướng | Diễn biến |
|---|--------|-----|-----|--------------|-----------|
| 9 | Lữ khách bí ẩn | mọi mùa | 1 | Khám phá | Kể chuyện phương xa. Nhân vật hỏi lại điều gì là manh mối |
| 10 | Người thợ già | X H T | 1 | Tạo tác | Đề nghị dạy một nghề |
| 11 | Kẻ lạc đường | mọi mùa | 1 | Chăm sóc | Cần chỗ trú một đêm |
| 12 | Con thú bị thương | mọi mùa | 1 | Chăm sóc | Chăm, mặc kệ, hay kết liễu |
| 13 | Người bạn cũ ghé thăm | H T Đ | 1 | Gắn bó | Người quan trọng của kiếp đó quay lại |
| 14 | Đoàn mạo hiểm | H T | 2 | Chinh phục, Khám phá | Rủ nhân vật lên đường |
| 15 | Đứa trẻ tò mò | T Đ | 1 | Chăm sóc, Tạo tác | Xin học một điều. Nhân vật chọn dạy gì |

### Cơ hội (5)

| # | Lá bài | Mùa | Giá | Khuynh hướng | Diễn biến |
|---|--------|-----|-----|--------------|-----------|
| 16 | Kho báu lộ thiên | H T | 2 | Khám phá | Nhân vật chỉ mang được một thứ. Nó chọn gì |
| 17 | Lời mời lên kinh đô | H T | 3 | Khám phá, Chinh phục | Rời tiểu cảnh nửa mùa. Tốn thời gian bên người ở lại |
| 18 | Món quà của thần | mọi mùa | 2 | theo vật | Thả một vật ban (mục 4.1) |
| 19 | Mảnh đất trống | T Đ | 2 | Tạo tác, Bình yên | Nhân vật dựng gì lên đó |
| 20 | Danh hiệu | T | 2 | Chinh phục | Làng muốn phong tước. Nhận, từ chối, hay nhường |

### Biến cố (5)

| # | Lá bài | Mùa | Giá | Diễn biến |
|---|--------|-----|-----|-----------|
| 21 | Cơn bão | mọi mùa | 2 | Nhân vật chạy về đâu, che cho ai, giữ lấy cái gì |
| 22 | Trận ốm | mọi mùa | 2 | Nhân vật ốm: gọi tên ai. Người khác ốm: có ở lại không |
| 23 | Tin dữ từ xa | H T Đ | 2 | Một người đi xa gặp chuyện. Nhân vật có lên đường không |
| 24 | Mùa đói | H T Đ | 3 | Chia phần cho ai, giữ cho mình bao nhiêu |
| 25 | Quái vật tràn xuống | T | 4 | Cả làng nguy. Nhân vật chọn vị trí của mình |

### Khoảng lặng (5)

| # | Lá bài | Mùa | Giá | Diễn biến |
|---|--------|-----|-----|-----------|
| 26 | Buổi chiều rảnh | mọi mùa | 0 | Nhân vật tự đi tới một chỗ trong tiểu cảnh và làm một việc |
| 27 | Đêm mất ngủ | mọi mùa | 0 | Ba dòng suy nghĩ liên tiếp. Tâm trạng −1 |
| 28 | Bữa cơm nhà | mọi mùa | 1 | Ai ngồi cùng, nói chuyện gì |
| 29 | Lễ hội làng | mọi mùa | 1 | Nhân vật ở giữa đám đông, ở rìa, hay lẻn đi đâu |
| 30 | Giấc mơ | mọi mùa | 2 | Bạn chọn 1 trong 3 hình ảnh gửi vào giấc mơ. Sáng dậy nhân vật phản ứng. Công cụ thăm dò trực tiếp nhất |

### Định mệnh (ngoài 30 lá, 2 lá mỗi kiếp)

| Kiếp | Lá | Tác dụng |
|------|----|----------|
| 1 | Thép sao băng | Một khối thép rơi xuống, đủ rèn một thanh kiếm |
| 1 | Nhạn trở về | Cô bạn về làng với thanh kiếm gãy |
| 2 | Lối mòn lên đỉnh | Mở đường lên chỗ con rồng ở mọi mùa |
| 2 | Tuyết đầu mùa | Đêm cuối của con rồng đến sớm, khi nhân vật còn đủ sức leo |
| 9 | Tù và im tiếng | Một mùa không có Biến cố nào gọi ai đi |
| 9 | Cha vào bếp | Người cha tự nấu một bữa |

## 6. Ví dụ: cùng một lá, ba kiếp, ba phản ứng

Lá **Hầm ngục nông**, mùa Hạ, lòng tin trung bình.

| Kiếp | Phản ứng | Dòng suy nghĩ | Thước đo mục đích |
|------|----------|---------------|-------------------|
| 1 (Tần) | Nhận vì nể, thắng | "Mình thắng rồi. Sao tay mình cứ run thế này." | Không đổi. Tăng nếu Nhạn bị thương và Tần bỏ dở để đưa cô về |
| 2 (Mây) | Nhận, đi chậm | "Trong đó chắc cũng có thứ gì đang sợ." | Không đổi |
| 9 (Con) | Lao tới nếu cha đi cùng, từ chối nếu đi một mình | "Cha có đi không?" | Tăng nhẹ nếu cha đi cùng, nhưng ít hơn nhiều so với Bữa cơm nhà |

Lá **Buổi chiều rảnh**, cùng điều kiện.

| Kiếp | Nhân vật tự làm gì |
|------|--------------------|
| 1 | Ra lò rèn ngồi xem bố |
| 2 | Leo lên sườn núi, ngồi nhìn về phía đỉnh |
| 9 | Vào bếp, đếm bát |

## 7. Những điểm do Claude tự quyết, cần bạn duyệt

- Mô hình sáu khuynh hướng, và ý "mục đích = khuynh hướng + đối tượng".
- Phản ứng "nhận vì nể" không làm tăng thước đo mục đích.
- Loại lá Khoảng lặng và lá Giấc mơ.
- Vật ban, và việc nhân vật có thể đem vật cho người khác.
- Ba dạng kỷ vật (Vật, Nếp, Vết) và việc gieo ngẫu nhiên biểu hiện đầu mỗi kiếp.
- Tiếng vọng của kỷ vật gây nhiễu cho việc suy luận.
- Từ chối được hoàn nửa giá.

## 8. Chưa thiết kế

- Bộ bài của thế giới thường và thế giới phép thuật.
- Kỷ vật của 27 kiếp còn lại.
- Khế ước đầu kiếp: đã thiết kế trong `khe-uoc.md`.
- Cách thần mở lá bài mới qua các kiếp.
- Bảng câu suy nghĩ chung theo khuynh hướng.
- Công thức chi tiết của thước đo mục đích cho từng kiếp.
