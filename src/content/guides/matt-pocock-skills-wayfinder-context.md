---
title: "專案大到一個 AI session 裝不下：Wayfinder、Research 與 Handoff 實戰"
description: "學會用 wayfinder 建立跨 session 的決策地圖，以 research、prototype、grilling 推進 frontier，並用 handoff 保留必要脈絡。"
category: "engineering"
tags: ["Wayfinder", "大型專案", "research", "handoff", "context management"]
difficulty: "進階"
timeEstimate: "16 分鐘"
featured: true
publishedAt: 2026-07-23
updatedAt: 2026-07-23
guideType: "workflow"
coverImage: "https://images.keyo.tw/skill-library/guides/matt-pocock-skills-wayfinder-context.webp"
coverImageAlt: "兩位開發者站在貼滿紙卡與連線的牆前整理大型專案決策"
learningGoals: ["判斷大型工作何時真的需要 wayfinder", "建立 map、ticket、frontier 與 fog of war", "在跨 session 工作時留下可追溯的決策脈絡"]
prerequisites: ["已執行 setup-matt-pocock-skills", "熟悉專案使用的 issue tracker"]
relatedSkills: ["awesome-agent-skills-mattpocock-skills"]
---

有些工作不是「功能比較大」，而是連通往終點的路都還看不清楚。比方說，把單體系統拆成多租戶平台、設計一門半年課程，或搬移數十億筆資料。這類工作通常超過一個 AI session 能穩定掌握的範圍。

`wayfinder` 處理的就是這種霧。它不急著拆實作 tickets，而是先建立一張可以跨 session 共用的決策地圖。

## 先確認你遇到的是霧，不只是工作量大

一般功能已經知道要做什麼，只是需要分段實作，使用 `to-spec` 和 `to-tickets` 就夠了。

Wayfinder 適合三種訊號同時出現的情況：

- 終點可以描述，但中間仍有多個互相依賴的未知決定。
- 每個未知都可能改變後續規格或工作切法。
- 一個 session 無法同時完成調查、決策和收斂。

如果在第一次廣度訪談後，所有問題都已經能清楚回答，skill 會停下來告訴你不需要 map。這是好事。Wayfinder 很耗腦力，不該成為每個專案的開場儀式。

## Map 是索引，不是巨型規格

啟動時可以寫：

```text
/wayfinder

我們要把目前只支援單一企業的 SaaS 改成多租戶架構。
終點是得到一份可以交給 to-spec 的決策集合。
先幫我命名 destination，再廣度盤點第一批決策。
```

Wayfinder 會先用 `grilling` 與 `domain-modeling` 定義 destination。Destination 不是口號，而是判斷 scope 的界線。例如：

```text
產出一組足以撰寫多租戶遷移 spec 的決策，
包含隔離模型、身分識別、資料搬移與回復策略。
```

接著建立一張 map issue，內容只有四個區塊：

- Destination：做到什麼程度就可以結束 wayfinding。
- Notes：這個 effort 的固定規則與每個 session 應使用的 skills。
- Decisions so far：已關閉 ticket 的一句話結論與連結。
- Not yet specified：知道之後要處理，但目前還說不清楚的霧。
- Out of scope：已確認不屬於這個 destination 的工作。

Map 只存低解析度索引。完整問題和答案各自留在 ticket，避免同一個決定在兩個地方慢慢長成不同版本。

## Ticket 問的是決策，不是交付物

Wayfinder ticket 的完成條件是一個決定，而不是一段 production code。每張 ticket 都要能在一個約 100K tokens 的 session 裡處理，並屬於四種類型之一。

### Research

需要讀外部規格、官方文件、source code 或第一方 API 時使用。這是 AFK 工作，由 `research` 背景代理處理。

```text
研究 Cloudflare R2 的 consistency 與跨區存取限制。
只使用官方文件、規格與第一方 API 說明。
把結論寫成有逐項引用的 Markdown。
```

`research` 的產物是 repo 裡的一份 cited Markdown。它提供決策需要的事實，但不代替產品或架構選擇。

### Prototype

光靠討論無法確定 UI 或狀態模型時使用。它需要人看過並回應，所以是 HITL。

原型應該便宜、可執行、可丟棄。驗證完後把程式放在 throwaway branch，將問題與答案寫回 ticket。不要讓 prototype 偷偷變成沒測試的正式模組。

### Grilling

