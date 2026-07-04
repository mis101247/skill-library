---
title: "網站設計分析 Skill"
description: "分析網頁截圖，提取設計系統（Design System）並產生結構化資料和可用的 AI Coding Prompt。適用於 UI/UX 設計師和前端工程師需要從現有網頁設計中提取設計規範、配色方案、排版系統和元件風格的情境。"
category: "creative"
tags:
  - "skill-store"
  - "local-skill"
  - "creative"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/web-design-analyzer/web-design-analyzer/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/web-design-analyzer/web-design-analyzer/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/web-design-analyzer/web-design-analyzer/SKILL.md"
license: "CC-BY-4.0"
originalName: "web-design-analyzer"
originalDescription: "分析網頁截圖，提取設計系統（Design System）並產生結構化資料和可用的 AI Coding Prompt。適用於 UI/UX 設計師和前端工程師需要從現有網頁設計中提取設計規範、配色方案、排版系統和元件風格的情境。"
activation: "當你需要 網站設計分析 的工作流程時使用。"
useCases:
  - "需要處理「分析網頁截圖，提取設計系統（Design System）並產生結構化資料和可用的 AI Coding Prompt。適用於 UI/UX 設計師和前端工程師需要從現有網頁設計中提取設計規範、配色方案、排版系統和元件風格的情境」這類任務。"
  - "想直接閱讀或複製 web-design-analyzer 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/web-design-analyzer/web-design-analyzer/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: web-design-analyzer
  description: 分析網頁截圖，提取設計系統（Design System）並生成結構化資料和可用的 AI Coding Prompt。適用於 UI/UX 設計師和前端工程師需要從現有網頁設計中提取設計規範、配色方案、排版系統和元件風格的場景。
  dependency:
    python:
      - Pillow>=10.0.0
    system: []
  ---
  
  # Web Design Analyzer
  
  ## 任務目標
  - 本 Skill 用於：從網頁截圖中自動提取設計系統（Design System），包括色彩、排版、元件風格等核心要素
  - 能力包含：
    - 自動識別網頁視覺風格（Vibe & Style）
    - 提取精確的色彩系統（Hex Code + Tailwind 類名）
    - 分析排版系統（字型型別、字重、行高）
    - 識別元件特徵（圓角、陰影、邊框）
    - 生成結構化 JSON 資料和可直接使用的 Coding Prompt
    - 匯出為路演影片品牌風格配置（與 ppt-roadshow-generator 協同）
  - 觸發條件：使用者上傳網頁截圖並要求分析其設計，或需要將網頁設計風格應用於路演影片
  
  ## 前置準備
  - 依賴說明：scripts 腳本所需的依賴包及版本
    ```
    Pillow>=10.0.0
    ```
  - 非標準檔案/資料夾準備：無
  
  ## 操作步驟
  - 標準流程：
    1. **接收圖片**
       - 使用者上傳網頁截圖（支援 PNG、JPG、JPEG 等常見格式）
       - 智慧體確認圖片檔案路徑
  
    2. **呼叫分析腳本**
       - 智慧體呼叫 `scripts/analyze_design.py --image <圖片檔案路徑>` 執行分析
       - 腳本將自動呼叫 OpenAI GPT-4 Vision API 處理圖片
       - 腳本回傳結構化的分析結果
  
    3. **展示結果**
       - 智慧體展示 JSON 格式的設計系統資料
       - 智慧體展示生成的 Coding Prompt
       - 智慧體提供進一步操作建議（如：使用生成的 Prompt 建立 Landing Page）
  
  - 可選分支：
    - 當使用者希望使用 Gemini API：提示當前版本僅支援 OpenAI，未來可能擴充套件
    - 當 API 呼叫失敗：提供錯誤資訊和可能的解決方案（如檢查 API Key、圖片格式等）
  
  ## 資源索引
  - 必要腳本：
    - 見 [scripts/analyze_design.py](scripts/analyze_design.py)（用途與參數：接收圖片路徑，呼叫 OpenAI Vision API，回傳設計系統分析結果）
    - 見 [scripts/convert_to_roadshow_style.py](scripts/convert_to_roadshow_style.py)（用途與參數：將設計系統轉換為路演影片品牌風格，輸入 `--input` 指定 JSON 路徑，`--output` 指定輸出路徑）
  - 領域參考：
    - 見 [references/api-spec.md](references/api-spec.md)（何時讀取：需要了解 API 呼叫細節或除錯時）
    - 見 [references/roadshow-export-guide.md](references/roadshow-export-guide.md)（何時讀取：需要將設計系統匯出為路演影片風格時）
  - 輸出資產：無
  
  ## 注意事項
  - 僅在需要時讀取參考，保持上下文簡潔。
  - 確保使用者上傳的圖片清晰度足夠，以便準確提取設計細節。
  - 腳本會自動處理圖片編碼和 API 呼叫，無需手動介入。
  - 充分利用智慧體的語言理解和展示能力，將 API 回傳的結構化資料以友好的方式呈現給使用者。
  
  ## 使用範例
  
  ### 範例 1：分析網頁截圖
  - **功能說明**：上傳一張網頁截圖，提取完整的設計系統
  - **執行方式**：混合（使用者上傳 → 腳本分析 → 智慧體展示）
  - **關鍵參數**：圖片檔案路徑
  - **簡單範例**：
    ```bash
    # 使用者：請分析這張網頁截圖
    # 智慧體呼叫腳本
    python scripts/analyze_design.py --image ./uploads/landing-page.png
    ```
  
  ### 範例 2：生成 Coding Prompt 後建立元件
  - **功能說明**：先分析設計，然後使用生成的 Prompt 建立類似的 Landing Page
  - **執行方式**：混合（腳本分析 → 智慧體生成程式碼）
  - **關鍵要點**：確保生成的 Coding Prompt 準確反映設計風格
  - **簡單範例**：
    ```bash
    # 使用者：分析這個網頁，然後用提取的設計規範建立一個 Hero Section
    # 智慧體：
    # 1. 呼叫腳本分析圖片
    # 2. 展示結果
    # 3. 使用生成的 Coding Prompt 指導程式碼生成
    ```
  
  ### 範例 3：匯出為路演影片風格
  - **功能說明**：將網頁設計轉換為路演影片可用的品牌風格配置
  - **執行方式**：混合（腳本分析 → 轉換腳本 → 匯出配置）
  - **關鍵參數**：設計系統 JSON 路徑
  - **簡單範例**：
    ```bash
    # 使用者：分析這個網頁，然後匯出為路演影片風格
    # 智慧體：
    # 1. 呼叫 analyze_design.py 分析圖片，生成 design_system.json
    # 2. 呼叫 convert_to_roadshow_style.py 轉換，生成 brand_style.json
    # 3. 提示使用者可以將 brand_style.json 用於路演影片生成
    ```
    # 1. 呼叫腳本分析圖片
    # 2. 展示結果
    # 3. 使用生成的 Coding Prompt 指導程式碼生成
    ```
  
---

## 這個 Skill 在做什麼

分析網頁截圖，提取設計系統（Design System）並產生結構化資料和可用的 AI Coding Prompt。適用於 UI/UX 設計師和前端工程師需要從現有網頁設計中提取設計規範、配色方案、排版系統和元件風格的情境。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
