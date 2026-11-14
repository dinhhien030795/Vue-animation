# Tự đánh giá thiết kế

Do Claude thực hiện sau khi viết xong các tài liệu thiết kế. Gồm ba phần: mâu thuẫn tìm thấy khi rà chéo, kết quả mô phỏng các con số, và rủi ro còn mở.

Giới hạn của bản đánh giá này: nó kiểm tra được sự nhất quán và tính hợp lý của các con số. Nó không kiểm tra được game có vui không, câu chữ có chạm không, hay hình ảnh có đọc được không. Ba điều đó cần người thật chơi.

## 1. Mâu thuẫn đã tìm thấy và cách xử lý

| # | Mâu thuẫn | Xử lý |
|---|-----------|-------|
| 1 | GDD ghi bản chơi thử là "1 kiếp, 3 mục đích ẩn". Các kịch bản lại cho mỗi kiếp đúng một mục đích | Đổi thành 3 kiếp (1, 2, 9), làm kiếp 1 hoàn chỉnh trước. Đã sửa GDD |
| 2 | GDD ghi "khoảng 30 lá bài". Thiết kế mở khoá chỉ cho 15 lá khởi đầu | Bản chơi thử làm 15 lá khởi đầu và các lá mở được trong ba kiếp. Đã sửa GDD |
| 3 | Lòng tin: bộ số ban đầu làm lòng tin luôn chạm 100 sau một mùa | Đã chỉnh, xem mục 2 |
| 4 | Tín ngưỡng: bộ số ban đầu không bao giờ làm người chơi thiếu Tín ngưỡng, trái với vai trò "giới hạn quyền năng" trong GDD | Đã chỉnh, xem mục 2 |
| 5 | Kiếp 2: Mây gặp rồng từ mùa Xuân, nhưng bảng địa điểm chung tới mùa Hạ mới mở núi | Thêm luật ghi đè theo kiếp. Kiếp 2 có địa điểm "Sườn núi" từ mùa Xuân |
| 6 | Kiếp 9: mùa Xuân không có lá nào trúng mục đích, vì lá đưa cha về chỉ có từ mùa Hạ | Kiếp 9 được rút lá Người bạn cũ ghé thăm từ mùa Xuân |
| 7 | Công thức nhận sự kiện chỉ được mô tả bằng lời, chưa có số | Đã viết công thức số trong `chi-tiet-ban-choi-thu.md` |
| 8 | Không có luật cho lúc người chơi hết Tín ngưỡng | Thêm: bỏ một lá để rút lá khác, mất một lượt, được 1 Tín ngưỡng |
| 9 | Đà mục đích được cộng sẵn 1 ở mùa Xuân, khiến bước ngoặt mùa Xuân gần như luôn đúng | Bỏ phần cộng sẵn |
| 10 | Khế ước Mùa Màng ghi "8 Tín ngưỡng thay vì 6" | Sửa thành 7 thay vì 5 theo mức khởi đầu mới |

## 2. Mô phỏng các con số

### 2.1. Cách làm

`tools/balance_sim.py` chơi kiếp 1 với bộ bài khởi đầu, 5.000 lần cho mỗi dòng, với bốn kiểu người chơi giả lập:

| Kiểu | Hành vi |
|------|---------|
| Hiểu | Biết mục đích từ đầu. Ưu tiên lá trúng mục đích, thả đúng chỗ 85% số lần |
| Thăm dò | Chơi ngẫu nhiên hết mùa Xuân và nửa đầu mùa Hạ, sau đó chơi như kiểu Hiểu. Gần với một người chơi lần đầu suy luận tốt |
| Ngẫu nhiên | Chọn lá bất kỳ, thả đúng chỗ 30% số lần |
| Lạc | Tin vào mục đích giả, ưu tiên mọi lá Chinh phục |

### 2.2. Bộ số ban đầu

