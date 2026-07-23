---
title: "AI 除錯不要先猜：用 6 個 skills 處理 bug、triage、架構與衝突"
description: "把 diagnosing-bugs、triage、codebase-design、improve-codebase-architecture、domain-modeling 與 resolving-merge-conflicts 放進日常維護流程。"
category: "engineering"
tags: ["除錯", "issue triage", "程式架構", "merge conflict", "Agent Skills"]
difficulty: "中階"
timeEstimate: "14 分鐘"
featured: true
publishedAt: 2026-07-23
updatedAt: 2026-07-23
guideType: "workflow"
coverImage: "https://images.keyo.tw/skill-library/guides/matt-pocock-skills-debug-maintain.webp"
coverImageAlt: "夜間開發桌上有人一邊操作鍵盤，一邊在重現檢查表上做記號"
learningGoals: ["建立會對特定 bug 變紅的回饋迴圈", "把外部 issue 移到可執行的 triage 狀態", "用共同架構詞彙找出真正值得做的重整"]
prerequisites: ["已設定 issue tracker 與 triage labels", "能執行專案測試、CLI 或本地服務"]
relatedSkills: ["awesome-agent-skills-mattpocock-skills"]
---

代理除錯最常見的失敗，不是看不懂程式，而是太早提出一個聽起來合理的原因。改完之後錯誤似乎消失，卻沒有人能證明修到的是同一個問題。

`diagnosing-bugs` 的做法很硬：沒有一條能對這個 bug 變紅的指令，就不能開始猜。

## 先把 bug 變成一個可以反覆執行的訊號

可以這樣交代：

```text
請使用 diagnosing-bugs 找出匯出報表偶爾少一列的原因。
先建立一條能捕捉「少一列」的自動化指令。
在它能穩定變紅之前，不要提出修正。
```

這條指令可能是單一測試、`curl`、CLI fixture、headless browser script、重播 HAR 或 log 的小工具，也可能是跑 1,000 組輸入的 property test。重點不是形式，而是它必須符合四個條件：

- 真的走到使用者遇到的那條路徑。
- 會對指定症狀變紅，不是只檢查程式有沒有 crash。
- 結果穩定，或至少把 flake 的重現率拉高到可除錯。
- 代理可以自行重跑，不需要每次等人點介面。

一條 30 秒又忽紅忽綠的指令，幫助有限。這個 skill 會繼續縮短準備時間、固定亂數和時間、隔離檔案系統，直到訊號夠快也夠尖銳。

如果真的做不出迴圈，代理必須列出已嘗試的方法，並請你提供可重現環境、HAR、log、core dump、帶時間碼的錄影，或臨時正式環境 instrumentation。它不應該在沒有訊號的情況下繼續講故事。

## 六階段除錯流程

回饋迴圈建立後，`diagnosing-bugs` 才進入後面的工作：

1. 重現並縮小案例，刪到每一個剩餘條件都是必要的。
2. 先列出 3 到 5 個可被推翻的假設，再開始測。
3. 每個 probe 只對應一個假設，一次改一個變數。
4. 在正確 seam 上把最小重現案例改成 regression test。
5. 套用修正，再跑原始的完整案例。
6. 移除所有帶唯一前綴的 debug instrumentation，留下正確原因。

效能退化會走不同分支。先建立 baseline、profile 或 query plan，再做 bisection。到處加 log 通常只會讓量測更吵。

這套流程有一個很實用的收尾：如果找不到能鎖住 bug 的測試 seam，結論不是「算了」。它會把問題交給 `improve-codebase-architecture`，因為缺少可測 interface 本身就是架構訊號。

## triage 不是幫 issue 貼幾張標籤

`triage` 把外部 issue 和指定的外部 PR 放進一個狀態機。每個項目只能有一個 category 和一個 state。

Category 有 `bug` 與 `enhancement`。State 有：

- `needs-triage`
- `needs-info`
- `ready-for-agent`
- `ready-for-human`
- `wontfix`

標籤實際名稱可以不同，但 mapping 要先由 `setup-matt-pocock-skills` 寫進專案。

查看待處理項目：

```text
/triage

列出所有需要 maintainer 注意的 issue，最舊的放前面。
```

針對單一問題：

```text
/triage

檢查 #42。先讀完整討論並驗證問題，再推薦 category 和 state。
```

這個 skill 會做兩個常被省略的搜尋。它會確認要求的行為是否早已存在，也會查 `.out-of-scope/`，看看同一想法是否曾因明確理由被拒絕。

