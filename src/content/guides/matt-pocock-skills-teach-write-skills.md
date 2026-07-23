---
title: "把資料夾變成長期學習系統：Teach 與 Writing Great Skills"
description: "拆解 teach、writing-great-skills、grill-me、grilling 與 research，示範如何把一個資料夾變成跨 session 的個人課程與 Skill 實驗室。"
category: "learning"
tags: ["教學", "Skill 寫作", "學習系統", "grilling", "Agent Skills"]
difficulty: "中階"
timeEstimate: "13 分鐘"
featured: false
publishedAt: 2026-07-23
updatedAt: 2026-07-23
guideType: "workflow"
coverImage: "https://images.keyo.tw/skill-library/guides/matt-pocock-skills-teach-write-skills.webp"
coverImageAlt: "有人在有筆電、活頁夾與磨損索引卡的居家書桌前寫學習筆記"
learningGoals: ["建立可跨 session 延續的 teaching workspace", "用 retrieval、spacing 與 interleaving 設計短課程", "寫出較容易穩定觸發和執行的 Agent Skill"]
prerequisites: ["準備一個專門用於學習或 Skill 開發的空目錄", "有一個願意持續幾週的具體學習目標"]
relatedSkills: ["awesome-agent-skills-mattpocock-skills"]
---

`mattpocock/skills` 裡有 5 個 productivity skills。它們不負責實作功能，卻很適合拿來建立自己的學習和工作方法：

- `grill-me`
- `grilling`
- `handoff`
- `teach`
- `writing-great-skills`

其中 `teach` 最不像一般聊天教學。它會把目前目錄當成一個有狀態的學習空間，課程、參考資料、學習紀錄與個人偏好都留在檔案裡。換一個 session，課程仍然能接得上。

## 先用 Mission 避免學成一堆零散知識

在空目錄開啟代理：

```text
/teach

我想學 PostgreSQL 查詢效能調校。
```

如果目標太寬，skill 的第一件事不是生課綱，而是問你為什麼要學。答案會整理到 `MISSION.md`。

一個有用的 mission 可以是：

```text
我維護一個每月約 2 億筆事件的分析服務。
希望在六週內，能獨立讀懂 EXPLAIN ANALYZE，
找出慢查詢的主要成本，並提出可驗證的改善。
```

這個 mission 會影響所有後續選擇。教 ORM 查詢語法可能有用，但若它無法幫你讀 query plan，就不該搶走第一堂課。

Mission 可以改。不過修改前要先和使用者確認，並新增 learning record，記下為什麼方向變了。

## Teaching workspace 裡有哪些檔案

`teach` 使用這個結構：

```text
MISSION.md
RESOURCES.md
NOTES.md
reference/
learning-records/
lessons/
assets/
```

`RESOURCES.md` 保存高信任來源。技能明確要求：在資料還沒建立好之前，不要只靠模型記憶教課。程式主題優先使用官方文件、規格、source code 與作者的一手說明。

`lessons/0001-*.html` 是每次學習的主要單位。每堂課要短、範圍窄，能很快完成一個實際成果。HTML 應該易讀，也要連到其他 lesson 和 reference。

`reference/*.html` 是之後更常回看的速查資料，例如 query plan glossary、索引選擇流程和常用 SQL 範例。

`learning-records/*.md` 記錄不容易從測驗分數看出的學習變化，例如「原本把 rows estimate 誤認為實際 rows，現在能分辨估計和執行結果」。這些紀錄用來判斷下一堂課的近側發展區。

`NOTES.md` 保存教學偏好。你若說「不要一次給太多選項」「我比較能從失敗案例理解」，下一個 session 應該繼續遵守。

## 課程不是文章，要有回饋迴圈

`teach` 區分兩種看起來很像的熟練。

Fluency strength 是剛看完時答得出來。Storage strength 是隔幾天還能從記憶裡取回，並在不同情境使用。

為了建立後者，lesson 會使用：

- Retrieval practice：先回想，再看答案。
- Spacing：把練習分散到多個時間點。
- Interleaving：混合幾種相近技能，逼你判斷該用哪一個。

例如第一堂課可以給一份小型 `EXPLAIN ANALYZE`，請你指出最昂貴的 node。第二堂不要只換一份相同題型，而是混入 estimate 錯誤、I/O 受限和排序 spill，讓你先判斷問題屬於哪一類。

Quiz 的選項甚至要求盡量使用相同字數，避免答案因為比較長或排版不同而露餡。這種小規則很不起眼，卻比再多一頁理論更接近真實學習。

## Lesson 和 asset 要能重用

