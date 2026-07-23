---
title: "從一句需求到可提交程式碼：串起 Matt Pocock 的開發工作流"
description: "用一個真實功能示範 grill-with-docs、to-spec、to-tickets、implement、tdd 與 code-review 怎麼接起來，並說明何時應該略過其中一步。"
category: "engineering"
tags: ["需求分析", "TDD", "程式碼審查", "Agent Skills", "開發工作流"]
difficulty: "中階"
timeEstimate: "15 分鐘"
featured: true
publishedAt: 2026-07-23
updatedAt: 2026-07-23
guideType: "workflow"
coverImage: "https://images.keyo.tw/skill-library/guides/matt-pocock-skills-idea-to-ship.webp"
coverImageAlt: "兩位開發者在辦公桌前用紙張、筆電與便利貼檢視功能流程"
learningGoals: ["把需求討論轉成可驗證的 spec", "用垂直切片拆 tickets 並標出阻塞關係", "讓代理在固定 seam 上執行 TDD 與雙軸審查"]
prerequisites: ["已執行 setup-matt-pocock-skills", "專案有可執行的型別檢查或測試指令"]
relatedSkills: ["awesome-agent-skills-mattpocock-skills"]
---

假設你收到一句需求：「搜尋頁要能儲存篩選條件，下次回來還在。」

直接叫代理開始寫，通常很快就會遇到幾個問題。篩選條件是跟帳號走，還是只存瀏覽器？不同裝置要同步嗎？URL 要不要保留查詢參數？沒有登入的使用者怎麼辦？這些不是程式細節，它們會改變資料模型和使用者看到的行為。

Matt Pocock 的主流程，就是先把這些分支走完，再決定要不要拆成多個 session。

## 第一步：在同一個對話裡問清楚

在有 codebase 的情況下輸入：

```text
/grill-with-docs

我們要讓搜尋頁儲存篩選條件，下次回來時自動恢復。
請先讀現有搜尋流程與登入模型，再一題一題問我。
```

`grill-with-docs` 會呼叫 `grilling` 與 `domain-modeling`。前者負責一次問一題，後者負責維護專案裡的共同語言。

這裡有兩個容易忽略的規則。

第一，查得到的事不該拿來問你。代理應先讀程式、設定與文件，再把真正需要產品判斷的問題交給你。第二，`CONTEXT.md` 只放 glossary。像「Saved Filter 是一組具名的 Search Criteria」可以寫進去，資料表欄位和檔案路徑則不該混進 glossary。

如果討論產生一個難以回頭、看起來又很反直覺的技術決定，`domain-modeling` 才會建議 ADR。一般的小選擇不需要每個都立碑。

## 第二步：紙上談不清楚時，做一個可丟棄原型

有些問題要看到東西才答得出來。例如，使用者儲存五組篩選條件後，切換介面到底要用分頁、選單還是側欄。

這時先交接目前對話：

```text
/handoff 我準備開一個新 session 比較搜尋篩選器的 UI 方案
```

到新 session 讀取 handoff 文件，再執行：

```text
/prototype

請根據交接文件，比較三種差異明顯的 UI。
所有版本放在同一個 route，以 query parameter 切換。
```

`prototype` 只有兩條分支。邏輯或狀態模型問題會產生小型終端程式，UI 問題會在同一路由提供多個版本。原型不做測試、持久化和漂亮抽象。它要回答一個問題，不是偷跑正式實作。

得到答案後，把結論 handoff 回原本的需求對話。原型程式可以留在 throwaway branch 當第一手資料，主分支只保留已驗證的決定。

## 第三步：把已經談完的內容整理成 spec

`to-spec` 不會再訪談一次。它只整理目前對話和 codebase 裡已知的事。

```text
/to-spec
```

輸出會包含問題、解法、完整 user stories、實作決定、測試決定、排除範圍與補充說明。它會發布到設定好的 issue tracker，並套用 ready-for-agent 標籤。

在寫 spec 前，代理必須先提出預計測試的 seams。Seam 是可以透過公開 interface 觀察行為的位置。這個例子可能有兩個候選：

- 透過搜尋頁的公開互動測試儲存與恢復。
- 透過 Saved Filter module 的 interface 測試登入、覆寫與刪除規則。