| Kiểu | Trọn vẹn | Dang dở | Lạc lối | Lòng tin cuối kiếp | Lượt phải bỏ |
|------|----------|---------|---------|---------------------|---------------|
| Hiểu | 97% | 3% | 0% | 100 | 0 |
| Thăm dò | 93% | 7% | 0% | 100 | 0 |
| Ngẫu nhiên | 9% | 56% | 35% | 100 | 0 |
| Lạc | 2% | 35% | 63% | 100 | 0 |

Ba vấn đề:

- Lòng tin luôn là 100, kể cả với người chơi tệ nhất. Chỉ số này không có tác dụng gì.
- Không ai từng thiếu Tín ngưỡng.
- Thăm dò hết một mùa rưỡi mà vẫn trọn vẹn 93%. Kiếp nào cũng sẽ trọn vẹn ngay lần đầu, và cơ chế "giá như" cùng việc chơi lại gần như không bao giờ được dùng.

### 2.3. Những gì đã đổi

| Con số | Trước | Sau |
|--------|-------|-----|
| Tín ngưỡng đầu mỗi mùa | 6 | 5 |
| Tín ngưỡng khi thành công | +2 | +1 |
| Tín ngưỡng khi thất bại nhẹ | +1 | 0 |
| Lá đem lại Tín ngưỡng và lòng tin | mọi lá | chỉ lá từ chối được |
| Lòng tin khi thành công / lao tới | +5 / +5 | +2 / +3 |
| Lòng tin khi nhận vì nể | 0 | −4 |
| Lòng tin khi thất bại | 0 | −5 |
| Lòng tin khi thần giáng Biến cố | 0 | −3 |
| Lòng tin đầu mỗi mùa | giữ nguyên | trôi một phần tư về mức 50 |
| Trần điểm sự kiện mỗi mùa | 12 | 10 |
| Bước ngoặt sai | −6 | −8 |
| Ngưỡng trọn vẹn / dang dở | 70 / 35 | 80 / 40 |
| Đà mục đích cộng sẵn mùa Xuân | 1 | 0 |

### 2.4. Bộ số sau khi chỉnh

Không khế ước:

| Kiểu | Điểm trung bình | Trọn vẹn | Dang dở | Lạc lối | Lòng tin | Lượt phải bỏ |
|------|------------------|----------|---------|---------|----------|---------------|
| Hiểu | 92,5 | 89% | 11% | 0% | 90 | 0,4 |
| Thăm dò | 77,9 | 52% | 45% | 3% | 87 | 0,6 |
| Ngẫu nhiên | 37,1 | 1% | 44% | 54% | 72 | 1,3 |
| Lạc | 25,2 | 0% | 24% | 76% | 65 | 2,9 |

Ảnh hưởng của khế ước lên tỉ lệ trọn vẹn:

| Kiểu | Khế ước cùng hướng mục đích | Không khế ước | Khế ước cùng hướng mục đích giả |
|------|------------------------------|----------------|----------------------------------|
| Hiểu | 98% | 89% | 63% |
| Thăm dò | 68% | 52% | 25% |
| Ngẫu nhiên | 3% | 1% | 0% |
| Lạc | 1% | 0% | 0% |

### 2.5. Đọc kết quả

- Người hiểu mục đích gần như luôn trọn vẹn. Phần trượt đến từ may rủi ở bước ngoặt mùa Đông.
- Người chơi lần đầu suy luận tốt trọn vẹn khoảng một nửa số lần. Nửa còn lại nhận câu "giá như" và có lý do chơi lại.
- Chơi bừa gần như không thể trọn vẹn.
- Khế ước là canh bạc thật: ký theo mục đích giả làm tỉ lệ trọn vẹn của người chơi thăm dò giảm từ 52% xuống 25%.
- Lòng tin giờ trải từ 65 tới 90 tuỳ cách chơi. Người chơi kiểu Lạc phải bỏ gần 3 lượt mỗi kiếp vì thiếu Tín ngưỡng.

### 2.6. Mô phỏng này không nói lên điều gì

