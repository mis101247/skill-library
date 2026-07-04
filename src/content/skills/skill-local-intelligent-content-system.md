---
title: "智慧內容與 X/Twitter 發布 Skill"
description: "智慧內容創作與 X/Twitter 發布流程系統，會依照使用者需求整理網頁擷取、文章改寫、配圖規劃與發布草稿。"
category: "content"
tags:
  - "skill-store"
  - "local-skill"
  - "content"
featured: true
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/intelligent-content-system/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/intelligent-content-system/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/intelligent-content-system/SKILL.md"
license: "CC-BY-4.0"
originalName: "intelligent-content-system"
originalDescription: "智慧內容創作與 X/Twitter 發布流程系統，整合內容擷取、配圖規劃、文章整理與發布草稿。"
activation: "當你需要把內容從素材整理到 X/Twitter 發布草稿時使用。"
useCases:
  - "把網頁文章整理成 X/Twitter 推文串或長文草稿。"
  - "把原創文章改寫成適合社群發布的版本。"
  - "需要一套會自動判斷任務情境的內容整理工作流。"
workflow:
  - "判斷使用者要做的是擷取、改寫、配圖，還是發布前整理。"
  - "收集 URL、Markdown 檔案、主題、目標讀者與發布格式。"
  - "依序整理內容、補上配圖建議，再輸出 X/Twitter 版本。"
  - "發布前檢查標題、字數、連結、圖片與標籤。"
files:
  - "skills/intelligent-content-system/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版；本頁已依需求保留 X/Twitter 發布流程，移除其他發布平台描述。"
skillBody: |-
  ---
  name: intelligent-content-system
  description: 智慧內容創作與 X/Twitter 發布流程系統，會自動判斷任務情境，編排內容擷取、文章整理、配圖規劃與 X/Twitter 草稿輸出。
  dependency:
    skills:
      - baoyu-url-to-markdown
      - article-illustrator
      - content-creation-publisher
    python:
      - requests>=2.28.0
      - pyyaml>=6.0
    system:
      - Node.js 環境
      - Chrome 瀏覽器
  ---

  # 智慧內容與 X/Twitter 發布系統

  ## 任務目標

  這個 Skill 用來把零散素材整理成可發布到 X/Twitter 的內容。它會先判斷使用者需求，再選擇合適流程：擷取網頁、整理 Markdown、規劃圖片、改寫摘要，最後產出推文、推文串或 X Article 草稿。

  ## 支援情境

  | 情境 | 使用者可能會說 | 輸出 |
  | --- | --- | --- |
  | 網頁轉 X/Twitter | 「把這篇文章整理成推文串」 | 推文串草稿、重點摘要、配圖建議 |
  | 長文整理 | 「把 article.md 改成 X Article」 | 長文草稿、段落結構、標題建議 |
  | 配圖規劃 | 「幫這篇文章安排圖片」 | 圖片位置、風格、提示詞 |
  | 發布前檢查 | 「幫我檢查這篇能不能發」 | 字數、連結、圖片、標籤檢查清單 |

  ## 標準流程

  ```text
  1. 使用者描述任務
     ↓
  2. 系統判斷任務情境
     ↓
  3. 收集 URL、檔案、主題或目標讀者
     ↓
  4. 整理內容與配圖建議
     ↓
  5. 輸出 X/Twitter 發布草稿
  ```

  ## 參數收集

  - **URL**：用於擷取網頁文章。
  - **檔案路徑**：用於整理既有 Markdown。
  - **主題**：用於產出社群角度與標題。
  - **目標讀者**：用於調整語氣與深度。
  - **發布形式**：普通推文、推文串或 X Article。

  ## 使用範例

  ### 範例 1：網頁整理成推文串

  ```text
  使用者：請把這篇文章整理成 X/Twitter 推文串。
  URL: https://example.com/article

  執行流程：
  1. 擷取網頁內容
  2. 整理核心觀點
  3. 產出 5 到 8 則推文
  4. 補上開頭 hook、結尾 CTA 與標籤
  5. 提供發布前檢查清單
  ```

  ### 範例 2：文章發布前檢查

  ```text
  使用者：幫我檢查這篇 X Article 草稿。

  執行流程：
  1. 檢查標題是否清楚
  2. 檢查段落是否好讀
  3. 檢查連結與引用
  4. 檢查圖片是否需要補上說明
  5. 輸出修改建議
  ```

  ## 注意事項

  - 發布前建議人工審稿，避免事實錯誤或引用不清。
  - 需要登入 X/Twitter 時，請使用者自行確認帳號狀態。
  - 若原文過長，先整理摘要，再拆成推文串或長文。
  - 若需要圖片，先產出圖片規劃，再交給影像生成工具。

---

## 這個 Skill 在做什麼

這個 Skill 會把素材整理成 X/Twitter 發布草稿，包含擷取、改寫、配圖規劃與發布前檢查。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先確認目標格式是普通推文、推文串，還是 X Article，並提供要整理的 URL 或 Markdown 內容。
