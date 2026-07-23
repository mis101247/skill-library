---
title: "Matt Pocock 的 22 個 Agent Skills：安裝、分類與選用指南"
description: "完整盤點 mattpocock/skills 的 22 個工作流，說清楚哪些要手動呼叫、哪些會由模型套用，以及第一次安裝後該從哪個開始。"
category: "engineering"
tags: ["mattpocock", "Agent Skills", "Codex", "Claude Code", "開發工作流"]
difficulty: "入門"
timeEstimate: "12 分鐘"
featured: true
publishedAt: 2026-07-23
updatedAt: 2026-07-23
guideType: "tool-introduction"
coverImage: "https://images.keyo.tw/skill-library/guides/matt-pocock-skills-overview.webp"
coverImageAlt: "有使用痕跡的木桌上放著程式碼筆電、手繪工作流程筆記本與咖啡"
learningGoals: ["辨認上游目前的 22 個正式 skills", "了解使用者呼叫與模型呼叫的差別", "完成安裝並選出適合眼前任務的工作流"]
prerequisites: ["一個可以測試的程式專案", "Codex、Claude Code，或支援 Agent Skills 規格的代理"]
relatedSkills: ["awesome-agent-skills-mattpocock-skills"]
---

`mattpocock/skills` 常被介紹成 17 個開發 skills，但那是舊資料。本文在 2026 年 7 月 23 日逐一檢查 `main` 分支後，正式清單是 22 個：17 個工程工作流，5 個一般生產力工作流。

這套工具最有意思的地方，不是數量。它刻意不接管整個開發流程，而是把需求釐清、規格、測試、除錯、審查和交接拆成小塊。你可以只拿 `tdd`，也可以把多個 skill 串成一條從想法到提交的路線。

## 先選安裝方式

想在 Codex 或其他支援 Agent Skills 的工具裡使用，最直接的方式是：

```sh
npx skills@latest add mattpocock/skills
```

安裝程式會讓你挑選 skills 與目標代理。請至少選取 `setup-matt-pocock-skills`。回到專案後執行：

```text
/setup-matt-pocock-skills
```

它會檢查 issue tracker、triage 標籤，以及 `CONTEXT.md` 和 ADR 的放置方式。這不是可有可無的歡迎頁。`to-spec`、`to-tickets`、`triage`、`code-review` 等工作流都會讀取這次設定。

Claude Code 也能把整套 skills 當成受管理的 plugin 安裝：

```text
/plugin marketplace add mattpocock/skills
/plugin install mattpocock-skills@mattpocock
```

兩種安裝方式的差別很實際。Skills CLI 會把檔案複製到你的專案，方便直接改內容。Claude Code plugin 由上游管理，更新省事，但比較像訂閱一套固定版本。

## 為什麼有些 skill 不會自動啟用

這 22 個 skills 分成兩種角色。

使用者呼叫的 skill 只會在你明確輸入名稱時執行，例如 `/to-spec`。它們通常負責編排一段完整流程，也可能建立 issue、修改文件或提交程式碼。這類 skill 在 frontmatter 裡設定了 `disable-model-invocation: true`。

模型呼叫的 skill 則可以由代理在任務符合時自動套用，例如你說「這個錯誤很難重現」，代理可以選用 `diagnosing-bugs`。它們多半提供可重複使用的紀律或詞彙，也能被其他 skills 呼叫。

這個區分能減少誤觸。你大概不希望代理在看到一句模糊需求後，自動開 12 張 tickets 或直接重整整個架構。

## 22 個 skills 各自負責什麼

