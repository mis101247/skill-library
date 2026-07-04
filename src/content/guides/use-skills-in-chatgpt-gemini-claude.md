---
title: "如何在 ChatGPT / Gemini / Claude 使用 Skill"
description: "用同一套三步驟，把本站的 SKILL.md 放進 ChatGPT、Gemini、Claude，先用小任務驗證，再整理成自己的日常工作流程。"
category: "how-to"
tags: ["入門", "chatgpt", "gemini", "claude", "skill"]
difficulty: "入門"
timeEstimate: "8 分鐘"
featured: true
publishedAt: 2026-07-02
updatedAt: 2026-07-02
guideType: "how-to"
learningGoals: ["知道 SKILL.md 是三家助手共通可用的核心文字", "會把 Skill 放進 ChatGPT、Gemini、Claude 的合適位置", "知道 catalog 類 Skill 與需要工具/API key 的 Skill 要先檢查來源"]
prerequisites: ["已找到一個想試的 Skill", "知道自己平常使用的是 ChatGPT、Gemini 或 Claude 哪一個助手"]
relatedSkills: ["skill-local-bedtime-story", "skill-local-pop-up-book-illustration", "skill-local-paper-analysis-assistant"]
---

先記住一個共通觀念：一個 Skill 的本體就是它的 `SKILL.md` 文字。不同 AI 助手的產品名稱不一樣，有的叫 Instructions，有的叫 Project，有的叫 Gem，有的直接支援 Skills；但最基本的用法都是讓 AI 先讀懂這份 `SKILL.md`。

本站每個「本地 / 完整」Skill 頁都有「複製 Skill 內容」按鈕。按下去後，你拿到的就是可以貼進 AI 助手的 `SKILL.md`。如果頁面標示為 catalog 或技能商店索引，本站通常只有來源摘要，沒有完整內容；這類請先點來源連結，取得原始 `SKILL.md` 後再使用。

## 三步驟通用流程

1. 在本站找到想用的 Skill，複製它的 `SKILL.md`。如果是 catalog 類 Skill，就開啟來源連結取得原文。
2. 把 `SKILL.md` 貼進你慣用助手的「自訂指令 / GPT / Gem / Project」欄位；如果只是先試用，也可以直接貼在對話開頭。
3. 給它一個小型真實任務，檢查輸出是否符合預期。穩定後，再把它放進日常工作流程。

## Claude：最接近原生 Skill 的使用方式

Claude 把 Skill 當成一個資料夾使用：資料夾裡有必要的 `SKILL.md`，也可以搭配參考檔、範例、腳本或其他附檔。支援 Skills 的 Claude 環境會讀取 `SKILL.md`，並在相關任務中自動使用它。claude.ai 目前（付費方案）可以在「設定 → Features」把 Skill 打包成 zip 直接上傳；在 Claude Code 裡，則用 plugin 或 `~/.claude/skills/`、專案的 `.claude/skills/` 這類結構管理可重複使用的技能。

如果你手上的 Claude 介面沒有上傳入口，也可以退一步：開一個新對話或 Project，把 `SKILL.md` 內容貼到 Project 自訂指令或對話開頭，然後再貼你的實際任務。

建議順序：

1. 有原生 Skill 上傳／啟用入口（claude.ai 設定或 Claude Code skills）時，優先用原生 Skill 資料夾。
2. 長期專案使用 Project 自訂指令，讓同一套規則留在同一個工作區。
3. 臨時測試時，直接把 `SKILL.md` 貼在對話最前面。

## ChatGPT：用 GPT、Projects 或自訂指令放進 Skill

補充一個 2026 年的變化：OpenAI 已經採用和 Claude 相同的 Agent Skills（`SKILL.md`）開放標準。原生 Skills 目前以 beta 形式出現在 ChatGPT 商業版、企業版、教育版等方案，以及 Codex CLI 和 API；一般消費者的 Free / Plus / Pro 還沒有原生 Skills 入口。所以如果你用的是一般 ChatGPT 帳號，實務上還是把 `SKILL.md` 內容放到下面幾個位置：

- 自訂 GPT：把 `SKILL.md` 貼進 Instructions。若 Skill 需要參考檔、範例、模板或資料，放到 Knowledge。這是最適合長期重複使用、也想分享給別人的做法。
- Projects：把 Skill 的規則放進 Project instructions，把相關檔案放進同一個 Project。適合研究、寫作、履歷、整理資料等會持續進行的任務。
- 自訂指令：把短版 Skill 或你最常用的行為規則放進 ChatGPT 的 Custom Instructions。這個位置會影響很多對話，比較適合通用偏好，不適合塞太多任務專屬細節。
- 對話開頭：最簡單。先貼 `SKILL.md`，接著說「請依照上面的 Skill 幫我處理下面任務」，再貼你的輸入。

如果一份 Skill 很長，優先選自訂 GPT 或 Project。純貼進自訂指令可能受字數限制，也容易影響不相關的聊天。

## Gemini：用 Gem 或 AI Studio system instructions

Gemini 的對應做法是 Gem。建立一個 Gem，將 `SKILL.md` 的內容當作這個 Gem 的指令，之後就能用同一個 Gem 重複處理類似任務。若 Skill 有參考檔，可以放進 Gem 的 Knowledge 或在對話中上傳。

如果你用的是 Google AI Studio 或 Gemini API，則可以把 `SKILL.md` 放進 system instructions / `system_instruction`，把實際任務放在 user input。這比較適合開發者或需要測試模型行為的人。

最簡單的方式仍然是直接貼在 Gemini 對話開頭。先貼 `SKILL.md`，再貼你的任務，最後請 Gemini 確認它會依照這份 Skill 的流程執行。

## 怎麼知道有沒有成功套用

不要一開始就丟很大的任務。先用 5 到 10 分鐘跑一個小測試：

- 請它先用一句話重述這個 Skill 的工作流程。
- 給一個簡短輸入，確認輸出格式、語氣、步驟是否符合 `SKILL.md`。
- 如果 Skill 要先問問題，確認它真的有先問，而不是直接產出。
- 如果 Skill 需要工具、API key 或檔案，確認你使用的平台真的能提供那些東西。

如果輸出不穩，先補一句：「請嚴格依照上面的 `SKILL.md`，不要省略工作流程。」如果還是不穩，表示這份 Skill 可能需要改寫得更清楚，或它本來就依賴目前平台沒有的工具。

## 誠實提醒

本站多數內容是 catalog 上游索引，沒有完整 `SKILL.md`。那類頁面可以幫你發現有哪些 Skill，但使用前請先點來源連結取得原文。

有些 Skill 不是純文字指令就能完整運作。它可能依賴特定工具、API key、Python 套件、檔案結構或外部服務。把 `SKILL.md` 貼進 ChatGPT、Gemini、Claude 時，AI 會理解流程，但不一定能直接執行那些工具。遇到這種情況，先把它當成「工作指導書」使用，再依平台能力補上檔案、工具或人工操作。

## 建議從這幾種 Skill 開始

第一次使用，建議先挑不太依賴外部工具的 Skill，例如睡前故事、立體書插畫、履歷客製或詩詞配圖配樂。等你熟悉「複製 `SKILL.md` → 貼進助手 → 小任務驗證」的節奏後，再試論文分析、股票分析這類可能需要檔案、套件或即時資料的 Skill。
