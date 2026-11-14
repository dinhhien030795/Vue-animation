# Tài liệu thiết kế game (GDD)

Trạng thái: bản nháp chờ duyệt. Chưa viết code game cho tới khi tài liệu này được duyệt.
Tên game: chưa chốt.

## Các tài liệu chi tiết

| Tài liệu | Nội dung |
|----------|----------|
| `scenarios/` | 38 kịch bản kiếp sống. Bản đang sửa nằm ở bản đồ các kiếp; `scenarios.json` là bản xuất lúc tạo bản đồ |
| `ke-hoach.md` | Kế hoạch 12 tuần, kế hoạch học, mốc quyết định |
| `su-kien-va-vat-pham.md` | Lá bài sự kiện, vật ban, kỷ vật |
| `khe-uoc.md` | Khế ước đầu kiếp |
| `quyen-nang-va-mo-khoa.md` | Chỗ thả bài, chạm, cách mở khoá |
| `ghep-bai.md` | Luật ghép bài (bản đầy đủ) |
| `cham-muc-dich.md` | Công thức chấm mục đích |
| `khuc-quanh.md` | Biến cố bất ngờ của cốt truyện, mức khó |
| `scenarios/ra-soat.md` | Rà soát 30 kịch bản, đề xuất bổ sung |
| `chi-tiet-ban-choi-thu.md` | Công thức nhận sự kiện, hướng dẫn, tuyên đoán, giao diện, màn kết kiếp |
| `danh-gia-thiet-ke.md` | Tự đánh giá, kết quả mô phỏng, rủi ro |

Nếu tài liệu chi tiết khác với tài liệu này thì tài liệu chi tiết đúng hơn, vì nó được viết sau.

## 1. Tóm tắt

Bạn là một vị thần dõi theo **một linh hồn** qua nhiều kiếp isekai. Mỗi kiếp, linh hồn sống một thân phận khác ở một thế giới khác và mang một **mục đích ẩn** mà cả bạn lẫn nó đều không biết. Bạn không điều khiển nhân vật. Bạn chỉ ban sự kiện, quan sát phản ứng của nó, suy ra mục đích của kiếp đó và giúp nó sống trọn vẹn.

- Thể loại: mô phỏng cuộc đời, suy luận, một người chơi, chơi tập trung.
- Tông: trầm lắng, hơi triết lý. Đi ngược isekai thông thường: mục đích thật của một kiếp thường nhỏ và rất người (giữ một lời hứa, tha thứ cho ai đó, trồng xong một khu vườn), không phải trở thành anh hùng mạnh nhất.
- Trụ cột: **suy luận mục đích ẩn từ phản ứng của nhân vật**. Mọi cơ chế khác phục vụ việc thăm dò và hoàn thành mục đích đó.
- Ngôn ngữ: tiếng Việt và tiếng Anh.

## 2. Nền tảng và công cụ

- Phát hành: PC trên Steam, bán một lần, có demo miễn phí (đăng thêm trên itch.io). Không dùng quảng cáo. Phí đăng Steam: 100$ một lần.
- Engine: Godot 4. Mô hình: Blender và skill `lowpoly-assets` trong repo này.
- Phân công:
  - Claude viết toàn bộ code, sinh các mô hình nền, viết nháp câu thoại và sự kiện (Việt và Anh).
  - Bạn học Godot editor và Blender để ráp cảnh, làm nhân vật và mô hình đặc trưng, chơi thử, duyệt hình ảnh và giọng văn.
- Chưa kiểm chứng: Claude có chạy được Godot trong môi trường cloud để tự test hay không.

## 3. Vòng chơi

### 3.1. Hành trình của linh hồn

1. **Cánh cửa tái sinh**: chọn 1 trong 2–3 cửa, mỗi cửa chỉ có một gợi ý mơ hồ. Thỉnh thoảng có một cửa dẫn về một kiếp dang dở.
2. **Khế ước**: đầu kiếp, bạn đưa ra 2–3 khế ước, mỗi cái có một lợi ích và một cái giá. Nhân vật có thể từ chối cái không hợp tính cách.
3. **Sống kiếp đó** qua bốn mùa (mục 3.2).
4. **Kết kiếp**: chiếu lại vài khoảnh khắc đáng nhớ, rồi chấm một trong ba mức **Lạc lối**, **Dang dở**, **Trọn vẹn**.
   - Trọn vẹn: tiết lộ mục đích thật.
   - Chưa trọn vẹn: không tiết lộ. Chỉ hiện một gợi ý dạng "giá như kiếp này…". Kiếp đó được lưu vào Sổ các kiếp.
5. **Thẻ cuộc đời**: tấm thẻ tóm tắt kiếp vừa sống, thiết kế để chụp và chia sẻ.
6. **Kỷ vật**: chọn giữ 1 trong 3 kỷ vật của kiếp đó, rồi sang kiếp sau.

### 3.2. Một kiếp: bốn mùa

