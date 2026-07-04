---
title: "NanoBanana 簡報視覺化 Skill"
description: "PPT 視覺強化工具，支援多種風格渲染、互動式播放器產生和影片合成。可與 ppt-generator Skill 協同工作，實現從內容規劃到視覺呈現的完整流程。"
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
sourcePath: "skills/nanobanana-ppt-visualizer/nanobanana-ppt-visualizer/SKILL.md"
sourceUrl: "https://github.com/anbeime/skill/blob/main/skills/nanobanana-ppt-visualizer/nanobanana-ppt-visualizer/SKILL.md"
localPath: "software-engineering-prompt-repos/skill/skills/nanobanana-ppt-visualizer/nanobanana-ppt-visualizer/SKILL.md"
license: "CC-BY-4.0"
originalName: "nanobanana-ppt-visualizer"
originalDescription: "PPT 視覺強化工具，支援多種風格渲染、互動式播放器產生和影片合成。可與 ppt-generator Skill 協同工作，實現從內容規劃到視覺呈現的完整流程。"
activation: "當你需要 NanoBanana 簡報視覺化 的工作流程時使用。"
useCases:
  - "需要處理「PPT 視覺強化工具，支援多種風格渲染、互動式播放器產生和影片合成。可與 ppt-generator Skill 協同工作，實現從內容規劃到視覺呈現的完整流程」這類任務。"
  - "想直接閱讀或複製 nanobanana-ppt-visualizer 的完整 SKILL.md。"
  - "需要從 skill repo 的本地落地版本追溯來源與檔案位置。"
workflow:
  - "先確認這個 Skill 的啟用時機與輸入需求。"
  - "閱讀原始 SKILL.md，確認它要求的工具、檔案、API key 或環境限制。"
  - "用小型真實任務測試輸出是否符合預期。"
  - "確認結果穩定後，再把它放進日常 Agent 工作流程。"
files:
  - "skills/nanobanana-ppt-visualizer/nanobanana-ppt-visualizer/SKILL.md"
cautions:
  - "這筆資料來自 skill repo 的本地落地版，與 awesome-agent-skills 上游索引不同；此頁保留完整 SKILL.md 供追溯。"
