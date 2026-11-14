#!/usr/bin/env python3
"""Mô phỏng cân bằng cho kiếp 1 (Thanh kiếm không mang tên mình) với bộ bài khởi đầu.

Mô hình đơn giản hoá của docs/su-kien-va-vat-pham.md, docs/khe-uoc.md, docs/cham-muc-dich.md.
Không mô phỏng: kỷ vật, chạm, ghép bài, tuyên đoán, xin giải khế ước.
Chạy:  python3 tools/balance_sim.py [số kiếp mỗi chiến lược]
"""
import random, sys
from collections import Counter

SEASONS = ["X", "H", "T", "D"]
# Khuynh hướng: C chinh phục, T tạo tác, G gắn bó, S chăm sóc, K khám phá, B bình yên
PERSONA = {"C": 1, "T": 3, "G": 3, "S": 1, "K": 0, "B": 2}
PURPOSE, DECOY = "T", "C"
BASE_STRENGTH = {"X": 0, "H": 1, "T": 2, "D": 1}

# tên: (giá, khuynh hướng, nguy hiểm, mùa, loại, mức trúng mục đích khi thả đúng chỗ)
# loại: thu = thử thách, gap = gặp gỡ, coh = cơ hội, bien = biến cố, lang = khoảng lặng
CARDS = {
    "Trò đánh trận giả":     (1, "CG", 0, "X",    "thu",  None),
    "Việc nặng nhọc":        (1, "TB", 0, "XHTD", "thu",  "full"),
    "Hầm ngục nông":         (2, "CK", 1, "HT",   "thu",  None),
    "Quái vật quấy làng":    (2, "CS", 1, "HTD",  "thu",  None),
    "Hầm ngục sâu":          (4, "C",  3, "T",    "thu",  None),
    "Lữ khách bí ẩn":        (1, "K",  0, "XHTD", "gap",  None),
    "Người thợ già":         (1, "T",  0, "XHT",  "gap",  "full"),
    "Con thú bị thương":     (1, "S",  0, "XHTD", "gap",  None),
    "Người bạn cũ ghé thăm": (1, "G",  0, "HTD",  "gap",  "full"),
    "Kho báu lộ thiên":      (2, "K",  0, "HT",   "coh",  None),
    "Món quà của thần":      (2, "T",  0, "XHTD", "coh",  "gift"),
    "Cơn bão":               (2, "",   1, "XHTD", "bien", "full"),
    "Trận ốm":               (2, "",   0, "XHTD", "bien", None),
    "Buổi chiều rảnh":       (0, "B",  0, "XHTD", "lang", "half"),
    "Bữa cơm nhà":           (1, "GB", 0, "XHTD", "lang", None),
}

P = dict(  # các con số của thiết kế, chỉnh ở đây (bộ G sau khi tinh chỉnh)
    faith_start=5, faith_max=10, plays=8, hand=4,
    full_rush=4, full_accept=2, half_rush=1, season_cap=10,
    turn_right=12, turn_wrong=-8, key=8, key_chance=0.15,
    t_full=85, t_part=45, hammer_chance=0.4,
    # tín ngưỡng và lòng tin: chỉ lá từ chối được (thử thách, gặp gỡ, cơ hội) mới đem lại
    f_success=1, f_fail=0, f_rush=1, tr_success=2, tr_rush=3, tr_oblige=-4, tr_fail=-5, tr_oblige_fail=-15,
    tr_bien=-3, trust_pull=0.25, gain_only_refusable=True,
    twist_turns=3,                        # số lượt đầu mùa Thu người chơi phải suy luận lại sau khúc quanh
    spring_bias=0, hieu_accuracy=0.85,   # người đã hiểu vẫn thả sai chỗ 15% số lần
)

def affinity(drives):
    return max((PERSONA[d] for d in drives), default=1)

def react(card, st, placed_right):
    cost, drives, danger, _, kind, hit = CARDS[card]
    if kind in ("bien", "lang"):          # không từ chối được
        return "rush" if (hit and placed_right and kind == "lang") else "accept"
    aff = affinity(drives)
    trust_term = (st["trust"] - 50) / 25
    own = (aff - 1) + st["mood"] * 0.5 - max(0, danger - st["strength"]) + random.uniform(-0.75, 0.75)
    if hit in ("full", "gift") and placed_right:
        own += 1.5
    score = own + trust_term
    if score >= 1 and (aff >= 3 or (hit and placed_right)):
        return "rush"
    if score >= 0:
        return "accept" if own >= 0 else "oblige"   # oblige = nhận vì nể
    if score >= -0.5:
        return "accept" if random.random() < 0.5 else "refuse"   # lưỡng lự
    return "refuse"