- **Xuân** (tuổi thơ), **Hạ** (tuổi trẻ), **Thu** (tuổi trưởng thành), **Đông** (tuổi già).
- Mỗi mùa khoảng 12–15 phút, cả kiếp khoảng 45–60 phút. Lưu và thoát được bất cứ lúc nào.
- Kiếp nào cũng đi đủ bốn mùa. Nhân vật không chết giữa chừng.
- Cuối mỗi mùa có một **bước ngoặt**: nhân vật tự đưa ra một quyết định lớn của đời mình. Bạn chỉ ảnh hưởng gián tiếp qua các sự kiện đã ban trước đó.
- Thế giới lớn dần theo cuộc đời: sân nhà, rồi ngôi làng, rồi vùng đất xung quanh, và thu về một góc nhỏ khi về già. Vật thể và người xung quanh già đi theo thời gian.

### 3.3. Quyền năng của thần

- **Lá bài sự kiện**: mỗi lúc bạn có 3–4 lá rút ngẫu nhiên từ bộ bài của thần (ví dụ Hầm ngục, Lữ khách bí ẩn, Cơn bão, Lễ hội). Kéo một lá thả lên tiểu cảnh để kích hoạt.
- **Tín ngưỡng**: mỗi sự kiện tốn Tín ngưỡng. Tín ngưỡng hồi lại khi nhân vật thành công hoặc tin thần hơn.
- **Tuyên đoán**: từ cuối mùa Hạ, mỗi kiếp được đoán mục đích một lần, chọn 1 trong khoảng 6 câu mô tả. Đúng thì mở các lá bài định mệnh mạnh hơn cho mục đích đó. Sai thì mất Tín ngưỡng và không được đoán lại.
- Qua các kiếp, thần mở thêm lá bài mới.

### 3.4. Nhân vật

- Quyết định bằng hệ thống luật, không dùng AI ngôn ngữ: tính cách, tâm trạng, **độ tin tưởng vào thần** và một chút ngẫu nhiên. Chơi offline.
- Có thể nhận hoặc từ chối sự kiện. Thành hay bại trong sự kiện là do nó.
- Thất bại chỉ gây thương tích và mất lòng tin. Nếu lòng tin về 0, nhân vật ngừng nghe thần đến hết mùa đó.
- Phản ứng được thể hiện bằng ba lớp: biểu tượng cảm xúc trên đầu, dáng điệu cơ thể, và một dòng suy nghĩ ngắn. Dòng suy nghĩ là nơi đặt manh mối chính.

### 3.5. Mục đích ẩn

- Mỗi mục đích có một thước đo ẩn, tăng khi nhân vật nhận đúng loại sự kiện và chọn đúng hướng ở các bước ngoặt. Người chơi không bao giờ thấy thước đo.
- Mục đích cần được vun đắp qua nhiều mùa, không phải một việc làm xong trong một lần.

### 3.6. Mang theo qua các kiếp

- **Kỷ vật linh hồn**: tối đa 3 ô, muốn giữ cái mới phải bỏ một cái cũ. Kỷ vật có thể là bất cứ thứ gì của kiếp trước (vật phẩm, kỹ năng, ký ức, mối gắn bó). Tác dụng ở kiếp sau có thể là lợi thế, bất lợi hoặc không gì cả, và chỉ lộ ra khi sang kiếp sau.
- **Kiếp dang dở**: kiếp chưa trọn vẹn nằm trong Sổ các kiếp cùng câu "giá như". Khi cánh cửa quay về kiếp đó xuất hiện, bạn chơi lại **từ đầu kiếp**: thân phận và mục đích giữ nguyên, bài rút ra khác đi, có nút tua nhanh gấp đôi. Mỗi lúc tối đa một kiếp dang dở đang chờ (ở bản chơi thử).
- **Sổ các kiếp**: ghi lại mọi kiếp đã sống và các mục đích đã khám phá.

## 4. Cách tạo ra các kiếp

- Mỗi kiếp có một bộ khung viết tay: thân phận, mục đích ẩn, bốn bước ngoặt, các manh mối.
- Phần ngẫu nhiên mỗi lần chơi: bài rút được, tên và tính cách người xung quanh, kỷ vật xuất hiện.

## 5. Hình ảnh

- 3D low-poly thời gian thực, tô màu phẳng, không texture.
- Mỗi kiếp là một tiểu cảnh nổi giữa không gian của thần. Camera cố định nhìn chéo từ trên xuống, chỉ zoom nhẹ. Màn hình ngang.
- Nhân vật là mô hình cứng, chuyển động bằng code ở bản đầu (nhảy bước, nhún, cúi đầu, quay lưng). Trận đánh thể hiện tượng trưng. Nâng cấp hoạt hình sau.
- Mọi thế giới dựng từ một bộ mảnh ghép dùng chung, khác nhau ở bảng màu và vài mô hình đặc trưng (fantasy có hầm ngục, thế giới thường có trường học, thế giới phép thuật có tháp phù thuỷ).
- Quy trình duyệt: Claude chỉ kiểm tra hình ảnh qua ảnh chụp, nên bạn duyệt trên máy thật ở mỗi mốc.

## 6. Phạm vi

