---
title: "內容創作與 X/Twitter 發布 Skill"
description: "內容創作與發布全流程技能，整合網頁擷取、Markdown 格式化、智慧配圖與 X/Twitter 發布，適合把長文整理成可分享的社群內容。"
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
sourcePath: "skills/content-creation-publisher/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/content-creation-publisher/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/content-creation-publisher/SKILL.md"
license: "CC-BY-4.0"
originalName: "content-creation-publisher"
originalDescription: "內容創作與發布全流程技能，整合網頁擷取、Markdown 格式化、智慧配圖與 X/Twitter 發布。"
activation: "當你需要把文章整理成可發布到 X/Twitter 的內容工作流程時使用。"
useCases:
  - "把網頁文章擷取成 Markdown，再整理成適合 X/Twitter 的短文或長文。"
  - "替文章補上摘要、配圖規劃與社群發布版本。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認文章來源、目標讀者與 X/Twitter 發布形式。"
  - "擷取或整理原文，轉成乾淨的 Markdown。"
  - "調整標題、摘要、段落與圖片配置。"
  - "輸出可貼到 X/Twitter 的推文、長文或發布素材。"
files:
  - "skills/content-creation-publisher/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版；本頁已依需求保留 X/Twitter 發布流程，移除其他發布平台描述。"
skillBody: |-
  ---
  name: content-creation-publisher
  description: 內容創作與 X/Twitter 發布全流程技能，整合網頁擷取、Markdown 格式化、智慧配圖與 X/Twitter 發布素材整理。
  dependency:
    python:
      - requests>=2.28.0
      - pillow>=10.0.0
    system:
      - Node.js 環境
      - Chrome 瀏覽器
  ---

  # 內容創作與 X/Twitter 發布全流程

  ## 任務目標

  這個 Skill 用來把可讀內容整理成可發布、可分享、可追蹤的 X/Twitter 內容。適合處理文章擷取、Markdown 排版、摘要整理、圖片規劃與發布前檢查。

  ## 核心能力

  1. **內容擷取**
     - 將網頁、文章或研究資料整理成乾淨 Markdown。
     - 保留標題、段落、清單與重點結構。

  2. **格式最佳化**
     - 補上標題、日期、標籤與摘要。
     - 修正 Markdown 結構、段落層次與中英混排。
     - 讓長文更適合後續拆成推文串或 X Articles。

  3. **智慧配圖**
     - 找出適合補圖的位置。
     - 產出插圖方向、畫面描述與可用於影像生成的提示詞。

  4. **X/Twitter 發布整理**
     - 產出普通推文、推文串或 X Articles 草稿。
     - 自動提醒字數、圖片、標籤與連結檢查。
     - 支援發布前人工審稿。

  ## 建議工作流

  ### 網頁文章整理成 X/Twitter 內容

  ```text
  1. 提供網頁 URL 或 Markdown 檔案
     ↓
  2. 擷取並整理文章內容
     ↓
  3. 格式化 Markdown
     ↓
  4. 產出摘要、推文串與配圖建議
     ↓
  5. 整理成 X/Twitter 可發布版本
  ```

  ### 原創文章發布前整理

  ```text
  1. 提供原創 Markdown 文章
     ↓
  2. 調整標題、摘要與段落
     ↓
  3. 產出 X/Twitter 推文版與長文版
     ↓
  4. 檢查字數、連結、圖片與標籤
  ```

  ## 使用範例

  ### 範例 1：把文章整理成推文串

  ```text
  使用者：請把這篇文章整理成 X/Twitter 推文串。

  執行流程：
  1. 擷取文章內容
  2. 整理核心觀點
  3. 拆成 5 到 8 則推文
  4. 補上開頭 hook、結尾 CTA 與標籤
  ```

  ### 範例 2：把 Markdown 文章整理成 X Article

  ```text
  使用者：請把 article.md 整理成 X Article 草稿。

  執行流程：
  1. 檢查標題與摘要
  2. 重新整理段落
  3. 補上圖片建議
  4. 輸出可貼上的發布版本
  ```

  ## 發布前檢查

  - 內容是否符合目標讀者期待。
  - 標題或第一則推文是否能快速說明價值。
  - 連結、引用與圖片來源是否正確。
  - 字數是否適合 X/Twitter 的發布格式。
  - 是否需要人工審稿後再發布。

---

## 這個 Skill 在做什麼

這個 Skill 把文章整理成 X/Twitter 可發布素材：包含內容擷取、Markdown 整理、摘要改寫、配圖建議、推文串與長文草稿。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先確認你要產出的是普通推文、推文串，還是 X Article，再把文章內容交給 Agent 整理。