skillBody: |-
  ---
  name: nanobanana-ppt-visualizer
  description: PPT 視覺增強工具，支援多種風格渲染、互動式播放器生成和影片合成。可與 ppt-generator Skill 協同工作，實現從內容規劃到視覺呈現的完整流程。
  dependency:
    python:
      - pillow>=9.0.0
      - python-dotenv>=0.19.0
  ---
  
  # PPT 視覺增強工具
  
  ## 任務目標
  - 本 Skill 用於：為 PPT 內容生成高品質視覺呈現，包括圖片渲染、互動式播放器和影片合成
  - 能力包含：風格化圖片生成、HTML 播放器生成、影片素材管理、FFmpeg 影片合成
  - 觸發條件：使用者需要為 PPT 內容新增視覺效果，或與 ppt-generator Skill 協同工作
  
  ## 前置準備
  - 依賴說明：scripts 腳本所需的依賴包
    ```
    pillow>=9.0.0
    python-dotenv>=0.19.0
    ```
  - 系統依賴：FFmpeg（可選，用於影片合成功能）
    ```bash
    # Ubuntu/Debian
    sudo apt-get install ffmpeg
  
    # macOS
    brew install ffmpeg
    ```
  
  ## 操作步驟
  
  ### 標準流程（與 ppt-generator 協同）
  
  #### 步驟 1：獲取 PPT 內容（協作模式）
  1. 與 ppt-generator Skill 協同：
     - ppt-generator 負責：主題分析、內容規劃、結構設計
     - 輸出格式：符合規範的 JSON 資料（詳見 [references/ppt_structure_guide.md](references/ppt_structure_guide.md)）
  2. 接收 JSON 資料，包含：
     - metadata：標題、作者、主題、關鍵詞
     - slides：每頁的佈局、標題、內容、圖片標註
  
  #### 步驟 2：選擇視覺風格
  1. 掃描 `assets/styles/` 目錄，列出可用風格：
     - `gradient-glass.md`：漸變毛玻璃風格（科技感、商務）
     - `vector-illustration.md`：向量插畫風格（溫暖、教育）
  2. 根據內容主題和場景推薦合適的風格
  3. 智慧體生成圖片描述提示詞，參考風格模板
  
  #### 步驟 3：生成視覺素材
  1. **圖片生成**（使用智慧體能力）：
     - 根據每頁內容和風格模板，生成圖片描述
     - 使用智慧體的影像生成能力建立圖片
     - 儲存為 slide-01.png, slide-02.png 等
  
  2. **可選：影片生成**（需要可靈 AI API）：
     - 如果使用者需要影片轉場，呼叫可靈 AI API
     - 生成首頁預覽影片和頁面轉場影片
     - 使用 `scripts/video_materials.py` 管理影片素材
  
  #### 步驟 4：生成播放器
  1. 呼叫 `scripts/generate_viewer.py` 生成 HTML 播放器：
     - 支援圖片輪播、鍵盤導航、全屏播放
     - 支援影片+圖片混合播放（如果生成了影片）
  2. 輸出互動式播放器，可直接在瀏覽器中預覽
  
  #### 步驟 5：影片合成（可選）
  1. 如果生成了影片素材，呼叫 `scripts/video_composer.py`：
     - 使用 FFmpeg 合成完整影片
     - 統一解析度和幀率
     - 輸出 full_ppt_video.mp4
  
  ### 獨立使用模式
  
  當使用者直接提供 PPT 內容（JSON 格式）時：
  
  1. 讀取使用者提供的 JSON 檔案或內容
  2. 執行步驟 2-5，生成視覺呈現
  
  ## 協同工作流程
  
  ### 與 ppt-generator Skill 配合
  
  ```
  使用者請求："生成一個關於 AI 產品的 PPT"
  
  ┌─────────────────────────────────────────────────────────┐
  │  ppt-generator Skill                                    │
  ├─────────────────────────────────────────────────────────┤
  │  1. 主題分析師：分析主題，生成大綱                        │
  │  2. 模板設計師：推薦佈局                                  │
  │  3. 內容策劃師：規劃內容結構                              │
  │  4. 文字創作者：撰寫內容                                  │
  │  5. 視覺設計師：提供配圖建議                              │
  │  6. 最佳化編輯師：最佳化文字                                  │
  │  7. PPT 構建師：生成 JSON 資料                           │
  └─────────────────────────────────────────────────────────┘
                            │
                            ▼ 輸出 JSON
  ┌─────────────────────────────────────────────────────────┐
  │  nanobanana-ppt-visualizer Skill                        │
  ├─────────────────────────────────────────────────────────┤
  │  1. 接收 JSON 資料                                       │
  │  2. 選擇視覺風格                                          │
  │  3. 生成圖片（使用智慧體能力）                            │
  │  4. 生成 HTML 播放器                                      │
  │  5. 可選：影片合成                                        │
  └─────────────────────────────────────────────────────────┘
                            │
                            ▼ 輸出
                互動式播放器 + 完整影片（可選）
  ```
  
  ### 資料格式相容性
  
  ppt-generator 輸出的 JSON 格式與 nanobanana-ppt-visualizer 完全相容：
  
  ```json
  {
    "metadata": {
      "title": "簡報標題",
      "author": "作者姓名"
    },
    "slides": [
      {
        "layout": "TitleSlide",
        "title": "封面標題",
        "content": ["副標題"],
        "notes": "備註"
      }
    ]
  }
  ```
  
  ## 資源索引
  - 圖片生成腳本：見 [scripts/generate_viewer.py](scripts/generate_viewer.py)（用途：生成 HTML 播放器和圖片管理）
  - 影片素材管理：見 [scripts/video_materials.py](scripts/video_materials.py)（用途：管理影片素材）
  - 影片合成：見 [scripts/video_composer.py](scripts/video_composer.py)（用途：FFmpeg 影片合成）
  - 格式規範：見 [references/ppt_structure_guide.md](references/ppt_structure_guide.md)（用途：JSON 資料格式標準）
  - 協同指南：見 [references/collaboration_guide.md](references/collaboration_guide.md)（用途：與 ppt-generator 協同工作指南）
  - 風格模板：見 [assets/styles/](assets/styles/)（可選：gradient-glass.md、vector-illustration.md）
  - HTML 模板：見 [assets/templates/](assets/templates/)（可選：viewer.html、video_viewer.html）
  
  ## 注意事項
  - 本 Skill 與 ppt-generator Skill 完全相容，可以無縫協作
  - 圖片生成使用智慧體的影像生成能力，無需第三方 API
  - 影片生成功能需要可靈 AI API（可選），如需使用請配置金鑰
  - FFmpeg 是可選依賴，僅在使用影片合成功能時需要
  - 保持與使用者的互動，在關鍵節點（如風格選擇）徵求回饋
  
  ## 使用範例
  
  ### 範例 1：與 ppt-generator 完整協作
  - 功能說明：兩個 Skill 完整協作，從內容到視覺
  - 執行方式：ppt-generator（7 個角色）→ nanobanana-ppt-visualizer（視覺生成）
  - 使用者指令："生成一個關於 AI 產品的 PPT，使用漸變毛玻璃風格"
  - 輸出：互動式播放器 + 完整影片（可選）
  
  ### 範例 2：基於現有 JSON 生成播放器
  - 功能說明：接收 JSON 資料，生成播放器
  - 執行方式：nanobanana-ppt-visualizer 獨立執行
  - 關鍵參數：JSON 檔案路徑、風格選擇
  - 命令：`python scripts/generate_viewer.py --input ./ppt_data.json --style gradient-glass`
  
  ### 範例 3：僅生成圖片（無影片）
  - 功能說明：使用智慧體生成 PPT 圖片
  - 執行方式：智慧體（影像生成）+ 腳本（播放器生成）
  - 適用場景：快速預覽、靜態展示
  - 輸出：HTML 播放器 + 圖片檔案
  
  ### 範例 4：完整影片合成
  - 功能說明：合成包含轉場的完整影片
  - 執行方式：腳本（FFmpeg 合成）
  - 前提：已生成圖片和影片素材
  - 命令：`python scripts/video_composer.py --output ./full_ppt_video.mp4`
  
---

## 這個 Skill 在做什麼

PPT 視覺強化工具，支援多種風格渲染、互動式播放器產生和影片合成。可與 ppt-generator Skill 協同工作，實現從內容規劃到視覺呈現的完整流程。

## 來源整理

這筆資料來自 `skill` repo 的本地落地版本。`awesome-agent-skills` 是上游索引；`skill` repo 則是把部分技能抓回來、整理成技能商店與本地可追溯檔案的版本。

## 使用前先確認

請先看原始 `SKILL.md` 的工具、環境變數、參考檔與安全限制，再放進自己的 Agent 工作流程。