| Skill | 呼叫方式 | 什麼時候用 |
| --- | --- | --- |
| `ask-matt` | 使用者 | 忘了該選哪條流程時，用它當路由器 |
| `setup-matt-pocock-skills` | 使用者 | 每個 repo 第一次使用前，設定 tracker、標籤與 domain docs |
| `grill-with-docs` | 使用者 | 在程式專案裡釐清需求，並同步整理 glossary 與 ADR |
| `triage` | 使用者 | 整理外部 issue 或 PR，驗證後移到正確狀態 |
| `improve-codebase-architecture` | 使用者 | 找出淺薄 module，產生視覺報告，再挑一個深入討論 |
| `to-spec` | 使用者 | 把已經談清楚的對話整理成 spec，直接發布到 tracker |
| `to-tickets` | 使用者 | 把 spec 拆成可獨立驗證的垂直切片與阻塞關係 |
| `implement` | 使用者 | 依 spec 或 ticket 實作，搭配 TDD、檢查與提交 |
| `wayfinder` | 使用者 | 處理大到超過一個 session 的模糊計畫，先建立決策地圖 |
| `prototype` | 模型 | 用可丟棄的程式回答一個 UI 或狀態模型問題 |
| `diagnosing-bugs` | 模型 | 用可重現、可驗證的迴圈處理棘手 bug 或效能退化 |
| `research` | 模型 | 交給背景代理查第一手資料，留下有引用的 Markdown |
| `tdd` | 模型 | 用 red、green 垂直切片實作行為 |
| `domain-modeling` | 模型 | 整理領域詞彙、具體情境與少量真正需要的 ADR |
| `codebase-design` | 模型 | 用 module、interface、depth、seam 等共同語言設計程式 |
| `code-review` | 模型 | 分開檢查 coding standards 與 spec 符合度 |
| `resolving-merge-conflicts` | 模型 | 依兩邊原始意圖逐段解衝突，完成 merge 或 rebase |
| `grill-me` | 使用者 | 沒有 codebase 時，把一般計畫問到沒有未決分支 |
| `handoff` | 使用者 | 把長對話壓成去識別化的臨時交接文件，換 session 繼續 |
| `teach` | 使用者 | 把目前目錄變成跨 session 的個人學習空間 |
| `writing-great-skills` | 使用者 | 撰寫或修訂自己的 skill，降低執行結果飄移 |
| `grilling` | 模型 | 一次問一題，查得到的事自己查，真正的決策交給使用者 |

## 不知道怎麼選時，先看任務形狀

有一個還沒談清楚的新功能，從 `grill-with-docs` 開始。需求已經定案，只差整理成正式文件，用 `to-spec`。規格很大，預計分幾個 session 做，接著用 `to-tickets`。眼前只有一個明確行為要實作，直接交給 `tdd` 就夠了。

如果是難解的錯誤，用 `diagnosing-bugs`，不要先叫代理憑感覺改程式。外部 issue 堆了一排才用 `triage`。自己剛用 `to-tickets` 建出的 tickets 已經是 agent-ready，不需要再 triage 一次。

大型計畫看不清路線時才用 `wayfinder`。它的成本比一般規格流程高很多。只是做一個兩天能完成的功能，硬套 wayfinder 反而會多出一堆管理工作。

仍然拿不定主意，可以輸入：

```text
/ask-matt

我有一個登入效能退化問題，只在正式環境偶爾發生。
我目前有 HAR、應用程式 log，還沒有穩定重現方式。
請告訴我應該從哪個 skill 開始，以及後續可能接哪一個。
```

## 第一週的實用用法

不要一口氣把 22 個都塞進日常流程。先挑一個正在做的小功能，跑完這條短路線：

```text
/grill-with-docs
→ /to-spec
→ /implement
```

`implement` 內部會在合適的位置使用 `tdd`，完成後再跑 `code-review`。第一次測試時，留意三件事：代理有沒有讀專案原本的標準、測試 seam 是否先取得你的同意、review 是否真的以固定的 diff 起點為準。

這套 skills 不會讓需求自動變正確，也不會取代你對產品和架構的判斷。它比較像一組防呆程序，把容易省略的討論、驗證和收尾變成固定動作。真正省下的時間，常常不是打字，而是少做一次方向錯誤的實作。

## 參考資料

- [mattpocock/skills 專案與安裝說明](https://github.com/mattpocock/skills)
- [上游 skills 目錄](https://github.com/mattpocock/skills/tree/main/skills)
- [Skills CLI 安裝頁](https://skills.sh/mattpocock/skills)
- [setup-matt-pocock-skills 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/setup-matt-pocock-skills/SKILL.md)
- [ask-matt 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/ask-matt/SKILL.md)
