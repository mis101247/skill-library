---
title: "PPTX 產生 Skill"
description: "將 JSON 格式的 PPT 內容轉換為標準的 .pptx 檔案。使用 python-pptx 庫，支援多種佈局、圖表、表格和樣式。與 ppt-generator Skill 完全協同，可作為獨立使用或與其他 PPT Skill 配合。"
category: "presentation"
tags:
  - "skill-store"
  - "local-skill"
  - "presentation"
featured: false
entryType: "local"
publishedAt: 2026-07-01
updatedAt: 2026-07-01
sourceRepo: "skill"
sourceRepoUrl: "https://github.com/anbeime/skill"
sourcePath: "skills/pptx-generator/pptx-generator/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/pptx-generator/pptx-generator/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/pptx-generator/pptx-generator/SKILL.md"
license: "CC-BY-4.0"
originalName: "pptx-generator"
originalDescription: "將 JSON 格式的 PPT 內容轉換為標準的 .pptx 檔案。使用 python-pptx 庫，支援多種佈局、圖表、表格和樣式。與 ppt-generator Skill 完全協同，可作為獨立使用或與其他 PPT Skill 配合。"
activation: "當你需要 PPTX 產生 的工作流程時使用。"
useCases:
  - "需要處理「將 JSON 格式的 PPT 內容轉換為標準的 .pptx 檔案。使用 python-pptx 庫，支援多種佈局、圖表、表格和樣式。與 ppt-generator Skill 完全協同，可作為獨立使用或與其他 PPT Skill 配合」這類任務。"
  - "想直接閱讀或複製 pptx-generator 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/pptx-generator/pptx-generator/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: pptx-generator
  description: 將 JSON 格式的 PPT 內容轉換為標準的 .pptx 檔案。使用 python-pptx 庫，支援多種佈局、圖表、表格和樣式。與 ppt-generator Skill 完全協同，可作為獨立使用或與其他 PPT Skill 配合。
  dependency:
    python:
      - python-pptx>=1.0.2
      - pillow>=9.0.0
      - openpyxl>=3.1.0
  ---
  
  # PPTX 檔案生成器
  
  ## 任務目標
  - 本 Skill 用於：將 JSON 格式的 PPT 內容轉換為標準的 .pptx 檔案
  - 能力包含：JSON 解析、PPTX 建立、多佈局支援、樣式應用、圖表生成、表格生成
  - 觸發條件：使用者需要生成 .pptx 檔案，或需要將 JSON 資料轉換為可編輯的 PPT
  
  ## 前置準備
  - 依賴說明：scripts 腳本所需的依賴包
    ```
    python-pptx>=1.0.2
    pillow>=9.0.0
    openpyxl>=3.1.0
    ```
  
  ## 操作步驟
  
  ### 標準流程（JSON 轉 PPTX）
  
  #### 步驟 1：接收 JSON 資料
  從以下來源接收 JSON 資料：
  - **ppt-generator Skill**：7 角色協作生成的 JSON
  - **使用者直接提供**：符合格式規範的 JSON 檔案
  - **其他來源**：任何符合 JSON 格式的 PPT 資料
  
  #### 步驟 2：驗證 JSON 格式
  呼叫 `scripts/json_validator.py` 驗證 JSON 格式：
  ```bash
  python scripts/json_validator.py --input ./ppt_data.json
  ```
  驗證內容包括：
  - 後設資料完整性（title, author, theme）
  - 幻燈片陣列存在性
  - 每個幻燈片的必需欄位（title, content）
  - 資料型別正確性
  
  #### 步驟 3：生成 PPTX 檔案
  呼叫 `scripts/pptx_builder.py` 生成 .pptx 檔案：
  ```bash
  python scripts/pptx_builder.py \
    --input ./ppt_data.json \
    --style assets/styles/modern.json \
    --output ./presentation.pptx
  ```
  
  **核心功能**：
  1. **建立簡報**：初始化 Presentation 物件
  2. **新增幻燈片**：根據 JSON 資料逐頁新增
  3. **應用佈局**：根據幻燈片型別選擇佈局
  4. **新增內容**：
     - 標題（Title）
     - 內容（Text、Bullet Points）
     - 圖片（Picture）
     - 圖表（Chart）
     - 表格（Table）
  5. **應用樣式**：根據風格配置設定字型、顏色、間距
  6. **儲存檔案**：匯出為 .pptx 檔案
  
  #### 步驟 4：驗證 PPTX 檔案
  呼叫 `scripts/pptx_validator.py` 驗證生成的 .pptx 檔案：
  ```bash
  python scripts/pptx_validator.py --input ./presentation.pptx
  ```
  驗證內容包括：
  - 檔案完整性
  - 幻燈片數量
  - 內容正確性
  - 可編輯性
  
  ### 高階功能
  
  #### 自訂樣式
  使用自訂風格配置：
  ```bash
  python scripts/pptx_builder.py \
    --input ./ppt_data.json \
    --style ./custom_style.json \
    --output ./presentation.pptx
  ```
  
  #### 批次生成
  批次處理多個 JSON 檔案：
  ```bash
  python scripts/pptx_builder.py \
    --input-dir ./json_files/ \
    --style assets/styles/modern.json \
    --output-dir ./pptx_files/
  ```
  
  #### 使用模板
  基於模板生成 PPTX：
  ```bash
  python scripts/pptx_builder.py \
    --input ./ppt_data.json \
    --template assets/templates/business_template.pptx \
    --output ./presentation.pptx
  ```
  
  ### 與其他 Skill 協同
  
  #### 與 ppt-generator 協同
  ```
  使用者請求："生成一個 PPT 檔案"
  
  ┌─────────────────────────────────────────────────────────┐
  │  ppt-generator Skill                                    │
  ├─────────────────────────────────────────────────────────┤
  │  1. 主題分析師：分析主題                                │
  │  2. 模板設計師：推薦佈局                                │
  │  3. 內容策劃師：規劃內容結構                            │
  │  4. 文字創作者：撰寫內容                                │
  │  5. 視覺設計師：提供配圖建議                            │
  │  6. 最佳化編輯師：最佳化文字                                │
  │  7. PPT 構建師：生成 JSON 資料                          │
  └─────────────────────────────────────────────────────────┘
                            │
                            ▼ ppt_data.json
  ┌─────────────────────────────────────────────────────────┐
  │  pptx-generator Skill                                  │
  ├─────────────────────────────────────────────────────────┤
  │  1. JSON 驗證（json_validator.py）                     │
  │  2. PPTX 構建（pptx_builder.py）                       │
  │     - 建立簡報                                      │
  │     - 新增幻燈片                                        │
  │     - 應用佈局和樣式                                    │
  │     - 新增內容（文字、圖片、圖表、表格）                  │
  │  3. PPTX 驗證（pptx_validator.py）                     │
  │  4. 輸出 .pptx 檔案                                   │
  └─────────────────────────────────────────────────────────┘
                            │
                            ▼ presentation.pptx
  ```
  
  #### 與 nanobanana-ppt-visualizer 協同
  ```
  使用者請求："生成 PPT 檔案和圖片"
  
  ppt-generator → pptx-generator → nanobanana-ppt-visualizer
       ↓              ↓                  ↓
    JSON 資料      .pptx 檔案        圖片 + HTML 播放器
  ```
  
  #### 完整工作流
  ```
  1. ppt-generator → JSON 資料
  2. pptx-generator → .pptx 檔案
  3. nanobanana-ppt-visualizer → 圖片 + HTML 播放器
  4. ppt-roadshow-generator → 影片
  5. remotion-video-enhancer → 增強動畫
  ```
  
  ## 資源索引
  - JSON 驗證腳本：見 [scripts/json_validator.py](scripts/json_validator.py)（用途：驗證 JSON 格式）
  - PPTX 構建腳本：見 [scripts/pptx_builder.py](scripts/pptx_builder.py)（用途：生成 .pptx 檔案）
  - PPTX 驗證腳本：見 [scripts/pptx_validator.py](scripts/pptx_validator.py)（用途：驗證 .pptx 檔案）
  - 格式規範：見 [references/json_format_spec.md](references/json_format_spec.md)（用途：JSON 格式標準）
  - 佈局指南：見 [references/layout_guide.md](references/layout_guide.md)（用途：佈局型別說明）
  - 風格配置：見 [assets/styles/](assets/styles/)（可選：modern, minimal, business）
  - 協同指南：見 [references/collaboration_guide.md](references/collaboration_guide.md)（用途：與其他 Skill 協同）
  
  ## 注意事項
  - 本 Skill 使用 python-pptx 庫生成標準的 .pptx 檔案
  - JSON 格式必須符合規範（見 references/json_format_spec.md）
  - 支援的圖片格式：PNG、JPG、JPEG、GIF
  - 支援的圖表型別：柱狀圖、折線圖、餅圖
  - 支援的表格：普通表格、樣式化表格
  - 與 ppt-generator Skill 完全相容，可無縫協同
  - 生成的 .pptx 檔案可在 Microsoft PowerPoint、WPS 等軟體中編輯
  
  ## 使用範例
  
  ### 範例 1：與 ppt-generator 協同生成 PPTX
  - 功能說明：ppt-generator 生成 JSON，pptx-generator 生成 .pptx
  - 執行方式：ppt-generator → pptx-generator
  - 使用者指令："生成一個產品介紹的 PPT 檔案"
  - 輸出：presentation.pptx
  
  ### 範例 2：僅生成 PPTX 檔案
  - 功能說明：基於現有 JSON 生成 .pptx 檔案
  - 執行方式：pptx-generator 獨立執行
  - 關鍵參數：JSON 檔案路徑、風格配置
  - 命令：`python scripts/pptx_builder.py --input ./ppt_data.json --output ./presentation.pptx`
  
  ### 範例 3：自訂風格生成
  - 功能說明：使用自訂風格配置
  - 執行方式：指定自訂風格檔案
  - 關鍵參數：--style
  - 命令：`python scripts/pptx_builder.py --input ./ppt_data.json --style ./my_style.json --output ./presentation.pptx`
  
  ### 範例 4：批次生成 PPTX 檔案
  - 功能說明：一次性處理多個 JSON 檔案
  - 執行方式：批次處理
  - 關鍵參數：--input-dir, --output-dir
  - 命令：`python scripts/pptx_builder.py --input-dir ./json_files/ --output-dir ./pptx_files/`
  
---

## 這個 Skill 在做什麼

將 JSON 格式的 PPT 內容轉換為標準的 .pptx 檔案。使用 python-pptx 庫，支援多種佈局、圖表、表格和樣式。與 ppt-generator Skill 完全協同，可作為獨立使用或與其他 PPT Skill 配合。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