- Chỉ mô phỏng kiếp 1. Kiếp 2 và 9 chưa được kiểm tra.
- Bốn kiểu người chơi là giả lập thô. Người thật sẽ chơi khác.
- Khoảnh khắc then chốt được coi là xảy ra ngẫu nhiên 15% mỗi lần lao tới một lá trúng mục đích. Trong game thật chúng có điều kiện cụ thể.
- Không mô phỏng kỷ vật, chạm, tuyên đoán, xin giải khế ước.
- Con số 52% là đầu ra của mô hình, không phải dự đoán về người chơi thật.

## 3. Rủi ro còn mở

### 3.1. Người chơi có thể đoán được khuôn mẫu

Cả 30 kịch bản đều theo một hướng: mục đích giả là điều lớn lao, mục đích thật là điều nhỏ bé. Cả ba kiếp ví dụ đều có mục đích giả là Chinh phục. Sau hai ba kiếp, người chơi có thể rút ra quy tắc "cứ tránh hầm ngục và chọn điều khiêm tốn" mà không cần quan sát nhân vật.

Đề xuất: khoảng một phần năm số kiếp nên đi ngược khuôn mẫu. Ví dụ một kiếp mà gia đình và cả làng muốn giữ nhân vật ở lại, còn mục đích thật là lên đường. Khi đó mục đích giả là Gắn bó và Bình yên, mục đích thật là Khám phá. Bản chơi thử nên có ít nhất một kiếp như vậy, có thể thay cho kiếp 9. Việc này cần bạn quyết và cần viết kịch bản mới.

### 3.2. Chơi lại từ đầu khi đã biết hướng

Chơi lại một kiếp dang dở mất 45–60 phút, và lần này người chơi đã có câu "giá như". Phần suy luận gần như không còn, chỉ còn phần thực hiện. Tua nhanh gấp đôi giảm được thời gian nhưng không thêm điều gì mới. Cần chơi thử để biết việc này có gây chán không.

### 3.3. "Nhận vì nể" phải nhìn ra được

Cả hệ thống suy luận dựa vào việc người chơi phân biệt được nhân vật làm vì muốn với làm vì nể. Việc đó phụ thuộc vào dáng điệu và câu chữ. Claude không tự đánh giá được hai thứ này trên màn hình.

### 3.4. Khối lượng so với thời gian

Ba kiếp cần khoảng 340 câu và đoạn ngắn, bằng hai thứ tiếng, cộng tiểu cảnh lớn dần, ba kiểu chạm, chỗ thả bài và toàn bộ giao diện. Ước tính 10–12 tuần trong GDD được đưa ra trước khi các hệ thống này tồn tại. Mình cho rằng nó chật. Đề xuất đặt một mốc dừng ở tuần 6: kiếp 1 chơi được trọn bốn mùa ở dạng hình khối. Nếu tới đó việc suy luận không vui thì dừng lại sửa thiết kế, không làm tiếp kiếp 2 và 9.

### 3.5. Kỷ vật gây nhiễu có thể gây bực

Ý tưởng kỷ vật làm nhân vật phản ứng lệch là hay trên giấy. Nhưng người chơi có thể thấy bị lừa nếu họ không có cách nào phân biệt tiếng vọng của kiếp trước với manh mối thật. Cần chơi thử. Phương án dự phòng: dòng suy nghĩ do kỷ vật sinh ra có một dấu hiệu nhận biết nhẹ, ví dụ chữ nghiêng.

## 4. Việc cần bạn quyết

1. Bản chơi thử gồm ba kiếp 1, 2, 9, hay thay một kiếp bằng kiếp đi ngược khuôn mẫu (mục 3.1).
2. Có đặt mốc dừng ở tuần 6 không (mục 3.4).
3. Tỉ lệ khoảng một nửa trọn vẹn ở lần chơi đầu có đúng với độ khó bạn muốn không. Muốn dễ hơn thì hạ ngưỡng 80, muốn khó hơn thì nâng lên.