大多數決策都從這裡開始。`grilling` 一次只問一題，沿著依賴關係往下走。它會自己查環境裡能找到的事，真正需要取捨的問題才交給人。

### Task

有時卡住的不是未知，而是必須先完成一個動作，例如申請 sandbox、匯出資料樣本、取得第三方測試帳號。Task 可以由代理做，也可以給人一份明確清單。它存在的理由，是解除後續決策的阻塞。

## Frontier 和 fog of war 怎麼分

每張 ticket 都可以有 blocking edges。所有 blockers 已關閉、仍開啟、尚未被其他 session claim 的 tickets，就是 frontier。沒有指定 ticket 時，wayfinder 會拿第一張 frontier ticket。

Fog of war 則不同。它是已知在 scope 內，卻還無法精確問成一句話的區域。

判斷方式很簡單：

```text
現在能不能把問題寫得精確？
```

可以，就建 ticket，即使它目前被別的決定阻擋。還不行，就留在 `Not yet specified`。不要為了讓地圖看起來完整，先把霧硬切成一堆模糊 tickets。

某張 ticket 關閉後，前方可能變清楚。這時才把新的問題從 fog 提升成 tickets，設定 blocking edges，讓 frontier 往 destination 推進。

## 每個 session 只解一張 ticket

除了可以平行執行的 research tickets，wayfinder 規定一個 session 只解一張決策 ticket。

執行順序是：

1. 載入 map 的低解析度內容。
2. 選 frontier ticket 並先 claim，避免另一個 session 重複處理。
3. 需要時才讀相關 ticket 的完整細節。
4. 依 ticket 類型呼叫 research、prototype、grilling 或 task。
5. 把答案放進 resolution comment，關閉 ticket。
6. 在 map 的 Decisions so far 加入一句話索引。
7. 依新資訊建立 tickets、清除已畢業的 fog，或把超出 destination 的內容移到 Out of scope。

這個限制看似慢，其實是在保護推理品質。一次開五個分支，最後很容易只把每個問題摸到表面。

## Handoff 是換 session，compact 是留在原對話

當對話逼近模型仍能穩定推理的 smart zone，可以用：

```text
/handoff 下一個 session 會繼續處理 Tenant identity ticket
```

`handoff` 會把摘要寫到作業系統暫存目錄，而不是 repo。文件要引用現有 spec、issue、ADR、commit 或 diff，不重複抄內容，也會刪除 API key、密碼和個人資料。

下一個 session 直接引用該檔案。這是一條 fork 出去的橋，適合進 prototype、切換長任務，或讓另一個代理接手。

內建 `/compact` 則留在同一個對話，只把前文壓縮成摘要。適合階段結束的地方，不要在還沒做完 grilling、to-spec 或 to-tickets 時壓縮。丟掉逐字脈絡後，代理可能忘記某個決定為什麼成立。

## 地圖走完後，還不能直接 implement

Wayfinder 結束時，你擁有的是一組彼此連結的決策。下一步通常是：

```text
/to-spec
→ /to-tickets
→ 每張 ticket 各自 /implement
```

`to-spec` 會把地圖裡分散的決定收斂成一份可實作規格。直接從 map 跳到 `implement`，等於略過這次收斂，前面辛苦建立的關係很可能只剩幾句摘要。

只有當 wayfinding 發現工作其實很小，才適合直接實作。

## 一個最小的多租戶 map

第一批 tickets 可能是：

1. `選擇租戶隔離模型`，grilling，無 blocker。
2. `驗證資料庫對 row-level security 的支援`，research，無 blocker。
3. `定義 tenant identity 如何進入 request context`，grilling，被前兩張阻擋。
4. `比較搬移期間的 dual-write 狀態模型`，prototype，被隔離模型阻擋。
5. `取得匿名化的正式資料分布`，task，無 blocker。

`Not yet specified` 可以先寫「回復策略和客戶切換批次」，因為在隔離模型與資料分布還沒確定前，問題形狀仍然太模糊。

這張圖不保證計畫不會變。它讓變動有位置、有來源，也讓下一個 session 不必假裝自己記得上週的整段對話。

## 參考資料

- [wayfinder 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/wayfinder/SKILL.md)
- [research 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/research/SKILL.md)
- [prototype 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/SKILL.md)
- [handoff 原文](https://github.com/mattpocock/skills/blob/main/skills/productivity/handoff/SKILL.md)
- [grilling 原文](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md)
- [domain-modeling 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/SKILL.md)
