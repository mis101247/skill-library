---
title: "Obsidian Skill Integrated Skill"
description: "由 Obsidian CEO Steph Ango (kepano) 親自開源的官方技能集，為 AI Agent 提供專業的 Obsidian 操作能力。"
category: "agent"
tags:
  - "skill-store"
  - "local-skill"
  - "agent"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/obsidian-skills-integrated/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/obsidian-skills-integrated/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/obsidian-skills-integrated/SKILL.md"
license: "CC-BY-4.0"
originalName: "obsidian-skills-integrated"
originalDescription: "由 Obsidian CEO Steph Ango (kepano) 親自開源的官方技能集，為 AI Agent 提供專業的 Obsidian 操作能力。"
activation: "當你需要 Obsidian Skill Integrated 的工作流程時使用。"
useCases:
  - "需要處理「由 Obsidian CEO Steph Ango (kepano) 親自開源的官方技能集，為 AI Agent 提供專業的 Obsidian 操作能力」這類任務。"
  - "想直接閱讀或複製 obsidian-skills-integrated 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/obsidian-skills-integrated/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  # Obsidian Skills - 官方知識管理技能集
  
  ## 簡介
  
  由 Obsidian CEO Steph Ango (kepano) 親自開源的官方技能集，為 AI Agent 提供專業的 Obsidian 操作能力。
  
  **專案地址**: https://github.com/kepano/obsidian-skills  
  **GitHub Star**: 9.4k+  
  **開源協議**: MIT License  
  **技術規範**: 遵循 [Agent Skills specification](https://agentskills.io/specification)
  
  ## 核心價值
  
  ✅ **官方背書** - Obsidian CEO 親自開發，品質和相容性有保障  
  ✅ **填補空白** - 為本地技能庫增加專業的知識管理能力  
  ✅ **標準規範** - 遵循 Agent Skills 規範，易於整合和維護  
  ✅ **協同增強** - 與現有技能形成完整工作流閉環  
  
  ## 包含技能
  
  ### 1. obsidian-markdown
  **功能**: 處理 Obsidian 專屬 Markdown 語法
  
  **核心能力**:
  - ✅ 雙向連結 (Wikilinks): `[[筆記名稱]]`
  - ✅ 內容嵌入 (Embed): `![[檔名]]`
  - ✅ 標註塊 (Callouts): `> [!INFO]`
  - ✅ 前置後設資料 (Properties/Frontmatter): YAML 格式
  - ✅ 標籤系統: `#標籤名`
  - ✅ 數學公式: LaTeX 語法
  - ✅ 圖表支援: Mermaid 等
  
  **解決痛點**: 通用 AI 模型常破壞 Obsidian 專屬語法，導致雙鏈失效、Callout 格式錯亂、Frontmatter 被誤刪。
  
  ### 2. json-canvas
  **功能**: 建立和編輯 Obsidian Canvas 畫布檔案
  
  **核心能力**:
  - ✅ 多種節點型別: 文字/檔案/連結/組節點
  - ✅ 連線邊 (Edges): 建立節點間關係
  - ✅ 精確定位: x/y 座標、z-index 層級
  - ✅ 顏色標識: 十六進位制顏色支援
  - ✅ 格式驗證: 嚴格的 JSON 結構校驗
  
  **應用場景**: 思維導圖、知識圖譜、流程圖、專案看板。
  
  ### 3. obsidian-bases
  **功能**: 操作 Obsidian 1.9+ 原生資料庫
  
  **核心能力**:
  - ✅ 檢視管理: 建立、編輯多種檢視型別
  - ✅ 過濾器: 複雜條件篩選
  - ✅ 公式系統: 正確的函式呼叫語法
  - ✅ 彙總項: 資料統計與聚合
  
  **解決痛點**: AI 生成的資料庫公式"看起來對卻跑不起來"，過濾器語法錯誤導致檢視失效。
  
  ## 快速使用
  
  ### 範例 1: 建立筆記
  ```
  請用 obsidian-markdown 建立一篇關於"人工智慧發展史"的筆記，包含：
  - 雙鏈引用相關概念
  - 使用 INFO Callout 標註重點
  - 新增 tags 和 date 後設資料
  ```
  
  ### 範例 2: 生成思維導圖
  ```
  請用 json-canvas 生成《三國演義》人物關係圖，包含：
  - 主要人物節點（劉備、關羽、張飛、曹操、孫權等）
  - 關係連線線（結義、對抗、聯盟）
  - 按勢力分組並用顏色區分
  ```
  
  ### 範例 3: 建立資料庫
  ```
  請用 obsidian-bases 建立一個讀書清單資料庫，包含：
  - 欄位：書名、作者、評分、狀態、閱讀日期
  - 檢視：按評分排序
  - 過濾器：僅顯示已讀書籍
  ```
  
  ## 版本要求
  
  - **Obsidian 1.0+**: obsidian-markdown, json-canvas
  - **Obsidian 1.9+**: obsidian-bases（資料庫功能）
  
  **建議**: 升級到最新版 Obsidian 以獲得完整功能支援。
  
  ## 與其他技能的協同
  
  ### 工作流 1: 內容創作全流程
  ```
  obsidian-markdown (建立筆記)
      ↓
  article-illustrator (自動配圖)
      ↓
  content-creation-publisher (整理成 X/Twitter 發布素材)
  ```
  
  **實施要點**:
  - article-illustrator 輸出圖片時使用 Obsidian 語法: `![[image.png]]`
  - 發布前自動轉換 Obsidian 專屬語法為目標平台格式
  
  ### 工作流 2: 知識視覺化
  ```
  obsidian-markdown (結構化筆記)
      ↓
  json-canvas (知識圖譜)
      ↓
  ppt-generator (簡報)
  ```
  
  **實施要點**:
  - json-canvas 快速生成知識網路
  - ppt-generator 支援讀取 Canvas 作為輸入源
  
  ### 工作流 3: 專案管理
  ```
  obsidian-bases (專案資料庫)
      ↓
  json-canvas (專案看板)
      ↓
  intelligent-content-system (報告生成)
  ```
  
  **實施要點**:
  - obsidian-bases 管理任務、進度、資源
  - json-canvas 視覺化專案狀態
  - intelligent-content-system 自動生成專案報告
  
  ## 潛在衝突與解決方案
  
  ### 衝突 1: baoyu-format-markdown 格式化衝突 ⚠️
  
  **問題**: baoyu-format-markdown 可能破壞 Obsidian 專屬語法（雙鏈/Callout/Frontmatter）
  
  **解決方案**:
  - **Obsidian 庫內**: 優先使用 `obsidian-markdown`
  - **外部文件**: 使用 `baoyu-format-markdown`
  - **判斷依據**: 檢測檔案路徑是否在 Obsidian vault 內
  
  ### 衝突 2: ai-drawio 功能重疊 🔄
  
  **問題**: json-canvas 與 ai-drawio 都能生成視覺化圖表
  
  **解決方案**: 保留兩者，按場景劃分
  - **知識圖譜/思維導圖** → `json-canvas` (Obsidian 原生，無縫整合)
  - **複雜技術流程圖** → `ai-drawio` (專業工具，功能更強)
  
  ## 使用建議
  
  ### 最佳實踐
  1. ✅ 在 Obsidian vault 內工作時，始終使用 obsidian-skills
  2. ✅ 建立筆記前明確格式要求（標籤、Callout 型別等）
  3. ✅ 批次操作前先做單檔案測試，避免格式問題
  4. ✅ 定期更新技能，跟隨 Obsidian 版本保持適配
  
  ### 注意事項
  - ⚠️ obsidian-bases 需要 Obsidian 1.9+，舊版本使用者無法使用
  - ⚠️ 生成的 .canvas 檔案需在 Obsidian 中開啟檢視
  - ⚠️ 避免在非 Obsidian 環境使用這些技能（價值有限）
  
  ## 後續維護
  
  ### 版本同步
  ```bash
  cd D:\tool\skills\obsidian-skills-integrated
  # 下載最新版本
  Invoke-WebRequest -Uri "https://github.com/kepano/obsidian-skills/archive/refs/heads/main.zip" -OutFile "update.zip"
  # 解壓並更新
  Expand-Archive -Path "update.zip" -DestinationPath "temp" -Force
  # 手動對比更新內容
  ```
  
  **建議頻率**: 每月檢查一次更新
  
  ### 關注渠道
  - [GitHub Releases](https://github.com/kepano/obsidian-skills/releases)
  - [Obsidian 官方部落格](https://obsidian.md/blog)
  - [Agent Skills 規範更新](https://agentskills.io/specification)
  
  ## 參考資源
  
  ### 官方文件
  - [Obsidian 官方幫助](https://help.obsidian.md/)
  - [Obsidian Flavored Markdown](https://help.obsidian.md/obsidian-flavored-markdown)
  - [Obsidian Bases 語法](https://help.obsidian.md/bases/syntax)
  - [JSON Canvas 規範](https://jsoncanvas.org/)
  
  ### 社群資源
  - [GitHub 倉庫](https://github.com/kepano/obsidian-skills)
  - [Agent Skills 規範](https://agentskills.io/specification)
  - [Obsidian 論壇](https://forum.obsidian.md/)
  
  ## 技能對比
  
  | 技能 | 功能領域 | 輸出格式 | Obsidian 整合 | 使用優先順序 |
  |------|---------|---------|--------------|-----------|
  | obsidian-markdown | Markdown 處理 | .md | 原生支援 | ⭐⭐⭐⭐⭐ |
  | json-canvas | 視覺化 | .canvas | 原生支援 | ⭐⭐⭐⭐⭐ |
  | obsidian-bases | 資料庫 | .base | 原生支援 | ⭐⭐⭐⭐ |
  | baoyu-format-markdown | Markdown 格式化 | .md | 潛在衝突 | ⭐⭐⭐ |
  | ai-drawio | 流程圖 | .drawio | 需匯出 | ⭐⭐⭐ |
  | article-illustrator | 配圖 | 圖片 | 協同增強 | ⭐⭐⭐⭐ |
  | ppt-generator | 簡報 | .pptx | 協同增強 | ⭐⭐⭐ |
  
  ## 常見問題
  
  ### Q1: 與現有技能衝突怎麼辦？
  **A**: 按場景隔離使用，Obsidian 庫內優先使用 obsidian-skills，外部文件使用其他技能。
  
  ### Q2: 不用 Obsidian 有必要整合嗎？
  **A**: 不建議。這些技能專為 Obsidian 設計，脫離 Obsidian 價值有限。
  
  ### Q3: 如何更新到最新版本？
  **A**: 每月從 GitHub 下載最新版本，手動對比更新內容後替換檔案。
  
  ### Q4: 能否只整合部分技能？
  **A**: 可以。建議至少整合 obsidian-markdown + json-canvas，obsidian-bases 可選（需 Obsidian 1.9+）。
  
  ### Q5: 生成的檔案在哪裡檢視？
  **A**: 
  - `.md` 檔案：任何文字編輯器或 Obsidian
  - `.canvas` 檔案：必須在 Obsidian 中開啟
  - `.base` 檔案：必須在 Obsidian 1.9+ 中開啟
  
  ## 總結
  
  ### 核心優勢
  ✅ **官方權威** - Obsidian CEO 親自開發，9.4k+ Star  
  ✅ **功能完整** - 覆蓋筆記、視覺化、資料庫三大核心場景  
  ✅ **標準規範** - 遵循 Agent Skills 規範，易於維護  
  ✅ **協同增強** - 與現有技能形成完整工作流  
  
  ### 適用人群
  - ✅ Obsidian 深度使用者
  - ✅ 知識管理愛好者
  - ✅ 內容創作者
  - ✅ 專案管理人員
  
  ### 預期收益
  - 📝 筆記管理效率提升 **10 倍**
  - 🎨 知識視覺化時間縮短 **90%**
  - 🔗 內容創作工作流完整閉環
  - 🚀 技能庫整體能力質的飛躍
  
  ---
  
  **整合完成時間**: 2026-02-09  
  **技能版本**: 基於 GitHub main 分支  
  **下次更新建議**: 2026-03-09 (一個月後)  
  **維護狀態**: ✅ 已整合，定期更新
  
---

## 這個 Skill 在做什麼

由 Obsidian CEO Steph Ango (kepano) 親自開源的官方技能集，為 AI Agent 提供專業的 Obsidian 操作能力。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