def play_life(strategy, contract=None):
    st = dict(trust=50, mood=0, strength=0, meter=0, keys=0, last_turn=False)
    passes = 0
    for season in SEASONS:
        st["strength"] = BASE_STRENGTH[season] + st.get("growth", 0)
        st["mood"] = 0
        st["trust"] += (50 - st["trust"]) * P["trust_pull"]      # đầu mùa, lòng tin trôi về mức giữa
        faith, pts = P["faith_start"], 0
        mom_p = (P["spring_bias"] if season == "X" else 0) + (1 if contract == "purpose" else 0)
        mom_l = 1 if contract == "decoy" else 0
        pool = [c for c, v in CARDS.items() if season in v[3]]
        hand = random.sample(pool, P["hand"])
        last_purpose = False
        for turn in range(P["plays"]):
            afford = [c for c in hand if CARDS[c][0] <= faith]
            mode = strategy
            if season == "T" and turn < P["twist_turns"] and strategy in ("hieu", "thamdo"):
                mode = "ngaunhien"            # khúc quanh giữa đời: điều đã hiểu không còn đúng hẳn
            elif strategy == "thamdo":      # thăm dò ở Xuân và nửa đầu Hạ, sau đó chơi như người đã hiểu
                mode = "ngaunhien" if (season == "X" or (season == "H" and turn < 4)) else "hieu"
            def rank(c):
                hit, dec = CARDS[c][5], DECOY in CARDS[c][1]
                if mode == "hieu":  return (0 if hit in ("full", "gift") else 1 if hit == "half" else 3 if dec else 2, CARDS[c][0])
                if mode == "lac":   return (0 if dec else 1, -CARDS[c][0])
                return (random.random(),)
            if not afford:                 # bỏ một lá: +1 tín ngưỡng, mất lượt
                passes += 1
                faith = min(P["faith_max"], faith + 1)
                drop = max(hand, key=lambda c: CARDS[c][0])
                hand.remove(drop); hand.append(random.choice([c for c in pool if c not in hand]))
                continue
            card = min(afford, key=rank)
            cost, drives, danger, _, kind, hit = CARDS[card]
            placed_right = (random.random() < P["hieu_accuracy"]) if mode == "hieu" else random.random() < 0.3   # người chưa hiểu ít khi thả đúng chỗ
            if hit == "gift":
                hit = "full" if random.random() < P["hammer_chance"] else None
            faith -= cost
            r = react(card, st, placed_right)
            success = True
            if r == "refuse":
                faith += cost // 2
            else:
                if kind == "thu":
                    success = random.random() < min(0.95, 0.8 + (0.1 if r == "rush" else 0) - 0.25 * max(0, danger - st["strength"]))
                gains = kind in ("thu", "gap", "coh") or not P["gain_only_refusable"]
                if kind == "bien": st["trust"] += P["tr_bien"]
                if r == "oblige":
                    st["trust"] += P["tr_oblige"]
                if not gains:
                    pass
                elif success:
                    faith += P["f_success"]; st["trust"] += P["tr_success"] if r != "oblige" else 0
                    if kind == "thu": st["growth"] = st.get("growth", 0) + 0.25
                elif r == "oblige" and danger >= 2:
                    st["trust"] += P["tr_oblige_fail"]; st["mood"] = max(-2, st["mood"] - 1)
                else:
                    faith += P["f_fail"]; st["trust"] += P["tr_fail"]; st["mood"] = max(-2, st["mood"] - 1)
                if r == "rush":
                    st["mood"] = min(2, st["mood"] + 1)
                    if gains: faith += P["f_rush"]; st["trust"] += P["tr_rush"]
                eff = hit if placed_right else None
                if eff == "full":
                    pts += P["full_rush"] if r == "rush" else P["full_accept"] if r == "accept" else 0
                    if r == "rush" and st["keys"] < 3 and random.random() < P["key_chance"]:
                        st["keys"] += 1; st["meter"] += P["key"]
                elif eff == "half" and r == "rush":
                    pts += P["half_rush"]
                if PURPOSE in drives and r in ("rush", "accept"): mom_p += 1
                if DECOY in drives and success: mom_l += 1
                last_purpose = PURPOSE in drives
            faith = max(0, min(P["faith_max"], faith)); st["trust"] = max(0, min(100, st["trust"]))
            hand.remove(card); hand.append(random.choice([c for c in pool if c not in hand]))
        right = mom_p > mom_l or (mom_p == mom_l and last_purpose)
        st["meter"] += min(pts, P["season_cap"]) + (P["turn_right"] if right else P["turn_wrong"])
        st["last_turn"] = right
    m = max(0, min(100, st["meter"]))
    tier = "Trọn vẹn" if m >= P["t_full"] and st["last_turn"] else "Dang dở" if m >= P["t_part"] else "Lạc lối"
    return m, tier, st["trust"], passes

def run(n):
    print(f"{n} kiếp mỗi dòng. Ngưỡng: trọn vẹn {P['t_full']}, dang dở {P['t_part']}\n")
    print(f"{'chiến lược':<12}{'khế ước':<10}{'điểm TB':>8}{'trọn vẹn':>10}{'dang dở':>9}{'lạc lối':>9}{'lòng tin':>9}{'lượt bỏ':>9}")
    for strat in ("hieu", "thamdo", "ngaunhien", "lac"):
        for con in (None, "purpose", "decoy"):
            res = [play_life(strat, con) for _ in range(n)]
            t = Counter(r[1] for r in res)
            print(f"{strat:<12}{str(con):<10}{sum(r[0] for r in res)/n:>8.1f}"
                  f"{t['Trọn vẹn']/n:>10.0%}{t['Dang dở']/n:>9.0%}{t['Lạc lối']/n:>9.0%}"
                  f"{sum(r[2] for r in res)/n:>9.0f}{sum(r[3] for r in res)/n:>9.1f}")

if __name__ == "__main__":
    random.seed(1)
    run(int(sys.argv[1]) if len(sys.argv) > 1 else 5000)