對 bug，它要實際重現。對 PR，它要 checkout diff 並跑相關檢查。確認後才決定要不要進一步 `grilling`。若資訊已足夠，`ready-for-agent` 會附上耐久的 agent brief。若還缺資料，`needs-info` 要列出已知事實和具體問題，不接受一句「請提供更多資訊」。

`to-tickets` 自己建立的 tickets 已經是 ready-for-agent，不要再送進 triage。Triage 是給外部進來、還沒整理過的請求。

## 用共同詞彙談架構，代理比較不容易各說各話

`codebase-design` 定義了一組刻意精簡的詞：

- Module：任何有 interface 與 implementation 的東西，大小不限。
- Interface：呼叫端必須知道的全部內容，包含型別、限制、錯誤模式與效能特性。
- Depth：呼叫端學一小段 interface，可以取得多少行為。
- Seam：可以在不修改呼叫位置的情況下替換行為的位置。
- Adapter：在 seam 上滿足 interface 的具體實作。
- Leverage：一個實作替多個呼叫端提供能力。
- Locality：變更、bug 和驗證集中在同一處。

這些字不是裝飾。`improve-codebase-architecture` 會要求整份報告都使用同一套詞，避免一會兒叫 service，一會兒叫 component，最後沒人知道討論的是同一個結構還是不同東西。

`codebase-design` 有三個很好記的判斷：

1. 刪除一個 module 後，複雜度若消失，它可能只是轉接層。複雜度若散回多個呼叫端，它就在做有價值的集中。
2. Interface 應該同時是呼叫端和測試使用的表面。測試一直想鑽過 interface，module 形狀可能有問題。
3. 只有一個 adapter 時，seam 多半只是假設。真的出現第二個 adapter，再抽象通常比較合理。

## 架構檢查要先找熱區，不是掃到哪改到哪

```text
/improve-codebase-architecture

請聚焦最近兩週反覆修改的訂單匯入流程。
```

如果你沒有指定範圍，skill 會從 git history 找熱區，再讀 `CONTEXT.md` 和相關 ADR。它找的是理解時需要來回跳多個小 module、interface 幾乎和 implementation 一樣複雜、或為了測試抽出一堆 pure functions，卻仍看不到真實呼叫關係的地方。

第一階段只產生候選，不設計新 interface。結果會寫成 OS 暫存目錄裡的自足 HTML 報告，每個候選都有 before、after 視覺、影響檔案、問題、可能解法、測試改善，以及 Strong、Worth exploring、Speculative 三種建議強度。

你挑選一個候選後，才進入 `grilling`。如果討論發現新的 domain term，`domain-modeling` 會立即更新 glossary。若使用者拒絕重整的理由會影響未來判斷，才值得記成 ADR。

這裡的節制很重要。不是每個轉接函式都需要變成「深 module」，也不是每次檢查都應該產生 refactor。先看最近會不會繼續改，再決定是否值得投資。

## merge conflict 要回到兩邊的原始意圖

遇到進行中的 merge 或 rebase，可以請代理套用 `resolving-merge-conflicts`：

```text
請使用 resolving-merge-conflicts 完成目前的 rebase。
逐段確認兩邊的 commit、PR 與 issue 意圖，不要 abort。
```

它會讀目前狀態、歷史、衝突檔案，以及每一邊的 primary source。可以同時保留的意圖就保留，真的互斥時，選擇符合這次 merge 目標的一邊並說明取捨。它不會藉機加入第三種新行為。

解完後要跑專案既有檢查，stage 全部變更，繼續 merge 或 rebase，直到流程真正結束。這和隨手刪掉 conflict marker 的差距很大，尤其當兩邊都在修同一個 domain rule 時。

## 一條可重複使用的維護路線

日常維護可以用這個順序：

```text
外部問題進來
→ /triage
→ diagnosing-bugs
→ regression test 與修正
→ code-review
→ 必要時 /improve-codebase-architecture
```

這條路線把兩種問題分開了。眼前的 bug 先用回饋迴圈修掉，架構問題留到已經掌握原因後再談。代理對系統知道得更多，建議也會比較像根據，而不是感想。

## 參考資料

- [diagnosing-bugs 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/diagnosing-bugs/SKILL.md)
- [triage 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/triage/SKILL.md)
- [codebase-design 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/codebase-design/SKILL.md)
- [improve-codebase-architecture 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/improve-codebase-architecture/SKILL.md)
- [domain-modeling 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/SKILL.md)
- [resolving-merge-conflicts 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/resolving-merge-conflicts/SKILL.md)