哪個才對，要看現有架構。原則是優先使用既有 seam，並盡量選較高、較接近真實行為的位置。測試 seam 沒有取得你的確認前，不該開始寫測試。

如果這個功能能在目前 session 完成，可以從 spec 直接進 `implement`。需要多個 session 時，先拆 tickets。

## 第四步：把工作切成可以獨立驗證的 tickets

```text
/to-tickets
```

好的 ticket 不是「先做資料庫」「再做 API」「最後做 UI」。那是水平切片，任何一張單獨完成都無法展示功能。

垂直切片會像這樣：

1. 登入使用者可以命名並儲存目前的搜尋條件。
2. 使用者再次開啟搜尋頁時，可以恢復一組已儲存條件。
3. 使用者可以重新命名或刪除已儲存條件。
4. 未登入使用者仍維持現有的 URL 篩選行為。

每張 ticket 都要能在一個新的 context window 裡完成，並寫清楚 `Blocked by`。沒有 blocker 的 ticket 可以立刻開工。

`to-tickets` 會先讓你檢查粒度與阻塞邊，再發布。使用本地 tracker 時，每張 ticket 是 `.scratch/<feature>/issues/` 下的獨立 Markdown。使用 GitHub、Linear 等 tracker 時，則應使用平台原生 blocking 關係。

如果遇到一次會改壞大量呼叫端的機械式重整，例如欄位改名，就不要硬切成垂直功能。這套 skill 建議使用 expand、migrate、contract：先加入新形式，再分批搬移，最後刪除舊形式，讓 CI 在中間階段仍然能過。

## 第五步：每張 ticket 用新 session 實作

針對一張 agent-ready ticket 開新 session：

```text
/implement

請實作 issue #123。
```

`implement` 會在事先同意的 seams 上使用 `tdd`。每次只做一個垂直切片：

```text
一個會失敗的測試
→ 剛好讓它通過的程式
→ 下一個測試
```

`tdd` 對測試品質管得很具體。測試要走公開 interface，不碰 private method，不用另一套相同演算法重新算 expected value，也不該一次寫完全部測試再補全部實作。

有一點和常見 TDD 教學不太一樣：這套 skill 把 refactor 放到 review 階段，不放在每次 red、green 迴圈裡。這能避免代理一邊趕著讓測試通過，一邊順手擴大修改範圍。

實作期間要固定執行型別檢查和單一測試檔，最後才跑完整測試套件。完成後 `implement` 會呼叫 `code-review`。

## 第六步：把 standards 和 spec 分開審

`code-review` 需要一個固定比較點，例如 `main`：

```text
請用 code-review 檢查目前分支，相對於 main 的變更。
```

它先確認 `git diff main...HEAD` 真的有內容，再找出原始 spec 與 repo 的 coding standards。接著平行執行兩個互不干擾的 review：

- Standards：是否違反專案規範，或出現 Fowler 的 code smells。
- Spec：需求是否漏做、做錯，或多做了沒有要求的內容。

兩份結果會分開呈現，不會硬合成一個總分。原因很簡單：程式可以寫得很漂亮，但做錯功能；也可以符合 spec，卻破壞專案慣例。混在一起容易讓其中一邊把另一邊蓋掉。

## 什麼時候可以縮短流程

小 bug 或一個很明確的行為，不需要每次都走完整套：

```text
/tdd

修正商品數量為 0 時仍能結帳的問題。
測試 seam 使用 Cart 的公開 checkout interface。
```

需求已經在對話裡談清楚，但預計只做一個 session，可以走：

```text
/grill-with-docs
→ /to-spec
→ /implement
```

多 session 的功能才需要：

```text
/grill-with-docs
→ /to-spec
→ /to-tickets
→ 每張 ticket 各自 /implement
```

最值得保留的不是斜線指令，而是三個檢查點：需求分支真的走完了嗎，測試 seam 真的合理嗎，最後的 diff 同時符合規格和專案標準嗎。少了這三個問題，代理只是用更快的速度把不確定性寫進程式。

## 參考資料

- [ask-matt 的完整流程圖](https://github.com/mattpocock/skills/blob/main/skills/engineering/ask-matt/SKILL.md)
- [grill-with-docs 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md)
- [to-spec 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md)
- [to-tickets 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-tickets/SKILL.md)
- [implement 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/implement/SKILL.md)
- [tdd 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md)
- [code-review 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/code-review/SKILL.md)