第一堂 HTML lesson 應該先建立共用 stylesheet。之後若需要 query plan viewer、quiz widget 或小型 simulator，放進 `assets/`，不要每堂課各寫一份。

新增 lesson 前先讀現有 assets。這個規則不是為了追求漂亮架構，而是讓十幾堂課看起來像同一門課，也能在修正互動元件時只改一個地方。

每堂課還要推薦一份 primary source，並提醒學習者可以向代理追問。代理能即時解釋卡住的地方，這是靜態教材沒有的回饋迴圈。

## `grill-me` 和 `grilling` 的差別

想把一般計畫問清楚，但目前沒有 codebase，可以輸入：

```text
/grill-me

我想在三個月內做完一門給前端工程師的 SQL 效能課。
```

`grill-me` 本身很短，只負責啟動 `grilling`。`grilling` 才是可重用的訪談迴圈。

它會一題一題問，並在每題提供建議答案。能從檔案、工具或外部資料找到的事，由代理自己查。課程對象、時間投入和成功標準這類決定，必須由你回答。沒有得到共同理解之前，它不會開始建課程。

在 codebase 裡則優先用 `grill-with-docs`，因為後者會同步維護 glossary 和 ADR。

## 寫 Skill 的目標不是固定輸出

`writing-great-skills` 把 Skill 的核心目標定義得很準：從隨機系統裡逼出流程的可預測性。

可預測不代表每次產生一模一樣的文字，而是代理每次都走相同程序，完成相同檢查，不會今天先測試、明天先改程式、後天忘了驗證。

寫 Skill 時先決定誰能呼叫它。

模型呼叫的 skill 需要一段對模型有用的 description，包含清楚而不重複的 trigger。這段 description 每個 turn 都可能進入 context，所以要短。

使用者呼叫的 skill 設定：

```yaml
disable-model-invocation: true
```

它不會自動觸發，也不能由其他 skill 呼叫。好處是零 context load，代價是人要記得它存在。使用者呼叫的 skills 太多時，可以寫一個 router，就像 `ask-matt`。

## 用資訊階梯決定內容放哪裡

一份 Skill 裡的內容可以放在三個位置：

1. In-skill step：執行時一定要照順序做的動作。
2. In-skill reference：執行期間隨時可能需要的定義和規則。
3. External reference：只有特定分支才會讀取的檔案。

每個 step 都要有可以檢查的 completion criterion。例如「列出所有修改的資料模型，逐一確認 migration」比「檢查 migration」可靠。

Progressive disclosure 不是把長內容隨便拆出去。判斷方式是看分支：所有路線都需要的規則留在 `SKILL.md`，只有 UI 分支需要的內容才放進 `UI.md`。指向外部檔案的句子要說清楚何時讀、讀來做什麼。

## 五個常見失敗

`writing-great-skills` 提供了很實用的診斷詞：

- Premature completion：代理還沒做完眼前步驟，就開始想下一步。
- Duplication：同一規則寫在多個地方，日後一定不同步。
- Sediment：舊規則只加不刪，慢慢堆成看不懂的層。
- Sprawl：每一行都可能有用，但整份 skill 已經大到難讀。
- No-op：寫了代理本來就會做的句子，花 tokens 卻沒改變行為。

還有一個常見問題是 negation。一直寫「不要偷懶、不要漏掉、不要先改程式」，會讓那些行為反而更顯眼。比較有效的寫法是直接描述目標行為，再把少數真正不能碰的事留作 hard guardrail。

例如：

```text
先建立一條已執行過、能對指定 bug 變紅的指令。
完成條件是同一指令在修正前失敗、修正後通過。
```

這比「不要一開始就猜原因」更容易穩定執行。

## 一個實際的 Skill 改寫流程

想改自己的 code review skill，可以這樣做：

```text
/writing-great-skills

請檢查 skills/review/SKILL.md。
找出 description 裡重複的 trigger、沒有 completion criterion 的 steps、
可以移到 external reference 的分支內容，以及沒有改變模型行為的 no-op。
先提出修改理由，再編輯檔案。
```

完成後，不要只讀文字覺得合理。拿三個真實任務測：

1. 應該自動觸發的 review。
2. 不該觸發的鄰近任務。
3. 會走少見分支的 edge case。

比較每次流程是否一致，哪一步仍會提早結束。Skill 的品質不在句子多專業，而在它能不能讓代理穩定做完該做的事。

## 參考資料

- [teach 原文](https://github.com/mattpocock/skills/blob/main/skills/productivity/teach/SKILL.md)
- [writing-great-skills 原文](https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-great-skills/SKILL.md)
- [grill-me 原文](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md)
- [grilling 原文](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md)
- [research 原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/research/SKILL.md)