### Bản chơi thử (mốc đầu, ước tính 10–12 tuần với khoảng 10 giờ/tuần)

- 1 thế giới fantasy, lớn dần qua 3 kích cỡ.
- 3 kiếp, mỗi kiếp trọn bốn mùa và có một mục đích ẩn: kiếp 1, 2 và 31. Làm kiếp 1 hoàn chỉnh trước.
- 15 lá bài khởi đầu và các lá mở được trong ba kiếp. Mỗi kiếp có 4 bước ngoặt và khoảng 6 nhân vật phụ.
- Chi tiết ở `chi-tiet-ban-choi-thu.md`.
- Nếu quá sức: cắt số lá bài trước, không cắt số mùa.
- Mục tiêu của bản này: trả lời câu hỏi "suy luận mục đích qua bốn mùa có vui không" trước khi làm bản đầy đủ.

### Bản đầy đủ (ước tính thêm 6–9 tháng, chưa chốt)

- 3 thế giới: fantasy, thế giới thường, thế giới phép thuật.
- 38 kiếp: 30 kiếp gốc, 6 kiếp đi ngược khuôn, 2 kiếp thẳng. Kiếp 32–38 mới có ý tưởng.

## 7. Lộ trình bản chơi thử (đề xuất)

| Tuần | Claude | Bạn |
|------|--------|-----|
| 1–2 | Dựng project Godot. Vòng chơi dạng hình khối: nhân vật có tính cách và lòng tin, lá bài, Tín ngưỡng, một mùa | Cài Godot và Blender, làm bài học Blender đầu tiên, chơi thử bản hình khối |
| 3–4 | Đủ bốn mùa, bước ngoặt, thước đo mục đích, màn kết kiếp dạng chữ | Chơi thử nhịp 45–60 phút, góp ý. Tập làm mô hình low-poly đơn giản |
| 5–6 | Viết trọn kiếp 1. Tuyên đoán, khế ước, kỷ vật, cánh cửa, Sổ các kiếp | Duyệt giọng văn. Bắt đầu làm mô hình nhân vật |
| 7–8 | Tiểu cảnh lớn dần, ánh sáng theo mùa, dáng điệu và biểu tượng cảm xúc | Ráp cảnh trong Godot, làm mô hình đặc trưng (hầm ngục, nhà) |
| 9–10 | Kiếp 2 và kiếp 31. Chơi lại kiếp dang dở. Thẻ cuộc đời. Tiếng Anh | Duyệt nội dung và hình ảnh |
| 11–12 | Sửa theo góp ý | Mời 5–10 người thật chơi thử, ghi lại phản ứng. Quyết định làm tiếp hay không |

## 8. Bạn cần học

- **Godot editor cơ bản**: mở project, chạy game, sắp xếp cảnh, chỉnh thông số, xuất bản.
- **Blender low-poly cơ bản**: dựng hình, tô màu theo mặt, xuất `.glb`. Bắt đầu từ tuần 1 vì nhân vật là thứ người chơi nhìn nhiều nhất.

## 9. Game tương tự đã có

Chưa tìm thấy game nào ghép đủ ba thứ (thần tác động gián tiếp, isekai nhiều kiếp, mục đích ẩn phải suy luận). Đây là kết quả vài lượt tìm kiếm nhanh, chưa phải khẳng định chắc chắn.

- Loop Hero: đặt lá bài lên bản đồ, anh hùng tự đi tự đánh. Anh hùng không có ý chí riêng, không có mục đích ẩn.
- Majesty, Heroic Gambit: anh hùng tự quyết, người chơi là vua treo thưởng.
- Idol Hands, Fata Deum: làm thần, quản cả cộng đồng.
- Re:Born Isekai Company: xét duyệt linh hồn isekai, dạng chữ.
- Idle Reincarnator: tái sinh nhiều kiếp, dạng idle.

Nếu game chỉ dừng ở "thần đặt sự kiện, anh hùng tự xử" thì sẽ bị so trực tiếp với Loop Hero và Majesty. Phần suy luận mục đích ẩn phải là trung tâm.

## 10. Rủi ro

- Thị trường: năm 2025 có hơn 20.000 game ra mắt trên Steam, phần lớn không được biết tới. Không có gì đảm bảo doanh thu.
- Độ vui của việc suy luận chưa được kiểm chứng. Bản chơi thử tồn tại để kiểm tra điều này.
- Kiếp dài 45–60 phút cần nhiều nội dung viết tay. Chơi lại từ đầu một kiếp có thể gây mệt dù có tua nhanh.
- Chất lượng hình ảnh phụ thuộc vào việc bạn học Blender. Mô hình do skill sinh ra chỉ ở mức nền.
- Mọi con số thời gian trong tài liệu là ước lượng.

## 11. Chưa chốt

- Tên game.
- Giá bán (đã nêu khoảng 5–10$, chưa quyết).
- Tiêu chí quyết định làm tiếp sau bản chơi thử. Đề xuất: đa số người chơi thử muốn chơi kiếp thứ hai.
- Số kiếp và nội dung hai thế giới còn lại.
